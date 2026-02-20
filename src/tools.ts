import { z } from "zod";
import { searchCapsules, getCapsule, contributeCapsule, evolveCapsule, updateCapsuleGenes } from "./db.js";
import { CapsuleSchema, EvolveFeedbackSchema } from "./types.js";
import { scanCapsule, scanAllCapsules } from "./security.js";
import { autoTagCapsule } from "./auto-tag.js";
import { extractAndUpload } from "./extract.js";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function registerTools(server: McpServer) {
  // Tool 1: 搜索胶囊
  server.tool(
    "search_capsules",
    "Search skill capsules by keywords, domain or description. Returns matching capsules ranked by relevance.",
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
    "Get full capsule content including all genes (knowledge units). Use after search to get detailed instructions.",
    { id: z.string().describe("Capsule ID from search results") },
    async ({ id }) => {
      const capsule = getCapsule(id);
      if (!capsule) {
        return { content: [{ type: "text" as const, text: "Capsule not found." }] };
      }
      return { content: [{ type: "text" as const, text: JSON.stringify(capsule, null, 2) }] };
    }
  );

  // Tool 3: 贡献新胶囊
  server.tool(
    "contribute_capsule",
    "Contribute a new skill capsule to the platform. Include genes (atomic knowledge units) with the capsule.",
    {
      name: z.string(),
      description: z.string(),
      domain: z.string(),
      tags: z.array(z.string()),
      genes: z.array(z.object({
        title: z.string(),
        content: z.string(),
        gene_type: z.enum(["pattern", "config", "snippet", "principle", "checklist"]),
      })),
    },
    async (input) => {
      const id = contributeCapsule({ ...input, version: 1, usage_count: 0, rating: 0 });
      return { content: [{ type: "text" as const, text: `Capsule contributed successfully. ID: ${id}` }] };
    }
  );

  // Tool 4: 进化胶囊
  server.tool(
    "evolve_capsule",
    "Evolve an existing capsule based on feedback. Add new genes or improve existing ones.",
    {
      capsule_id: z.string(),
      feedback_type: z.enum(["improve", "fix", "extend"]),
      description: z.string(),
      new_genes: z.array(z.object({
        title: z.string(),
        content: z.string(),
        gene_type: z.enum(["pattern", "config", "snippet", "principle", "checklist"]),
      })).optional(),
    },
    async (input) => {
      const ok = evolveCapsule(input);
      return {
        content: [{
          type: "text" as const,
          text: ok ? "Capsule evolved successfully." : "Capsule not found.",
        }],
      };
    }
  );

  // Tool 5: 安全扫描
  server.tool(
    "scan_capsule",
    "Scan a capsule for security issues (injection, malware, credential theft). Use 'all' as id to scan entire database.",
    { id: z.string().describe("Capsule ID or 'all' to scan everything") },
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

  // Tool 6: 自动标签分类
  server.tool(
    "auto_tag_capsule",
    "Auto-classify a capsule's domain and suggest tags based on content analysis. Set apply=true to save changes.",
    {
      id: z.string().describe("Capsule ID"),
      apply: z.boolean().optional().describe("Apply suggested tags (default false)"),
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
    "Update a capsule's genes with improved content. Replaces all genes and increments version.",
    {
      capsule_id: z.string(),
      genes: z.array(z.object({
        title: z.string(),
        content: z.string(),
        gene_type: z.enum(["pattern", "config", "snippet", "principle", "checklist"]),
      })),
    },
    async (input) => {
      const ok = updateCapsuleGenes(input.capsule_id, input.genes);
      return {
        content: [{
          type: "text" as const,
          text: ok ? "Capsule updated successfully." : "Capsule not found.",
        }],
      };
    }
  );

  // Tool 8: 提取上传技能
  server.tool(
    "extract_and_upload",
    "Extract skills from a local file (SKILL.md, AGENTS.md, CLAUDE.md, or any .md) and upload to database.",
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
}
