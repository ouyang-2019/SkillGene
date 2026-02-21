/**
 * 技能分类体系 - 融合 skill-from-masters 的11种认知操作分类
 *
 * 每种技能类型对应一种核心认知操作，有明确的输入→输出模式。
 * 分类算法通过关键词匹配 + 结构分析确定胶囊的技能类型。
 */

import type { Capsule, SkillType, SkillTypeInfo, ClassifyResult } from "./types.js";

// ============================================================
// 11种技能类型完整定义
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
      "tldr", "outline", "synopsis",
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
      "interpret", "diagnose", "correlate", "metric", "indicator",
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
      "benchmark", "comparison", "landscape", "ecosystem", "market",
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
      "etl", "pipeline", "mapping", "export", "import",
    ],
  },
];

// 构建查找表
const TYPE_BY_NAME = new Map<SkillType, SkillTypeInfo>(
  SKILL_TYPE_CATALOG.map(t => [t.type, t])
);

/**
 * 获取技能类型信息
 */
export function getSkillTypeInfo(type: SkillType): SkillTypeInfo | undefined {
  return TYPE_BY_NAME.get(type);
}

/**
 * 对胶囊进行技能类型分类
 *
 * 算法：
 * 1. 合并胶囊所有文本（name + description + genes）
 * 2. 对每种类型统计关键词命中数
 * 3. 加权评分：名称命中×3 + 描述命中×2 + 内容命中×1
 * 4. 选择得分最高的类型
 */
export function classifySkillType(capsule: Capsule): ClassifyResult {
  const nameLower = capsule.name.toLowerCase();
  const descLower = capsule.description.toLowerCase();
  const genesText = capsule.genes
    .map(g => `${g.title} ${g.content}`)
    .join(" ")
    .toLowerCase();

  const scores: Array<{ type: SkillType; score: number }> = [];

  for (const typeInfo of SKILL_TYPE_CATALOG) {
    let score = 0;

    for (const keyword of typeInfo.keywords) {
      const kw = keyword.toLowerCase();
      // 名称命中 ×3（最重要）
      if (nameLower.includes(kw)) score += 3;
      // 描述命中 ×2
      if (descLower.includes(kw)) score += 2;
      // 基因内容命中 ×1
      if (genesText.includes(kw)) score += 1;
    }

    scores.push({ type: typeInfo.type, score });
  }

  // 按分数排序
  scores.sort((a, b) => b.score - a.score);

  const best = scores[0];
  const maxPossible = SKILL_TYPE_CATALOG.reduce(
    (max, t) => Math.max(max, t.keywords.length * 6), 0
  );
  const confidence = Math.min(best.score / Math.max(maxPossible * 0.15, 1), 1);

  // 结构分析加成
  let structureBonus = detectStructureType(capsule);
  if (structureBonus) {
    const bonusEntry = scores.find(s => s.type === structureBonus);
    if (bonusEntry) {
      bonusEntry.score += 5;
      scores.sort((a, b) => b.score - a.score);
    }
  }

  const topType = scores[0];
  const alternatives = scores.slice(1, 4).filter(s => s.score > 0);

  const info = TYPE_BY_NAME.get(topType.type)!;
  const reasoning = `检测到 ${info.label}（${info.coreOperation}）模式，` +
    `核心认知操作: ${info.inputOutput}，` +
    `关键词匹配得分: ${topType.score}`;

  return {
    capsule_id: capsule.id || "",
    detected_type: topType.type,
    confidence: Math.min(confidence + (structureBonus ? 0.1 : 0), 1),
    reasoning,
    alternative_types: alternatives,
    applied: false,
  };
}

/**
 * 通过胶囊结构特征辅助判断技能类型
 */
function detectStructureType(capsule: Capsule): SkillType | null {
  const geneTypes = capsule.genes.map(g => g.gene_type);
  const geneTitles = capsule.genes.map(g => g.title.toLowerCase()).join(" ");

  // 有 checklist gene → 可能是 evaluation
  if (geneTypes.filter(t => t === "checklist").length >= 2) return "evaluation";

  // 有 workflow gene → 可能是 planning
  if (geneTypes.includes("workflow")) return "planning";

  // 有 troubleshoot gene → 可能是 diagnosis
  if (geneTypes.includes("troubleshoot")) return "diagnosis";

  // 有 golden-case + anti-pattern → 可能是 evaluation
  if (geneTypes.includes("golden-case") && geneTypes.includes("anti-pattern")) return "evaluation";

  // 有多个 snippet → 可能是 generation
  if (geneTypes.filter(t => t === "snippet").length >= 3) return "generation";

  // 有 api-ref → 可能是 facilitation
  if (geneTypes.includes("api-ref")) return "facilitation";

  // 标题包含 step / 步骤 → planning 或 facilitation
  if (geneTitles.includes("step") || geneTitles.includes("步骤")) return "facilitation";

  return null;
}

/**
 * 批量分类所有胶囊
 */
export function classifyBatch(capsules: Capsule[]): ClassifyResult[] {
  return capsules.map(c => classifySkillType(c));
}
