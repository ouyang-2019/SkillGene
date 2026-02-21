import { z } from "zod";
import {
  searchCapsules, getCapsule, contributeCapsule, evolveCapsule,
  updateCapsuleGenes, updateQualityScore, updateSkillType,
  getGoldenCases, addGoldenCase, getFailurePatterns, addFailurePattern,
  getQualityStats,
} from "./db.js";
import { CapsuleSchema, EvolveFeedbackSchema } from "./types.js";
import { scanCapsule, scanAllCapsules } from "./security.js";
import { autoTagCapsule } from "./auto-tag.js";
import { extractAndUpload } from "./extract.js";
import { classifySkillType } from "./taxonomy.js";
import { checkQuality, checkMastersGate } from "./quality.js";
import { registerSSTools } from "./tools-ss.js";
import { registerSFMTools } from "./tools-sfm.js";
import { registerComposedTools } from "./tools-composed.js";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

// 扩展的 gene_type 枚举
const GENE_TYPES = z.enum([
  "pattern", "config", "snippet", "principle", "checklist",
  "golden-case", "anti-pattern", "workflow", "api-ref", "troubleshoot",
]);

export function registerTools(server: McpServer) {
  // Tool 1: 搜索胶囊
  server.tool(
    "search_capsules",
    "Search skill capsules by keywords. Returns capsules with quality grades and skill types.",
    { query: z.string().describe("Search keywords"), limit: z.number().optional().describe("Max results (default 10)") },
    async ({ query, limit }) => {
      const results = searchCapsules(query, limit ?? 10);
      return {
        content: [{
          type: "text" as const,
          text: results.length
            ? JSON.stringify(results.map(r => ({
                ...r,
                tags: typeof r.tags === "string" ? JSON.parse(r.tags) : r.tags,
              })), null, 2)
            : "No capsules found. Try broader keywords.",
        }],
      };
    }
  );

  // Tool 2: 获取完整胶囊
  server.tool(
    "get_capsule",
    "Get full capsule with genes, golden cases, and failure patterns.",
    { id: z.string().describe("Capsule ID from search results") },
    async ({ id }) => {
      const capsule = getCapsule(id);
      if (!capsule) {
        return { content: [{ type: "text" as const, text: "Capsule not found." }] };
      }
      // 附加黄金案例和失败模式
      const goldenCases = getGoldenCases(id);
      const failurePatterns = getFailurePatterns(id);
      return {
        content: [{
          type: "text" as const,
          text: JSON.stringify({ ...capsule, golden_cases: goldenCases, failure_patterns: failurePatterns }, null, 2),
        }],
      };
    }
  );

  // Tool 3: 贡献新胶囊
  server.tool(
    "contribute_capsule",
    "Contribute a new skill capsule. Include golden-case and anti-pattern genes for higher quality scores.",
    {
      name: z.string(),
      description: z.string(),
      domain: z.string(),
      tags: z.array(z.string()),
      genes: z.array(z.object({
        title: z.string(),
        content: z.string(),
        gene_type: GENE_TYPES,
      })),
    },
    async (input) => {
      const id = contributeCapsule({ ...input, version: 1, usage_count: 0, rating: 0 });

      // 自动质量评分和分类
      const capsule = getCapsule(id);
      if (capsule) {
        const quality = checkQuality(capsule);
        updateQualityScore(id, quality.score.total, quality.score.grade);
        const classification = classifySkillType(capsule);
        if (classification.confidence >= 0.3) {
          updateSkillType(id, classification.detected_type);
        }
      }

      return { content: [{ type: "text" as const, text: `Capsule contributed successfully. ID: ${id}` }] };
    }
  );

  // Tool 4: 进化胶囊
  server.tool(
    "evolve_capsule",
    "Evolve an existing capsule. Add golden-case/anti-pattern genes to improve quality.",
    {
      capsule_id: z.string(),
      feedback_type: z.enum(["improve", "fix", "extend"]),
      description: z.string(),
      new_genes: z.array(z.object({
        title: z.string(),
        content: z.string(),
        gene_type: GENE_TYPES,
      })).optional(),
    },
    async (input) => {
      const ok = evolveCapsule(input);
      if (ok) {
        // 重新评分
        const capsule = getCapsule(input.capsule_id);
        if (capsule) {
          const quality = checkQuality(capsule);
          updateQualityScore(input.capsule_id, quality.score.total, quality.score.grade);
        }
      }
      return {
        content: [{
          type: "text" as const,
          text: ok ? "Capsule evolved successfully. Quality re-scored." : "Capsule not found.",
        }],
      };
    }
  );

  // Tool 5: 安全扫描
  server.tool(
    "scan_capsule",
    "Scan a capsule for security issues. Use 'all' to scan entire database.",
    { id: z.string().describe("Capsule ID or 'all'") },
    async ({ id }) => {
      if (id === "all") {
        const summary = scanAllCapsules();
        return { content: [{ type: "text" as const, text: JSON.stringify(summary, null, 2) }] };
      }
      const result = scanCapsule(id);
      if (!result) return { content: [{ type: "text" as const, text: "Capsule not found." }] };
      return { content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }] };
    }
  );

  // Tool 6: 自动标签分类 (升级: 含技能类型)
  server.tool(
    "auto_tag_capsule",
    "Auto-classify domain, tags AND skill type (11 cognitive operation types). Set apply=true to save.",
    {
      id: z.string().describe("Capsule ID"),
      apply: z.boolean().optional().describe("Apply suggested changes (default false)"),
    },
    async ({ id, apply }) => {
      const result = autoTagCapsule(id, apply ?? false);
      if (!result) return { content: [{ type: "text" as const, text: "Capsule not found." }] };
      return { content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }] };
    }
  );

  // Tool 7: 更新胶囊 Gene
  server.tool(
    "update_capsule",
    "Replace all genes. Include golden-case/anti-pattern types for professional quality.",
    {
      capsule_id: z.string(),
      genes: z.array(z.object({
        title: z.string(),
        content: z.string(),
        gene_type: GENE_TYPES,
      })),
    },
    async (input) => {
      const ok = updateCapsuleGenes(input.capsule_id, input.genes);
      if (ok) {
        const capsule = getCapsule(input.capsule_id);
        if (capsule) {
          const quality = checkQuality(capsule);
          updateQualityScore(input.capsule_id, quality.score.total, quality.score.grade);
        }
      }
      return {
        content: [{
          type: "text" as const,
          text: ok ? "Capsule updated and re-scored." : "Capsule not found.",
        }],
      };
    }
  );

  // Tool 8: 提取上传技能
  server.tool(
    "extract_and_upload",
    "Extract skills from local .md file and upload with auto quality scoring.",
    {
      file_path: z.string().describe("Path to the skill file"),
      domain: z.string().optional().describe("Manual domain override"),
      tags: z.array(z.string()).optional().describe("Manual tags override"),
    },
    async ({ file_path, domain, tags }) => {
      try {
        const result = extractAndUpload(file_path, domain, tags);
        return { content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }] };
      } catch (e: any) {
        return { content: [{ type: "text" as const, text: `Error: ${e.message}` }] };
      }
    }
  );

  // ============================================================
  // 新增工具 (融合 masters + seekers)
  // ============================================================

  // Tool 9: 质量检查
  server.tool(
    "quality_check",
    "Run 4-dimension quality check (completeness/accuracy/coverage/health) + masters gate check. Returns grade A+ to F.",
    {
      id: z.string().describe("Capsule ID"),
      apply: z.boolean().optional().describe("Save quality score to DB (default false)"),
    },
    async ({ id, apply }) => {
      const capsule = getCapsule(id);
      if (!capsule) return { content: [{ type: "text" as const, text: "Capsule not found." }] };

      const quality = checkQuality(capsule);
      const mastersGate = checkMastersGate(capsule);

      if (apply) {
        updateQualityScore(id, quality.score.total, quality.score.grade);
      }

      return {
        content: [{
          type: "text" as const,
          text: JSON.stringify({
            quality_check: quality,
            masters_gate: mastersGate,
            applied: apply ?? false,
          }, null, 2),
        }],
      };
    }
  );

  // Tool 10: 技能类型分类
  server.tool(
    "classify_skill",
    "Classify capsule into 11 cognitive operation types: summary/insight/generation/decision/evaluation/diagnosis/persuasion/planning/research/facilitation/transformation.",
    {
      id: z.string().describe("Capsule ID"),
      apply: z.boolean().optional().describe("Save classification to DB (default false)"),
    },
    async ({ id, apply }) => {
      const capsule = getCapsule(id);
      if (!capsule) return { content: [{ type: "text" as const, text: "Capsule not found." }] };

      const result = classifySkillType(capsule);
      if (apply && result.confidence >= 0.3) {
        updateSkillType(id, result.detected_type);
        result.applied = true;
      }

      return { content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }] };
    }
  );

  // Tool 11: 质量统计
  server.tool(
    "quality_stats",
    "Get overall quality statistics: grade distribution, skill type distribution, average scores.",
    {},
    async () => {
      const stats = getQualityStats();
      return { content: [{ type: "text" as const, text: JSON.stringify(stats, null, 2) }] };
    }
  );

  // Tool 12: 添加黄金案例
  server.tool(
    "add_golden_case",
    "Add a golden case (best practice example) to a capsule. Masters standard: aim for >=3 per capsule.",
    {
      capsule_id: z.string(),
      title: z.string().describe("Case title"),
      source: z.string().describe("Source URL or project name"),
      description: z.string().describe("Why this is a good practice"),
      content: z.string().describe("Actual code/config/process content"),
    },
    async (input) => {
      const id = addGoldenCase(input.capsule_id, input);
      return { content: [{ type: "text" as const, text: `Golden case added. ID: ${id}` }] };
    }
  );

  // Tool 13: 添加失败模式
  server.tool(
    "add_failure_pattern",
    "Add a failure pattern (anti-pattern) to a capsule. Masters standard: aim for >=5 per capsule.",
    {
      capsule_id: z.string(),
      title: z.string().describe("Pattern title"),
      category: z.enum(["anti-pattern", "common-mistake", "misconception"]),
      description: z.string().describe("Why this is wrong"),
      bad_example: z.string().describe("The wrong way to do it"),
      fix_example: z.string().describe("The correct way to do it"),
    },
    async (input) => {
      const id = addFailurePattern(input.capsule_id, input);
      return { content: [{ type: "text" as const, text: `Failure pattern added. ID: ${id}` }] };
    }
  );

  // ============================================================
  // 融合扩展工具注册 (SS + SFM + Composed)
  // ============================================================
  registerSSTools(server);       // Tool #9-18: Skill_Seekers 桥接
  registerSFMTools(server);      // Tool #19-20: skill-from-masters
  registerComposedTools(server); // Tool #21-22: 融合增强
}
