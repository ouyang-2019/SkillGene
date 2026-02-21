/**
 * tools-sfm.ts - skill-from-masters 桥接 MCP 工具注册
 *
 * 2 个 SFM 工具 (Tool #19 ~ #20)
 */

import { z } from "zod";
import { SFMAdapter } from "./adapters/sfm-adapter.js";
import { contributeCapsule, searchCapsules } from "./db.js";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

// SFM GitHub 仓库信息
const SFM_REPO = {
  owner: "GBSOSS",
  repo: "skill-from-masters",
  branch: "main",
};

/**
 * 从 GitHub 获取文件内容
 */
async function fetchGitHubFile(owner: string, repo: string, path: string): Promise<string | null> {
  const token = process.env.GITHUB_TOKEN;
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3.raw",
    "User-Agent": "SkillGene/1.0",
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const res = await fetch(url, { headers });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

/**
 * 列出 GitHub 目录内容
 */
async function listGitHubDir(owner: string, repo: string, path: string): Promise<Array<{ name: string; path: string; type: string }>> {
  const token = process.env.GITHUB_TOKEN;
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "SkillGene/1.0",
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const res = await fetch(url, { headers });
    if (!res.ok) return [];
    return await res.json() as any[];
  } catch {
    return [];
  }
}

export function registerSFMTools(server: McpServer) {

  // Tool 19: 搜索领域专家方法论
  server.tool(
    "sfm_search_experts",
    "Search skill-from-masters expert methodology database. Returns domain experts with principles, golden examples, and anti-patterns.",
    {
      query: z.string().describe("Search query (e.g. 'react', 'security', 'testing')"),
      limit: z.number().optional().describe("Max results (default 5)"),
    },
    async ({ query, limit }) => {
      // 先在本地数据库搜索已导入的 SFM 胶囊
      const localResults = searchCapsules(`${query} methodology skill-from-masters`, limit ?? 5);
      const sfmResults = localResults.filter(r =>
        r.tags?.includes?.("skill-from-masters") || r.tags?.includes?.("methodology")
      );

      if (sfmResults.length > 0) {
        return { content: [{ type: "text" as const, text: JSON.stringify({
          source: "local-db",
          results: sfmResults,
          hint: "Use get_capsule(id) to see full expert methodology content.",
        }, null, 2) }] };
      }

      // 本地没有，尝试从 GitHub 获取
      const mdContent = await fetchGitHubFile(SFM_REPO.owner, SFM_REPO.repo, "references/methodology-database.md");
      if (!mdContent) {
        return { content: [{ type: "text" as const, text: JSON.stringify({
          source: "none",
          message: "No SFM data found locally. Use sfm_import_methodology to import from GitHub.",
          github_url: `https://github.com/${SFM_REPO.owner}/${SFM_REPO.repo}`,
        }, null, 2) }] };
      }

      // 解析并过滤
      const capsules = SFMAdapter.methodologyToCapsules(mdContent);
      const lower = query.toLowerCase();
      const filtered = capsules.filter(c =>
        c.name.toLowerCase().includes(lower)
        || c.domain.toLowerCase().includes(lower)
        || c.tags.some(t => t.includes(lower))
        || c.description.toLowerCase().includes(lower)
      );

      return { content: [{ type: "text" as const, text: JSON.stringify({
        source: "github-live",
        results: filtered.slice(0, limit ?? 5).map(c => ({
          name: c.name,
          domain: c.domain,
          tags: c.tags,
          genes_count: c.genes.length,
          golden_cases: c.golden_cases_count || 0,
          anti_patterns: c.failure_patterns_count || 0,
          quality_grade: c.quality_grade,
        })),
        hint: "Use sfm_import_methodology to persist these experts to your local database.",
        total_experts: capsules.length,
      }, null, 2) }] };
    }
  );

  // Tool 20: 导入方法论数据库
  server.tool(
    "sfm_import_methodology",
    "Import skill-from-masters methodology database from GitHub into local capsule DB. Includes expert methods, taxonomy, templates, and skill files.",
    {
      scope: z.enum(["all", "experts", "taxonomy", "template", "skills"]).optional()
        .describe("Import scope (default: all)"),
      force: z.boolean().optional().describe("Force re-import even if already exists (default false)"),
    },
    async ({ scope, force }) => {
      const importScope = scope ?? "all";
      const results: Record<string, any> = { imported: [], errors: [], skipped: [] };

      // 1. 导入方法论数据库 (experts)
      if (importScope === "all" || importScope === "experts") {
        const mdContent = await fetchGitHubFile(SFM_REPO.owner, SFM_REPO.repo, "references/methodology-database.md");
        if (mdContent) {
          const capsules = SFMAdapter.methodologyToCapsules(mdContent);
          for (const capsule of capsules) {
            try {
              // 检查重复
              if (!force) {
                const existing = searchCapsules(capsule.name, 1);
                if (existing.length > 0 && existing[0].name === capsule.name) {
                  results.skipped.push(capsule.name);
                  continue;
                }
              }
              const id = contributeCapsule(capsule);
              results.imported.push({ name: capsule.name, id, type: "expert" });
            } catch (e: any) {
              results.errors.push({ name: capsule.name, error: e.message });
            }
          }
        } else {
          results.errors.push({ type: "experts", error: "Could not fetch methodology-database.md" });
        }
      }

      // 2. 导入分类法 (taxonomy)
      if (importScope === "all" || importScope === "taxonomy") {
        const taxContent = await fetchGitHubFile(SFM_REPO.owner, SFM_REPO.repo, "references/skill-taxonomy.md");
        if (taxContent) {
          const tags = SFMAdapter.taxonomyToTags(taxContent);
          results.imported.push({ type: "taxonomy", tags_count: tags.length, tags: tags.slice(0, 20) });
        }
      }

      // 3. 导入模板 (template)
      if (importScope === "all" || importScope === "template") {
        const templateContent = await fetchGitHubFile(SFM_REPO.owner, SFM_REPO.repo, "SKILL.md");
        if (templateContent) {
          try {
            const capsule = SFMAdapter.templateToMetaCapsule(templateContent);
            if (!force) {
              const existing = searchCapsules(capsule.name, 1);
              if (existing.length > 0 && existing[0].name === capsule.name) {
                results.skipped.push(capsule.name);
              } else {
                const id = contributeCapsule(capsule);
                results.imported.push({ name: capsule.name, id, type: "template" });
              }
            } else {
              const id = contributeCapsule(capsule);
              results.imported.push({ name: capsule.name, id, type: "template" });
            }
          } catch (e: any) {
            results.errors.push({ type: "template", error: e.message });
          }
        }
      }

      // 4. 导入 skills 目录下的 SKILL.md 文件
      if (importScope === "all" || importScope === "skills") {
        const skillDirs = await listGitHubDir(SFM_REPO.owner, SFM_REPO.repo, "skills");
        for (const dir of skillDirs) {
          if (dir.type !== "dir") continue;
          const skillContent = await fetchGitHubFile(SFM_REPO.owner, SFM_REPO.repo, `skills/${dir.name}/SKILL.md`);
          if (skillContent) {
            try {
              const capsule = SFMAdapter.skillFileToCapsule(skillContent, dir.name, `skills/${dir.name}/SKILL.md`);
              if (!force) {
                const existing = searchCapsules(capsule.name, 1);
                if (existing.length > 0 && existing[0].name === capsule.name) {
                  results.skipped.push(capsule.name);
                  continue;
                }
              }
              const id = contributeCapsule(capsule);
              results.imported.push({ name: capsule.name, id, type: "skill" });
            } catch (e: any) {
              results.errors.push({ name: dir.name, error: e.message });
            }
          }
        }
      }

      return { content: [{ type: "text" as const, text: JSON.stringify({
        scope: importScope,
        summary: {
          imported: results.imported.length,
          skipped: results.skipped.length,
          errors: results.errors.length,
        },
        details: results,
      }, null, 2) }] };
    }
  );
}
