#!/usr/bin/env node
import { getDb, contributeCapsule } from "./db.js";
import type { Capsule } from "./types.js";

getDb();

const capsules: Capsule[] = [
  {
    name: "Next.js App Router 项目架构",
    description: "Next.js 14+ App Router 项目的最佳实践架构，包含路由组织、布局嵌套、服务端组件策略",
    domain: "web-frontend",
    tags: ["nextjs", "react", "app-router", "architecture"],
    genes: [
      {
        title: "目录结构规范",
        content: `src/
  app/
    (marketing)/     # 路由组：营销页面
    (dashboard)/     # 路由组：仪表盘
    api/             # API Routes
    layout.tsx       # 根布局
  components/
    ui/              # 通用 UI 组件
    features/        # 业务功能组件
  lib/               # 工具函数、配置
  hooks/             # 自定义 Hooks`,
        gene_type: "pattern",
      },
      {
        title: "服务端组件优先策略",
        content: "默认使用 Server Components，仅在需要交互（onClick、useState、useEffect）时添加 'use client'。数据获取在 Server Components 中直接 async/await，避免 useEffect 获取数据。",
        gene_type: "principle",
      },
      {
        title: "Metadata 与 SEO",
        content: "每个 page.tsx 导出 metadata 对象或 generateMetadata 函数。使用 opengraph-image.tsx 约定生成 OG 图片。sitemap.ts 和 robots.ts 放在 app/ 根目录。",
        gene_type: "pattern",
      },
    ],
    version: 1, usage_count: 0, rating: 4.8,
  },
  {
    name: "React 状态管理选型指南",
    description: "React 应用状态管理方案选型决策树，覆盖 useState、Zustand、Jotai、React Query 等方案",
    domain: "web-frontend",
    tags: ["react", "state-management", "zustand", "react-query"],
    genes: [
      {
        title: "状态分类决策树",
        content: `- UI 状态（模态框、表单）→ useState/useReducer
- 服务端缓存状态（API 数据）→ React Query / SWR
- 跨组件共享状态 → Zustand（简单）/ Jotai（原子化）
- URL 状态 → nuqs 或 useSearchParams
避免：Redux 用于新项目（除非团队已熟悉），Context 用于频繁更新的状态`,
        gene_type: "principle",
      },
      {
        title: "Zustand 最小配置",
        content: `import { create } from 'zustand'
const useStore = create((set) => ({
  count: 0,
  inc: () => set((s) => ({ count: s.count + 1 })),
}))`,
        gene_type: "snippet",
      },
    ],
    version: 1, usage_count: 0, rating: 4.5,
  },
  {
    name: "Node.js REST API 生产模板",
    description: "Node.js + Express/Fastify 生产级 REST API 模板，包含错误处理、验证、日志、安全中间件",
    domain: "backend",
    tags: ["nodejs", "api", "express", "rest", "production"],
    genes: [
      {
        title: "项目结构",
        content: `src/
  routes/          # 路由定义
  controllers/     # 请求处理
  services/        # 业务逻辑
  middleware/       # 中间件（auth、error、validate）
  models/          # 数据模型
  utils/           # 工具函数
  config/          # 环境配置`,
        gene_type: "pattern",
      },
      {
        title: "全局错误处理",
        content: `class AppError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
  }
}
// 错误中间件放在所有路由之后
app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  res.status(status).json({ error: err.message });
});`,
        gene_type: "snippet",
      },
      {
        title: "安全检查清单",
        content: "- helmet() 设置安全头\n- cors() 配置允许的源\n- express-rate-limit 限流\n- 输入验证（zod/joi）\n- SQL 参数化查询\n- JWT 存 httpOnly cookie\n- 敏感配置用环境变量",
        gene_type: "checklist",
      },
    ],
    version: 1, usage_count: 0, rating: 4.7,
  },
  {
    name: "Python FastAPI 快速启动",
    description: "FastAPI 项目快速启动模板，包含异步数据库、Pydantic 模型、依赖注入模式",
    domain: "backend",
    tags: ["python", "fastapi", "async", "api"],
    genes: [
      {
        title: "项目结构",
        content: `app/
  main.py          # FastAPI 实例 + 路由挂载
  models.py        # SQLAlchemy / Pydantic 模型
  schemas.py       # 请求/响应 Schema
  crud.py          # 数据库操作
  deps.py          # 依赖注入（get_db, get_current_user）
  config.py        # pydantic-settings 配置`,
        gene_type: "pattern",
      },
      {
        title: "依赖注入模式",
        content: `from fastapi import Depends
async def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/items")
async def read_items(db: Session = Depends(get_db)):
    return db.query(Item).all()`,
        gene_type: "snippet",
      },
    ],
    version: 1, usage_count: 0, rating: 4.6,
  },
  {
    name: "Docker 多阶段构建最佳实践",
    description: "Docker 多阶段构建模式，适用于 Node.js/Python/Go 应用的生产镜像优化",
    domain: "devops",
    tags: ["docker", "dockerfile", "multi-stage", "optimization"],
    genes: [
      {
        title: "Node.js 多阶段 Dockerfile",
        content: `FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
USER node
CMD ["node", "dist/index.js"]`,
        gene_type: "config",
      },
      {
        title: "镜像优化原则",
        content: "- 使用 alpine 基础镜像\n- .dockerignore 排除 node_modules、.git、测试文件\n- 生产依赖单独安装（npm ci --omit=dev）\n- 非 root 用户运行\n- COPY 指令按变化频率排序（利用缓存层）",
        gene_type: "checklist",
      },
    ],
    version: 1, usage_count: 0, rating: 4.9,
  },
  {
    name: "CI/CD GitHub Actions 模板",
    description: "GitHub Actions CI/CD 流水线模板，覆盖测试、构建、部署全流程",
    domain: "devops",
    tags: ["github-actions", "ci-cd", "automation", "deployment"],
    genes: [
      {
        title: "标准 CI 流水线",
        content: `name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run lint
      - run: npm test
  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci && npm run build`,
        gene_type: "config",
      },
    ],
    version: 1, usage_count: 0, rating: 4.4,
  },
  {
    name: "RAG 系统设计模式",
    description: "检索增强生成（RAG）系统的设计模式，包含文档处理、向量存储、检索策略、提示工程",
    domain: "ai-llm",
    tags: ["rag", "llm", "vector-db", "embeddings", "ai"],
    genes: [
      {
        title: "RAG 流水线架构",
        content: `1. 文档处理：分块（chunk）→ 清洗 → 元数据提取
2. 索引：Embedding 生成 → 向量存储（Pinecone/Chroma/pgvector）
3. 检索：Query 改写 → 混合检索（向量+关键词）→ 重排序
4. 生成：Context 注入 → LLM 生成 → 引用标注`,
        gene_type: "pattern",
      },
      {
        title: "分块策略",
        content: "- 按语义分块（段落/章节），非固定长度\n- chunk_size: 512-1024 tokens，overlap: 10-20%\n- 保留元数据（来源、页码、标题层级）\n- 代码块和表格作为独立 chunk",
        gene_type: "principle",
      },
      {
        title: "检索优化",
        content: "- 混合检索：向量相似度 + BM25 关键词，加权融合\n- Query 扩展：LLM 改写用户问题为多个检索 query\n- 重排序：用 cross-encoder 对 top-k 结果重排\n- 上下文压缩：去除检索结果中的无关段落",
        gene_type: "principle",
      },
    ],
    version: 1, usage_count: 0, rating: 4.8,
  },
  {
    name: "AI Agent 开发框架",
    description: "AI Agent 开发的核心模式，包含工具调用、记忆管理、规划循环、多 Agent 协作",
    domain: "ai-llm",
    tags: ["agent", "llm", "tool-use", "multi-agent", "ai"],
    genes: [
      {
        title: "Agent 核心循环",
        content: `while not done:
  1. 观察：获取当前状态 + 用户输入
  2. 思考：LLM 分析任务，决定下一步
  3. 行动：调用工具 / 生成回复
  4. 反思：评估结果，决定是否继续
关键：设置最大迭代次数防止无限循环`,
        gene_type: "pattern",
      },
      {
        title: "工具定义规范",
        content: "- 工具名称：动词_名词（search_docs, create_file）\n- 描述：说明何时使用、输入输出、限制\n- 参数：用 JSON Schema，必填/可选明确\n- 错误处理：返回结构化错误，非抛异常",
        gene_type: "principle",
      },
    ],
    version: 1, usage_count: 0, rating: 4.7,
  },
  {
    name: "Prompt Engineering 实战技巧",
    description: "LLM Prompt 工程实战技巧集，覆盖系统提示、Few-shot、CoT、结构化输出",
    domain: "ai-llm",
    tags: ["prompt-engineering", "llm", "few-shot", "chain-of-thought"],
    genes: [
      {
        title: "系统提示结构",
        content: `1. 角色定义：你是...专家
2. 任务说明：你的任务是...
3. 约束条件：必须/不能...
4. 输出格式：以 JSON/Markdown 格式输出
5. 示例（可选）：输入→输出示例`,
        gene_type: "pattern",
      },
      {
        title: "提示优化清单",
        content: "- 具体 > 模糊：给出明确的输出格式和长度要求\n- 分步骤：复杂任务拆解为步骤\n- 正面指令：说'做什么'而非'不做什么'\n- Few-shot：提供 2-3 个输入输出示例\n- CoT：'让我们一步步思考'\n- 温度：事实性任务用 0，创意任务用 0.7-1.0",
        gene_type: "checklist",
      },
    ],
    version: 1, usage_count: 0, rating: 4.6,
  },
  {
    name: "PostgreSQL 性能优化",
    description: "PostgreSQL 数据库性能优化实践，包含索引策略、查询优化、连接池配置",
    domain: "database",
    tags: ["postgresql", "database", "performance", "indexing", "sql"],
    genes: [
      {
        title: "索引策略",
        content: "- B-tree：等值/范围查询（默认）\n- GIN：全文搜索、JSONB、数组\n- GiST：地理空间、范围类型\n- 复合索引：高选择性列在前\n- 部分索引：WHERE 条件过滤\n- EXPLAIN ANALYZE 验证索引使用",
        gene_type: "principle",
      },
      {
        title: "连接池配置",
        content: "- 使用 PgBouncer 或应用层连接池\n- pool_size = CPU 核数 * 2 + 磁盘数\n- 事务模式（transaction）适合大多数 Web 应用\n- 监控 pg_stat_activity 检查连接使用",
        gene_type: "config",
      },
    ],
    version: 1, usage_count: 0, rating: 4.5,
  },
  {
    name: "Redis 缓存模式",
    description: "Redis 缓存设计模式，包含缓存策略、数据结构选择、过期策略、常见陷阱",
    domain: "database",
    tags: ["redis", "cache", "session", "rate-limit"],
    genes: [
      {
        title: "缓存模式选择",
        content: `- Cache-Aside：应用管理缓存读写（最常用）
- Write-Through：写入同时更新缓存和 DB
- Write-Behind：写入缓存，异步写 DB（高性能但有丢失风险）
- Read-Through：缓存层自动从 DB 加载`,
        gene_type: "pattern",
      },
      {
        title: "Key 设计规范",
        content: "- 格式：{业务}:{实体}:{id}，如 user:profile:123\n- 避免大 Key（>10KB）\n- TTL 必设，防止内存泄漏\n- 热点 Key 用本地缓存 + Redis 二级缓存",
        gene_type: "principle",
      },
    ],
    version: 1, usage_count: 0, rating: 4.4,
  },
  {
    name: "Vue 3 Composition API 模式",
    description: "Vue 3 Composition API 最佳实践，包含组合函数、状态管理、TypeScript 集成",
    domain: "web-frontend",
    tags: ["vue", "vue3", "composition-api", "typescript"],
    genes: [
      {
        title: "组合函数（Composable）模式",
        content: `// composables/useFetch.ts
export function useFetch<T>(url: MaybeRef<string>) {
  const data = ref<T | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref(false)

  async function execute() {
    loading.value = true
    try {
      data.value = await fetch(unref(url)).then(r => r.json())
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  }
  onMounted(execute)
  return { data, error, loading, refresh: execute }
}`,
        gene_type: "snippet",
      },
      {
        title: "命名规范",
        content: "- 组合函数以 use 开头：useFetch, useAuth\n- 组件用 PascalCase：UserProfile.vue\n- Props 用 camelCase，模板中用 kebab-case\n- Emits 用 camelCase：updateValue",
        gene_type: "principle",
      },
    ],
    version: 1, usage_count: 0, rating: 4.5,
  },
];

// 执行种子数据插入
let count = 0;
for (const c of capsules) {
  try {
    contributeCapsule(c);
    count++;
  } catch (e: any) {
    if (!e.message?.includes("UNIQUE")) {
      console.error(`Failed to seed "${c.name}":`, e.message);
    }
  }
}
console.log(`Seeded ${count} capsules.`);
