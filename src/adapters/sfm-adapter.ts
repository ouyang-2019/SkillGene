/**
 * sfm-adapter.ts - skill-from-masters 方法论 → Capsule/Gene 数据适配器
 *
 * 职责：
 * - 解析 methodology-database.md → 领域专家 Capsule 数组
 * - 解析 skill-taxonomy.md → 标签体系
 * - 解析 SKILL.md 模板 → 元 Capsule
 * - 解析各 skills/ 目录下的 SKILL.md → 方法论 Capsule
 */

import type { Capsule, Gene, SFMExpertEntry, SFMTaxonomyEntry } from "../types.js";
import { classifySkillType } from "../taxonomy.js";
import { checkQuality } from "../quality.js";

// ============================================================
// Markdown 解析工具
// ============================================================

interface MdSection {
  title: string;
  level: number;
  content: string;
}

function parseMdSections(md: string): MdSection[] {
  const lines = md.split("\n");
  const sections: MdSection[] = [];
  let current: MdSection | null = null;

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

function extractListItems(text: string): string[] {
  const items: string[] = [];
  const regex = /^[\s]*[-*+]\s+(.+)/gm;
  let m;
  while ((m = regex.exec(text)) !== null) {
    const item = m[1].trim();
    if (item.length > 3) items.push(item);
  }
  return items;
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
// SFM Adapter 核心类
// ============================================================

export class SFMAdapter {
  /**
   * 解析 methodology-database.md → 领域专家 Capsule 数组
   *
   * 格式假设：
   * ## 领域名称
   * ### 核心原则
   * - ...
   * ### 黄金示例
   * - ...
   * ### 反模式
   * - ...
   * ### 搜索策略
   * - ...
   * ### 质量检查清单
   * - ...
   */
  static methodologyToCapsules(mdContent: string): Capsule[] {
    const capsules: Capsule[] = [];
    const sections = parseMdSections(mdContent);

    // 按 ## (level 2) 分组为专家条目
    let currentExpert: SFMExpertEntry | null = null;
    let currentSubsections: MdSection[] = [];

    for (const sec of sections) {
      if (sec.level === 2) {
        // 保存上一个专家
        if (currentExpert) {
          capsules.push(this.expertToCapsule(currentExpert, currentSubsections));
        }
        currentExpert = {
          domain: this.inferExpertDomain(sec.title),
          title: sec.title,
          principles: [],
          golden_examples: [],
          anti_patterns: [],
          search_strategy: [],
          quality_checklist: [],
        };
        currentSubsections = [];
      } else if (currentExpert && sec.level >= 3) {
        currentSubsections.push(sec);
        const lower = sec.title.toLowerCase();
        const items = extractListItems(sec.content);

        if (/principle|核心|原则|理念|philosophy/i.test(lower)) {
          currentExpert.principles.push(...items);
        } else if (/golden|example|黄金|示例|best.practice|最佳/i.test(lower)) {
          currentExpert.golden_examples.push(...items);
          // 也提取代码块
          const codes = extractCodeBlocks(sec.content);
          currentExpert.golden_examples.push(...codes);
        } else if (/anti|反模式|mistake|错误|avoid|避免|pitfall|陷阱/i.test(lower)) {
          currentExpert.anti_patterns.push(...items);
        } else if (/search|搜索|strategy|策略/i.test(lower)) {
          currentExpert.search_strategy.push(...items);
        } else if (/quality|检查|checklist|清单|验证/i.test(lower)) {
          currentExpert.quality_checklist.push(...items);
        } else {
          // 默认加入原则
          if (items.length > 0) currentExpert.principles.push(...items);
        }
      }
    }

    // 最后一个专家
    if (currentExpert) {
      capsules.push(this.expertToCapsule(currentExpert, currentSubsections));
    }

    return capsules;
  }

  /**
   * 专家条目 → Capsule
   */
  private static expertToCapsule(expert: SFMExpertEntry, subsections: MdSection[]): Capsule {
    const genes: Gene[] = [];

    // 核心原则
    if (expert.principles.length > 0) {
      genes.push({
        title: `${expert.title} - 核心原则`,
        content: `// [META] source: skill-from-masters | type: expert-methodology\n`
          + expert.principles.map((p, i) => `${i + 1}. ${p}`).join("\n"),
        gene_type: "principle",
      });
    }

    // 黄金示例
    for (let i = 0; i < Math.min(expert.golden_examples.length, 5); i++) {
      genes.push({
        title: `黄金案例 ${i + 1}: ${expert.title}`,
        content: `// [META] source: skill-from-masters | type: golden-case\n`
          + expert.golden_examples[i],
        gene_type: "golden-case",
      });
    }

    // 反模式
    for (let i = 0; i < Math.min(expert.anti_patterns.length, 5); i++) {
      genes.push({
        title: `反模式 ${i + 1}: ${expert.title}`,
        content: `// [META] source: skill-from-masters | type: anti-pattern\n`
          + expert.anti_patterns[i],
        gene_type: "anti-pattern",
      });
    }

    // 搜索策略
    if (expert.search_strategy.length > 0) {
      genes.push({
        title: `搜索策略: ${expert.title}`,
        content: `// [META] source: skill-from-masters\n`
          + expert.search_strategy.map((s, i) => `${i + 1}. ${s}`).join("\n"),
        gene_type: "workflow",
      });
    }

    // 质量检查清单
    if (expert.quality_checklist.length > 0) {
      genes.push({
        title: `质量检查: ${expert.title}`,
        content: `// [META] source: skill-from-masters\n`
          + expert.quality_checklist.map(c => `- [ ] ${c}`).join("\n"),
        gene_type: "checklist",
      });
    }

    // 子章节内容作为补充 genes
    for (const sub of subsections) {
      const alreadyCovered = /principle|golden|anti|search|quality|核心|黄金|反|搜索|检查/i.test(sub.title);
      if (!alreadyCovered && sub.content.trim().length > 30) {
        genes.push({
          title: sub.title,
          content: `// [META] source: skill-from-masters\n` + sub.content.trim().slice(0, 800),
          gene_type: "principle",
        });
      }
    }

    const capsule: Capsule = {
      name: `${expert.title} (方法论)`,
      description: `[专家方法论] ${expert.title} - 来源: skill-from-masters`,
      domain: expert.domain,
      tags: ["methodology", "expert", "skill-from-masters", expert.domain],
      genes,
      version: 1,
      usage_count: 0,
      rating: 4,
      source_type: "skill-from-masters",
      golden_cases_count: genes.filter(g => g.gene_type === "golden-case").length,
      failure_patterns_count: genes.filter(g => g.gene_type === "anti-pattern").length,
    };

    // 自动分类
    const classification = classifySkillType(capsule);
    if (classification.confidence >= 0.3) {
      capsule.skill_type = classification.detected_type;
    }
    const quality = checkQuality(capsule);
    capsule.quality_score = quality.score.total;
    capsule.quality_grade = quality.score.grade;

    return capsule;
  }

  /**
   * 推断专家领域
   */
  private static inferExpertDomain(title: string): string {
    const lower = title.toLowerCase();
    const domainMap: Record<string, string[]> = {
      "web-frontend": ["react", "vue", "angular", "frontend", "css", "next"],
      "backend": ["backend", "api", "server", "express", "django", "spring"],
      "devops": ["devops", "docker", "kubernetes", "ci/cd", "deploy"],
      "ai-llm": ["ai", "llm", "machine learning", "deep learning", "nlp", "agent"],
      "database": ["database", "sql", "nosql", "postgres", "mongo"],
      "security": ["security", "auth", "crypto", "安全"],
      "testing": ["test", "qa", "quality"],
      "mobile": ["mobile", "ios", "android", "flutter"],
    };

    for (const [domain, keywords] of Object.entries(domainMap)) {
      for (const kw of keywords) {
        if (lower.includes(kw)) return domain;
      }
    }
    return "general";
  }

  /**
   * 解析 skill-taxonomy.md → 标签体系 + 分类法条目
   */
  static taxonomyToEntries(mdContent: string): SFMTaxonomyEntry[] {
    const entries: SFMTaxonomyEntry[] = [];
    const sections = parseMdSections(mdContent);

    for (const sec of sections) {
      if (sec.level >= 2) {
        const items = extractListItems(sec.content);
        // 尝试提取分类法结构
        const typeMatch = sec.title.match(/(\w+)\s*[:：]\s*(.+)/);
        if (typeMatch) {
          entries.push({
            type: typeMatch[1].toLowerCase(),
            label: typeMatch[2].trim(),
            core_operation: items[0] || "",
            input_output: items[1] || "",
            examples: items.slice(2),
          });
        } else {
          entries.push({
            type: sec.title.toLowerCase().replace(/\s+/g, "_"),
            label: sec.title,
            core_operation: "",
            input_output: "",
            examples: items,
          });
        }
      }
    }

    return entries;
  }

  /**
   * 将分类法转为标签数组
   */
  static taxonomyToTags(mdContent: string): string[] {
    const entries = this.taxonomyToEntries(mdContent);
    const tags: string[] = [];
    for (const entry of entries) {
      tags.push(entry.type);
      if (entry.label && entry.label !== entry.type) {
        tags.push(entry.label.toLowerCase());
      }
    }
    return [...new Set(tags)];
  }

  /**
   * SKILL.md 模板 → 元 Capsule (教你如何创建技能)
   */
  static templateToMetaCapsule(mdContent: string): Capsule {
    const sections = parseMdSections(mdContent);
    const genes: Gene[] = [];

    for (const sec of sections) {
      if (sec.content.trim().length > 20) {
        const codes = extractCodeBlocks(sec.content);
        genes.push({
          title: sec.title,
          content: `// [META] source: skill-from-masters | type: template\n`
            + sec.content.trim().slice(0, 1500),
          gene_type: codes.length > 0 ? "snippet" : "principle",
        });
      }
    }

    const capsule: Capsule = {
      name: "技能创建方法论 (skill-from-masters)",
      description: "[元技能] 如何创建高质量的 AI 技能 - 模板、流程、质量标准",
      domain: "ai-llm",
      tags: ["methodology", "skill-creation", "template", "meta-skill", "skill-from-masters"],
      genes,
      version: 1,
      usage_count: 0,
      rating: 5,
      source_type: "skill-from-masters",
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

  /**
   * 单个 SKILL.md 文件 → Capsule
   */
  static skillFileToCapsule(mdContent: string, skillName: string, sourcePath: string): Capsule {
    const sections = parseMdSections(mdContent);
    const genes: Gene[] = [];

    // 尝试提取 YAML frontmatter
    let name = skillName;
    let description = "";
    const fmMatch = mdContent.match(/^---\s*\n([\s\S]*?)\n---/);
    if (fmMatch) {
      const nameMatch = fmMatch[1].match(/name:\s*(.+)/);
      const descMatch = fmMatch[1].match(/description:\s*(.+)/);
      if (nameMatch) name = nameMatch[1].trim();
      if (descMatch) description = descMatch[1].trim();
    }

    if (!description && sections.length > 0) {
      description = sections[0].content.trim().slice(0, 200);
    }

    for (const sec of sections) {
      if (sec.content.trim().length > 15) {
        genes.push({
          title: sec.title,
          content: `// [META] source: skill-from-masters | path: ${sourcePath}\n`
            + sec.content.trim().slice(0, 1500),
          gene_type: inferSkillGeneType(sec.title, sec.content),
        });
      }
    }

    const fullText = `${name} ${description} ${sections.map(s => s.content).join(" ")}`;

    const capsule: Capsule = {
      name: `${name} (SFM)`,
      description: description || `[方法论技能] ${name} - 来源: skill-from-masters/${sourcePath}`,
      domain: inferSFMDomain(fullText),
      tags: ["skill-from-masters", "methodology", skillName.toLowerCase()],
      genes,
      version: 1,
      usage_count: 0,
      rating: 4,
      source_type: "skill-from-masters",
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

// ============================================================
// 辅助函数
// ============================================================

function inferSkillGeneType(title: string, content: string): Gene["gene_type"] {
  const lower = title.toLowerCase();
  if (/example|示例|code|代码/i.test(lower)) return "snippet";
  if (/anti|反|mistake|错误|avoid/i.test(lower)) return "anti-pattern";
  if (/golden|黄金|best/i.test(lower)) return "golden-case";
  if (/workflow|流程|step|步骤/i.test(lower)) return "workflow";
  if (/check|检查|rule|规则/i.test(lower)) return "checklist";
  if (/config|配置|setup/i.test(lower)) return "config";
  if (/trouble|故障|faq|debug/i.test(lower)) return "troubleshoot";
  if (/api|接口/i.test(lower)) return "api-ref";
  if (extractCodeBlocks(content).length > 0) return "snippet";
  return "principle";
}

function inferSFMDomain(text: string): string {
  const lower = text.toLowerCase();
  const map: [string, string[]][] = [
    ["ai-llm", ["ai", "llm", "agent", "prompt", "skill"]],
    ["web-frontend", ["react", "vue", "frontend", "css"]],
    ["backend", ["api", "server", "backend"]],
    ["devops", ["docker", "deploy", "ci"]],
    ["testing", ["test", "qa"]],
    ["security", ["security", "auth"]],
  ];

  for (const [domain, keywords] of map) {
    if (keywords.some(kw => lower.includes(kw))) return domain;
  }
  return "methodology";
}
