#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerTools } from "./tools.js";
import { getDb } from "./db.js";
import { isSSAvailable } from "./bridge/ss-health.js";

const server = new McpServer({
  name: "skillgene",
  version: "2.0.0",
});

// 初始化数据库
getDb();

// 检测 Skill_Seekers 可用性 (异步，不阻塞启动)
isSSAvailable().then(available => {
  if (available) {
    process.stderr.write("[SkillGene] Skill_Seekers detected - deep analysis enabled\n");
  }
}).catch(() => {});

// 注册所有工具 (原生 + SS桥接 + SFM + 融合)
registerTools(server);

// 启动 stdio transport
const transport = new StdioServerTransport();
await server.connect(transport);
