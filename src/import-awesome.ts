#!/usr/bin/env node
/**
 * 导入 ComposioHQ/awesome-claude-skills 中的所有 skills
 * 来源: https://github.com/ComposioHQ/awesome-claude-skills
 */
import { getDb, contributeCapsule } from "./db.js";

getDb();

const capsules = [
  // ============================================================
  // Document Processing
  // ============================================================
  {
    name: "Markdown to EPUB 转换器",
    description: "将 Markdown 文档和聊天摘要转换为专业 EPUB 电子书文件。支持目录、章节、元数据生成。",
    domain: "productivity",
    tags: ["epub", "ebook", "markdown", "converter", "composio-awesome"],
    genes: [
      {
        title: "EPUB 生成流程",
        content: "1. 解析 Markdown 源文件（支持 GFM 扩展语法）\n2. 生成目录结构（TOC）\n3. 转换为 XHTML 章节文件\n4. 打包为 EPUB 3.0 格式\n5. 添加封面、元数据、CSS 样式",
        gene_type: "pattern" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.3,
  },

  // ============================================================
  // Development & Code Tools
  // ============================================================
  {
    name: "Changelog Generator 变更日志生成器",
    description: "从 git commits 自动生成用户可读的变更日志。分析提交历史，将技术性提交转为用户友好的发布说明。",
    domain: "devops",
    tags: ["changelog", "git", "release-notes", "automation", "composio-awesome"],
    genes: [
      {
        title: "变更日志生成流程",
        content: "1. 扫描 Git 历史: 分析指定时间段或版本间的提交\n2. 分类变更: Features / Improvements / Bug Fixes / Breaking Changes / Security\n3. 技术→用户翻译: 将开发者提交信息转为客户可读语言\n4. 过滤噪音: 排除重构、测试等内部提交\n5. 格式化输出: 生成结构化的发布说明",
        gene_type: "pattern" as const,
      },
      {
        title: "提交分类规则",
        content: "- feat/feature → ✨ New Features\n- fix/bugfix → 🐛 Bug Fixes\n- perf → ⚡ Performance\n- BREAKING → 💥 Breaking Changes\n- security/vuln → 🔒 Security\n- docs → 📚 Documentation\n- 排除: chore, ci, test, refactor, style",
        gene_type: "config" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.5,
  },
  {
    name: "D3.js 数据可视化",
    description: "使用 D3.js 创建交互式数据可视化图表，包含柱状图、折线图、散点图、力导向图等。",
    domain: "web-frontend",
    tags: ["d3js", "visualization", "charts", "data-viz", "composio-awesome"],
    genes: [
      {
        title: "D3.js 基础模板",
        content: `const svg = d3.select("#chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", \`translate(\${margin.left},\${margin.top})\`);

const x = d3.scaleBand().range([0, width]).padding(0.1);
const y = d3.scaleLinear().range([height, 0]);
x.domain(data.map(d => d.label));
y.domain([0, d3.max(data, d => d.value)]);`,
        gene_type: "snippet" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.4,
  },
  {
    name: "AWS CDK 开发最佳实践",
    description: "AWS 开发：CDK 基础设施即代码、成本优化、Serverless 和事件驱动架构模式。",
    domain: "devops",
    tags: ["aws", "cdk", "serverless", "lambda", "infrastructure", "composio-awesome"],
    genes: [
      {
        title: "CDK 项目结构",
        content: "infra/\n├── bin/app.ts           # CDK App 入口\n├── lib/\n│   ├── stacks/          # Stack 定义\n│   ├── constructs/      # 可复用 Construct\n│   └── config/          # 环境配置\n├── cdk.json\n└── tsconfig.json",
        gene_type: "pattern" as const,
      },
      {
        title: "Lambda 最佳实践",
        content: "- 单一职责：每个 Lambda 处理一个事件类型\n- 冷启动优化：使用 Provisioned Concurrency 或 SnapStart\n- 依赖精简：只打包需要的模块\n- 环境变量：配置通过 SSM Parameter Store\n- 超时设置：API Gateway 29s / 异步 900s\n- 内存：最少 128MB，CPU 随内存线性增长",
        gene_type: "principle" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.6,
  },
  {
    name: "FFUF Web Fuzzing 模糊测试",
    description: "集成 ffuf Web 模糊测试工具，用于目录扫描、参数发现、虚拟主机枚举等安全测试任务。",
    domain: "security",
    tags: ["ffuf", "fuzzing", "security-testing", "pentesting", "composio-awesome"],
    genes: [
      {
        title: "ffuf 常用命令",
        content: "# 目录扫描\nffuf -u https://target.com/FUZZ -w /usr/share/wordlists/dirb/common.txt\n# 参数发现\nffuf -u https://target.com/api?FUZZ=value -w params.txt\n# 虚拟主机枚举\nffuf -u https://target.com -H 'Host: FUZZ.target.com' -w subdomains.txt\n# 过滤响应\nffuf -u URL/FUZZ -w list.txt -fc 404 -fs 0",
        gene_type: "snippet" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.3,
  },
  {
    name: "iOS Simulator 测试技能",
    description: "通过 Claude Code 控制 iOS 模拟器进行应用测试和调试，包括截图、交互、日志查看。",
    domain: "testing",
    tags: ["ios", "simulator", "mobile-testing", "xcode", "composio-awesome"],
    genes: [
      {
        title: "模拟器控制命令",
        content: "# 列出可用模拟器\nxcrun simctl list devices\n# 启动模拟器\nxcrun simctl boot 'iPhone 15 Pro'\n# 截图\nxcrun simctl io booted screenshot screenshot.png\n# 安装应用\nxcrun simctl install booted app.app\n# 查看日志\nxcrun simctl spawn booted log stream",
        gene_type: "snippet" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.2,
  },
  {
    name: "LangSmith 调试技能",
    description: "从 LangSmith Studio 获取 LangChain/LangGraph Agent 执行追踪，分析工具调用、内存操作和性能指标。",
    domain: "ai-llm",
    tags: ["langsmith", "langchain", "langgraph", "debugging", "observability", "composio-awesome"],
    genes: [
      {
        title: "LangSmith 调试流程",
        content: "1. 安装: pip install langsmith-fetch\n2. 配置: LANGSMITH_API_KEY + LANGSMITH_PROJECT\n3. 获取最近追踪: langsmith-fetch traces --limit 5\n4. 分析特定运行: langsmith-fetch run <run-id> --details\n5. 检查错误: langsmith-fetch errors --since 1h\n6. 工具调用分析: 检查输入/输出/延迟",
        gene_type: "pattern" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.5,
  },
  {
    name: "Prompt Engineering 系统化方法论",
    description: "系统化的提示工程技巧和模式，包含 Anthropic 最佳实践和 Agent 说服原则。",
    domain: "ai-llm",
    tags: ["prompt-engineering", "llm", "anthropic", "best-practices", "composio-awesome"],
    genes: [
      {
        title: "Anthropic 提示最佳实践",
        content: "1. 使用 XML 标签结构化输入: <context>, <instructions>, <examples>\n2. 角色设定要具体: '你是一名有10年经验的金融分析师'\n3. 用 <thinking> 标签引导推理过程\n4. Chain-of-thought: 复杂任务要求分步推理\n5. 提供正面和反面示例\n6. 输出格式明确: JSON Schema 或 Markdown 模板",
        gene_type: "principle" as const,
      },
      {
        title: "Agent 提示模式",
        content: "- ReAct 模式: Thought → Action → Observation 循环\n- 工具选择提示: 明确列出可用工具及其适用场景\n- 错误恢复: 指导 Agent 在工具调用失败时的回退策略\n- 记忆管理: 何时存储/检索/遗忘信息",
        gene_type: "pattern" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.8,
  },
  {
    name: "Clean Architecture 软件架构模式",
    description: "实现 Clean Architecture、SOLID 原则和全面的软件设计最佳实践。包含 DDD 领域驱动设计。",
    domain: "backend",
    tags: ["clean-architecture", "solid", "ddd", "design-patterns", "composio-awesome"],
    genes: [
      {
        title: "Clean Architecture 分层",
        content: "由外向内依赖:\n- Frameworks & Drivers (外层): Web框架, DB, UI\n- Interface Adapters: Controllers, Presenters, Gateways\n- Application Business Rules: Use Cases\n- Enterprise Business Rules (核心): Entities\n\n依赖规则: 内层不知道外层的存在",
        gene_type: "pattern" as const,
      },
      {
        title: "SOLID 原则速查",
        content: "S: 单一职责 - 一个类只有一个变化的原因\nO: 开闭原则 - 对扩展开放，对修改关闭\nL: 里氏替换 - 子类可替换父类\nI: 接口隔离 - 不强迫依赖不需要的接口\nD: 依赖倒置 - 依赖抽象而非具体实现",
        gene_type: "principle" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.7,
  },
  {
    name: "Subagent Driven Development",
    description: "分派独立子 Agent 执行任务，每次迭代间设代码审查检查点，实现快速且受控的开发。",
    domain: "ai-llm",
    tags: ["subagent", "multi-agent", "code-review", "development", "composio-awesome"],
    genes: [
      {
        title: "子 Agent 开发模式",
        content: "1. 任务分解: 将功能拆分为独立可测试的子任务\n2. 子 Agent 分派: 每个子任务分配给专门的 Agent\n3. 并行执行: 无依赖的任务并行处理\n4. 代码审查检查点: 每次迭代后审查产出物\n5. 集成验证: 合并所有子 Agent 的输出并测试",
        gene_type: "pattern" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.4,
  },
  {
    name: "Test-Driven Development (TDD) 实践",
    description: "测试驱动开发方法论：在编写实现代码之前先写测试，Red-Green-Refactor 循环。",
    domain: "testing",
    tags: ["tdd", "testing", "red-green-refactor", "best-practices", "composio-awesome"],
    genes: [
      {
        title: "TDD Red-Green-Refactor 循环",
        content: "1. 🔴 Red: 写一个失败的测试（明确期望行为）\n2. 🟢 Green: 写最少代码使测试通过\n3. 🔵 Refactor: 重构代码（测试保持通过）\n4. 重复: 下一个功能点\n\n规则:\n- 不写未被失败测试驱动的生产代码\n- 只写刚好让当前测试失败的测试代码\n- 只写刚好让当前测试通过的生产代码",
        gene_type: "principle" as const,
      },
      {
        title: "测试金字塔与覆盖策略",
        content: "- 单元测试(70%): 快速、隔离、覆盖边界条件\n- 集成测试(20%): 模块间交互、数据库、API\n- E2E测试(10%): 关键用户路径\n\n命名: should_[expected]_when_[condition]\n结构: Arrange → Act → Assert (AAA)",
        gene_type: "pattern" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.7,
  },
  {
    name: "Git Worktrees 并行开发",
    description: "使用 Git Worktrees 创建隔离的工作目录，支持同时处理多个分支而无需 stash 或切换分支。",
    domain: "devops",
    tags: ["git", "worktree", "parallel-development", "branching", "composio-awesome"],
    genes: [
      {
        title: "Worktree 核心操作",
        content: "# 创建 worktree\ngit worktree add ../feature-branch feature-branch\n# 列出所有 worktrees\ngit worktree list\n# 删除 worktree\ngit worktree remove ../feature-branch\n# 清理过期引用\ngit worktree prune\n\n优点: 无需 stash，独立 node_modules，可并行 CI",
        gene_type: "snippet" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.4,
  },
  {
    name: "Playwright 浏览器自动化测试",
    description: "使用 Playwright 进行 Web 应用端到端测试，包含页面操作、断言、截图和网络拦截。",
    domain: "testing",
    tags: ["playwright", "e2e-testing", "browser-automation", "web-testing", "composio-awesome"],
    genes: [
      {
        title: "Playwright 测试模式",
        content: `import { test, expect } from '@playwright/test';

test.describe('用户登录流程', () => {
  test('成功登录', async ({ page }) => {
    await page.goto('/login');
    await page.getByLabel('邮箱').fill('test@example.com');
    await page.getByLabel('密码').fill('password');
    await page.getByRole('button', { name: '登录' }).click();
    await expect(page).toHaveURL('/dashboard');
    await expect(page.getByText('欢迎')).toBeVisible();
  });

  test('登录失败显示错误', async ({ page }) => {
    await page.goto('/login');
    await page.getByLabel('密码').fill('wrong');
    await page.getByRole('button', { name: '登录' }).click();
    await expect(page.getByText('密码错误')).toBeVisible();
  });
});`,
        gene_type: "snippet" as const,
      },
      {
        title: "Playwright 配置最佳实践",
        content: "- 使用 Page Object Model 组织测试代码\n- 用 test.describe 分组相关测试\n- 用 getByRole/getByLabel 替代 CSS 选择器\n- 开启 trace 用于调试失败测试\n- CI 中使用 --reporter=html 生成报告\n- 合理设置 timeout（默认30s，调试时加大）",
        gene_type: "principle" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.8,
  },

  // ============================================================
  // Data & Analysis
  // ============================================================
  {
    name: "CSV 数据分析器",
    description: "自动分析 CSV 文件，生成包含数据概览、统计摘要、可视化和异常检测的综合报告。",
    domain: "data-analysis",
    tags: ["csv", "data-analysis", "statistics", "visualization", "composio-awesome"],
    genes: [
      {
        title: "CSV 分析流程",
        content: "1. 数据概览: 行数、列数、数据类型、缺失值\n2. 统计摘要: mean/median/std/min/max/quartiles\n3. 分布分析: 直方图、箱线图、密度图\n4. 相关性: 相关系数矩阵、热力图\n5. 异常检测: IQR/Z-score 方法识别异常值\n6. 数据质量: 完整性、一致性、准确性评分",
        gene_type: "pattern" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.4,
  },
  {
    name: "PostgreSQL 安全查询技能",
    description: "对 PostgreSQL 数据库执行安全的只读 SQL 查询，支持多连接和纵深防御安全策略。",
    domain: "database",
    tags: ["postgresql", "sql", "read-only", "security", "composio-awesome"],
    genes: [
      {
        title: "安全查询原则",
        content: "- 仅执行 SELECT 查询（禁止 INSERT/UPDATE/DELETE）\n- 使用参数化查询防注入\n- 设置查询超时（statement_timeout）\n- 限制返回行数（LIMIT）\n- 使用只读事务（SET TRANSACTION READ ONLY）\n- 最小权限用户连接\n- 禁止系统表直接访问",
        gene_type: "principle" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.5,
  },
  {
    name: "Root Cause Tracing 根因追踪",
    description: "当错误发生在执行深层时，追踪回溯找到原始触发点的系统化方法。",
    domain: "backend",
    tags: ["debugging", "root-cause", "error-tracing", "troubleshooting", "composio-awesome"],
    genes: [
      {
        title: "根因追踪方法",
        content: "1. 固定错误现场: 记录完整错误栈、环境状态\n2. 向上追溯: 从错误点沿调用链向上\n3. 5 Whys 分析: 连续问'为什么'直到根因\n4. 时间线重建: 按时间排列相关事件\n5. 变量检查: 记录关键变量在各阶段的值\n6. 隔离验证: 在隔离环境中重现问题",
        gene_type: "pattern" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.5,
  },

  // ============================================================
  // Business & Marketing
  // ============================================================
  {
    name: "竞争对手广告分析",
    description: "从 Facebook/LinkedIn 广告库提取并分析竞争对手的广告策略，理解有效的消息传递和创意方法。",
    domain: "marketing",
    tags: ["advertising", "competitive-analysis", "facebook-ads", "marketing", "composio-awesome"],
    genes: [
      {
        title: "广告分析框架",
        content: "1. 提取广告: 从 Facebook Ad Library / LinkedIn 获取\n2. 截图存档: 保存所有广告的视觉副本\n3. 消息分析: 识别痛点、用例、价值主张\n4. 分类整理: 按主题、受众、格式分组\n5. 模式识别: 找出常见成功策略\n6. 洞察报告: 解释为什么某些广告效果好",
        gene_type: "pattern" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.3,
  },
  {
    name: "域名头脑风暴器",
    description: "为项目生成创意域名方案并检查多 TLD 可用性（.com, .io, .dev, .ai 等）。",
    domain: "marketing",
    tags: ["domain-name", "branding", "naming", "tld", "composio-awesome"],
    genes: [
      {
        title: "域名生成策略",
        content: "1. 理解项目: 分析产品定位和目标用户\n2. 创意生成: 组合词、缩写、谐音、隐喻\n3. 可用性检查: whois 查询 .com/.io/.dev/.ai/.app\n4. 品牌评估: 是否易记、易拼、无歧义\n5. 替代方案: 如果首选不可用，提供变体\n6. TLD 建议: 技术产品用 .dev/.io，AI 用 .ai",
        gene_type: "pattern" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.2,
  },
  {
    name: "Lead Research 潜客研究助手",
    description: "通过分析产品、搜索目标企业、提供可执行的外联策略来识别和评估高质量潜在客户。",
    domain: "marketing",
    tags: ["sales", "lead-generation", "business-development", "outreach", "composio-awesome"],
    genes: [
      {
        title: "潜客研究流程",
        content: "1. 理解业务: 产品/服务、价值主张、目标市场\n2. ICP 定义: 行业、规模、地域、技术栈、成长阶段\n3. 企业搜索: 按 ICP 筛选匹配企业\n4. 优先级排序: 基于匹配度评分排名\n5. 联系策略: 个性化消息、决策者识别\n6. 数据丰富: 收集关键人物和公司背景信息",
        gene_type: "pattern" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.3,
  },

  // ============================================================
  // Communication & Writing
  // ============================================================
  {
    name: "Twitter/X 算法优化器",
    description: "基于 Twitter 开源算法洞察，分析和优化推文以获得最大覆盖和互动率。",
    domain: "marketing",
    tags: ["twitter", "algorithm", "social-media", "engagement", "composio-awesome"],
    genes: [
      {
        title: "Twitter 算法核心机制",
        content: "Real-graph: 预测用户间互动概率\nSimClusters: 社区发现和兴趣聚类\nTwHIN: 图神经网络推荐\n\n关键信号权重:\n- 点赞: 30x\n- 转推: 20x\n- 回复: 1x\n- 停留时间: 高权重\n- 带图片/视频: +2x\n- 外链: -1x（降权）",
        gene_type: "principle" as const,
      },
      {
        title: "推文优化清单",
        content: "- 发布时间: 目标受众活跃时段\n- 开头有力: 前14个字决定停留时间\n- 引发互动: 以问题或观点结尾\n- 避免外链: 用评论区放链接\n- 使用线程: 长内容用 Thread 形式\n- 图片/视频: 显著提升权重\n- 标签: 1-2个相关标签，不堆叠",
        gene_type: "checklist" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.5,
  },
  {
    name: "Meeting Insights 会议洞察分析",
    description: "分析会议记录，发现行为模式：冲突回避、发言比例、填充词使用、领导风格等。",
    domain: "productivity",
    tags: ["meeting", "communication", "analysis", "leadership", "composio-awesome"],
    genes: [
      {
        title: "会议分析维度",
        content: "1. 模式识别: 冲突回避、间接沟通、轮流发言\n2. 沟通分析: 清晰度、填充词、语气趋势\n3. 可执行反馈: 带时间戳的具体示例 + 改进建议\n4. 趋势追踪: 跨多次会议的模式对比\n\n指标: 发言占比、提问vs陈述比、主动倾听指标",
        gene_type: "pattern" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.3,
  },

  // ============================================================
  // Creative & Media
  // ============================================================
  {
    name: "Image Enhancer 图片增强",
    description: "提升图片和截图质量：分辨率增强、锐化、去噪、压缩伪影修复。支持 Web/打印/社交媒体场景。",
    domain: "creative-design",
    tags: ["image-processing", "enhancement", "upscale", "sharpening", "composio-awesome"],
    genes: [
      {
        title: "图片增强流程",
        content: "1. 质量分析: 检查分辨率、锐度、压缩伪影\n2. 分辨率增强: 智能放大（Real-ESRGAN / waifu2x）\n3. 锐化处理: 增强边缘和细节（Unsharp Mask）\n4. 去噪: 清除压缩伪影和噪点\n5. 场景优化: 按用途调整（Web/打印/社交媒体）\n\n工具: ImageMagick, PIL/Pillow, sharp(Node.js)",
        gene_type: "pattern" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.3,
  },
  {
    name: "Video Downloader 视频下载器",
    description: "从 YouTube 等平台下载视频，支持画质选择、格式转换、音频提取。使用 yt-dlp 引擎。",
    domain: "creative-design",
    tags: ["youtube", "video-download", "yt-dlp", "media", "composio-awesome"],
    genes: [
      {
        title: "yt-dlp 常用命令",
        content: "# 最佳画质下载\nyt-dlp -f 'bestvideo+bestaudio' URL -o '%(title)s.%(ext)s'\n# 指定画质\nyt-dlp -f 'bestvideo[height<=720]+bestaudio' URL\n# 仅音频(MP3)\nyt-dlp -x --audio-format mp3 URL\n# 下载字幕\nyt-dlp --write-subs --sub-lang zh URL\n# 列出可用格式\nyt-dlp -F URL",
        gene_type: "snippet" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.4,
  },

  // ============================================================
  // Productivity & Organization
  // ============================================================
  {
    name: "File Organizer 智能文件整理",
    description: "智���整理文件和文件夹：理解上下文、查找重复、建议更好的组织结构、自动化清理任务。",
    domain: "productivity",
    tags: ["file-management", "organization", "cleanup", "deduplication", "composio-awesome"],
    genes: [
      {
        title: "文件整理策略",
        content: "1. 扫描分析: 递归遍历，分析文件类型和大小分布\n2. 查重: MD5/SHA256 哈希比对找重复文件\n3. 分类规则:\n   - 按类型: Documents/Images/Videos/Archives/Code\n   - 按项目: 识别项目上下文聚合\n   - 按时间: YYYY/MM 归档\n4. 命名规范: kebab-case，含日期前缀\n5. 清理建议: 临时文件、空目录、过期下载",
        gene_type: "pattern" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.4,
  },
  {
    name: "Invoice Organizer 发票整理器",
    description: "自动整理发票和收据：提取信息、统一命名、按类别归档，为税务准备就绪。",
    domain: "productivity",
    tags: ["invoice", "receipt", "tax-preparation", "bookkeeping", "composio-awesome"],
    genes: [
      {
        title: "发票整理规范",
        content: "提取字段: 供应商、发票号、日期、金额、产品/服务、付款方式\n\n命名格式: YYYY-MM-DD 供应商 - Invoice - 产品.pdf\n示例: 2024-03-15 Adobe - Invoice - Creative Cloud.pdf\n\n分类方式:\n- 按供应商\n- 按费用类别(软件/办公/差旅)\n- 按时间(年/季度/月)\n- 按税务类别(可抵扣/个人)",
        gene_type: "config" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.3,
  },
  {
    name: "Tailored Resume 定制简历生成器",
    description: "分析职位描述，生成针对性简历：突出相关经验和技能，优化 ATS 关键词匹配。",
    domain: "productivity",
    tags: ["resume", "job-application", "ats", "career", "composio-awesome"],
    genes: [
      {
        title: "简历定制流程",
        content: "1. 分析 JD: 提取关键需求、技能、资格\n2. 优先级排序: 判断雇主最重视什么\n3. 内容定制: 重组经历，突出相关成就\n4. ATS 优化: 自然融入关键词\n5. 格式化: 清晰专业的排版\n6. 差距分析: 标识需要补充的领域",
        gene_type: "pattern" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.5,
  },
  {
    name: "Raffle Winner 随机抽奖器",
    description: "从列表/电子表格/Google Sheets 中使用密码学安全随机数选取中奖者，确保公平透明。",
    domain: "productivity",
    tags: ["raffle", "random", "giveaway", "contest", "composio-awesome"],
    genes: [
      {
        title: "安全抽奖实现",
        content: `import { randomInt } from 'crypto';
function pickWinners(entries: string[], count: number): string[] {
  const winners: string[] = [];
  const pool = [...entries];
  for (let i = 0; i < count && pool.length > 0; i++) {
    const idx = randomInt(pool.length);
    winners.push(pool.splice(idx, 1)[0]);
  }
  return winners;
}
// 使用密码学安全随机数，确保无偏抽取`,
        gene_type: "snippet" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.2,
  },
  {
    name: "Kaizen 持续改进方法论",
    description: "应用日本改善(Kaizen)哲学和精益方法论进行持续改进分析，多角度分析方法。",
    domain: "productivity",
    tags: ["kaizen", "lean", "continuous-improvement", "methodology", "composio-awesome"],
    genes: [
      {
        title: "Kaizen 分析框架",
        content: "PDCA 循环: Plan → Do → Check → Act\n5S 方法: 整理(Sort) → 整顿(Set) → 清扫(Shine) → 标准化(Standardize) → 素养(Sustain)\n\n分析工具:\n- 5 Whys: 追根溯源\n- 鱼骨图: 因果分析\n- 帕累托图: 80/20 法则\n- 价值流图: 识别浪费\n- Gemba Walk: 到现场观察",
        gene_type: "pattern" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.3,
  },

  // ============================================================
  // Security & Forensics
  // ============================================================
  {
    name: "计算机取证分析",
    description: "数字取证调查技术：证据收集、文件恢复、元数据分析、时间线重建。",
    domain: "security",
    tags: ["forensics", "digital-investigation", "evidence", "metadata", "composio-awesome"],
    genes: [
      {
        title: "数字取证流程",
        content: "1. 证据保全: 创建磁盘镜像(dd/FTK Imager)，计算哈希\n2. 文件系统分析: 恢复已删除文件、分析 NTFS/ext4 日志\n3. 元数据提取: EXIF(图片)、文档属性、文件系统时间戳\n4. 时间线重建: 按时间排列所有事件\n5. 日志分析: 系统日志、应用日志、网络日志\n6. 报告生成: 证据链、发现、结论",
        gene_type: "pattern" as const,
      },
      {
        title: "安全文件删除方法",
        content: "- shred -vfz -n 5 file    # Linux 5次覆写\n- srm -sz file             # macOS 安全删除\n- sdelete -p 3 file        # Windows Sysinternals\n- DBAN: 全盘擦除（引导盘）\n\n注意: SSD 因 wear leveling 需使用 ATA Secure Erase",
        gene_type: "snippet" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.4,
  },
  {
    name: "Sigma Rules 威胁检测",
    description: "使用 Sigma 检测规则进行威胁狩猎和安全事件分析。跨 SIEM 平台通用检测语言。",
    domain: "security",
    tags: ["sigma", "threat-hunting", "siem", "detection", "composio-awesome"],
    genes: [
      {
        title: "Sigma 规则格式",
        content: `title: 可疑 PowerShell 下载
status: experimental
logsource:
  category: process_creation
  product: windows
detection:
  selection:
    CommandLine|contains:
      - 'Invoke-WebRequest'
      - 'wget'
      - 'curl'
    CommandLine|contains:
      - '.exe'
      - '.dll'
  condition: selection
level: medium`,
        gene_type: "config" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.5,
  },

  // ============================================================
  // SaaS Automation (精选核心平台)
  // ============================================================
  {
    name: "Slack 自动化技能",
    description: "Slack 自动化操作：发送消息、搜索、管理频道、设置提醒、处理线程回复和反应。",
    domain: "automation",
    tags: ["slack", "messaging", "automation", "composio", "composio-awesome"],
    genes: [
      {
        title: "Slack API 常用操作",
        content: "- 发消息: chat.postMessage(channel, text, blocks)\n- 回复线程: chat.postMessage(channel, text, thread_ts)\n- 搜索: search.messages(query, sort, count)\n- 添加反应: reactions.add(channel, timestamp, name)\n- 定时发送: chat.scheduleMessage(channel, text, post_at)\n- 频道管理: conversations.create/invite/archive",
        gene_type: "pattern" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.5,
  },
  {
    name: "GitHub 自动化技能",
    description: "GitHub 自动化：Issues、PR、代码搜索、Actions 管理、Branch 保护等全面操作。",
    domain: "automation",
    tags: ["github", "issues", "pull-requests", "actions", "composio-awesome"],
    genes: [
      {
        title: "GitHub API 常用操作",
        content: "- Issues: 创建/更新/搜索/标签/分配\n- PR: 创建/审查/合并/请求变更\n- Actions: 触发工作流/查看运行/下载产物\n- Code Search: 按代码/提交/Issue 搜索\n- Repos: Fork/创建/设置 Branch 保护\n- Releases: 创建/上传资产/生成说明",
        gene_type: "pattern" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.6,
  },
  {
    name: "Notion 自动化技能",
    description: "Notion 自动化：页面、数据库、块操作，搜索内容，管理评论和权限。",
    domain: "automation",
    tags: ["notion", "database", "pages", "knowledge-base", "composio-awesome"],
    genes: [
      {
        title: "Notion API 操作",
        content: "- Pages: 创建/更新/归档/恢复\n- Databases: 创建/查询/过滤/排序\n- Blocks: 添加/更新/删除内容块\n- Search: 按标题和内容搜索\n- Comments: 添加/查看评论\n- Users: 列出工作区成员",
        gene_type: "pattern" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.5,
  },
  {
    name: "Jira 自动化技能",
    description: "Jira 自动化：Issues 创建/搜索、Sprint 管理、Board 操作、JQL 查询。",
    domain: "automation",
    tags: ["jira", "project-management", "sprint", "agile", "composio-awesome"],
    genes: [
      {
        title: "JQL 查询速查",
        content: "# 我的未完成任务\nassignee = currentUser() AND status != Done\n# 当前 Sprint\nsprint in openSprints()\n# 高优先级 Bug\ntype = Bug AND priority >= High AND status != Closed\n# 本周创建\ncreated >= startOfWeek()\n# 过期任务\nduedate < now() AND status != Done\n# 组合查询\nproject = PROJ AND labels in (frontend) ORDER BY priority DESC",
        gene_type: "snippet" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.5,
  },
  {
    name: "Stripe 支付自动化",
    description: "Stripe 支付自动化：创建客户、处理收费、管理订阅、退款、产品和价格管理。",
    domain: "automation",
    tags: ["stripe", "payment", "subscription", "billing", "composio-awesome"],
    genes: [
      {
        title: "Stripe 核心操作",
        content: "- Customers: 创建/更新/搜索客户\n- Charges: 创建收费/退款\n- Subscriptions: 创建/更新/取消订阅\n- Products & Prices: 管理产品目录\n- Invoices: 创建/发送/作废发票\n- Webhooks: 监听 checkout.session.completed, invoice.paid 等事件",
        gene_type: "pattern" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.7,
  },
  {
    name: "n8n 工作流自动化",
    description: "使用 n8n 创建和管理自动化工作流，支持 400+ 集成和自定义 JavaScript/Python 节点。",
    domain: "automation",
    tags: ["n8n", "workflow", "automation", "integration", "composio-awesome"],
    genes: [
      {
        title: "n8n 工作流模式",
        content: "常见模式:\n- Webhook → 处理 → 通知: 接收外部事件并响应\n- 定时 → 采集 → 存储: 周期性数据采集\n- 触发 → 分支 → 多目标: 条件路由到不同动作\n\n节点类型: Trigger / Action / Transform / Logic\n执行模式: Manual / Webhook / Schedule / Event",
        gene_type: "pattern" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.4,
  },

  // ============================================================
  // Collaboration
  // ============================================================
  {
    name: "Brainstorming 结构化头脑风暴",
    description: "通过结构化提问和替代方案探索，将粗糙想法转化为完整设计方案。",
    domain: "productivity",
    tags: ["brainstorming", "ideation", "design-thinking", "problem-solving", "composio-awesome"],
    genes: [
      {
        title: "结构化头脑风暴流程",
        content: "1. 发散阶段: 不判断，自由联想，数量优先\n2. 约束添加: 引入实际限制条件\n3. 收敛阶段: 按标准筛选和评估\n4. 深化阶段: 选定方向深入探索\n5. 替代方案: 至少准备3个不同路径\n6. 决策矩阵: 按影响/成本/风险评估\n\n技巧: SCAMPER, 六顶帽子, 逆向思维",
        gene_type: "pattern" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.3,
  },
  {
    name: "Skill Seekers 文档转技能",
    description: "将任何文档网站自动转换为 Claude AI 技能，支持网页抓取、内容提取和 SKILL.md 生成。",
    domain: "ai-llm",
    tags: ["skill-generator", "documentation", "web-scraping", "automation", "composio-awesome"],
    genes: [
      {
        title: "文档转技能流程",
        content: "1. 输入: 文档网站 URL\n2. 抓取: 递归爬取文档页面\n3. 提取: 解析 HTML 提取核心内容\n4. 结构化: 将内容组织为技能章节\n5. 生成: 创建 SKILL.md 包含 YAML 元数据\n6. 验证: 检查格式和完整性",
        gene_type: "pattern" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.4,
  },
  {
    name: "PICT 组合测试设计",
    description: "使用 PICT (Pairwise Independent Combinatorial Testing) 设计测试用例，生成覆盖率最优的测试套件。",
    domain: "testing",
    tags: ["pict", "pairwise-testing", "combinatorial", "test-design", "composio-awesome"],
    genes: [
      {
        title: "PICT 模型示例",
        content: "# 模型文件 model.txt\nOS:      Windows, Linux, macOS\nBrowser: Chrome, Firefox, Safari, Edge\nDB:      MySQL, PostgreSQL, SQLite\nMode:    Light, Dark\n\n# 约束条件\nIF [OS] = \"macOS\" THEN [Browser] <> \"Edge\";\nIF [DB] = \"SQLite\" THEN [Mode] = \"Light\";\n\n# 运行: pict model.txt > tests.csv\n# 结果: 覆盖所有参数对的最小测试集",
        gene_type: "snippet" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.2,
  },
  {
    name: "Move 语言代码质量",
    description: "分析 Move 语言代码包是否符合 Move Book 代码质量清单 (Move 2024 Edition)。",
    domain: "web3",
    tags: ["move", "blockchain", "code-quality", "smart-contract", "composio-awesome"],
    genes: [
      {
        title: "Move 代码质量清单",
        content: "- 命名规范: snake_case 函数/变量, PascalCase 类型\n- 可见性: 最小权限原则, public 仅在必要时\n- 资源安全: 确保资源不被复制或丢弃\n- 泛型约束: 正确使用 copy, drop, store, key\n- 错误处理: 使用有意义的 abort 代码\n- 测试: #[test] 覆盖关键路径",
        gene_type: "checklist" as const,
      },
    ],
    version: 1, usage_count: 0, rating: 4.1,
  },
];

// 执行导入
let count = 0;
let skipped = 0;
for (const c of capsules) {
  try {
    contributeCapsule(c as any);
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
console.log(`\nImported ${count} capsules from awesome-claude-skills (${skipped} skipped).`);

// 统计总数
const total = (getDb().prepare("SELECT COUNT(*) as c FROM capsules").get() as any).c;
const totalGenes = (getDb().prepare("SELECT COUNT(*) as c FROM genes").get() as any).c;
console.log(`Database total: ${total} capsules, ${totalGenes} genes`);
