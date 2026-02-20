#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerTools } from "./tools.js";
import { getDb } from "./db.js";

const server = new McpServer({
  name: "skillgene",
  version: "1.0.0",
});

// 初始化数据库
getDb();

// 注册工具
registerTools(server);

// 启动 stdio transport
const transport = new StdioServerTransport();
await server.connect(transport);
