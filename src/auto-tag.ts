/**
 * 自动标签分类模块 - 融合11种技能类型分类体系
 *
 * 升级：
 * - 保留原有领域关键词匹配
 * - 集成 taxonomy.ts 的技能类型分类
 * - 返回 suggested_skill_type 和 skill_type_confidence
 */
import { getCapsule, updateCapsuleTags, updateSkillType } from "./db.js";
import type { AutoTagResult } from "./types.js";
import { classifySkillType } from "./taxonomy.js";

// 领域关键词映射
const DOMAIN_RULES: Record<string, string[]> = {
  "web-frontend": ["react", "vue", "angular", "nextjs", "next.js", "svelte", "css", "html", "tailwind", "webpack", "vite", "frontend"],
  "backend": ["express", "fastapi", "django", "flask", "nestjs", "api", "rest", "graphql", "grpc", "microservice", "server"],
  "devops": ["docker", "kubernetes", "k8s", "ci/cd", "github-actions", "terraform", "ansible", "jenkins", "deploy", "infrastructure"],
  "ai-llm": ["llm", "gpt", "claude", "openai", "anthropic", "langchain", "rag", "embedding", "prompt", "agent", "ai", "machine-learning"],
  "database": ["postgresql", "mysql", "mongodb", "redis", "sqlite", "prisma", "sql", "database", "orm"],
  "security": ["owasp", "xss", "csrf", "injection", "authentication", "authorization", "encryption", "vulnerability", "pentest"],
  "testing": ["jest", "pytest", "playwright", "cypress", "tdd", "unit-test", "e2e", "testing", "test"],
  "mobile": ["react-native", "flutter", "ios", "android", "swift", "kotlin", "mobile"],
  "data-analysis": ["pandas", "numpy", "matplotlib", "jupyter", "data", "analytics", "visualization", "statistics"],
  "automation": ["composio", "zapier", "n8n", "automation", "workflow", "integration", "slack", "github"],
  "marketing": ["seo", "advertising", "social-media", "content", "branding", "analytics", "campaign"],
  "productivity": ["organization", "planning", "notes", "calendar", "task", "productivity"],
  "creative-design": ["figma", "design", "ui", "ux", "image", "video", "animation"],
  "web3": ["blockchain", "ethereum", "solidity", "smart-contract", "defi", "nft", "web3"],
  "cloud-storage": ["s3", "gcs", "azure-blob", "dropbox", "cloud-storage"],
};

export function autoTagCapsule(capsuleId: string, apply = false): AutoTagResult | null {
  const capsule = getCapsule(capsuleId);
  if (!capsule) return null;

  const text = `${capsule.name} ${capsule.description} ${capsule.genes.map(g => g.title + " " + g.content).join(" ")}`.toLowerCase();

  // 1. 领域分类（原有逻辑）
  const scores: Record<string, number> = {};
  for (const [domain, keywords] of Object.entries(DOMAIN_RULES)) {
    scores[domain] = keywords.reduce((s, kw) => s + (text.includes(kw) ? 1 : 0), 0);
  }

  const sorted = Object.entries(scores).filter(([, s]) => s > 0).sort((a, b) => b[1] - a[1]);
  if (sorted.length === 0) {
    // 即使领域未知，仍然尝试技能类型分类
    const classification = classifySkillType(capsule);
    return {
      capsule_id: capsuleId,
      suggested_domain: "general",
      suggested_tags: [],
      confidence: 0,
      applied: false,
      suggested_skill_type: classification.detected_type,
      skill_type_confidence: Math.round(classification.confidence * 100) / 100,
    };
  }

  const suggestedDomain = sorted[0][0];
  const maxScore = sorted[0][1];
  const totalKeywords = DOMAIN_RULES[suggestedDomain].length;
  const confidence = Math.min(maxScore / Math.max(totalKeywords * 0.3, 1), 1);

  // 从内容中提取标签
  const suggestedTags: string[] = [];
  for (const [_domain, keywords] of Object.entries(DOMAIN_RULES)) {
    for (const kw of keywords) {
      if (text.includes(kw) && !suggestedTags.includes(kw)) {
        suggestedTags.push(kw);
      }
    }
  }

  // 2. 技能类型分类（新增，from taxonomy.ts）
  const classification = classifySkillType(capsule);

  const result: AutoTagResult = {
    capsule_id: capsuleId,
    suggested_domain: suggestedDomain,
    suggested_tags: suggestedTags.slice(0, 10),
    confidence: Math.round(confidence * 100) / 100,
    applied: false,
    suggested_skill_type: classification.detected_type,
    skill_type_confidence: Math.round(classification.confidence * 100) / 100,
  };

  if (apply && confidence >= 0.3) {
    const merged = [...new Set([...suggestedTags.slice(0, 10), ...(typeof capsule.tags === "string" ? JSON.parse(capsule.tags as any) : capsule.tags)])];
    updateCapsuleTags(capsuleId, suggestedDomain, merged);

    // 同时应用技能类型分类
    if (classification.confidence >= 0.3) {
      updateSkillType(capsuleId, classification.detected_type);
    }

    result.applied = true;
  }

  return result;
}
