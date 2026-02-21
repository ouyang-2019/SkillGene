/**
 * tools-composed.ts - 融合增强 MCP 工具注册
 *
 * 2 个融合工具:
 * - deep_scan_github: GitHub 浅层分析 + SS llms.txt 发现
 * - full_skill_pipeline: 全流程技能导入
 */

import { z } from "zod";
import { getSSBridge } from "./bridge/ss-bridge.js";
import { isSSAvailable } from "./bridge/ss-health.js";
import { SSAdapter } from "./adapters/ss-adapter.js";
import { contributeCapsule, getCapsule, searchCapsules } from "./db.js";
import { checkQuality } from "./quality.js";
import { classifySkillType } from "./taxonomy.js";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function registerComposedTools(server: McpServer) {

  // Tool: 增强版 GitHub 扫描
  server.tool(
    "deep_scan_github",
    "Enhanced GitHub scan: fetch repo info via GitHub API + detect llms.txt on project website (if SS available).",
    {
      repoUrl: z.string().describe("GitHub repository URL (e.g. https://github.com/owner/repo)"),
      autoStore: z.boolean().optional().describe("Auto-store results as capsules (default true)"),
    },
    async ({ repoUrl, autoStore }) => {
      const store = autoStore !== false;
      const results: any = {
        repo: repoUrl,
        github_info: null,
        llmstxt_scan: null,
        capsule_ids: [],
      };

      // 解析 owner/repo
      const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
      if (!match) {
        return { content: [{ type: "text" as const, text: "Invalid GitHub URL. Format: https://github.com/owner/repo" }] };
      }
      const [, owner, repo] = match;

      // 1. GitHub API 获取仓库信息
      const token = process.env.GITHUB_TOKEN;
      const headers: Record<string, string> = {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "SkillGene/2.0",
      };
      if (token) headers.Authorization = `Bearer ${token}`;

      try {
        const repoRes = await fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers });
        if (repoRes.ok) {
          const repoInfo = await repoRes.json() as any;
          results.github_info = {
            name: repoInfo.name,
            description: repoInfo.description,
            stars: repoInfo.stargazers_count,
            language: repoInfo.language,
            topics: repoInfo.topics || [],
            homepage: repoInfo.homepage,
          };

          // 2. 如果有 homepage，尝试检测 llms.txt
          if (repoInfo.homepage && await isSSAvailable()) {
            const bridge = getSSBridge();
            const llmsResult = await bridge.detectLlmsTxt(repoInfo.homepage);
            if (llmsResult.success && llmsResult.data?.detections?.length > 0) {
              results.llmstxt_scan = {
                found: true,
                homepage: repoInfo.homepage,
                detections: llmsResult.data.detections,
              };

              // 如果有 llms.txt，尝试导入
              if (store) {
                const importResult = await bridge.importLlmsTxt(repoInfo.homepage);
                if (importResult.success && importResult.data.found) {
                  try {
                    const capsules = SSAdapter.llmsTxtToCapsules(importResult.data, repoInfo.homepage);
                    for (const capsule of capsules) {
                      const id = contributeCapsule(capsule);
                      results.capsule_ids.push(id);
                    }
                    results.llmstxt_scan.imported = true;
                  } catch (e: any) {
                    results.llmstxt_scan.import_error = e.message;
                  }
                }
              }
            } else {
              results.llmstxt_scan = { found: false, homepage: repoInfo.homepage };
            }
          }

          // 3. 也尝试 github.io 页面的 llms.txt
          if (await isSSAvailable()) {
            const bridge = getSSBridge();
            const ghPagesUrl = `https://${owner}.github.io/${repo}`;
            const ghResult = await bridge.detectLlmsTxt(ghPagesUrl);
            if (ghResult.success && ghResult.data?.detections?.length > 0) {
              results.github_pages_llmstxt = {
                found: true,
                url: ghPagesUrl,
                detections: ghResult.data.detections,
              };
            }
          }
        }
      } catch (e: any) {
        results.github_info = { error: `Failed to fetch: ${e.message}` };
      }

      return { content: [{ type: "text" as const, text: JSON.stringify(results, null, 2) }] };
    }
  );

  // Tool: 全流程技能流水线
  server.tool(
    "full_skill_pipeline",
    "Full pipeline: detect llms.txt → import → quality check → classify → store. Works with any website URL.",
    {
      source: z.string().describe("Source URL (website with potential llms.txt)"),
      domain: z.string().optional().describe("Domain override"),
      fallbackFetch: z.boolean().optional().describe("If no llms.txt found, fetch page content directly (default true)"),
    },
    async ({ source, domain, fallbackFetch }) => {
      const pipeline: any = {
        source,
        steps: [],
        capsule_ids: [],
        final_quality: null,
      };

      const ssAvailable = await isSSAvailable();

      if (!ssAvailable) {
        pipeline.steps.push({
          step: 1, action: "check_ss", status: "unavailable",
          message: "Skill_Seekers not installed. Install: pip install skill-seekers",
        });
        return { content: [{ type: "text" as const, text: JSON.stringify(pipeline, null, 2) }] };
      }

      const bridge = getSSBridge();

      // Step 1: 检测 llms.txt
      pipeline.steps.push({ step: 1, action: "detect_llmstxt", status: "running" });
      const detectResult = await bridge.detectLlmsTxt(source);
      const hasLlmsTxt = detectResult.success && detectResult.data?.detections?.length > 0;
      pipeline.steps[0].status = "done";
      pipeline.steps[0].found = hasLlmsTxt;

      if (hasLlmsTxt) {
        // Step 2: 导入 llms.txt
        pipeline.steps.push({ step: 2, action: "import_llmstxt", status: "running" });
        const importResult = await bridge.importLlmsTxt(source);

        if (importResult.success && importResult.data.found) {
          pipeline.steps[1].status = "done";

          // Step 3: 转换为胶囊
          pipeline.steps.push({ step: 3, action: "store_capsules", status: "running" });
          try {
            const capsules = SSAdapter.llmsTxtToCapsules(importResult.data, source);
            if (domain) capsules.forEach(c => c.domain = domain);

            for (const capsule of capsules) {
              const id = contributeCapsule(capsule);
              pipeline.capsule_ids.push(id);
            }

            pipeline.steps[2].status = "done";
            pipeline.steps[2].capsules_count = capsules.length;

            pipeline.final_quality = capsules.map(c => ({
              name: c.name,
              grade: c.quality_grade,
              score: c.quality_score,
              skill_type: c.skill_type,
              genes_count: c.genes.length,
            }));
          } catch (e: any) {
            pipeline.steps[2].status = "error";
            pipeline.steps[2].error = e.message;
          }
        } else {
          pipeline.steps[1].status = "error";
          pipeline.steps[1].error = importResult.error || "Import failed";
        }
      } else if (fallbackFetch !== false) {
        // Step 2 (fallback): 直接抓取页面内容
        pipeline.steps.push({ step: 2, action: "fetch_page_fallback", status: "running" });
        const fetchResult = await bridge.fetchPage(source);

        if (fetchResult.success && fetchResult.data) {
          pipeline.steps[1].status = "done";

          pipeline.steps.push({ step: 3, action: "store_capsule", status: "running" });
          try {
            const capsule = SSAdapter.pageToCapsule(fetchResult.data);
            if (domain) capsule.domain = domain;
            const id = contributeCapsule(capsule);
            pipeline.capsule_ids.push(id);
            pipeline.steps[2].status = "done";

            pipeline.final_quality = [{
              name: capsule.name,
              grade: capsule.quality_grade,
              score: capsule.quality_score,
              skill_type: capsule.skill_type,
              genes_count: capsule.genes.length,
            }];
          } catch (e: any) {
            pipeline.steps[2].status = "error";
            pipeline.steps[2].error = e.message;
          }
        } else {
          pipeline.steps[1].status = "error";
          pipeline.steps[1].error = fetchResult.error;
        }
      } else {
        pipeline.steps.push({
          step: 2, action: "skip", status: "skipped",
          message: "No llms.txt found and fallbackFetch disabled.",
        });
      }

      return { content: [{ type: "text" as const, text: JSON.stringify(pipeline, null, 2) }] };
    }
  );
}
