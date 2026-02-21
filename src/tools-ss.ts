/**
 * tools-ss.ts - Skill_Seekers v3.0.0 MCP 工具注册
 *
 * 基于 SS v3.0.0 真实 API 的工具:
 * - ss_detect_llmstxt: 检测网站 llms.txt
 * - ss_import_llmstxt: 导入 llms.txt 为胶囊
 * - ss_check_changes: 监控 URL 内容变更
 * - ss_fetch_page: 抓取页面内容并存储
 * - ss_status: SS 状态检查
 */

import { z } from "zod";
import { getSSBridge } from "./bridge/ss-bridge.js";
import { checkSSHealth } from "./bridge/ss-health.js";
import { SSAdapter } from "./adapters/ss-adapter.js";
import { contributeCapsule, getCapsule, updateQualityScore, updateSkillType } from "./db.js";
import { checkQuality } from "./quality.js";
import { classifySkillType } from "./taxonomy.js";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function registerSSTools(server: McpServer) {
  const bridge = getSSBridge();

  // Tool: 检测网站 llms.txt
  server.tool(
    "ss_detect_llmstxt",
    "Detect llms.txt files on a website. llms.txt is a standard for providing LLM-friendly documentation. Returns detected URLs and variants.",
    {
      url: z.string().describe("Website base URL (e.g. https://cursor.com)"),
    },
    async ({ url }) => {
      const result = await bridge.detectLlmsTxt(url);
      if (!result.success) {
        return { content: [{ type: "text" as const, text: `Error: ${result.error}` }] };
      }

      const data = result.data;
      if (!data.detections || data.detections.length === 0) {
        return { content: [{ type: "text" as const, text: `No llms.txt found on ${url}. Not all websites provide llms.txt files.` }] };
      }

      return {
        content: [{
          type: "text" as const,
          text: JSON.stringify({
            base_url: url,
            found: true,
            detections: data.detections,
            hint: "Use ss_import_llmstxt to download and store as capsules.",
            duration_ms: result.duration,
          }, null, 2),
        }],
      };
    }
  );

  // Tool: 导入 llms.txt 为胶囊
  server.tool(
    "ss_import_llmstxt",
    "Import llms.txt from a website: detect → download → parse → store as capsules. One-click documentation import.",
    {
      url: z.string().describe("Website base URL (e.g. https://cursor.com)"),
      autoStore: z.boolean().optional().describe("Auto-store as capsules (default true)"),
    },
    async ({ url, autoStore }) => {
      const store = autoStore !== false;
      const result = await bridge.importLlmsTxt(url);

      if (!result.success) {
        return { content: [{ type: "text" as const, text: `Error: ${result.error}` }] };
      }

      if (!result.data.found) {
        return { content: [{ type: "text" as const, text: `No llms.txt found on ${url}.` }] };
      }

      if (store) {
        try {
          const capsules = SSAdapter.llmsTxtToCapsules(result.data, url);
          const ids: string[] = [];
          for (const capsule of capsules) {
            const id = contributeCapsule(capsule);
            ids.push(id);
          }
          return {
            content: [{
              type: "text" as const,
              text: JSON.stringify({
                success: true,
                base_url: url,
                capsule_ids: ids,
                capsules_count: ids.length,
                results_summary: result.data.results.map((r: any) => ({
                  variant: r.variant,
                  sections: r.sections?.length || 0,
                  urls: r.urls?.length || 0,
                  content_length: r.content_length,
                })),
                duration_ms: result.duration,
              }, null, 2),
            }],
          };
        } catch (e: any) {
          return { content: [{ type: "text" as const, text: `Parse/store failed: ${e.message}\nRaw data: ${JSON.stringify(result.data).slice(0, 500)}` }] };
        }
      }

      return { content: [{ type: "text" as const, text: JSON.stringify(result.data, null, 2) }] };
    }
  );

  // Tool: 监控 URL 内容变更
  server.tool(
    "ss_check_changes",
    "Check if a URL's content has changed since last visit. Useful for monitoring documentation updates.",
    {
      url: z.string().describe("URL to check"),
      previousHash: z.string().optional().describe("Previous content hash (from earlier fetch). Omit for first check."),
    },
    async ({ url, previousHash }) => {
      if (previousHash) {
        // 有旧哈希，检测变更
        const result = await bridge.checkPageChange(url, previousHash);
        if (!result.success) {
          return { content: [{ type: "text" as const, text: `Error: ${result.error}` }] };
        }
        return { content: [{ type: "text" as const, text: JSON.stringify(result.data, null, 2) }] };
      } else {
        // 没有旧哈希，获取基线
        const result = await bridge.fetchPage(url);
        if (!result.success) {
          return { content: [{ type: "text" as const, text: `Error: ${result.error}` }] };
        }
        return {
          content: [{
            type: "text" as const,
            text: JSON.stringify({
              ...result.data,
              hint: "Save the 'hash' value and pass it as 'previousHash' next time to detect changes.",
              duration_ms: result.duration,
            }, null, 2),
          }],
        };
      }
    }
  );

  // Tool: 抓取页面并存储为胶囊
  server.tool(
    "ss_fetch_page",
    "Fetch a web page's content and optionally store as a capsule. Uses SS change detector for reliable fetching.",
    {
      url: z.string().describe("URL to fetch"),
      autoStore: z.boolean().optional().describe("Auto-store as capsule (default false)"),
    },
    async ({ url, autoStore }) => {
      const result = await bridge.fetchPage(url);
      if (!result.success) {
        return { content: [{ type: "text" as const, text: `Error: ${result.error}` }] };
      }

      if (autoStore && result.data) {
        try {
          const capsule = SSAdapter.pageToCapsule(result.data);
          const id = contributeCapsule(capsule);
          return {
            content: [{
              type: "text" as const,
              text: JSON.stringify({
                stored: true,
                capsule_id: id,
                url: result.data.url,
                hash: result.data.hash,
                content_length: result.data.content_length,
                quality_grade: capsule.quality_grade,
                duration_ms: result.duration,
              }, null, 2),
            }],
          };
        } catch (e: any) {
          return { content: [{ type: "text" as const, text: `Store failed: ${e.message}` }] };
        }
      }

      return { content: [{ type: "text" as const, text: JSON.stringify(result.data, null, 2) }] };
    }
  );

  // Tool: SS 状态检查
  server.tool(
    "ss_status",
    "Check Skill_Seekers v3.0.0 installation status, version, and available features (llmstxt/sync/embedding).",
    {},
    async () => {
      const health = await checkSSHealth();
      return { content: [{ type: "text" as const, text: JSON.stringify(health, null, 2) }] };
    }
  );
}
