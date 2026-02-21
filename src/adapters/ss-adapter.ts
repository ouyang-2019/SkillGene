/**
 * ss-adapter.ts - Skill_Seekers v3.0.0 输出 → Capsule/Gene 数据适配器
 *
 * 适配 SS v3.0.0 真实输出:
 * - llms.txt 解析结果 → Capsule 映射
 * - URL 内容 → Capsule 映射
 * - 保留原有领域推断 + 标签提取能力
 */

import type { Capsule, Gene } from "../types.js";
import { classifySkillType } from "../taxonomy.js";
import { checkQuality } from "../quality.js";

// ============================================================
// Gene 类型映射规则
// ============================================================

const SECTION_TO_GENE_TYPE: Record<string, Gene["gene_type"]> = {
  overview: "principle", description: "principle", introduction: "principle",
  about: "principle", philosophy: "principle",
  core_patterns: "pattern", patterns: "pattern", architecture: "pattern",
  design: "pattern",
  api: "api-ref", api_reference: "api-ref", endpoints: "api-ref",
  code_examples: "snippet", examples: "snippet", usage: "snippet",
  demo: "snippet", tutorial: "snippet", quickstart: "snippet",
  configuration: "config", setup: "config", installation: "config",
  getting_started: "config", environment: "config",
  best_practices: "checklist", guidelines: "checklist",
  conventions: "checklist", standards: "checklist",
  anti_patterns: "anti-pattern", pitfalls: "anti-pattern",
  common_mistakes: "anti-pattern", avoid: "anti-pattern",
  troubleshooting: "troubleshoot", debugging: "troubleshoot",
  faq: "troubleshoot", known_issues: "troubleshoot",
  workflow: "workflow", pipeline: "workflow",
  ci_cd: "workflow", deployment: "workflow",
};

function inferGeneType(sectionTitle: string): Gene["gene_type"] {
  const normalized = sectionTitle.toLowerCase()
    .replace(/[\s\-\/]/g, "_").replace(/[^a-z0-9_]/g, "");

  if (SECTION_TO_GENE_TYPE[normalized]) return SECTION_TO_GENE_TYPE[normalized];

  for (const [key, type] of Object.entries(SECTION_TO_GENE_TYPE)) {
    if (normalized.includes(key) || key.includes(normalized)) return type;
  }

  return "principle";
}

// ============================================================
// 领域推断
// ============================================================

const DOMAIN_KEYWORDS: Record<string, string[]> = {
  "web-frontend": ["react", "vue", "angular", "nextjs", "svelte", "css", "html", "tailwind", "webpack", "vite"],
  "backend": ["express", "fastapi", "django", "flask", "nestjs", "spring", "graphql", "grpc", "api", "rest"],
  "devops": ["docker", "kubernetes", "terraform", "ansible", "jenkins", "ci/cd", "github-actions", "deploy"],
  "ai-llm": ["llm", "gpt", "claude", "openai", "langchain", "rag", "embedding", "prompt", "agent", "ai"],
  "database": ["postgresql", "mysql", "mongodb", "redis", "sqlite", "prisma", "sql", "database"],
  "security": ["owasp", "xss", "csrf", "authentication", "authorization", "encryption", "security"],
  "testing": ["jest", "pytest", "playwright", "cypress", "tdd", "testing", "test"],
  "mobile": ["react-native", "flutter", "ios", "android", "swift", "kotlin"],
  "data-analysis": ["pandas", "numpy", "matplotlib", "jupyter", "data", "analytics"],
  "automation": ["automation", "workflow", "integration", "zapier", "n8n"],
  "tooling": ["cli", "sdk", "tool", "utility", "library"],
};

function inferDomain(text: string): string {
  const lower = text.toLowerCase();
  const scores: Record<string, number> = {};
  for (const [domain, keywords] of Object.entries(DOMAIN_KEYWORDS)) {
    scores[domain] = keywords.reduce((s, kw) => s + (lower.includes(kw) ? 1 : 0), 0);
  }
  const sorted = Object.entries(scores).filter(([, s]) => s > 0).sort((a, b) => b[1] - a[1]);
  return sorted.length > 0 ? sorted[0][0] : "general";
}

function extractTags(text: string): string[] {
  const lower = text.toLowerCase();
  const tags: string[] = [];
  for (const keywords of Object.values(DOMAIN_KEYWORDS)) {
    for (const kw of keywords) {
      if (lower.includes(kw) && !tags.includes(kw)) tags.push(kw);
    }
  }
  return tags.slice(0, 10);
}

// ============================================================
// SS Adapter 核心类
// ============================================================

export class SSAdapter {
  /**
   * llms.txt 解析结果 → Capsule 数组
   *
   * 每个 llms.txt 变体生成一个胶囊，sections 转为 genes
   */
  static llmsTxtToCapsules(importResult: any, baseUrl: string): Capsule[] {
    const capsules: Capsule[] = [];

    if (!importResult.found || !importResult.results) return capsules;

    for (const entry of importResult.results) {
      const sections: any[] = entry.sections || [];
      const urls: string[] = entry.urls || [];

      // 从 sections 生成 genes
      const genes: Gene[] = [];

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const title = section.title || section.heading || `Section ${i + 1}`;
        let content = "";

        if (typeof section === "string") {
          content = section;
        } else if (section.content) {
          content = section.content;
        } else if (section.description) {
          content = section.description;
        } else if (section.items && Array.isArray(section.items)) {
          content = section.items.map((item: any) => {
            if (typeof item === "string") return `- ${item}`;
            return `- ${item.title || item.name || ""}: ${item.url || item.link || ""}`;
          }).join("\n");
        } else {
          content = JSON.stringify(section);
        }

        if (content.trim().length > 5) {
          genes.push({
            title,
            content: content.trim().slice(0, 2000),
            gene_type: inferGeneType(title),
            order_index: i,
          });
        }
      }

      // 把发现的 URL 列表也作为一个 gene
      if (urls.length > 0) {
        genes.push({
          title: "参考链接",
          content: urls.slice(0, 30).map(u => `- ${u}`).join("\n"),
          gene_type: "api-ref",
          order_index: genes.length,
        });
      }

      const hostname = new URL(baseUrl).hostname.replace(/^www\./, "");
      const fullText = genes.map(g => g.title + " " + g.content).join(" ");

      const capsule: Capsule = {
        name: `${hostname} (llms.txt${entry.variant !== "standard" ? ` - ${entry.variant}` : ""})`,
        description: `[llms.txt] ${hostname} 的 LLM 友好文档，包含 ${genes.length} 个章节，${urls.length} 个参考链接`,
        domain: inferDomain(fullText),
        tags: [...new Set([...extractTags(fullText), "llms.txt", hostname])],
        genes,
        version: 1,
        usage_count: 0,
        rating: 0,
        source_type: "llmstxt",
        analysis_depth: "deep",
      };

      // 自动分类和评分
      const classification = classifySkillType(capsule);
      if (classification.confidence >= 0.3) {
        capsule.skill_type = classification.detected_type;
      }
      const quality = checkQuality(capsule);
      capsule.quality_score = quality.score.total;
      capsule.quality_grade = quality.score.grade;

      capsules.push(capsule);
    }

    return capsules;
  }

  /**
   * URL 页面内容 → Capsule
   */
  static pageToCapsule(pageData: any): Capsule {
    const url = pageData.url || "";
    const content = pageData.content_preview || pageData.content || "";
    const hostname = url ? new URL(url).hostname.replace(/^www\./, "") : "unknown";

    // 将内容按段落分成 genes
    const paragraphs = content.split(/\n{2,}/).filter((p: string) => p.trim().length > 20);
    const genes: Gene[] = paragraphs.slice(0, 10).map((p: string, i: number) => ({
      title: `段落 ${i + 1}`,
      content: p.trim().slice(0, 2000),
      gene_type: "principle" as const,
      order_index: i,
    }));

    const capsule: Capsule = {
      name: `${hostname} - Web Content`,
      description: `[Web] 从 ${url} 抓取的内容 (${content.length} chars)`,
      domain: inferDomain(content),
      tags: [...new Set([...extractTags(content), hostname])],
      genes,
      version: 1,
      usage_count: 0,
      rating: 0,
      source_type: "web-fetch",
    };

    const classification = classifySkillType(capsule);
    if (classification.confidence >= 0.3) {
      capsule.skill_type = classification.detected_type;
    }
    const quality = checkQuality(capsule);
    capsule.quality_score = quality.score.total;
    capsule.quality_grade = quality.score.grade;

    return capsule;
  }
}
