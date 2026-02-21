import { z } from "zod";

// ============================================================
// Skill Taxonomy - 16种技能类型 (认知操作 + 实用技术类型)
// ============================================================
export const SKILL_TYPES = [
  // --- 11种认知操作类型 (from skill-from-masters) ---
  "summary",        // 压缩：多信号 → 少信号，保留覆盖度
  "insight",        // 提取关键：多信号 → 少量关键信号（解释原因）
  "generation",     // 创造：约束 → 新内容
  "decision",       // 选择：选项+标准 → 决策+理由
  "evaluation",     // 判断：产物 → 质量评分+差距分析
  "diagnosis",      // 追溯：症状 → 根因+修复方案
  "persuasion",     // ��接：我的目标 → 对方行动
  "planning",       // 分解：目标 → 路径+里程碑
  "research",       // 发现：问题 → 结构化答案
  "facilitation",   // 引出：隐性知识 → 显性知识
  "transformation", // 映射：格式A → 格式B
  // --- 5种实用技术类型 ---
  "automation",       // 自动化：目标 → 自动执行流程
  "implementation",   // 实现类：需求 → 可运行代码/工具
  "data-processing",  // 数据处理：原始数据 → 结构化输出
  "monitoring",       // 监控运维：系统 → 可观测性+告警
  "security-ops",     // 安全运维：系统 → 安全加固+防护
] as const;

export type SkillType = typeof SKILL_TYPES[number];

export const SkillTypeSchema = z.enum(SKILL_TYPES as unknown as [string, ...string[]]);

// 技能类型元数据
export interface SkillTypeInfo {
  type: SkillType;
  label: string;
  coreOperation: string;
  inputOutput: string;
  keywords: string[];
}

// ============================================================
// Quality Scoring - 4维质量评分 (from Skill_Seekers)
// ============================================================
export interface QualityScore {
  completeness: number;  // 完整度 30% - SKILL.md结构、元数据、章节
  accuracy: number;      // 准确性 25% - 无TODO/占位符、内容实质性
  coverage: number;      // 覆盖度 25% - 代码示例、黄金案例、失败模式
  health: number;        // 健康度 20% - 无空内容、大小合理、结构健全
  total: number;         // 加权总分
  grade: QualityGrade;   // 等级
}

export const QUALITY_GRADES = [
  "A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D", "F"
] as const;

export type QualityGrade = typeof QUALITY_GRADES[number];

export const GRADE_THRESHOLDS: Record<QualityGrade, number> = {
  "A+": 95, "A": 90, "A-": 85,
  "B+": 80, "B": 75, "B-": 70,
  "C+": 65, "C": 60, "C-": 55,
  "D": 50, "F": 0,
};

// ============================================================
// Golden Cases & Failure Patterns (from skill-from-masters)
// ============================================================
export interface GoldenCase {
  id?: string;
  capsule_id?: string;
  title: string;
  source: string;       // 来源 URL / 项目名 / 文档名
  description: string;  // 为什么这是一个好的实践
  content: string;      // 具体的代码/配置/流程内容
  created_at?: string;
}

export interface FailurePattern {
  id?: string;
  capsule_id?: string;
  title: string;
  category: string;     // 失败类别：anti-pattern / common-mistake / misconception
  description: string;  // 为什么这样做是错的
  bad_example: string;  // 错误做法示例
  fix_example: string;  // 正确做法示例
  created_at?: string;
}

// ============================================================
// Gene - 原子能力单元 (扩展 gene_type)
// ============================================================
export const GeneSchema = z.object({
  id: z.string().optional(),
  capsule_id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  gene_type: z.enum([
    "pattern",      // 架构/设计模式
    "config",       // 配置示例
    "snippet",      // 代码片段
    "principle",    // 原则/理念
    "checklist",    // 检查清单
    // --- 新增 (from masters + seekers) ---
    "golden-case",  // 黄金案例 - 最佳实践范例
    "anti-pattern", // 反模式 - 应避免的做法
    "workflow",     // 工作流步骤
    "api-ref",      // API参考文档
    "troubleshoot", // 故障排除/错误处理
  ]),
  order_index: z.number().optional(),
});
export type Gene = z.infer<typeof GeneSchema>;

// ============================================================
// Capsule - 完整能力胶囊 (扩展质量+分类字段)
// ============================================================
export const CapsuleSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  domain: z.string(),
  tags: z.array(z.string()),
  genes: z.array(GeneSchema),
  version: z.number().default(1),
  usage_count: z.number().default(0),
  rating: z.number().default(0),
  security_status: z.enum(["pending", "safe", "warning", "danger"]).optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  // --- 新增字段 ---
  skill_type: SkillTypeSchema.optional(),       // 技能类型分类
  quality_score: z.number().optional(),          // 质量总分 (0-100)
  quality_grade: z.string().optional(),          // 质量等级 (A+ ~ F)
  golden_cases_count: z.number().optional(),      // 黄金案例数
  failure_patterns_count: z.number().optional(),  // 失败模式数
  source_type: z.enum([
    "seed",         // 手工种子数据
    "github-scan",  // GitHub自动扫描
    "import",       // 批量导入
    "user-contrib", // 用户贡献
    "extract",      // 文件提取
    // --- 新增 (融合来源) ---
    "skill-seekers",      // Skill_Seekers 深度分析
    "skill-from-masters", // skill-from-masters 方法论导入
    "ss-deep-scan",       // SS 深度扫描
    "llmstxt",            // llms.txt 导入
    "web-fetch",          // 网页抓取
  ]).optional(),
  // --- 新增: 分析深度标记 ---
  analysis_depth: z.enum(["shallow", "deep"]).optional(),
});
export type Capsule = z.infer<typeof CapsuleSchema>;

// ============================================================
// Three-Stream GitHub Analysis (from Skill_Seekers)
// ============================================================
export interface CodeStreamResult {
  patterns: string[];         // 检测到的代码模式
  api_signatures: string[];   // API签名列表
  config_patterns: string[];  // 配置模式
  test_examples: string[];    // 测试用例
  languages: string[];        // 使用的语言
}

export interface DocsStreamResult {
  sections: Array<{ title: string; content: string }>;
  code_blocks: string[];      // 文档中的代码块
  getting_started: string;    // 快速开始内容
  api_docs: string;           // API文档
}

export interface InsightsStreamResult {
  common_issues: string[];    // 常见问题（来自Issues）
  feature_requests: string[]; // 功能请求
  bug_patterns: string[];     // bug模式
  community_size: number;     // 社区活跃度
}

export interface ThreeStreamAnalysis {
  code: CodeStreamResult;
  docs: DocsStreamResult;
  insights: InsightsStreamResult;
}

// ============================================================
// Search Result (扩展搜索结果)
// ============================================================
export interface SearchResult {
  id: string;
  name: string;
  description: string;
  domain: string;
  tags: string[];
  rating: number;
  usage_count: number;
  rank: number;
  // --- 新增字段 ---
  skill_type?: SkillType;
  quality_grade?: QualityGrade;
  quality_score?: number;
}

// ============================================================
// Evolution Feedback
// ============================================================
export const EvolveFeedbackSchema = z.object({
  capsule_id: z.string(),
  feedback_type: z.enum(["improve", "fix", "extend"]),
  description: z.string(),
  new_genes: z.array(GeneSchema).optional(),
});
export type EvolveFeedback = z.infer<typeof EvolveFeedbackSchema>;

// ============================================================
// Security
// ============================================================
export interface SecurityIssue {
  severity: "critical" | "high" | "medium" | "low" | "info";
  category: string;
  description: string;
  location: string;
  matched: string;
}

export interface ScanResult {
  capsule_id: string;
  capsule_name: string;
  status: "safe" | "warning" | "danger";
  issues: SecurityIssue[];
  scanned_at: string;
}

// ============================================================
// Auto Tag
// ============================================================
export interface AutoTagResult {
  capsule_id: string;
  suggested_domain: string;
  suggested_tags: string[];
  confidence: number;
  applied: boolean;
  // --- 新增 ---
  suggested_skill_type?: SkillType;
  skill_type_confidence?: number;
}

// ============================================================
// Extract
// ============================================================
export interface ExtractResult {
  source_path: string;
  capsules_created: number;
  capsule_ids: string[];
}

// ============================================================
// Quality Check Result
// ============================================================
export interface QualityCheckResult {
  capsule_id: string;
  capsule_name: string;
  score: QualityScore;
  issues: QualityIssue[];
  suggestions: string[];
  checked_at: string;
}

export interface QualityIssue {
  dimension: "completeness" | "accuracy" | "coverage" | "health";
  severity: "error" | "warning" | "info";
  message: string;
  deduction: number;  // 扣分值
}

// ============================================================
// Skill Classification Result
// ============================================================
export interface ClassifyResult {
  capsule_id: string;
  detected_type: SkillType;
  confidence: number;
  reasoning: string;
  alternative_types: Array<{ type: SkillType; score: number }>;
  applied: boolean;
}

// ============================================================
// Skill_Seekers 桥接类型 (SS Bridge)
// ============================================================

/** SS SKILL.md 章节 */
export interface SSSection {
  title: string;
  level: number;
  content: string;
  code_blocks?: string[];
}

/** SS 输出元数据 */
export interface SSMetadata {
  source_url?: string;
  language?: string;
  analysis_depth?: "shallow" | "deep";
  confidence?: number;
  created_at?: string;
  tool_version?: string;
}

/** SS 技能输出（SKILL.md 解析结果）*/
export interface SSSkillOutput {
  name: string;
  description: string;
  sections: SSSection[];
  metadata: SSMetadata;
}

/** SS GitHub 3流分析结果 */
export interface SSGitHubAnalysis {
  repo_url: string;
  repo_name: string;
  code_stream: {
    patterns: string[];
    api_signatures: string[];
    dependencies: string[];
    languages: Record<string, number>;  // 语言 → 行数
    test_coverage?: number;
    complexity_score?: number;
  };
  docs_stream: {
    sections: SSSection[];
    code_blocks: string[];
    getting_started?: string;
    api_docs?: string;
    changelog?: string;
  };
  community_stream: {
    stars: number;
    forks: number;
    open_issues: number;
    contributors: number;
    recent_activity: string;    // "active" | "moderate" | "stale"
    common_issues: string[];
    feature_requests: string[];
    bug_patterns: string[];
  };
}

/** SS AST 代码分析结果 */
export interface SSAstResult {
  language: string;
  functions: Array<{
    name: string;
    signature: string;
    docstring?: string;
    complexity?: number;
    line_start: number;
    line_end: number;
  }>;
  classes: Array<{
    name: string;
    methods: string[];
    bases?: string[];
    docstring?: string;
  }>;
  imports: string[];
  exports: string[];
  patterns: string[];        // 检测到的设计模式
  metrics: {
    total_lines: number;
    code_lines: number;
    comment_lines: number;
    complexity: number;
  };
}

/** SS PDF 提取结果 */
export interface SSPdfResult {
  title?: string;
  pages: number;
  sections: SSSection[];
  metadata: Record<string, string>;
}

/** SS 预设配置 */
export interface SSConfig {
  name: string;
  description: string;
  domain: string;
  settings: Record<string, any>;
}

/** Gene 扩展元数据 (嵌入 content 的 JSON 前缀) */
export interface GeneMetadata {
  source: "skillgene" | "skill-seekers" | "skill-from-masters";
  analysisDepth: "shallow" | "deep";
  language?: string;
  confidence?: number;
  isAntiPattern?: boolean;
}

// ============================================================
// skill-from-masters 方法论类型 (SFM)
// ============================================================

/** SFM 领域专家条目 */
export interface SFMExpertEntry {
  domain: string;
  title: string;
  principles: string[];       // 核心原则
  golden_examples: string[];  // 黄金示例
  anti_patterns: string[];    // 反模式
  search_strategy: string[];  // 搜索策略
  quality_checklist: string[];// 质量检查清单
}

/** SFM 技能分类法条目 */
export interface SFMTaxonomyEntry {
  type: string;
  label: string;
  core_operation: string;
  input_output: string;
  examples: string[];
}
