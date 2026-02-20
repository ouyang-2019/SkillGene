#!/usr/bin/env node
/**
 * auto-scan.ts - 自动扫描GitHub开源项目并转换为SkillGene胶囊
 *
 * 功能：
 * 1. 搜索GitHub上的skill/agent相关项目
 * 2. 过滤：stars>0、去重
 * 3. 深度分析每个项目的README和目录结构
 * 4. 拆解为项目级+模块级胶囊
 * 5. 输出JSON到 scanned-skills/ 文件夹
 */

import { writeFileSync, mkdirSync, existsSync, readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import type { Capsule, Gene } from "./types.js";
import { decomposeProject, type ProjectInfo } from "./decompose.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, "..", "scanned-skills");
const DEDUP_FILE = path.join(OUTPUT_DIR, "_dedup-registry.json");

// GitHub API 基础配置
const GH_API = "https://api.github.com";
const GH_TOKEN = process.env.GITHUB_TOKEN || "";
const headers: Record<string, string> = {
  Accept: "application/vnd.github.v3+json",
  "User-Agent": "SkillGene-Scanner/1.0",
};
if (GH_TOKEN) headers.Authorization = `Bearer ${GH_TOKEN}`;

// ============================================================
// 去重注册表
// ============================================================
interface DedupRegistry {
  scanned_repos: Record<string, { scanned_at: string; stars: number; capsule_count: number }>;
}

function loadDedup(): DedupRegistry {
  if (existsSync(DEDUP_FILE)) {
    return JSON.parse(readFileSync(DEDUP_FILE, "utf-8"));
  }
  return { scanned_repos: {} };
}

function saveDedup(reg: DedupRegistry) {
  writeFileSync(DEDUP_FILE, JSON.stringify(reg, null, 2));
}

function isScanned(reg: DedupRegistry, fullName: string): boolean {
  return fullName.toLowerCase() in reg.scanned_repos;
}

function markScanned(reg: DedupRegistry, fullName: string, stars: number, capsuleCount: number) {
  reg.scanned_repos[fullName.toLowerCase()] = {
    scanned_at: new Date().toISOString(),
    stars,
    capsule_count: capsuleCount,
  };
}

// ============================================================
// GitHub API 封装
// ============================================================
async function ghFetch(url: string): Promise<any> {
  const res = await fetch(url, { headers });
  if (!res.ok) {
    if (res.status === 403) {
      console.warn("  ⚠ GitHub API 限流，等待60秒...");
      await new Promise((r) => setTimeout(r, 60000));
      return ghFetch(url);
    }
    throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

/** 搜索GitHub仓库 */
export async function searchRepos(query: string, maxPages = 3): Promise<ProjectInfo[]> {
  const results: ProjectInfo[] = [];
  const seen = new Set<string>();

  for (let page = 1; page <= maxPages; page++) {
    const url = `${GH_API}/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=30&page=${page}`;
    const data = await ghFetch(url);
    if (!data.items?.length) break;

    for (const repo of data.items) {
      // 过滤：stars > 0
      if (repo.stargazers_count < 1) continue;
      // 去重：同一搜索批次内
      if (seen.has(repo.full_name.toLowerCase())) continue;
      seen.add(repo.full_name.toLowerCase());

      results.push({
        fullName: repo.full_name,
        name: repo.name,
        owner: repo.owner.login,
        description: repo.description || "",
        stars: repo.stargazers_count,
        language: repo.language || "unknown",
        topics: repo.topics || [],
        url: repo.html_url,
        defaultBranch: repo.default_branch,
        updatedAt: repo.updated_at,
      });
    }
  }
  return results;
}

/** 获取仓库README内容 */
export async function fetchReadme(owner: string, repo: string): Promise<string> {
  try {
    const data = await ghFetch(`${GH_API}/repos/${owner}/${repo}/readme`);
    return Buffer.from(data.content, "base64").toString("utf-8");
  } catch {
    return "";
  }
}

/** 获取仓库目录结构（顶层+一级子目录） */
export async function fetchTree(owner: string, repo: string, branch: string): Promise<string[]> {
  try {
    const data = await ghFetch(
      `${GH_API}/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`
    );
    // 只取前200个路径，避免超大仓库
    return (data.tree || [])
      .slice(0, 200)
      .map((t: any) => t.path as string);
  } catch {
    return [];
  }
}

/** 获取文件内容 */
export async function fetchFileContent(owner: string, repo: string, filePath: string): Promise<string> {
  try {
    const data = await ghFetch(`${GH_API}/repos/${owner}/${repo}/contents/${filePath}`);
    if (data.size > 100000) return ""; // 跳过大文件
    return Buffer.from(data.content, "base64").toString("utf-8");
  } catch {
    return "";
  }
}

// ============================================================
// 主扫描流程
// ============================================================

/** 预定义搜索关键词 */
const SEARCH_QUERIES = [
  "claude code skills stars:>5",
  "agent skills awesome stars:>10",
  "claude code skill SKILL.md stars:>3",
  "ai agent skill collection stars:>10",
  "claude code plugin skill stars:>3",
  "awesome claude skills stars:>5",
];

export async function runScan(customQueries?: string[]) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  const dedup = loadDedup();
  const queries = customQueries || SEARCH_QUERIES;
  const allProjects: ProjectInfo[] = [];
  const globalSeen = new Set<string>();

  console.log("🔍 阶段1: 搜索GitHub项目...\n");

  for (const q of queries) {
    console.log(`  搜索: "${q}"`);
    const repos = await searchRepos(q, 2);
    for (const r of repos) {
      const key = r.fullName.toLowerCase();
      if (globalSeen.has(key)) continue;
      if (isScanned(dedup, r.fullName)) {
        console.log(`  ⏭ 跳过已扫描: ${r.fullName}`);
        continue;
      }
      globalSeen.add(key);
      allProjects.push(r);
    }
    // 避免API限流
    await new Promise((r) => setTimeout(r, 2000));
  }

  console.log(`\n📊 发现 ${allProjects.length} 个新项目待扫描\n`);

  console.log("🔬 阶段2: 深度分析并拆解...\n");

  let totalCapsules = 0;

  for (let i = 0; i < allProjects.length; i++) {
    const proj = allProjects[i];
    console.log(`  [${i + 1}/${allProjects.length}] ${proj.fullName} (⭐${proj.stars})`);

    try {
      // 获取README和目录结构
      const readme = await fetchReadme(proj.owner, proj.name);
      const tree = await fetchTree(proj.owner, proj.name, proj.defaultBranch);

      if (!readme && tree.length === 0) {
        console.log("    ⚠ 无README且无代码，跳过");
        continue;
      }

      // 深度拆解为胶囊
      const capsules = await decomposeProject(proj, readme, tree);

      if (capsules.length === 0) {
        console.log("    ⚠ 未能提取有效胶囊，跳过");
        continue;
      }

      // 保存到文件
      const safeFileName = proj.fullName.replace(/\//g, "__");
      const outPath = path.join(OUTPUT_DIR, `${safeFileName}.json`);
      writeFileSync(outPath, JSON.stringify(capsules, null, 2));

      markScanned(dedup, proj.fullName, proj.stars, capsules.length);
      totalCapsules += capsules.length;
      console.log(`    ✓ 生成 ${capsules.length} 个胶囊`);
    } catch (e: any) {
      console.error(`    ✗ 错误: ${e.message}`);
    }

    // 避免API限流
    await new Promise((r) => setTimeout(r, 1500));
  }

  saveDedup(dedup);

  console.log(`\n✅ 扫描完成！`);
  console.log(`   项目数: ${allProjects.length}`);
  console.log(`   胶囊数: ${totalCapsules}`);
  console.log(`   输出目录: ${OUTPUT_DIR}`);
}

// 直接运行
if (process.argv[1]?.includes("auto-scan")) {
  const customQueries = process.argv.slice(2);
  runScan(customQueries.length ? customQueries : undefined).catch(console.error);
}
