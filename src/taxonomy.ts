/**
 * 技能分类体系 - 16种技能类型 + 智能推断引擎
 *
 * 分类策略（按优先级）：
 * 1. 关键词匹配（加权：名称×3 + 描述×2 + 内容×1）
 * 2. 名称模式匹配（正则表达式识别项目类型）
 * 3. 标签推断（技术栈标签映射到技能类型）
 * 4. 域名推断（领域兜底映射）
 * 5. 结构分析（gene_type 辅助判断）
 */

import type { Capsule, SkillType, SkillTypeInfo, ClassifyResult } from "./types.js";

// ============================================================
// 16种技能类型完整定义
// ============================================================
export const SKILL_TYPE_CATALOG: SkillTypeInfo[] = [
  {
    type: "summary",
    label: "总结类",
    coreOperation: "压缩",
    inputOutput: "多信号 → 少信号，保留覆盖度",
    keywords: [
      "summarize", "summary", "overview", "digest", "brief",
      "abstract", "recap", "condensed", "highlights", "key-points",
      "总结", "概述", "摘要", "提炼", "归纳",
      "tldr", "outline", "synopsis", "cheat-sheet", "cheatsheet",
    ],
  },
  {
    type: "insight",
    label: "洞察类",
    coreOperation: "提取关键",
    inputOutput: "多信号 → 少量关键信号（解释原因）",
    keywords: [
      "insight", "analyze", "analysis", "understand", "why",
      "root-cause", "deep-dive", "investigate", "discover", "reveal",
      "洞察", "分析", "深度", "解读", "理解",
      "interpret", "correlate", "metric", "indicator", "pattern-mining",
      "profiling", "bottleneck", "performance-analysis",
    ],
  },
  {
    type: "generation",
    label: "生成类",
    coreOperation: "创造",
    inputOutput: "约束 → 新内容",
    keywords: [
      "generate", "create", "build", "write", "compose",
      "design", "draft", "produce", "construct", "scaffold",
      "生成", "创建", "编写", "构建", "设计",
      "template", "boilerplate", "starter", "init", "new",
      "generator", "builder", "creator", "maker",
    ],
  },
  {
    type: "decision",
    label: "决策类",
    coreOperation: "选择",
    inputOutput: "选项+标准 → 决策+理由",
    keywords: [
      "decide", "choose", "select", "compare", "evaluate",
      "tradeoff", "trade-off", "versus", "vs", "pros-cons",
      "决策", "选择", "对比", "权衡", "评估",
      "recommend", "which", "best-practice", "guideline", "when-to-use",
      "alternative", "benchmark-compare",
    ],
  },
  {
    type: "evaluation",
    label: "评估类",
    coreOperation: "判断",
    inputOutput: "产物 → 质量评分+差距分析",
    keywords: [
      "review", "evaluate", "assess", "audit", "check",
      "validate", "verify", "quality", "score", "grade",
      "评审", "评估", "审计", "检查", "验证",
      "lint", "test", "benchmark", "measure", "criteria",
      "code-review", "pull-request", "pr-review",
    ],
  },
  {
    type: "diagnosis",
    label: "诊断类",
    coreOperation: "追溯",
    inputOutput: "症状 → 根因+修复方案",
    keywords: [
      "debug", "diagnose", "troubleshoot", "fix", "resolve",
      "error", "issue", "bug", "problem", "failure",
      "诊断", "排错", "修复", "故障", "异常",
      "root-cause", "stack-trace", "crash", "regression", "hotfix",
      "patch", "workaround",
    ],
  },
  {
    type: "persuasion",
    label: "说服类",
    coreOperation: "桥接",
    inputOutput: "我的目标 → 对方行动",
    keywords: [
      "persuade", "convince", "pitch", "proposal", "sell",
      "negotiate", "influence", "communication", "present", "story",
      "说服", "沟通", "演讲", "提案", "营销",
      "marketing", "copywriting", "landing-page", "cta", "conversion",
    ],
  },
  {
    type: "planning",
    label: "规划类",
    coreOperation: "分解",
    inputOutput: "目标 → 路径+里程碑",
    keywords: [
      "plan", "roadmap", "strategy", "architecture", "design-doc",
      "milestone", "timeline", "breakdown", "decompose", "phase",
      "规划", "路线图", "架构", "拆解", "阶段",
      "sprint", "backlog", "epic", "prd", "rfc",
      "project-plan", "task-breakdown",
    ],
  },
  {
    type: "research",
    label: "调研类",
    coreOperation: "发现",
    inputOutput: "问题 → 结构化答案",
    keywords: [
      "research", "survey", "explore", "study", "investigate",
      "search", "find", "discover", "literature", "state-of-art",
      "调研", "研究", "探索", "调查", "文献",
      "comparison", "landscape", "ecosystem", "market",
      "awesome-list", "curated", "collection", "awesome",
    ],
  },
  {
    type: "facilitation",
    label: "引导类",
    coreOperation: "引出",
    inputOutput: "隐性知识 → 显性知识",
    keywords: [
      "facilitate", "guide", "mentor", "teach", "coach",
      "onboard", "tutorial", "walkthrough", "step-by-step", "how-to",
      "引导", "教程", "指南", "入门", "培训",
      "getting-started", "quickstart", "documentation", "learning", "workshop",
      "readme", "docs", "example", "demo", "sample",
    ],
  },
  {
    type: "transformation",
    label: "转化类",
    coreOperation: "映射",
    inputOutput: "格式A → 格式B",
    keywords: [
      "convert", "transform", "migrate", "translate", "port",
      "refactor", "adapt", "format", "parse", "serialize",
      "转换", "迁移", "重构", "适配", "格式化",
      "etl", "mapping", "export", "import", "compiler",
      "transpile", "encoder", "decoder",
    ],
  },
  // --- 5种实用技术类型 ---
  {
    type: "automation",
    label: "自动化类",
    coreOperation: "自动执行",
    inputOutput: "目标 → 自动执行流程",
    keywords: [
      "automate", "automation", "workflow", "pipeline", "orchestrat",
      "agent", "bot", "cron", "schedule", "trigger",
      "自动化", "工作流", "编排", "调度", "流水线",
      "ci", "cd", "ci/cd", "github-actions", "hook",
      "script", "task-runner", "executor", "dispatcher",
      "mcp", "claude-code", "copilot", "assistant",
      "multi-agent", "agentic", "crew", "swarm",
    ],
  },
  {
    type: "implementation",
    label: "实现类",
    coreOperation: "构建",
    inputOutput: "需求 → 可运行代码/工具",
    keywords: [
      "implement", "library", "framework", "sdk", "package",
      "module", "component", "plugin", "extension", "addon",
      "实现", "库", "框架", "组件", "插件",
      "cli", "tool", "utility", "helper", "middleware",
      "server", "client", "api-client", "wrapper", "binding",
      "app", "application", "service", "microservice", "starter-kit",
    ],
  },
  {
    type: "data-processing",
    label: "数据处理类",
    coreOperation: "处理",
    inputOutput: "原始数据 → 结构化输出",
    keywords: [
      "data", "dataset", "database", "sql", "query",
      "analytics", "visualization", "chart", "graph", "report",
      "数据", "数据库", "查询", "报表", "分析",
      "ml", "machine-learning", "model", "training", "inference",
      "embedding", "vector", "rag", "retrieval", "index",
      "scraper", "crawler", "parser", "extractor", "processor",
      "pandas", "numpy", "tensorflow", "pytorch",
    ],
  },
  {
    type: "monitoring",
    label: "监控运维类",
    coreOperation: "观测",
    inputOutput: "系统 → 可观测性+告警",
    keywords: [
      "monitor", "monitoring", "observ", "alert", "alarm",
      "log", "logging", "trace", "tracing", "metric",
      "监控", "运维", "告警", "日志", "追踪",
      "dashboard", "grafana", "prometheus", "sentry", "healthcheck",
      "uptime", "apm", "telemetry", "status", "notification",
      "devops", "ops", "sre", "reliability",
    ],
  },
  {
    type: "security-ops",
    label: "安全运维类",
    coreOperation: "防护",
    inputOutput: "系统 → 安全加固+防护",
    keywords: [
      "security", "secure", "auth", "authentication", "authorization",
      "encrypt", "encryption", "token", "jwt", "oauth",
      "安全", "认证", "授权", "加密", "防护",
      "vulnerability", "owasp", "xss", "csrf", "injection",
      "firewall", "waf", "ssl", "tls", "certificate",
      "rbac", "acl", "permission", "secret", "vault",
    ],
  },
];

// 构建查找表
const TYPE_BY_NAME = new Map<SkillType, SkillTypeInfo>(
  SKILL_TYPE_CATALOG.map(t => [t.type, t])
);

export function getSkillTypeInfo(type: SkillType): SkillTypeInfo | undefined {
  return TYPE_BY_NAME.get(type);
}

// ============================================================
// 名称模式匹配规则
// ============================================================
const NAME_PATTERNS: Array<{ pattern: RegExp; type: SkillType; bonus: number }> = [
  // Agent/AI 类
  { pattern: /\bagent[s]?\b/i, type: "automation", bonus: 8 },
  { pattern: /\bbot\b/i, type: "automation", bonus: 6 },
  { pattern: /\bworkflow[s]?\b/i, type: "automation", bonus: 7 },
  { pattern: /\borchestrat/i, type: "automation", bonus: 8 },
  { pattern: /\bmcp\b/i, type: "automation", bonus: 6 },
  { pattern: /\bclaude[- ]?code\b/i, type: "automation", bonus: 5 },
  { pattern: /\bcopilot\b/i, type: "automation", bonus: 5 },
  { pattern: /\bagentic\b/i, type: "automation", bonus: 7 },
  { pattern: /\bmulti[- ]?agent\b/i, type: "automation", bonus: 8 },
  { pattern: /\bpipeline[s]?\b/i, type: "automation", bonus: 5 },
  { pattern: /\bci[/-]?cd\b/i, type: "automation", bonus: 7 },
  { pattern: /\bgithub[- ]?action/i, type: "automation", bonus: 7 },
  // 工具/库类
  { pattern: /\bcli\b/i, type: "implementation", bonus: 6 },
  { pattern: /\bsdk\b/i, type: "implementation", bonus: 7 },
  { pattern: /\blib(rary)?\b/i, type: "implementation", bonus: 6 },
  { pattern: /\bframework\b/i, type: "implementation", bonus: 7 },
  { pattern: /\bplugin[s]?\b/i, type: "implementation", bonus: 6 },
  { pattern: /\bextension[s]?\b/i, type: "implementation", bonus: 5 },
  { pattern: /\bpackage\b/i, type: "implementation", bonus: 5 },
  { pattern: /\bmodule\b|\b模块\b/i, type: "implementation", bonus: 4 },
  { pattern: /\bstarter\b|\bboilerplate\b/i, type: "generation", bonus: 6 },
  { pattern: /\btemplate\b/i, type: "generation", bonus: 5 },
  // 数据类
  { pattern: /\brag\b/i, type: "data-processing", bonus: 7 },
  { pattern: /\bllm\b/i, type: "data-processing", bonus: 4 },
  { pattern: /\bembedding[s]?\b/i, type: "data-processing", bonus: 6 },
  { pattern: /\bvector\b/i, type: "data-processing", bonus: 5 },
  { pattern: /\bml\b|\bmachine[- ]?learn/i, type: "data-processing", bonus: 7 },
  { pattern: /\bdata[- ]?(set|base|lake|warehouse)/i, type: "data-processing", bonus: 7 },
  { pattern: /\bscraper\b|\bcrawler\b/i, type: "data-processing", bonus: 6 },
  // 监控类
  { pattern: /\bmonitor/i, type: "monitoring", bonus: 7 },
  { pattern: /\bdashboard\b/i, type: "monitoring", bonus: 6 },
  { pattern: /\blog(ging|s)?\b/i, type: "monitoring", bonus: 5 },
  { pattern: /\bnotif(ication|y)/i, type: "monitoring", bonus: 5 },
  // 安全类
  { pattern: /\bauth\b|\boauth\b|\bjwt\b/i, type: "security-ops", bonus: 7 },
  { pattern: /\bsecur/i, type: "security-ops", bonus: 6 },
  { pattern: /\bencrypt/i, type: "security-ops", bonus: 6 },
  // 调研类
  { pattern: /\bawesome[- ]/i, type: "research", bonus: 8 },
  { pattern: /\bcurated\b/i, type: "research", bonus: 6 },
  { pattern: /\bcollection\b/i, type: "research", bonus: 4 },
  // 引导类
  { pattern: /\btutorial\b/i, type: "facilitation", bonus: 7 },
  { pattern: /\bguide\b/i, type: "facilitation", bonus: 5 },
  { pattern: /\bdoc(s|umentation)?\b/i, type: "facilitation", bonus: 4 },
  { pattern: /\bexample[s]?\b/i, type: "facilitation", bonus: 4 },
  // 诊断类
  { pattern: /\bdebug/i, type: "diagnosis", bonus: 7 },
  { pattern: /\btroubleshoot/i, type: "diagnosis", bonus: 7 },
  // 转化类
  { pattern: /\bconvert(er)?\b/i, type: "transformation", bonus: 7 },
  { pattern: /\bmigrat/i, type: "transformation", bonus: 7 },
  { pattern: /\btranspil/i, type: "transformation", bonus: 7 },
];

// ============================================================
// 域名 → 技能类型兜底映射
// ============================================================
const DOMAIN_FALLBACK: Record<string, SkillType> = {
  "ai-llm": "automation",
  "web-frontend": "implementation",
  "backend": "implementation",
  "devops": "automation",
  "database": "data-processing",
  "security": "security-ops",
  "testing": "evaluation",
  "mobile": "implementation",
  "data-analysis": "data-processing",
  "automation": "automation",
  "tooling": "implementation",
  "general": "implementation",
};

// ============================================================
// 标签 → 技能类型映射
// ============================================================
const TAG_TYPE_MAP: Record<string, SkillType> = {
  // AI/Agent
  "agent": "automation", "bot": "automation", "mcp": "automation",
  "claude": "automation", "openai": "automation", "langchain": "automation",
  "workflow": "automation", "ci/cd": "automation", "github-actions": "automation",
  "automation": "automation", "copilot": "automation",
  // 实现
  "react": "implementation", "vue": "implementation", "angular": "implementation",
  "nextjs": "implementation", "express": "implementation", "fastapi": "implementation",
  "django": "implementation", "flask": "implementation", "nestjs": "implementation",
  "spring": "implementation", "svelte": "implementation",
  "cli": "implementation", "sdk": "implementation", "library": "implementation",
  "plugin": "implementation", "tool": "implementation",
  // 数据
  "rag": "data-processing", "embedding": "data-processing", "vector": "data-processing",
  "pandas": "data-processing", "numpy": "data-processing", "data": "data-processing",
  "ml": "data-processing", "ai": "data-processing", "llm": "data-processing",
  "database": "data-processing", "sql": "data-processing", "mongodb": "data-processing",
  "redis": "data-processing", "postgresql": "data-processing",
  // 安全
  "security": "security-ops", "authentication": "security-ops",
  "authorization": "security-ops", "encryption": "security-ops", "owasp": "security-ops",
  // 监控
  "monitoring": "monitoring", "logging": "monitoring", "dashboard": "monitoring",
  "deploy": "monitoring", "docker": "monitoring", "kubernetes": "monitoring",
  // 测试
  "testing": "evaluation", "jest": "evaluation", "pytest": "evaluation",
  "playwright": "evaluation", "cypress": "evaluation", "tdd": "evaluation",
  // 转换
  "migration": "transformation", "refactor": "transformation",
  "etl": "transformation", "parser": "transformation",
};

// ============================================================
// 智能分类引擎
// ============================================================

export function classifySkillType(capsule: Capsule): ClassifyResult {
  const nameLower = capsule.name.toLowerCase();
  const descLower = capsule.description.toLowerCase();
  const genesText = capsule.genes
    .map(g => `${g.title} ${g.content}`)
    .join(" ")
    .toLowerCase();
  const tagsLower = (capsule.tags || []).map(t => t.toLowerCase());
  const fullText = `${nameLower} ${descLower} ${genesText}`;

  const scores: Record<string, number> = {};
  for (const typeInfo of SKILL_TYPE_CATALOG) {
    scores[typeInfo.type] = 0;
  }

  // ─── Layer 1: 关键词匹配 (加权) ───
  for (const typeInfo of SKILL_TYPE_CATALOG) {
    for (const keyword of typeInfo.keywords) {
      const kw = keyword.toLowerCase();
      if (nameLower.includes(kw)) scores[typeInfo.type] += 3;
      if (descLower.includes(kw)) scores[typeInfo.type] += 2;
      if (genesText.includes(kw)) scores[typeInfo.type] += 1;
    }
  }

  // ─── Layer 2: 名称模式匹配 (正则) ───
  for (const rule of NAME_PATTERNS) {
    if (rule.pattern.test(nameLower)) {
      scores[rule.type] += rule.bonus;
    }
    if (rule.pattern.test(descLower)) {
      scores[rule.type] += Math.ceil(rule.bonus * 0.6);
    }
  }

  // ─── Layer 3: 标签推断 ───
  for (const tag of tagsLower) {
    const mapped = TAG_TYPE_MAP[tag];
    if (mapped) {
      scores[mapped] += 3;
    }
    // 部分匹配
    for (const [key, type] of Object.entries(TAG_TYPE_MAP)) {
      if (tag.includes(key) || key.includes(tag)) {
        scores[type] += 1;
      }
    }
  }

  // ─── Layer 4: 结构分析 (gene_type) ───
  const structureType = detectStructureType(capsule);
  if (structureType) {
    scores[structureType] += 5;
  }

  // ─── Layer 5: 域名兜底 ───
  const domain = capsule.domain || "general";
  const domainFallback = DOMAIN_FALLBACK[domain];
  if (domainFallback) {
    // 域名兜底给少量分数（仅在其他信号弱时生效）
    scores[domainFallback] += 2;
  }

  // ─── 计算最终结果 ───
  const sorted = Object.entries(scores)
    .map(([type, score]) => ({ type: type as SkillType, score }))
    .sort((a, b) => b.score - a.score);

  const best = sorted[0];
  const alternatives = sorted.slice(1, 4).filter(s => s.score > 0);

  // 计算置信度
  const totalScore = sorted.reduce((sum, s) => sum + s.score, 0);
  let confidence: number;
  if (best.score === 0) {
    confidence = 0;
  } else if (totalScore > 0) {
    // 相对置信度：最高分占总分比例
    confidence = Math.min(best.score / Math.max(totalScore * 0.3, 1), 1);
  } else {
    confidence = 0;
  }

  // 如果得分 > 0 但置信度太低，保底 0.15（域名兜底至少有2分）
  if (best.score > 0 && confidence < 0.15) {
    confidence = 0.15;
  }

  const info = TYPE_BY_NAME.get(best.type)!;
  const reasoning = best.score > 0
    ? `检测到 ${info.label}（${info.coreOperation}）模式，` +
      `核心操作: ${info.inputOutput}，得分: ${best.score}`
    : "未检测到明确的技能类型信号";

  return {
    capsule_id: capsule.id || "",
    detected_type: best.type,
    confidence,
    reasoning,
    alternative_types: alternatives,
    applied: false,
  };
}

/**
 * 通过胶囊结构特征辅助判断
 */
function detectStructureType(capsule: Capsule): SkillType | null {
  const geneTypes = capsule.genes.map(g => g.gene_type);
  const geneTitles = capsule.genes.map(g => g.title.toLowerCase()).join(" ");

  if (geneTypes.filter(t => t === "checklist").length >= 2) return "evaluation";
  if (geneTypes.includes("workflow")) return "automation";
  if (geneTypes.includes("troubleshoot")) return "diagnosis";
  if (geneTypes.includes("golden-case") && geneTypes.includes("anti-pattern")) return "evaluation";
  if (geneTypes.filter(t => t === "snippet").length >= 3) return "implementation";
  if (geneTypes.includes("api-ref")) return "implementation";
  if (geneTitles.includes("step") || geneTitles.includes("步骤")) return "facilitation";

  return null;
}

/**
 * 批量分类
 */
export function classifyBatch(capsules: Capsule[]): ClassifyResult[] {
  return capsules.map(c => classifySkillType(c));
}
