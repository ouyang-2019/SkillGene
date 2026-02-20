#!/usr/bin/env node
/**
 * batch-scan.ts - 批量扫描，目标10000胶囊
 * 覆盖：skills、AI智能体、RAG、LLM工具链
 */
import { runScan } from "./auto-scan.js";
import { getDb, contributeCapsule } from "./db.js";
import { readdirSync, readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import type { Capsule } from "./types.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SCAN_DIR = path.join(__dirname, "..", "scanned-skills");
const TARGET = 10000;

function getCount(): number {
  const db = getDb();
  return (db.prepare("SELECT COUNT(*) as c FROM capsules").get() as any).c;
}

function importAll() {
  const files = readdirSync(SCAN_DIR).filter(f => f.endsWith(".json") && !f.startsWith("_"));
  let imported = 0;
  for (const file of files) {
    const capsules: Capsule[] = JSON.parse(readFileSync(path.join(SCAN_DIR, file), "utf-8"));
    for (const c of capsules) {
      try { contributeCapsule(c); imported++; } catch { /* dup */ }
    }
  }
  return imported;
}

// 搜索关键词批次
const QUERY_BATCHES = [
  // 批次1: Claude Code Skills
  [
    "claude code skills stars:>3",
    "claude skills SKILL.md stars:>2",
    "awesome claude skills stars:>5",
    "claude code plugin stars:>5",
    "agent skills collection stars:>5",
    "claude code tool stars:>10",
  ],
  // 批次2: AI Agent 框架
  [
    "ai agent framework stars:>50",
    "autonomous agent stars:>100",
    "llm agent stars:>50",
    "multi agent system stars:>30",
    "agent orchestration stars:>20",
    "agentic workflow stars:>20",
  ],
  // 批次3: RAG 技术
  [
    "rag retrieval augmented generation stars:>50",
    "vector database stars:>100",
    "embedding search stars:>50",
    "semantic search stars:>50",
    "document retrieval llm stars:>30",
    "knowledge base ai stars:>30",
  ],
  // 批次4: LLM 工具链
  [
    "langchain stars:>100",
    "llm tool stars:>50",
    "prompt engineering stars:>50",
    "llm api wrapper stars:>30",
    "openai tool stars:>50",
    "chatgpt plugin stars:>30",
  ],
  // 批次5: MCP 生态
  [
    "model context protocol stars:>5",
    "mcp server stars:>10",
    "mcp tool stars:>5",
    "claude mcp stars:>3",
    "mcp plugin stars:>3",
    "anthropic mcp stars:>5",
  ],
  // 批次6: AI 开发工具
  [
    "ai coding assistant stars:>50",
    "code generation ai stars:>50",
    "ai developer tool stars:>30",
    "copilot alternative stars:>30",
    "ai code review stars:>20",
    "ai pair programming stars:>20",
  ],
  // 批次7: 前端AI
  [
    "ai react component stars:>30",
    "ai ui generator stars:>20",
    "ai frontend tool stars:>20",
    "vercel ai sdk stars:>30",
    "ai chat interface stars:>30",
    "ai web app template stars:>20",
  ],
  // 批次8: 后端AI
  [
    "ai api backend stars:>30",
    "llm backend service stars:>20",
    "ai microservice stars:>20",
    "inference server stars:>50",
    "model serving stars:>50",
    "ai gateway stars:>30",
  ],
  // 批次9: 数据处理
  [
    "ai data pipeline stars:>30",
    "document parsing ai stars:>30",
    "pdf extraction ai stars:>20",
    "ocr ai stars:>50",
    "ai etl stars:>20",
    "structured output llm stars:>20",
  ],
  // 批次10: DevOps AI
  [
    "ai devops stars:>20",
    "ai infrastructure stars:>30",
    "ai monitoring stars:>20",
    "ai testing tool stars:>30",
    "ai ci cd stars:>10",
    "ai deployment stars:>20",
  ],
  // 批次11: 安全AI
  [
    "ai security tool stars:>30",
    "llm security stars:>20",
    "ai vulnerability scanner stars:>20",
    "prompt injection defense stars:>10",
    "ai red team stars:>10",
    "ai safety tool stars:>20",
  ],
  // 批次12: 知识管理
  [
    "knowledge graph ai stars:>50",
    "ai note taking stars:>30",
    "ai documentation stars:>30",
    "ai wiki stars:>20",
    "second brain ai stars:>20",
    "ai knowledge management stars:>20",
  ],
  // 批次13: 多模态
  [
    "multimodal ai stars:>50",
    "vision language model stars:>30",
    "ai image analysis stars:>30",
    "ai audio processing stars:>30",
    "ai video analysis stars:>20",
    "text to image api stars:>30",
  ],
  // 批次14: 对话AI
  [
    "chatbot framework stars:>100",
    "conversational ai stars:>50",
    "ai assistant framework stars:>30",
    "dialogue system stars:>30",
    "ai customer service stars:>20",
    "voice assistant stars:>30",
  ],
  // 批次15: 自动化
  [
    "ai automation stars:>50",
    "ai workflow automation stars:>30",
    "rpa ai stars:>20",
    "ai task automation stars:>20",
    "browser automation ai stars:>30",
    "ai scraping stars:>30",
  ],
  // 批次16: 更多skills
  [
    "awesome agent skills stars:>3",
    "claude code config stars:>5",
    "ai skill marketplace stars:>3",
    "skill creator ai stars:>3",
    "agent capability stars:>10",
    "ai plugin system stars:>10",
  ],
  // 批次17: 中文AI项目
  [
    "大模型 agent stars:>50",
    "RAG 检索增强 stars:>30",
    "AI 智能体 stars:>30",
    "langchain 中文 stars:>20",
    "向量数据库 stars:>20",
    "知识库 AI stars:>20",
  ],
  // 批次18: 特定框架
  [
    "crewai stars:>50",
    "autogen microsoft stars:>50",
    "llamaindex stars:>100",
    "semantic kernel stars:>50",
    "haystack deepset stars:>50",
    "dspy stars:>50",
  ],
  // 批次19: 嵌入和向量
  [
    "sentence transformer stars:>50",
    "text embedding stars:>30",
    "vector store stars:>30",
    "faiss wrapper stars:>20",
    "chromadb stars:>30",
    "pinecone client stars:>20",
  ],
  // 批次20: 提示工程
  [
    "prompt template stars:>20",
    "prompt library stars:>20",
    "system prompt stars:>10",
    "prompt optimization stars:>20",
    "few shot learning stars:>20",
    "chain of thought stars:>20",
  ],
];

async function main() {
  let current = getCount();
  console.log(`🎯 目标: ${TARGET} 胶囊 | 当前: ${current}\n`);

  for (let i = 0; i < QUERY_BATCHES.length; i++) {
    current = getCount();
    if (current >= TARGET) {
      console.log(`\n🎉 已达目标! 当前: ${current} 胶囊`);
      break;
    }

    console.log(`\n📦 批次 ${i + 1}/${QUERY_BATCHES.length} (当前: ${current}/${TARGET})`);
    console.log("─".repeat(50));

    try {
      await runScan(QUERY_BATCHES[i]);
      const newImported = importAll();
      const after = getCount();
      console.log(`  📊 本批次新增: ${after - current} 胶囊 (总计: ${after})`);
    } catch (e: any) {
      console.error(`  ✗ 批次错误: ${e.message}`);
    }
  }

  const final = getCount();
  console.log(`\n${"═".repeat(50)}`);
  console.log(`✅ 扫描完成! 总胶囊数: ${final}`);
  if (final < TARGET) {
    console.log(`⚠ 未达目标 (${final}/${TARGET})，可增加搜索关键词后重新运行`);
  }
}

main().catch(console.error);
