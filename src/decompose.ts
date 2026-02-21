/**
 * decompose.ts - 将GitHub项目深度拆解为SkillGene胶囊
 *
 * 融合升级：
 * - Three-Stream 架构 (from Skill_Seekers): Code + Docs + Insights 三流并行分析
 * - 实践优先提取 (from skill-from-masters): 黄金案例 + 失败模式 + 反模式检测
 * - 质量评分集成: 自动评分 + 技能分类
 *
 * 拆解策略：
 * 1. 项目级胶囊：整体概述、架构、技术栈 + 黄金案例 + 反模式
 * 2. 模块级胶囊：按目录/功能拆解为独立胶囊
 */

import type { Capsule, Gene, CodeStreamResult, DocsStreamResult, InsightsStreamResult, ThreeStreamAnalysis } from "./types.js";
import { classifySkillType } from "./taxonomy.js";
import { checkQuality } from "./quality.js";
import { SSBridge, getSSBridge } from "./bridge/ss-bridge.js";
import { isSSAvailable } from "./bridge/ss-health.js";
import { SSAdapter } from "./adapters/ss-adapter.js";

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
  // --- 新增: Insights Stream 数据 ---
  openIssuesCount?: number;
  issueLabels?: string[];
  issueTexts?: string[];  // Issues 标题+内容 (前N条)
}

// ============================================================
// 领域推断 (扩展映射)
// ============================================================
const DOMAIN_MAP: Record<string, string> = {
  // Web Frontend
  react: "web-frontend", vue: "web-frontend", angular: "web-frontend",
  nextjs: "web-frontend", svelte: "web-frontend", tailwind: "web-frontend",
  vite: "web-frontend", webpack: "web-frontend", css: "web-frontend",
  // Backend
  express: "backend", fastapi: "backend", django: "backend", flask: "backend",
  nestjs: "backend", rails: "backend", spring: "backend", graphql: "backend",
  grpc: "backend", microservice: "backend",
  // DevOps
  docker: "devops", kubernetes: "devops", terraform: "devops", ci: "devops",
  ansible: "devops", jenkins: "devops", "github-actions": "devops",
  // AI/LLM
  llm: "ai-llm", mcp: "ai-llm", agent: "ai-llm", skill: "ai-llm",
  openai: "ai-llm", claude: "ai-llm", langchain: "ai-llm",
  rag: "ai-llm", embedding: "ai-llm", prompt: "ai-llm",
  // Database
  postgres: "database", mysql: "database", redis: "database", mongo: "database",
  prisma: "database", sqlite: "database",
  // Security
  security: "security", auth: "security", oauth: "security", owasp: "security",
  // Testing
  test: "testing", jest: "testing", playwright: "testing", cypress: "testing",
  pytest: "testing", tdd: "testing",
  // Tooling
  cli: "tooling", sdk: "tooling", api: "tooling",
  // Automation
  automation: "automation", workflow: "automation", n8n: "automation",
  zapier: "automation",
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
// Three-Stream 分析 (from Skill_Seekers)
// ============================================================

/**
 * Stream 1: Code 分析 - 从目录树提取代码模式
 */
function analyzeCodeStream(tree: string[], proj: ProjectInfo): CodeStreamResult {
  const patterns: string[] = [];
  const apiSignatures: string[] = [];
  const configPatterns: string[] = [];
  const testExamples: string[] = [];
  const languages: string[] = [];

  // 语言检测
  if (proj.language) languages.push(proj.language);
  const extMap: Record<string, string> = {
    ".ts": "TypeScript", ".tsx": "TypeScript", ".js": "JavaScript",
    ".py": "Python", ".go": "Go", ".rs": "Rust", ".java": "Java",
    ".rb": "Ruby", ".cpp": "C++", ".c": "C",
  };
  for (const file of tree) {
    for (const [ext, lang] of Object.entries(extMap)) {
      if (file.endsWith(ext) && !languages.includes(lang)) {
        languages.push(lang);
      }
    }
  }

  // 架构模式检测
  const srcFiles = tree.filter(f => !f.startsWith(".") && !f.includes("node_modules"));

  // MVC 模式
  const hasMVC = ["model", "view", "controller"].every(d =>
    srcFiles.some(f => f.toLowerCase().includes(`/${d}`) || f.toLowerCase().includes(`${d}s/`))
  );
  if (hasMVC) patterns.push("MVC (Model-View-Controller)");

  // 分层架构
  const hasLayers = ["service", "repository", "controller"].every(d =>
    srcFiles.some(f => f.toLowerCase().includes(d))
  );
  if (hasLayers) patterns.push("Layered Architecture (Service-Repository-Controller)");

  // Monorepo
  if (srcFiles.some(f => f === "packages" || f.startsWith("packages/"))) {
    patterns.push("Monorepo (packages/)");
  }

  // 插件/扩展架构
  if (srcFiles.some(f => /plugin|extension|addon/i.test(f))) {
    patterns.push("Plugin/Extension Architecture");
  }

  // 配置模式检测
  const configFiles = srcFiles.filter(f =>
    /\.(json|yaml|yml|toml|ini|env)$/.test(f) ||
    /config|\.rc$|dockerfile|docker-compose/i.test(f)
  );
  for (const cf of configFiles.slice(0, 10)) {
    configPatterns.push(cf);
  }

  // 测试文件检测
  const testFiles = srcFiles.filter(f =>
    /test|spec|__tests__|\.test\.|\.spec\./i.test(f)
  );
  for (const tf of testFiles.slice(0, 10)) {
    testExamples.push(tf);
  }

  // API 入口点检测
  const apiFiles = srcFiles.filter(f =>
    /route|endpoint|handler|api|controller/i.test(f)
  );
  for (const af of apiFiles.slice(0, 10)) {
    apiSignatures.push(af);
  }

  return { patterns, api_signatures: apiSignatures, config_patterns: configPatterns, test_examples: testExamples, languages };
}

/**
 * Stream 2: Docs 分析 - 从 README 提取文档结构
 */
function analyzeDocsStream(readme: string): DocsStreamResult {
  const sections = parseReadmeSections(readme);
  const codeBlocks = extractCodeBlocks(readme);

  // 提取快速开始
  const gettingStarted = sections.find(s =>
    /install|setup|getting.started|quick.start|快速开始|安装/i.test(s.title)
  );

  // 提取API文档
  const apiDocs = sections.find(s =>
    /api|reference|接口|方法|function/i.test(s.title)
  );

  return {
    sections: sections.map(s => ({ title: s.title, content: s.content.trim() })),
    code_blocks: codeBlocks,
    getting_started: gettingStarted?.content.trim() || "",
    api_docs: apiDocs?.content.trim() || "",
  };
}

/**
 * Stream 3: Insights 分析 - 从 Issues/元数据提取洞察
 */
function analyzeInsightsStream(proj: ProjectInfo): InsightsStreamResult {
  const commonIssues: string[] = [];
  const featureRequests: string[] = [];
  const bugPatterns: string[] = [];

  // 从 issue texts 中提取模式
  if (proj.issueTexts) {
    for (const text of proj.issueTexts) {
      const lower = text.toLowerCase();
      if (/bug|error|crash|fail|broken|fix/i.test(lower)) {
        bugPatterns.push(text.slice(0, 200));
      } else if (/feature|request|enhancement|add|support/i.test(lower)) {
        featureRequests.push(text.slice(0, 200));
      } else {
        commonIssues.push(text.slice(0, 200));
      }
    }
  }

  // 从 issue labels 中提取
  if (proj.issueLabels) {
    for (const label of proj.issueLabels) {
      const lower = label.toLowerCase();
      if (lower.includes("bug")) bugPatterns.push(`[Label] ${label}`);
      if (lower.includes("feature") || lower.includes("enhancement")) {
        featureRequests.push(`[Label] ${label}`);
      }
    }
  }

  return {
    common_issues: [...new Set(commonIssues)].slice(0, 10),
    feature_requests: [...new Set(featureRequests)].slice(0, 10),
    bug_patterns: [...new Set(bugPatterns)].slice(0, 10),
    community_size: proj.stars,
  };
}

/**
 * 执行完整的三流分析
 */
function runThreeStreamAnalysis(proj: ProjectInfo, readme: string, tree: string[]): ThreeStreamAnalysis {
  return {
    code: analyzeCodeStream(tree, proj),
    docs: analyzeDocsStream(readme),
    insights: analyzeInsightsStream(proj),
  };
}

// ============================================================
// 黄金案例提取 (from skill-from-masters)
// ============================================================

/**
 * 从 README 中提取黄金案例（最佳实践范例）
 *
 * Masters 标准：案例必须来自真实实践，有具体代码/配置
 */
function extractGoldenCases(sections: ReadmeSection[], proj: ProjectInfo): Gene[] {
  const genes: Gene[] = [];

  // 寻找 examples/usage/demo 章节中的代码块
  const exampleSections = sections.filter(s =>
    /example|demo|usage|tutorial|quickstart|how.to|best.practice|实例|示例|最佳实践/i.test(s.title)
  );

  for (const sec of exampleSections.slice(0, 3)) {
    const codes = extractCodeBlocks(sec.content);
    if (codes.length > 0) {
      genes.push({
        title: `黄金案例: ${sec.title}`,
        content: `// 来源: ${proj.url}\n// 章节: ${sec.title}\n\n${codes[0].slice(0, 800)}`,
        gene_type: "golden-case",
      });
    }
  }

  // 如果没有找到带代码的案例，尝试提取最详细的代码块
  if (genes.length === 0) {
    const allCodes = extractCodeBlocks(sections.map(s => s.content).join("\n"));
    const bestCodes = allCodes
      .filter(c => c.length > 50)
      .sort((a, b) => b.length - a.length)
      .slice(0, 2);

    for (let i = 0; i < bestCodes.length; i++) {
      genes.push({
        title: `黄金案例 ${i + 1}: 核心用法`,
        content: `// 来源: ${proj.url}\n\n${bestCodes[i].slice(0, 800)}`,
        gene_type: "golden-case",
      });
    }
  }

  return genes;
}

// ============================================================
// 失败模式提取 (from skill-from-masters)
// ============================================================

/**
 * 从 README 和 Issues 中提取失败模式/反模式
 *
 * Masters 标准：每个规则都有"做这个"和"不要做那个"配对
 */
function extractFailurePatterns(
  sections: ReadmeSection[],
  insights: InsightsStreamResult,
  proj: ProjectInfo
): Gene[] {
  const genes: Gene[] = [];

  // 1. 从 README 提取常见陷阱/注意事项
  const warningPatterns = [
    /warning|caution|important|note|caveat|pitfall|gotcha|注意|警告|陷阱|常见错误|避免/i,
    /don'?t|avoid|never|common.mistake|anti.?pattern|错误做法|不要/i,
    /troubleshoot|faq|known.issue|限制|问题/i,
  ];

  for (const sec of sections) {
    for (const pattern of warningPatterns) {
      if (pattern.test(sec.title) || pattern.test(sec.content.slice(0, 200))) {
        const content = sec.content.trim().slice(0, 600);
        if (content.length > 20) {
          genes.push({
            title: `反模式: ${sec.title}`,
            content: `// 来源: ${proj.url}\n// 类别: common-mistake\n\n${content}`,
            gene_type: "anti-pattern",
          });
          break;
        }
      }
    }
  }

  // 2. 从 Issues 中提取 bug 模式作为失败案例
  if (insights.bug_patterns.length > 0) {
    const bugSummary = insights.bug_patterns
      .slice(0, 5)
      .map((b, i) => `${i + 1}. ${b}`)
      .join("\n");

    genes.push({
      title: "反模式: 社区常见 Bug 模式",
      content: `// 来源: ${proj.url}/issues\n// 类别: community-reported\n\n已知问题和常见陷阱:\n${bugSummary}`,
      gene_type: "anti-pattern",
    });
  }

  // 3. 从 common issues 提取
  if (insights.common_issues.length > 0) {
    const issueSummary = insights.common_issues
      .slice(0, 5)
      .map((i, idx) => `${idx + 1}. ${i}`)
      .join("\n");

    genes.push({
      title: "反模式: 常见使用问题",
      content: `// 来源: ${proj.url}/issues\n// 类别: usage-issue\n\n用户常遇到的问题:\n${issueSummary}`,
      gene_type: "anti-pattern",
    });
  }

  return genes;
}

// ============================================================
// 故障排除提取
// ============================================================
function extractTroubleshooting(sections: ReadmeSection[]): Gene | null {
  const troubleSection = sections.find(s =>
    /troubleshoot|debug|faq|common.issue|常见问题|故障排除|调试/i.test(s.title)
  );
  if (!troubleSection || troubleSection.content.trim().length < 30) return null;

  return {
    title: `故障排除: ${troubleSection.title}`,
    content: troubleSection.content.trim().slice(0, 800),
    gene_type: "troubleshoot",
  };
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
// 胶囊生成 (升级版)
// ============================================================

function makeProjectCapsule(
  proj: ProjectInfo,
  readme: string,
  tree: string[],
  domain: string,
  tags: string[],
  analysis: ThreeStreamAnalysis
): Capsule {
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
  if (analysis.docs.getting_started) {
    const codes = extractCodeBlocks(analysis.docs.getting_started);
    genes.push({
      title: "安装与快速开始",
      content: codes.length ? codes[0].slice(0, 600) : analysis.docs.getting_started.slice(0, 600),
      gene_type: "snippet",
    });
  }

  // Gene 3: 项目结构
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

  // Gene 4: 架构模式 (from Code Stream)
  if (analysis.code.patterns.length > 0) {
    genes.push({
      title: "架构模式",
      content: `检测到的架构模式:\n${analysis.code.patterns.map(p => `- ${p}`).join("\n")}\n\n技术栈: ${analysis.code.languages.join(", ")}`,
      gene_type: "pattern",
    });
  }

  // Gene 5: 使用方法
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

  // Gene 6: 核心特性 (checklist)
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

  // Gene 7+: 黄金案例 (from masters)
  const goldenGenes = extractGoldenCases(sections, proj);
  genes.push(...goldenGenes);

  // Gene N+: 反模式/失败模式 (from masters)
  const failureGenes = extractFailurePatterns(sections, analysis.insights, proj);
  genes.push(...failureGenes);

  // Gene: 故障排除
  const troubleGene = extractTroubleshooting(sections);
  if (troubleGene) genes.push(troubleGene);

  // Gene: API 参考（如果有）
  if (analysis.docs.api_docs && analysis.docs.api_docs.length > 30) {
    genes.push({
      title: "API 参考",
      content: analysis.docs.api_docs.slice(0, 800),
      gene_type: "api-ref",
    });
  }

  // Gene: 工作流 (如果检测到 CI/CD 配置)
  if (analysis.code.config_patterns.some(c => /github.action|ci|cd|workflow|pipeline/i.test(c))) {
    const ciConfigs = analysis.code.config_patterns
      .filter(c => /github.action|ci|cd|workflow|pipeline/i.test(c));
    genes.push({
      title: "CI/CD 工作流",
      content: `检测到的 CI/CD 配置:\n${ciConfigs.map(c => `- ${c}`).join("\n")}`,
      gene_type: "workflow",
    });
  }

  const capsule: Capsule = {
    name: `${proj.name} (${proj.owner})`,
    description: `[项目级] ${proj.description || proj.name}。来源: ${proj.url}`,
    domain,
    tags: [...tags, "project-level"],
    genes,
    version: 1,
    usage_count: 0,
    rating: Math.min(5, 3 + Math.log10(Math.max(1, proj.stars)) * 0.5),
    source_type: "github-scan",
    golden_cases_count: goldenGenes.length,
    failure_patterns_count: failureGenes.length,
  };

  // 自动分类技能类型
  const classification = classifySkillType(capsule);
  if (classification.confidence >= 0.3) {
    capsule.skill_type = classification.detected_type;
  }

  // 自动质量评分
  const quality = checkQuality(capsule);
  capsule.quality_score = quality.score.total;
  capsule.quality_grade = quality.score.grade;

  return capsule;
}

function makeModuleCapsule(
  proj: ProjectInfo, mod: ModuleInfo, readme: string,
  domain: string, tags: string[]
): Capsule | null {
  if (mod.files.length < 2) return null;

  const genes: Gene[] = [];
  const sections = parseReadmeSections(readme);

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

  // Gene 3: 代码示例
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

  // Gene 4: 黄金案例 (if example module)
  if (mod.type === "example" && modSection) {
    const codes = extractCodeBlocks(modSection.content);
    if (codes.length > 0) {
      genes.push({
        title: `黄金案例: ${mod.name} 示例`,
        content: `// 来源: ${proj.url}/${mod.path}\n\n${codes[0].slice(0, 600)}`,
        gene_type: "golden-case",
      });
    }
  }

  // Gene 5: 测试模式 (if test module)
  if (mod.type === "test") {
    genes.push({
      title: `测试模式: ${mod.name}`,
      content: `测试文件:\n${mod.files.slice(0, 10).map(f => `- ${f}`).join("\n")}`,
      gene_type: "checklist",
    });
  }

  const modDomain = mod.type === "test" ? "testing"
    : mod.type === "config" ? "devops"
    : mod.type === "docs" ? "documentation"
    : domain;

  const capsule: Capsule = {
    name: `${proj.name}/${mod.name} 模块`,
    description: `[模块级] ${proj.name} 项目的 ${mod.name} 模块 (${mod.type})。来源: ${proj.url}`,
    domain: modDomain,
    tags: [...tags.slice(0, 5), "module-level", mod.type, mod.name.toLowerCase()],
    genes,
    version: 1,
    usage_count: 0,
    rating: Math.min(5, 2.5 + Math.log10(Math.max(1, proj.stars)) * 0.4),
    source_type: "github-scan",
  };

  // 自动分类
  const classification = classifySkillType(capsule);
  if (classification.confidence >= 0.3) {
    capsule.skill_type = classification.detected_type;
  }

  // 自动质量评分
  const quality = checkQuality(capsule);
  capsule.quality_score = quality.score.total;
  capsule.quality_grade = quality.score.grade;

  return capsule;
}

// ============================================================
// 主拆解入口 (升级版: 三流分析 + SS 深度分析)
// ============================================================

// 环境变量控制深度分析开关
const DEEP_ANALYSIS = process.env.SKILLGENE_DEEP_ANALYSIS === "true";

export interface DecomposeOptions {
  deep?: boolean;   // 启用 SS 深度分析
}

export async function decomposeProject(
  proj: ProjectInfo, readme: string, tree: string[],
  options?: DecomposeOptions
): Promise<Capsule[]> {
  const capsules: Capsule[] = [];
  const domain = inferDomain(proj, readme);
  const tags = inferTags(proj, readme);

  // 三流并行分析 (浅层，始终执行)
  const analysis = runThreeStreamAnalysis(proj, readme, tree);

  // 1. 项目级胶囊 (含黄金案例 + 反模式)
  capsules.push(makeProjectCapsule(proj, readme, tree, domain, tags, analysis));

  // 2. 模块级胶囊
  const modules = analyzeTree(tree);
  for (const mod of modules) {
    const capsule = makeModuleCapsule(proj, mod, readme, domain, tags);
    if (capsule) capsules.push(capsule);
  }

  // 3. SS 深度分析 (可选)
  if (options?.deep || DEEP_ANALYSIS) {
    const deepCapsules = await runDeepAnalysis(proj, capsules);
    if (deepCapsules) {
      return deepCapsules;
    }
    // 深度分析失败则返回浅层结果
  }

  return capsules;
}

// ============================================================
// SS 深度分析模式
// ============================================================

/**
 * 使用 Skill_Seekers 进行深度分析
 * 成功时返回增强后的胶囊数组，失败时返回 null (降级为浅层)
 */
async function runDeepAnalysis(
  proj: ProjectInfo,
  shallowCapsules: Capsule[]
): Promise<Capsule[] | null> {
  if (!(await isSSAvailable())) {
    console.warn("  [deep] Skill_Seekers not available, using shallow analysis");
    return null;
  }

  const bridge = getSSBridge();
  try {
    // SS v3.0.0: 尝试通过 llms.txt 获取项目文档
    const repoUrl = proj.url || `https://github.com/${proj.owner}/${proj.name}`;

    // 尝试 GitHub Pages 和 homepage 的 llms.txt
    const ghPagesUrl = `https://${proj.owner}.github.io/${proj.name}`;
    const detectResult = await bridge.detectLlmsTxt(ghPagesUrl);

    if (detectResult.success && detectResult.data?.detections?.length > 0) {
      const importResult = await bridge.importLlmsTxt(ghPagesUrl);
      if (importResult.success && importResult.data?.found) {
        const deepCapsules = SSAdapter.llmsTxtToCapsules(importResult.data, ghPagesUrl);
        return mergeAnalysis(shallowCapsules, deepCapsules);
      }
    }

    // llms.txt 不可用，降级
    console.warn(`  [deep] No llms.txt found for ${proj.name}, using shallow analysis`);
    return null;
  } catch (err: any) {
    console.warn(`  [deep] SS deep analysis error: ${err.message}, falling back to shallow`);
    return null;
  }
}

/**
 * 合并浅层 + 深层分析结果
 *
 * 策略:
 * 1. 项目级 Capsule: 用深层数据丰富 genes，合并去重
 * 2. 模块级 Capsule: 保留浅层模块胶囊 (SS 不生成模块级)
 * 3. 标记 analysis_depth: "deep"
 */
function mergeAnalysis(shallowCapsules: Capsule[], deepCapsules: Capsule[]): Capsule[] {
  if (deepCapsules.length === 0) return shallowCapsules;

  const result: Capsule[] = [];

  // 找到浅层项目级胶囊
  const shallowProject = shallowCapsules.find(c =>
    c.tags.includes("project-level") || c.description.includes("[项目级]")
  );

  // 找到深层项目级胶囊
  const deepProject = deepCapsules[0];

  if (shallowProject && deepProject) {
    // 合并 genes: 深层优先，去除浅层中与深层重复的
    const deepTitles = new Set(deepProject.genes.map(g => g.title.toLowerCase()));
    const uniqueShallowGenes = shallowProject.genes.filter(g =>
      !deepTitles.has(g.title.toLowerCase())
    );

    const mergedProject: Capsule = {
      ...deepProject,
      name: shallowProject.name, // 保持原名
      tags: [...new Set([...shallowProject.tags, ...deepProject.tags, "deep-analysis"])],
      genes: [...deepProject.genes, ...uniqueShallowGenes],
      analysis_depth: "deep",
      // 取更高评分
      quality_score: Math.max(shallowProject.quality_score || 0, deepProject.quality_score || 0),
      quality_grade: deepProject.quality_grade || shallowProject.quality_grade,
      golden_cases_count: (shallowProject.golden_cases_count || 0) + (deepProject.golden_cases_count || 0),
      failure_patterns_count: (shallowProject.failure_patterns_count || 0) + (deepProject.failure_patterns_count || 0),
    };

    // 重新评分
    const quality = checkQuality(mergedProject);
    mergedProject.quality_score = quality.score.total;
    mergedProject.quality_grade = quality.score.grade;

    result.push(mergedProject);
  } else {
    // 没有匹配的浅层胶囊，直接使用深层
    result.push(...deepCapsules);
  }

  // 保留浅层模块级胶囊
  const moduleCapsules = shallowCapsules.filter(c =>
    !c.tags.includes("project-level") && !c.description.includes("[项目级]")
  );
  result.push(...moduleCapsules);

  return result;
}

/**
 * 导出三流分析供外部使用
 */
export { runThreeStreamAnalysis, type ThreeStreamAnalysis };
