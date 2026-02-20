/**
 * decompose.ts - 将GitHub项目深度拆解为SkillGene胶囊
 *
 * 拆解策略：
 * 1. 项目级胶囊：整体概述、架构、技术栈
 * 2. 模块级胶囊：按目录/功能拆解为独立胶囊
 */

import type { Capsule, Gene } from "./types.js";

export interface ProjectInfo {
  fullName: string;
  name: string;
  owner: string;
  description: string;
  stars: number;
  language: string;
  topics: string[];
  url: string;
  defaultBranch: string;
  updatedAt: string;
}

// 领域推断映射
const DOMAIN_MAP: Record<string, string> = {
  react: "web-frontend", vue: "web-frontend", angular: "web-frontend",
  nextjs: "web-frontend", svelte: "web-frontend", tailwind: "web-frontend",
  express: "backend", fastapi: "backend", django: "backend", flask: "backend",
  nestjs: "backend", rails: "backend", spring: "backend",
  docker: "devops", kubernetes: "devops", terraform: "devops", ci: "devops",
  llm: "ai-llm", mcp: "ai-llm", agent: "ai-llm", skill: "ai-llm",
  openai: "ai-llm", claude: "ai-llm", langchain: "ai-llm",
  postgres: "database", mysql: "database", redis: "database", mongo: "database",
  security: "security", auth: "security", oauth: "security",
  test: "testing", jest: "testing", playwright: "testing", cypress: "testing",
  cli: "tooling", sdk: "tooling", api: "tooling",
};

function inferDomain(proj: ProjectInfo, readme: string): string {
  const text = `${proj.description} ${proj.topics.join(" ")} ${proj.language} ${readme.slice(0, 500)}`.toLowerCase();
  for (const [kw, domain] of Object.entries(DOMAIN_MAP)) {
    if (text.includes(kw)) return domain;
  }
  return "general";
}

function inferTags(proj: ProjectInfo, readme: string): string[] {
  const tags: string[] = [...proj.topics.slice(0, 5)];
  if (proj.language && proj.language !== "unknown") {
    tags.push(proj.language.toLowerCase());
  }
  tags.push(`stars-${proj.stars}`);
  tags.push(`github-${proj.owner.toLowerCase()}`);
  // 去重
  return [...new Set(tags)].slice(0, 8);
}

// ============================================================
// README 解析
// ============================================================

interface ReadmeSection {
  title: string;
  level: number;
  content: string;
}

function parseReadmeSections(readme: string): ReadmeSection[] {
  const lines = readme.split("\n");
  const sections: ReadmeSection[] = [];
  let current: ReadmeSection | null = null;

  for (const line of lines) {
    const match = line.match(/^(#{1,4})\s+(.+)/);
    if (match) {
      if (current) sections.push(current);
      current = { title: match[2].trim(), level: match[1].length, content: "" };
    } else if (current) {
      current.content += line + "\n";
    }
  }
  if (current) sections.push(current);
  return sections;
}

function extractCodeBlocks(text: string): string[] {
  const blocks: string[] = [];
  const regex = /```[\w]*\n([\s\S]*?)```/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    if (m[1].trim().length > 10) blocks.push(m[1].trim());
  }
  return blocks;
}

// ============================================================
// 目录结构分析
// ============================================================

interface ModuleInfo {
  name: string;
  path: string;
  files: string[];
  type: "source" | "config" | "docs" | "test" | "example" | "script";
}

function analyzeTree(tree: string[]): ModuleInfo[] {
  const modules: ModuleInfo[] = [];
  const dirFiles: Record<string, string[]> = {};

  for (const p of tree) {
    const parts = p.split("/");
    if (parts.length >= 2) {
      const dir = parts[0];
      if (!dirFiles[dir]) dirFiles[dir] = [];
      dirFiles[dir].push(p);
    }
  }

  for (const [dir, files] of Object.entries(dirFiles)) {
    // 跳过隐藏目录和node_modules等
    if (dir.startsWith(".") || dir === "node_modules" || dir === "__pycache__") continue;
    if (dir === "dist" || dir === "build" || dir === "target") continue;

    let type: ModuleInfo["type"] = "source";
    const dl = dir.toLowerCase();
    if (dl === "docs" || dl === "doc" || dl === "documentation") type = "docs";
    else if (dl === "test" || dl === "tests" || dl === "__tests__" || dl === "spec") type = "test";
    else if (dl === "examples" || dl === "example" || dl === "demo") type = "example";
    else if (dl === "scripts" || dl === "bin" || dl === "tools") type = "script";
    else if (dl === "configs" || dl === "config" || dl === ".github") type = "config";

    modules.push({ name: dir, path: dir, files, type });
  }
  return modules;
}

// ============================================================
// 胶囊生成
// ============================================================

function makeProjectCapsule(proj: ProjectInfo, readme: string, tree: string[], domain: string, tags: string[]): Capsule {
  const sections = parseReadmeSections(readme);
  const genes: Gene[] = [];

  // Gene 1: 项目概述
  const overviewSection = sections.find(s =>
    /overview|about|introduction|简介|概述/i.test(s.title)
  );
  genes.push({
    title: "项目概述",
    content: overviewSection?.content.trim().slice(0, 800)
      || `${proj.description}\n\n来源: ${proj.url}\n语言: ${proj.language}\nStars: ${proj.stars}`,
    gene_type: "principle",
  });

  // Gene 2: 安装/快速开始
  const installSection = sections.find(s =>
    /install|setup|getting.started|quick.start|快速开始|安装/i.test(s.title)
  );
  if (installSection) {
    const codes = extractCodeBlocks(installSection.content);
    genes.push({
      title: "安装与快速开始",
      content: codes.length ? codes[0].slice(0, 600) : installSection.content.trim().slice(0, 600),
      gene_type: "snippet",
    });
  }

  // Gene 3: 目录结构
  const topDirs = tree.filter(p => !p.includes("/") || p.split("/").length === 2)
    .filter(p => !p.startsWith("."))
    .slice(0, 20);
  if (topDirs.length > 0) {
    genes.push({
      title: "项目结构",
      content: topDirs.join("\n"),
      gene_type: "pattern",
    });
  }

  // Gene 4: 使用方法
  const usageSection = sections.find(s =>
    /usage|how.to|使用|用法|example/i.test(s.title)
  );
  if (usageSection) {
    const codes = extractCodeBlocks(usageSection.content);
    genes.push({
      title: "使用方法",
      content: codes.length ? codes[0].slice(0, 600) : usageSection.content.trim().slice(0, 600),
      gene_type: "snippet",
    });
  }

  // Gene 5: 特性列表
  const featureSection = sections.find(s =>
    /feature|特性|功能|capability/i.test(s.title)
  );
  if (featureSection) {
    genes.push({
      title: "核心特性",
      content: featureSection.content.trim().slice(0, 600),
      gene_type: "checklist",
    });
  }

  return {
    name: `${proj.name} (${proj.owner})`,
    description: `[项目级] ${proj.description || proj.name}。来源: ${proj.url}`,
    domain,
    tags: [...tags, "project-level"],
    genes,
    version: 1,
    usage_count: 0,
    rating: Math.min(5, 3 + Math.log10(Math.max(1, proj.stars)) * 0.5),
  };
}

function makeModuleCapsule(
  proj: ProjectInfo, mod: ModuleInfo, readme: string,
  domain: string, tags: string[]
): Capsule | null {
  if (mod.files.length < 2) return null; // 太少文件，不值得单独拆

  const genes: Gene[] = [];
  const sections = parseReadmeSections(readme);

  // 尝试从README中找到对应模块的描述
  const modSection = sections.find(s =>
    s.title.toLowerCase().includes(mod.name.toLowerCase())
  );

  // Gene 1: 模块说明
  genes.push({
    title: `${mod.name} 模块说明`,
    content: modSection?.content.trim().slice(0, 500)
      || `模块路径: ${mod.path}/\n类型: ${mod.type}\n文件数: ${mod.files.length}\n\n包含文件:\n${mod.files.slice(0, 10).map(f => `- ${f}`).join("\n")}`,
    gene_type: "principle",
  });

  // Gene 2: 文件结构
  genes.push({
    title: `${mod.name} 文件结构`,
    content: mod.files.slice(0, 15).join("\n"),
    gene_type: "pattern",
  });

  // Gene 3: 代码示例（如果README中有相关代码块）
  if (modSection) {
    const codes = extractCodeBlocks(modSection.content);
    if (codes.length > 0) {
      genes.push({
        title: `${mod.name} 代码示例`,
        content: codes[0].slice(0, 600),
        gene_type: "snippet",
      });
    }
  }

  const modDomain = mod.type === "test" ? "testing"
    : mod.type === "config" ? "devops"
    : mod.type === "docs" ? "documentation"
    : domain;

  return {
    name: `${proj.name}/${mod.name} 模块`,
    description: `[模块级] ${proj.name} 项目的 ${mod.name} 模块 (${mod.type})。来源: ${proj.url}`,
    domain: modDomain,
    tags: [...tags.slice(0, 5), "module-level", mod.type, mod.name.toLowerCase()],
    genes,
    version: 1,
    usage_count: 0,
    rating: Math.min(5, 2.5 + Math.log10(Math.max(1, proj.stars)) * 0.4),
  };
}

// ============================================================
// 主拆解入口
// ============================================================

export async function decomposeProject(
  proj: ProjectInfo, readme: string, tree: string[]
): Promise<Capsule[]> {
  const capsules: Capsule[] = [];
  const domain = inferDomain(proj, readme);
  const tags = inferTags(proj, readme);

  // 1. 项目级胶囊
  capsules.push(makeProjectCapsule(proj, readme, tree, domain, tags));

  // 2. 模块级胶囊
  const modules = analyzeTree(tree);
  for (const mod of modules) {
    const capsule = makeModuleCapsule(proj, mod, readme, domain, tags);
    if (capsule) capsules.push(capsule);
  }

  return capsules;
}
