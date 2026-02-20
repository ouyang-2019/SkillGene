/**
 * 技能提取上传模块 - 从本地文件提取 skills 并上传到数据库
 */
import { readFileSync } from "fs";
import { contributeCapsule } from "./db.js";
import { autoTagCapsule } from "./auto-tag.js";
import type { ExtractResult } from "./types.js";

export function extractAndUpload(filePath: string, manualDomain?: string, manualTags?: string[]): ExtractResult {
  const content = readFileSync(filePath, "utf-8");
  const capsuleIds: string[] = [];

  // 解析 SKILL.md 格式
  if (filePath.endsWith("SKILL.md") || filePath.endsWith("AGENTS.md") || filePath.endsWith("CLAUDE.md")) {
    const parsed = parseSkillMd(content, filePath);
    for (const c of parsed) {
      if (manualDomain) c.domain = manualDomain;
      if (manualTags) c.tags = manualTags;
      try {
        const id = contributeCapsule({ ...c, version: 1, usage_count: 0, rating: 0 });
        if (!manualDomain && !manualTags) autoTagCapsule(id, true);
        capsuleIds.push(id);
      } catch { /* skip duplicates */ }
    }
  } else {
    // 通用 Markdown 文件：整体作为一个胶囊
    const name = filePath.split("/").pop()?.replace(/\.\w+$/, "") || "Imported Skill";
    const genes = extractGenesFromMarkdown(content);
    if (genes.length > 0) {
      try {
        const id = contributeCapsule({
          name, description: content.substring(0, 200), domain: manualDomain || "general",
          tags: manualTags || ["imported"], genes, version: 1, usage_count: 0, rating: 0,
        });
        if (!manualDomain) autoTagCapsule(id, true);
        capsuleIds.push(id);
      } catch { /* skip */ }
    }
  }

  return { source_path: filePath, capsules_created: capsuleIds.length, capsule_ids: capsuleIds };
}

function parseSkillMd(content: string, filePath: string) {
  const capsules: { name: string; description: string; domain: string; tags: string[]; genes: { title: string; content: string; gene_type: "pattern" | "config" | "snippet" | "principle" | "checklist" }[] }[] = [];

  // 解析 YAML frontmatter
  let name = "", description = "";
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (fmMatch) {
    const fm = fmMatch[1];
    name = fm.match(/name:\s*(.+)/)?.[1]?.trim().replace(/^["']|["']$/g, "") || "";
    description = fm.match(/description:\s*(.+)/)?.[1]?.trim().replace(/^["']|["']$/g, "") || "";
  }
  if (!name) name = filePath.split("/").pop()?.replace(/\.\w+$/, "") || "Skill";

  const genes = extractGenesFromMarkdown(content);
  if (genes.length > 0 || description) {
    capsules.push({ name, description: description || content.substring(0, 200), domain: "general", tags: ["imported"], genes });
  }
  return capsules;
}

function extractGenesFromMarkdown(content: string) {
  const genes: { title: string; content: string; gene_type: "pattern" | "config" | "snippet" | "principle" | "checklist" }[] = [];
  // 按 ## 或 ### 标题分割
  const sections = content.split(/^#{2,3}\s+/m).slice(1);
  for (const sec of sections) {
    const lines = sec.split("\n");
    const title = lines[0].trim();
    const body = lines.slice(1).join("\n").trim();
    if (title && body.length > 10) {
      const type = body.includes("```") ? "snippet" : body.match(/^\d+\./m) ? "pattern" : "principle";
      genes.push({ title, content: body.substring(0, 2000), gene_type: type as any });
    }
  }
  return genes;
}
