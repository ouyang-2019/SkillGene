# SkillGene - AI 能力胶囊平台

MCP 驱动的技能胶囊搜索与进化平台。Claude Code 开发前通过 MCP 搜索胶囊获取经验，开发后可贡献新胶囊回平台。

## 特性

- **910+ 预置胶囊**：覆盖 31 个领域（Web 前端、后端、DevOps、AI/LLM、数据库、安全、SaaS 自动化等）
- **FTS5 全文搜索**：SQLite 内置全文索引 + LIKE 回退，支持中英文搜索
- **4 个 MCP Tools**：search_capsules / get_capsule / contribute_capsule / evolve_capsule
- **能力进化**：基于反馈改进胶囊，版本递增 + 新增 Gene
- **零外部依赖**：SQLite 内嵌存储，无需数据库服务

## 架构

```
Claude Code ──MCP stdio──▶ SkillGene MCP Server
                              │
                    ┌─────────┼─────────┐
                    ▼         ▼         ▼
               SQLite+FTS5  Search   Evolution
               (capsule     Engine   Engine
                store)               (反馈进化)
```

## 数据模型

- **Gene（基因）**：原子能力单元（一个具体技巧/模式/配置）
- **Capsule（胶囊）**：完整能力链，包含多个 Gene + 使用指令

## 快速开始

```bash
# 安装依赖
npm install

# 编译
npm run build

# 导入预置胶囊
npm run seed
node dist/import-github.js
node dist/import-awesome.js
node dist/import-composio-bulk.js

# 配置 Claude Code MCP
# 在 ~/.claude/mcp.json 中添加：
# {
#   "mcpServers": {
#     "skillgene": {
#       "command": "node",
#       "args": ["/path/to/skillgene/dist/index.js"]
#     }
#   }
# }
```

## MCP Tools

| Tool | 功能 |
|------|------|
| `search_capsules` | 按关键词全文搜索胶囊 |
| `get_capsule` | 获取完整胶囊内容（含所有 Gene） |
| `contribute_capsule` | 贡献新胶囊到平台 |
| `evolve_capsule` | 基于反馈改进已有胶囊 |

## 使用示例

```
用户：帮我开发一个 Next.js SaaS
Claude Code 调用：search_capsules("nextjs saas 开发")
→ 获取 Next.js 架构、认证、支付、部署等经验胶囊
→ 基于胶囊知识开始开发
→ 开发完成后 contribute_capsule 回馈新经验
```

## 胶囊来源

| 来源 | 数量 |
|------|------|
| Anthropic 官方 Skills | 16 |
| 社区开源 Skills | 12 |
| ComposioHQ awesome-claude-skills | 40 |
| Composio SaaS 自动化 | 830+ |
| 原始种子数据 | 12 |

## 技术栈

- **Runtime**: Node.js + TypeScript
- **MCP**: `@modelcontextprotocol/sdk` stdio transport
- **存储**: `better-sqlite3` + FTS5
- **验证**: `zod`

## License

MIT
