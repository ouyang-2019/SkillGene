/**
 * 质量评分系统 - 融合 Skill_Seekers 的4维评分体系 + skill-from-masters 的质量门槛
 *
 * 4维评分：
 *   完整度 (30%) - 结构完整性、元数据、章节数
 *   准确性 (25%) - 无占位符/TODO、内容实质性
 *   覆盖度 (25%) - 代码示例、黄金案例、失败模式、API文档
 *   健康度 (20%) - 内容大小合理、无空Gene、结构健全
 *
 * 质量门槛 (from masters)：
 *   - 至少3个黄金案例
 *   - 至少5个失败模式
 *   - 案例来自真实实践
 */

import type {
  Capsule, QualityScore, QualityGrade, QualityIssue,
  QualityCheckResult, GRADE_THRESHOLDS as GradeThresholds,
} from "./types.js";
import { GRADE_THRESHOLDS } from "./types.js";

// ============================================================
// 主评分函数
// ============================================================

/**
 * 对胶囊进行完整的4维质量评分
 */
export function checkQuality(capsule: Capsule): QualityCheckResult {
  const issues: QualityIssue[] = [];
  const suggestions: string[] = [];

  // 各维度评分（满分100）
  const completeness = scoreCompleteness(capsule, issues, suggestions);
  const accuracy = scoreAccuracy(capsule, issues, suggestions);
  const coverage = scoreCoverage(capsule, issues, suggestions);
  const health = scoreHealth(capsule, issues, suggestions);

  // 加权总分
  const total = Math.round(
    completeness * 0.30 +
    accuracy * 0.25 +
    coverage * 0.25 +
    health * 0.20
  );

  const grade = calculateGrade(total);

  const score: QualityScore = {
    completeness,
    accuracy,
    coverage,
    health,
    total,
    grade,
  };

  return {
    capsule_id: capsule.id || "",
    capsule_name: capsule.name,
    score,
    issues,
    suggestions,
    checked_at: new Date().toISOString(),
  };
}

// ============================================================
// 维度1: 完整度 (30%)
// ============================================================
function scoreCompleteness(
  capsule: Capsule,
  issues: QualityIssue[],
  suggestions: string[]
): number {
  let score = 100;

  // 名称检查 (-15 if missing/too short)
  if (!capsule.name || capsule.name.length < 3) {
    score -= 15;
    issues.push({
      dimension: "completeness",
      severity: "error",
      message: "胶囊名称缺失或过短（<3字符）",
      deduction: 15,
    });
  }

  // 描述检查 (-15 if missing/too short)
  if (!capsule.description || capsule.description.length < 10) {
    score -= 15;
    issues.push({
      dimension: "completeness",
      severity: "error",
      message: "胶囊描述缺失或过短（<10字符）",
      deduction: 15,
    });
  }

  // 领域检查 (-10 if missing)
  if (!capsule.domain || capsule.domain === "general") {
    score -= 10;
    issues.push({
      dimension: "completeness",
      severity: "warning",
      message: "未分配具体领域（使用了 general）",
      deduction: 10,
    });
    suggestions.push("运行 auto_tag_capsule 为胶囊分配更精确的领域");
  }

  // 标签检查 (-10 if < 2 tags)
  if (!capsule.tags || capsule.tags.length < 2) {
    score -= 10;
    issues.push({
      dimension: "completeness",
      severity: "warning",
      message: `标签数量不足（${capsule.tags?.length || 0}个，建议>=2）`,
      deduction: 10,
    });
  }

  // Gene数量检查 (-20 if < 2, -10 if < 4)
  const geneCount = capsule.genes?.length || 0;
  if (geneCount < 2) {
    score -= 20;
    issues.push({
      dimension: "completeness",
      severity: "error",
      message: `Gene数量过少（${geneCount}个，最少需要2个）`,
      deduction: 20,
    });
  } else if (geneCount < 4) {
    score -= 10;
    issues.push({
      dimension: "completeness",
      severity: "warning",
      message: `Gene数量偏少（${geneCount}个，建议>=4）`,
      deduction: 10,
    });
  }

  // Gene类型多样性 (-10 if only 1 type)
  if (geneCount > 0) {
    const uniqueTypes = new Set(capsule.genes.map(g => g.gene_type));
    if (uniqueTypes.size === 1) {
      score -= 10;
      issues.push({
        dimension: "completeness",
        severity: "info",
        message: "Gene类型单一，建议混合使用 pattern/snippet/principle 等类型",
        deduction: 10,
      });
    }
  }

  // 技能类型检查 (-5 if not classified)
  if (!capsule.skill_type) {
    score -= 5;
    suggestions.push("运行 classify_skill 为胶囊分配技能类型");
  }

  return Math.max(0, score);
}

// ============================================================
// 维度2: 准确性 (25%)
// ============================================================
function scoreAccuracy(
  capsule: Capsule,
  issues: QualityIssue[],
  suggestions: string[]
): number {
  let score = 100;

  const allText = [
    capsule.name,
    capsule.description,
    ...capsule.genes.map(g => `${g.title} ${g.content}`),
  ].join(" ");

  // TODO 占位符检查 (-5 each, max -20)
  const todoMatches = allText.match(/TODO[:\s]/gi) || [];
  if (todoMatches.length > 0) {
    const deduction = Math.min(todoMatches.length * 5, 20);
    score -= deduction;
    issues.push({
      dimension: "accuracy",
      severity: "warning",
      message: `发现 ${todoMatches.length} 个 TODO 占位符`,
      deduction,
    });
  }

  // 模板占位符检查 (-10)
  const placeholderPatterns = [
    /\[Add description\]/i,
    /\[Insert .+\]/i,
    /\[Your .+ here\]/i,
    /TBD/g,
    /FIXME/g,
    /XXX/g,
    /placeholder/gi,
  ];
  let placeholderCount = 0;
  for (const pattern of placeholderPatterns) {
    const matches = allText.match(pattern);
    if (matches) placeholderCount += matches.length;
  }
  if (placeholderCount > 0) {
    score -= Math.min(placeholderCount * 5, 15);
    issues.push({
      dimension: "accuracy",
      severity: "warning",
      message: `发现 ${placeholderCount} 个模板占位符（TBD/FIXME等）`,
      deduction: Math.min(placeholderCount * 5, 15),
    });
  }

  // Gene内容实质性检查 (-5 per empty gene)
  const emptyGenes = capsule.genes.filter(g => g.content.trim().length < 20);
  if (emptyGenes.length > 0) {
    const deduction = Math.min(emptyGenes.length * 5, 20);
    score -= deduction;
    issues.push({
      dimension: "accuracy",
      severity: "warning",
      message: `${emptyGenes.length} 个 Gene 内容过短（<20字符）`,
      deduction,
    });
  }

  // 描述与名称重复检查 (-10)
  if (capsule.description && capsule.name &&
      capsule.description.toLowerCase().trim() === capsule.name.toLowerCase().trim()) {
    score -= 10;
    issues.push({
      dimension: "accuracy",
      severity: "warning",
      message: "描述与名称完全相同，缺乏额外信息",
      deduction: 10,
    });
  }

  return Math.max(0, score);
}

// ============================================================
// 维度3: 覆盖度 (25%)
// ============================================================
function scoreCoverage(
  capsule: Capsule,
  issues: QualityIssue[],
  suggestions: string[]
): number {
  let score = 60; // 基础分60，有额外内容加分

  const geneTypes = capsule.genes.map(g => g.gene_type);

  // 代码示例 (+15, 有snippet/config类Gene)
  const hasSnippets = geneTypes.includes("snippet") || geneTypes.includes("config");
  if (hasSnippets) {
    score += 15;
  } else {
    issues.push({
      dimension: "coverage",
      severity: "info",
      message: "缺少代码示例（snippet/config类型的Gene）",
      deduction: 0,
    });
    suggestions.push("添加 snippet 类型的 Gene 来包含实际代码示例");
  }

  // 黄金案例 (+10, from masters: 至少3个)
  const goldenCases = geneTypes.filter(t => t === "golden-case").length;
  if (goldenCases >= 3) {
    score += 10;
  } else if (goldenCases > 0) {
    score += 5;
    suggestions.push(`黄金案例数量不足（${goldenCases}/3），建议补充更多最佳实践范例`);
  } else {
    suggestions.push("添加 golden-case 类型的 Gene 来展示最佳实践（目标: >=3个）");
  }

  // 反模式/失败模式 (+10, from masters: 至少5个)
  const antiPatterns = geneTypes.filter(t => t === "anti-pattern").length;
  if (antiPatterns >= 5) {
    score += 10;
  } else if (antiPatterns > 0) {
    score += 5;
    suggestions.push(`失败模式数量不足（${antiPatterns}/5），建议补充更多常见错误`);
  } else {
    suggestions.push("添加 anti-pattern 类型的 Gene 来记录常见错误（目标: >=5个）");
  }

  // 工作流步骤 (+5)
  if (geneTypes.includes("workflow")) {
    score += 5;
  }

  // 故障排除 (+5)
  if (geneTypes.includes("troubleshoot")) {
    score += 5;
  }

  // API参考 (+5)
  if (geneTypes.includes("api-ref")) {
    score += 5;
  }

  // 检查清单 (+5)
  if (geneTypes.includes("checklist")) {
    score += 5;
  }

  // 原则说明 (+5)
  if (geneTypes.includes("principle")) {
    score += 5;
  }

  return Math.min(100, Math.max(0, score));
}

// ============================================================
// 维度4: 健康度 (20%)
// ============================================================
function scoreHealth(
  capsule: Capsule,
  issues: QualityIssue[],
  suggestions: string[]
): number {
  let score = 100;

  // 空Gene检查 (-15 per empty gene)
  const emptyGenes = capsule.genes.filter(g => !g.content || g.content.trim().length === 0);
  if (emptyGenes.length > 0) {
    const deduction = Math.min(emptyGenes.length * 15, 30);
    score -= deduction;
    issues.push({
      dimension: "health",
      severity: "error",
      message: `${emptyGenes.length} 个 Gene 内容为空`,
      deduction,
    });
  }

  // 超大Gene检查 (-10, content > 50000 chars)
  const oversizedGenes = capsule.genes.filter(g => g.content.length > 50000);
  if (oversizedGenes.length > 0) {
    score -= 10;
    issues.push({
      dimension: "health",
      severity: "warning",
      message: `${oversizedGenes.length} 个 Gene 内容超大（>50KB）`,
      deduction: 10,
    });
  }

  // 总内容量过小 (-15)
  const totalContent = capsule.genes.reduce((sum, g) => sum + g.content.length, 0);
  if (totalContent < 100 && capsule.genes.length > 0) {
    score -= 15;
    issues.push({
      dimension: "health",
      severity: "warning",
      message: `总内容量过小（${totalContent}字符），缺乏实质信息`,
      deduction: 15,
    });
  }

  // Gene title 重复检查 (-10)
  const titles = capsule.genes.map(g => g.title.toLowerCase().trim());
  const uniqueTitles = new Set(titles);
  if (uniqueTitles.size < titles.length) {
    const dupeCount = titles.length - uniqueTitles.size;
    score -= 10;
    issues.push({
      dimension: "health",
      severity: "warning",
      message: `${dupeCount} 个 Gene 标题重复`,
      deduction: 10,
    });
  }

  // 安全状态检查 (-20 if danger, -10 if warning)
  if (capsule.security_status === "danger") {
    score -= 20;
    issues.push({
      dimension: "health",
      severity: "error",
      message: "安全扫描结果为 danger，包含高危内容",
      deduction: 20,
    });
  } else if (capsule.security_status === "warning") {
    score -= 10;
    issues.push({
      dimension: "health",
      severity: "warning",
      message: "安全扫描结果为 warning，包含可疑内容",
      deduction: 10,
    });
  }

  // 版本号异常 (-5)
  if (capsule.version < 1) {
    score -= 5;
    issues.push({
      dimension: "health",
      severity: "info",
      message: "版本号异常（<1）",
      deduction: 5,
    });
  }

  return Math.max(0, score);
}

// ============================================================
// 等级计算
// ============================================================
export function calculateGrade(score: number): QualityGrade {
  for (const [grade, threshold] of Object.entries(GRADE_THRESHOLDS) as [QualityGrade, number][]) {
    if (score >= threshold) return grade;
  }
  return "F";
}

// ============================================================
// 批量质量检查
// ============================================================
export function checkQualityBatch(capsules: Capsule[]): {
  results: QualityCheckResult[];
  summary: {
    total: number;
    byGrade: Record<string, number>;
    avgScore: number;
    belowThreshold: number;  // D 或 F 的数量
  };
} {
  const results = capsules.map(c => checkQuality(c));

  const byGrade: Record<string, number> = {};
  let totalScore = 0;
  let belowThreshold = 0;

  for (const r of results) {
    const g = r.score.grade;
    byGrade[g] = (byGrade[g] || 0) + 1;
    totalScore += r.score.total;
    if (g === "D" || g === "F") belowThreshold++;
  }

  return {
    results,
    summary: {
      total: results.length,
      byGrade,
      avgScore: results.length > 0 ? Math.round(totalScore / results.length) : 0,
      belowThreshold,
    },
  };
}

// ============================================================
// Masters 质量门槛检查
// ============================================================
export interface MastersGateResult {
  passed: boolean;
  goldenCases: { count: number; required: number; met: boolean };
  failurePatterns: { count: number; required: number; met: boolean };
  practiceOriented: boolean;  // 案例是否来自真实实践
  feelsLike: "experienced-practitioner" | "well-read-theorist" | "unknown";
}

/**
 * skill-from-masters 质量门槛检查
 * 一个高质量技能应该"像做过无数次的老手"，而不是"读过很多书的人"
 */
export function checkMastersGate(capsule: Capsule): MastersGateResult {
  const geneTypes = capsule.genes.map(g => g.gene_type);

  const goldenCount = geneTypes.filter(t => t === "golden-case").length;
  const antiPatternCount = geneTypes.filter(t => t === "anti-pattern").length;

  // 实践导向检测：有具体代码/配置/工作流 + 有案例
  const hasSnippets = geneTypes.includes("snippet") || geneTypes.includes("config");
  const hasWorkflow = geneTypes.includes("workflow");
  const hasCases = goldenCount > 0 || antiPatternCount > 0;
  const practiceOriented = (hasSnippets || hasWorkflow) && hasCases;

  // 总体评估
  const snippetRatio = capsule.genes.filter(g =>
    ["snippet", "config", "golden-case", "anti-pattern", "workflow", "troubleshoot"].includes(g.gene_type)
  ).length / Math.max(capsule.genes.length, 1);

  const feelsLike = snippetRatio >= 0.5
    ? "experienced-practitioner" as const
    : snippetRatio >= 0.2
      ? "unknown" as const
      : "well-read-theorist" as const;

  const goldenMet = goldenCount >= 3;
  const failureMet = antiPatternCount >= 5;

  return {
    passed: goldenMet && failureMet && practiceOriented,
    goldenCases: { count: goldenCount, required: 3, met: goldenMet },
    failurePatterns: { count: antiPatternCount, required: 5, met: failureMet },
    practiceOriented,
    feelsLike,
  };
}
