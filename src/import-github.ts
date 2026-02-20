#!/usr/bin/env node
import { getDb, contributeCapsule } from "./db.js";
import type { Capsule } from "./types.js";

getDb();

const githubSkills: Capsule[] = [
  // ============================================================
  // Anthropic 官方 Skills (from github.com/anthropics/skills)
  // ============================================================
  {
    name: "Algorithmic Art (p5.js 生成艺术)",
    description: "使用 p5.js 创建算法艺术，包含种子随机性和交互参数探索。适用于生成艺术、流场、粒子系统等创意编程。",
    domain: "creative-design",
    tags: ["p5js", "generative-art", "creative-coding", "algorithmic-art", "anthropic-official"],
    genes: [
      {
        title: "算法哲学创建流程",
        content: "两步流程：1. 创建算法哲学(.md)：命名运动(1-2词)，阐述哲学(4-6段)，强调计算过程、涌现行为、数学之美。2. 用代码表达：创建 p5.js 生成艺术(.html + .js)，90%算法生成 + 10%必要参数。",
        gene_type: "pattern",
      },
      {
        title: "生成艺术模式范例",
        content: "- Organic Turbulence: Perlin噪声流场 + 粒子轨迹积累密度图\n- Quantum Harmonics: 网格粒子 + 正弦波相位干涉\n- Recursive Whispers: 递归分支 + 黄金比例 + L-systems\n- Field Dynamics: 向量场 + 粒子流线\n- Stochastic Crystallization: 随机圆填充 / Voronoi 镶嵌",
        gene_type: "pattern",
      },
      {
        title: "p5.js 种子随机性模板",
        content: `let seed;
function setup() {
  createCanvas(800, 800);
  seed = random(99999);
}
function draw() {
  randomSeed(seed);
  noiseSeed(seed);
  background(20);
  // 生成艺���逻辑...
}
function mousePressed() { seed = random(99999); }`,
        gene_type: "snippet",
      },
    ],
    version: 1, usage_count: 0, rating: 4.7,
  },
  {
    name: "Brand Guidelines 品牌规范应用",
    description: "将品牌颜色、字体、视觉规范应用到各类设计产出物。适用于企业品牌标准化设计。",
    domain: "creative-design",
    tags: ["branding", "design-system", "typography", "colors", "anthropic-official"],
    genes: [
      {
        title: "Anthropic 品牌色板",
        content: "主色: Dark #141413, Light #faf9f5, Mid Gray #b0aea5, Light Gray #e8e6dc\n强调色: Orange #d97757, Blue #6a9bcc, Green #788c5d",
        gene_type: "config",
      },
      {
        title: "字体规范",
        content: "标题: Poppins (fallback Arial), 24pt+\n正文: Lora (fallback Georgia)\n形状/强调元素循环使用 orange→blue→green",
        gene_type: "config",
      },
    ],
    version: 1, usage_count: 0, rating: 4.3,
  },
  {
    name: "Canvas Design 静态视觉设计",
    description: "创建精美的 .png 和 .pdf 视觉设计作品，海报、艺术品、平面设计。使用设计哲学驱动创作。",
    domain: "creative-design",
    tags: ["poster", "visual-design", "pdf", "png", "canvas", "anthropic-official"],
    genes: [
      {
        title: "设计哲学创建方法",
        content: "1. 命名运动(1-2词): 'Brutalist Joy' / 'Chromatic Silence'\n2. 阐述哲学(4-6段): 形式、空间、色彩、构图\n3. 视觉表达: 90%视觉设计 + 10%必要文字\n关键: 先写宣言，再创作作品",
        gene_type: "pattern",
      },
      {
        title: "Typst PDF 生成模板",
        content: "使用 Typst 排版语言生成 PDF。支持自定义字���、颜色、布局。比 LaTeX 更现代的排版方案。",
        gene_type: "principle",
      },
    ],
    version: 1, usage_count: 0, rating: 4.5,
  },
  {
    name: "Doc Co-authoring 文档协作",
    description: "协助用户共同撰写和改进文档内容，提供结构化反馈和修改建议。",
    domain: "productivity",
    tags: ["writing", "collaboration", "editing", "documents", "anthropic-official"],
    genes: [
      {
        title: "文档协作流程",
        content: "1. 理解意图：确认文档目标和受众\n2. 结构审查：检查逻辑流和章节组织\n3. 内容增强：补充细节、改进表达\n4. 风格统一：确保语调和格式一致\n5. 最终审阅：检查语法、拼写、引用",
        gene_type: "pattern",
      },
    ],
    version: 1, usage_count: 0, rating: 4.4,
  },
  {
    name: "DOCX 文档处理",
    description: "创建、读取、编辑 Word 文档(.docx)。支持表格、目录、页眉页脚、格式化等专业文档功能。",
    domain: "productivity",
    tags: ["docx", "word", "document", "office", "anthropic-official"],
    genes: [
      {
        title: "DOCX 操作速查表",
        content: "| 任务 | 方法 |\n|------|------|\n| 读取/分析 | pandoc 或 unpack raw XML |\n| 创建新文档 | docx-js (npm install -g docx) |\n| 编辑现有 | unpack → edit XML → repack |",
        gene_type: "pattern",
      },
      {
        title: "docx-js 创建模板",
        content: `const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel } = require('docx');
const doc = new Document({ sections: [{ children: [/* content */] }] });
Packer.toBuffer(doc).then(buf => fs.writeFileSync("doc.docx", buf));`,
        gene_type: "snippet",
      },
      {
        title: "文档验证流程",
        content: "创建后必须验证: python scripts/office/validate.py doc.docx\n验证失败则: unpack → 修复 XML → repack",
        gene_type: "checklist",
      },
    ],
    version: 1, usage_count: 0, rating: 4.8,
  },
  {
    name: "PDF 处理工具",
    description: "PDF 文件的读取、合并、拆分、旋转、水印、OCR、表单填写、加密解密等全面处理能力。",
    domain: "productivity",
    tags: ["pdf", "pypdf", "pdfplumber", "ocr", "anthropic-official"],
    genes: [
      {
        title: "pypdf 核心操作",
        content: `from pypdf import PdfReader, PdfWriter
# 读取
reader = PdfReader("doc.pdf")
text = "".join(p.extract_text() for p in reader.pages)
# 合并
writer = PdfWriter()
for f in ["a.pdf","b.pdf"]:
    for p in PdfReader(f).pages: writer.add_page(p)
writer.write(open("merged.pdf","wb"))
# 拆分/旋转
page = reader.pages[0]
page.rotate(90)`,
        gene_type: "snippet",
      },
      {
        title: "pdfplumber 表格提取",
        content: "import pdfplumber\nwith pdfplumber.open('doc.pdf') as pdf:\n    for page in pdf.pages:\n        tables = page.extract_tables()\n        text = page.extract_text()",
        gene_type: "snippet",
      },
    ],
    version: 1, usage_count: 0, rating: 4.7,
  },
  {
    name: "PPTX 演示文稿制作",
    description: "创建、编辑专业演示文稿(.pptx)。支持从模板创建和从零创建两种模式，内含设计配色方案。",
    domain: "productivity",
    tags: ["pptx", "powerpoint", "presentation", "slides", "anthropic-official"],
    genes: [
      {
        title: "操作模式选择",
        content: "| 任务 | 方法 |\n|------|------|\n| 读取/分析 | python -m markitdown pres.pptx |\n| 从模板编辑 | unpack → 操作 slide XML → pack |\n| 从零创建 | 使用 pptxgenjs |",
        gene_type: "pattern",
      },
      {
        title: "专业配色方案",
        content: "| 主题 | 主色 | 辅色 | 强调 |\n|------|------|------|------|\n| Midnight Executive | #1E2761 | #CADCFC | #FFFFFF |\n| Forest & Moss | #2C5F2D | #97BC62 | #F5F5F5 |\n| Coral Energy | #F96167 | #F9E795 | #2F3C7E |\n| Warm Terracotta | #B85042 | #E7E8D1 | #A7BEAE |\n| Ocean Gradient | #065A82 | #1C7293 | #21295C |\n| Charcoal Minimal | #36454F | #F2F2F2 | #212121 |",
        gene_type: "config",
      },
      {
        title: "设计原则",
        content: "- 选择主题相关的大胆配色，非通用蓝\n- 60-70%主色 + 1-2辅色 + 1强调色\n- 深色背景用于标题+结论页，浅色用于内容\n- 坚持一个视觉母题贯穿所有幻灯片",
        gene_type: "principle",
      },
    ],
    version: 1, usage_count: 0, rating: 4.6,
  },
  {
    name: "XLSX 电子表格处理",
    description: "创建、编辑、分析电子表格文件(.xlsx/.csv)。包含财务模型规范、公式验证、数据清洗。",
    domain: "productivity",
    tags: ["xlsx", "excel", "spreadsheet", "financial-model", "anthropic-official"],
    genes: [
      {
        title: "财务模型色彩规范",
        content: "- 蓝色文字(0,0,255): 硬编码输入值\n- 黑色文字(0,0,0): 公式和计算\n- 绿色文字(0,128,0): 工作表间链接\n- 红色文字(255,0,0): 外部文件链接\n- 黄色背景(255,255,0): 需关注的假设",
        gene_type: "config",
      },
      {
        title: "数字格式规范",
        content: "- 年份: 文本格式 '2024' (非 '2,024')\n- 货币: $#,##0 并在表头注明单位\n- 零值: 显示为 '-'\n- 百分比: 0.0%\n- 估值倍数: 0.0x\n- 负数: 括号 (123) 非减号 -123",
        gene_type: "config",
      },
      {
        title: "公式构建规则",
        content: "- 所有假设放在独立单元格，用引用而非硬编码\n- 验证所有引用正确，检查 off-by-one 错误\n- 确保所有预测期公式一致\n- 测试边界情况（零值、负数）\n- 确认无意外循环引用\n- 交付前零公式错误(#REF!, #DIV/0!, #VALUE!)",
        gene_type: "checklist",
      },
    ],
    version: 1, usage_count: 0, rating: 4.8,
  },
  {
    name: "Frontend Design 前端设计",
    description: "创建精美的前端 Web 界面设计，包含 HTML/CSS/JS 实现，注重视觉表现和用户体验。",
    domain: "web-frontend",
    tags: ["html", "css", "ui-design", "web-design", "anthropic-official"],
    genes: [
      {
        title: "前端设计方法论",
        content: "1. 创建设计哲学/美学运动名称\n2. 定义视觉语言：配色、字体、间距、动效\n3. 实现为 HTML+CSS+JS\n4. 关注：响应式、可访问性、性能\n5. 产出独立可运行的 HTML 文件",
        gene_type: "pattern",
      },
    ],
    version: 1, usage_count: 0, rating: 4.5,
  },
  {
    name: "Internal Communications 企业内部沟通",
    description: "起草专业的企业内部沟通材料，包括公告、备忘录、变更通知等。确保信息清晰、语调得体。",
    domain: "productivity",
    tags: ["communication", "enterprise", "memo", "announcement", "anthropic-official"],
    genes: [
      {
        title: "内部沟通模板",
        content: "1. 标题：清晰概括主题\n2. 受众：明确目标读者\n3. 背景：为什么发这条信息\n4. 要点：核心信息（3-5条）\n5. 行动项：读者需要做什么\n6. 联系方式：有问题找谁",
        gene_type: "pattern",
      },
    ],
    version: 1, usage_count: 0, rating: 4.2,
  },
  {
    name: "MCP Server Builder",
    description: "快速构建 Model Context Protocol (MCP) 服务器，包含工具定义、资源管理、传输层配置。",
    domain: "ai-llm",
    tags: ["mcp", "model-context-protocol", "server", "tools", "anthropic-official"],
    genes: [
      {
        title: "MCP Server 基础架构",
        content: `import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({ name: "my-server", version: "1.0.0" });
server.tool("tool_name", "description", { param: z.string() },
  async ({ param }) => ({ content: [{ type: "text", text: result }] })
);
const transport = new StdioServerTransport();
await server.connect(transport);`,
        gene_type: "snippet",
      },
      {
        title: "MCP 工具设计原则",
        content: "- 工具命名：动词_名词（search_docs, create_file）\n- 每个工具3-5个参数，不超过10个\n- 使用 zod 做参数验证\n- 返回结构化文本（JSON）便于AI解析\n- 提供清晰的 description 说明何时使用\n- 错误返回结构化消息，非抛异常",
        gene_type: "principle",
      },
      {
        title: "Claude Desktop MCP 配置",
        content: `{
  "mcpServers": {
    "my-server": {
      "command": "node",
      "args": ["path/to/dist/index.js"],
      "env": {}
    }
  }
}`,
        gene_type: "config",
      },
    ],
    version: 1, usage_count: 0, rating: 4.9,
  },
  {
    name: "Skill Creator 技能创建器",
    description: "创建 Agent Skills 规范兼容的自定义技能。包含 SKILL.md 格式、元数据定义、脚本和资源组织。",
    domain: "ai-llm",
    tags: ["skill", "agent-skills", "SKILL.md", "automation", "anthropic-official"],
    genes: [
      {
        title: "SKILL.md 格式规范",
        content: `---
name: my-skill-name
description: 描述技能做什么以及何时使用
license: Apache-2.0
---

# 技能名称

## 概述
[技能的作用说明]

## 使用指南
- 示例用法 1
- 示例用法 2

## 准则
- 准则 1
- 准则 2`,
        gene_type: "config",
      },
      {
        title: "技能目录结构",
        content: "my-skill/\n├── SKILL.md          # 必需：指令和元数据\n├── scripts/          # 可选：可执行脚本\n│   └── process.py\n├── references/       # 可选：参考文档\n│   └── API.md\n└── assets/           # 可选：静态资源\n    └── template.docx",
        gene_type: "pattern",
      },
    ],
    version: 1, usage_count: 0, rating: 4.6,
  },
  {
    name: "Slack GIF Creator",
    description: "创建自定义 Slack 表情/GIF 动画，用于团队沟通和协作。",
    domain: "creative-design",
    tags: ["slack", "gif", "emoji", "animation", "anthropic-official"],
    genes: [
      {
        title: "GIF 创建流程",
        content: "1. 确定表情概念和情感\n2. 设计关键帧\n3. 生成动画帧序列\n4. 导出为 GIF（128x128px，Slack 推荐尺寸）\n5. 优化文件大小（<128KB）",
        gene_type: "pattern",
      },
    ],
    version: 1, usage_count: 0, rating: 4.1,
  },
  {
    name: "Theme Factory 主题工厂",
    description: "创建和管理应用主题系统，包含颜色、字体、间距、圆角等设计令牌。支持明暗模式切换。",
    domain: "web-frontend",
    tags: ["theme", "design-tokens", "dark-mode", "css-variables", "anthropic-official"],
    genes: [
      {
        title: "CSS 变量主题系统",
        content: `:root {
  --color-primary: #6366f1;
  --color-bg: #ffffff;
  --color-text: #1f2937;
  --radius: 8px;
  --space-unit: 4px;
}
[data-theme="dark"] {
  --color-bg: #111827;
  --color-text: #f9fafb;
}`,
        gene_type: "snippet",
      },
      {
        title: "设计令牌层级",
        content: "- Primitive tokens: 原始值(#6366f1, 16px)\n- Semantic tokens: 语义值(--color-primary, --space-md)\n- Component tokens: 组件值(--button-bg, --card-radius)\n按此层级组织可实现主题无缝切换",
        gene_type: "principle",
      },
    ],
    version: 1, usage_count: 0, rating: 4.5,
  },
  {
    name: "Web Artifacts Builder",
    description: "构建独立可运行的 Web 产出物（HTML/CSS/JS），适用于原型、演示、交互组件。",
    domain: "web-frontend",
    tags: ["html", "prototype", "demo", "artifacts", "anthropic-official"],
    genes: [
      {
        title: "单文件 Web 产出物模板",
        content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Artifact</title>
  <style>/* 样式 */</style>
</head>
<body>
  <!-- 内容 -->
  <script>/* 交互逻辑 */</script>
</body>
</html>`,
        gene_type: "snippet",
      },
      {
        title: "构建原则",
        content: "- 单文件自包含，无外部依赖\n- 内联 CSS 和 JS\n- 响应式设计，移动端友好\n- 使用现代 CSS（Grid, Flexbox, Custom Properties）\n- 添加适当的动画和过渡效果\n- 确保可访问性（ARIA 标签、键盘导航）",
        gene_type: "principle",
      },
    ],
    version: 1, usage_count: 0, rating: 4.6,
  },
  {
    name: "WebApp Testing Web 应用测试",
    description: "系统化测试 Web 应用程序，包含功能测试、UI 测试、API 测试、性能测试方法。",
    domain: "testing",
    tags: ["testing", "e2e", "playwright", "cypress", "web-testing", "anthropic-official"],
    genes: [
      {
        title: "Web 测试金字塔",
        content: "- 单元测试(70%): Jest/Vitest，测试独立函数和组件\n- 集成测试(20%): Testing Library，测试组件交互\n- E2E测试(10%): Playwright/Cypress，测试完整用户流程\n关键：自下而上构建，E2E 覆盖关键路径即可",
        gene_type: "principle",
      },
      {
        title: "Playwright E2E 测试模板",
        content: `import { test, expect } from '@playwright/test';
test('user login flow', async ({ page }) => {
  await page.goto('/login');
  await page.fill('[name="email"]', 'test@example.com');
  await page.fill('[name="password"]', 'password');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('/dashboard');
});`,
        gene_type: "snippet",
      },
    ],
    version: 1, usage_count: 0, rating: 4.7,
  },

  // ============================================================
  // mudler/skillserver 架构模式
  // ============================================================
  {
    name: "SkillServer MCP 架构模式",
    description: "基于 mudler/skillserver 的 MCP/REST 技能服务器架构，支持 Git 同步、全文搜索、WebUI 管理。",
    domain: "ai-llm",
    tags: ["skillserver", "mcp", "rest-api", "bleve", "git-sync"],
    genes: [
      {
        title: "双传输架构",
        content: "MCP stdio 用于 AI Agent 集成 + REST API 用于 Web 管理界面\n- MCP Tools: list_skills, read_skill, search_skills, list_skill_resources, read_skill_resource\n- REST: GET/POST/PUT/DELETE /api/skills, /api/skills/:name/resources",
        gene_type: "pattern",
      },
      {
        title: "Git 同步配置",
        content: "SKILLSERVER_GIT_REPOS=\"repo1.git,repo2.git\"\nGit 仓库中的技能自动同步为只读，本地创建的可读写。只需包含 SKILL.md 文件，无需特定目录结构。",
        gene_type: "config",
      },
      {
        title: "Docker 部署模式",
        content: `docker run -p 8080:8080 \\
  -e SKILLSERVER_DIR=/app/skills \\
  -e SKILLSERVER_GIT_REPOS="https://github.com/anthropics/skills.git" \\
  -v $(pwd)/skills:/app/skills \\
  ghcr.io/mudler/skillserver:latest`,
        gene_type: "config",
      },
    ],
    version: 1, usage_count: 0, rating: 4.6,
  },

  // ============================================================
  // K-Dense-AI 渐进式披露架构
  // ============================================================
  {
    name: "Claude Skills MCP 渐进式披露架构",
    description: "K-Dense-AI 的语义搜索技能发现系统，双包架构(前端代理+后端RAG)，支持多源技能加载。",
    domain: "ai-llm",
    tags: ["semantic-search", "progressive-disclosure", "vector-embeddings", "k-dense-ai"],
    genes: [
      {
        title: "双包架构设计",
        content: "Frontend(~15MB): 轻量代理, <5s启动, MCP stdio\nBackend(~250MB): PyTorch + sentence-transformers, 向量搜索, MCP streamable HTTP\n优点: 前端即时响应不超时, 后端后台下载, 支持远程后端",
        gene_type: "pattern",
      },
      {
        title: "3个精简 MCP Tools",
        content: "1. find_helpful_skills: 语义搜索相关技能\n2. read_skill_document: 读取技能文件(脚本/数据/引用)\n3. list_skills: 查看所有已加载技能清单\n渐进式披露: 元数据 → 完整内容 → 文件",
        gene_type: "pattern",
      },
      {
        title: "多源技能加载",
        content: "默认加载:\n- Anthropic 官方 Skills (~15个)\n- K-Dense AI 科学 Skills (~78个)\n- 本地 ~/.claude/skills/\n支持 GitHub 仓库和本地目录两种来源",
        gene_type: "config",
      },
    ],
    version: 1, usage_count: 0, rating: 4.7,
  },

  // ============================================================
  // Agent Skills 规范
  // ============================================================
  {
    name: "Agent Skills 规范 (agentskills.io)",
    description: "Agent Skills 标准规范，定义技能的结构、元数据、脚本、引用和资产的组织方式。",
    domain: "ai-llm",
    tags: ["agent-skills", "specification", "standard", "SKILL.md", "agentskills-io"],
    genes: [
      {
        title: "SKILL.md YAML Frontmatter",
        content: "必填字段:\n- name: 技能名称(小写, 连字符分隔)\n- description: 清晰描述功能和使用时机\n\n可选字段:\n- license: 许可证信息\n- compatibility: 环境要求\n- metadata: 额外元数据\n- allowed-tools: 预批准的工具列表",
        gene_type: "config",
      },
      {
        title: "技能注册方式",
        content: "Claude Code:\n  /plugin marketplace add anthropics/skills\n  /plugin install document-skills@anthropic-agent-skills\n\nClaude.ai: 付费计划自动可用\n\nAPI: 通过 Skills API 上传自定义技能",
        gene_type: "pattern",
      },
    ],
    version: 1, usage_count: 0, rating: 4.5,
  },

  // ============================================================
  // 通用开发技能（从开源社区提取）
  // ============================================================
  {
    name: "TypeScript 严格模式最佳实践",
    description: "TypeScript 严格模式配置和类型安全编程模式，减少运行时错误。",
    domain: "web-frontend",
    tags: ["typescript", "strict-mode", "type-safety", "best-practices"],
    genes: [
      {
        title: "tsconfig 严格配置",
        content: `{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true,
    "exactOptionalPropertyTypes": true
  }
}`,
        gene_type: "config",
      },
      {
        title: "类型安全模式",
        content: "- 用 unknown 代替 any，通过类型守卫窄化\n- 用 as const 创建字面量类型\n- 用 satisfies 检查类型而不丢失推断\n- 用 z.infer<typeof Schema> 从 Zod 推断类型\n- 用 discriminated union 代替可选字段",
        gene_type: "principle",
      },
    ],
    version: 1, usage_count: 0, rating: 4.7,
  },
  {
    name: "Tailwind CSS 实战模式",
    description: "Tailwind CSS 高效开发模式，包含组件模式、响应式策略、性能优化。",
    domain: "web-frontend",
    tags: ["tailwindcss", "css", "utility-first", "responsive"],
    genes: [
      {
        title: "常用组件模式",
        content: "按钮: px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors\n卡片: rounded-xl border bg-white p-6 shadow-sm\n输入: w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500\n布局: min-h-screen flex flex-col\n居中: flex items-center justify-center",
        gene_type: "snippet",
      },
      {
        title: "响应式断点策略",
        content: "Mobile first: 默认样式适用移动端\nsm:640px md:768px lg:1024px xl:1280px 2xl:1536px\n常用模式:\n- 网格: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3\n- 隐藏: hidden md:block\n- 间距: p-4 md:p-6 lg:p-8",
        gene_type: "principle",
      },
    ],
    version: 1, usage_count: 0, rating: 4.6,
  },
  {
    name: "Git 高级工作流",
    description: "Git 高级使用技巧，包含分支策略、交互式 rebase、cherry-pick、bisect 调试。",
    domain: "devops",
    tags: ["git", "branching", "rebase", "workflow", "version-control"],
    genes: [
      {
        title: "分支策略对比",
        content: "Git Flow: main + develop + feature/release/hotfix (适合定期发版)\nGitHub Flow: main + feature branches (适合持续部署)\nTrunk-Based: main + 短生命周期分支 (适合高频交付团队)\n\n推荐：小团队用 GitHub Flow，大团队用 Trunk-Based",
        gene_type: "principle",
      },
      {
        title: "常用命令速查",
        content: "# 交互式 rebase 整理提交\ngit rebase -i HEAD~5\n# 查找引入 bug 的提交\ngit bisect start && git bisect bad && git bisect good <commit>\n# 选择性应用提交\ngit cherry-pick <commit-hash>\n# 暂存工作区\ngit stash push -m 'desc' && git stash pop\n# 查看文件历史\ngit log --follow -p -- path/to/file",
        gene_type: "snippet",
      },
    ],
    version: 1, usage_count: 0, rating: 4.5,
  },
  {
    name: "SaaS 应用开发模板",
    description: "SaaS 应用的核心功能模块设计，包含认证、支付、多租户、邮件通知等常见模式。",
    domain: "backend",
    tags: ["saas", "authentication", "payment", "multi-tenant", "subscription"],
    genes: [
      {
        title: "SaaS 核心模块清单",
        content: "- 认证: OAuth2 + Magic Link + 2FA\n- 授权: RBAC (Admin/Member/Viewer)\n- 多租户: 组织级隔离(shared DB + tenant_id)\n- 订阅: Stripe 集成(plans/pricing/billing)\n- 邮件: 事务邮件 + 营销邮件\n- 审计日志: 谁在什么时候做了什么\n- 设置: 用户偏好 + 组织设置",
        gene_type: "checklist",
      },
      {
        title: "Stripe 订阅集成模式",
        content: "1. 创建 Stripe Customer（注册时）\n2. 创建 Checkout Session（升级时）\n3. Webhook 处理: checkout.session.completed → 激活订阅\n4. Webhook 处理: invoice.payment_failed → 发通知\n5. Customer Portal → 管理订阅/取消\n关键: 用 webhook 作为单一事实来源，非API轮询",
        gene_type: "pattern",
      },
    ],
    version: 1, usage_count: 0, rating: 4.8,
  },
  {
    name: "安全开发检查清单",
    description: "Web 应用安全开发实践，覆盖 OWASP Top 10、认证安全、API 安全、数据保护。",
    domain: "security",
    tags: ["security", "owasp", "authentication", "xss", "sql-injection"],
    genes: [
      {
        title: "OWASP Top 10 防御",
        content: "A01 访问控制: 每个端点检查权限，默认拒绝\nA02 加密失败: TLS 1.2+, 密码用 bcrypt/argon2\nA03 注入: 参数化查询, 输入验证(zod/joi)\nA04 不安全设计: 威胁建模, 最小权限\nA05 安全配置: 禁用调试, 更新依赖\nA06 脆弱组件: npm audit, dependabot\nA07 认证失败: MFA, 会话管理, 限流\nA08 数据完整性: SRI, 签名验证\nA09 日志监控: 结构化日志, 异常告警\nA10 SSRF: 白名单URL, 禁内网访问",
        gene_type: "checklist",
      },
      {
        title: "API 安全规范",
        content: "- 认证: Bearer Token (JWT) 或 API Key\n- 限流: 按 IP/用户/API Key，429 响应\n- 输入验证: 请求体大小限制，schema 验证\n- CORS: 仅允许已知源\n- 日志: 记录所有认证失败和敏感操作\n- 版本: URL 路径 /v1/，或 Header 版本",
        gene_type: "principle",
      },
    ],
    version: 1, usage_count: 0, rating: 4.9,
  },
  {
    name: "Monorepo 管理模式",
    description: "使用 Turborepo/Nx 管理 Monorepo 项目的最佳实践，包含工作空间配置、缓存策略、CI/CD优化。",
    domain: "devops",
    tags: ["monorepo", "turborepo", "nx", "pnpm-workspaces"],
    genes: [
      {
        title: "Turborepo 配置",
        content: `// turbo.json
{
  "pipeline": {
    "build": { "dependsOn": ["^build"], "outputs": ["dist/**"] },
    "test": { "dependsOn": ["build"] },
    "lint": {},
    "dev": { "cache": false, "persistent": true }
  }
}`,
        gene_type: "config",
      },
      {
        title: "Monorepo 目录结构",
        content: "project/\n├── apps/\n│   ├── web/          # Next.js 前端\n│   ├── api/          # Node.js 后端\n│   └── mobile/       # React Native\n├── packages/\n│   ├── ui/           # 共享 UI 组件\n│   ├── config/       # 共享配置\n│   ├── types/        # 共享类型\n│   └── utils/        # 共享工具函数\n├── turbo.json\n└── pnpm-workspace.yaml",
        gene_type: "pattern",
      },
    ],
    version: 1, usage_count: 0, rating: 4.5,
  },
];

// 执行导入
let count = 0;
let skipped = 0;
for (const c of githubSkills) {
  try {
    contributeCapsule(c);
    count++;
    console.log(`  ✓ ${c.name}`);
  } catch (e: any) {
    if (e.message?.includes("UNIQUE")) {
      skipped++;
    } else {
      console.error(`  ✗ ${c.name}: ${e.message}`);
    }
  }
}
console.log(`\nImported ${count} capsules from GitHub (${skipped} skipped as duplicates).`);
console.log(`Total capsules in database: ${count + skipped + 12}`); // 12 from original seed
