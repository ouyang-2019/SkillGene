#!/usr/bin/env node
/**
 * import-sfm.ts - skill-from-masters 方法论导入脚本
 *
 * 从 GitHub 获取 skill-from-masters 仓库内容并导入为胶囊
 *
 * 用法: npm run import-sfm
 */

import { SFMAdapter } from "./adapters/sfm-adapter.js";
import { contributeCapsule, searchCapsules } from "./db.js";
import { getDb } from "./db.js";

const SFM_REPO = {
  owner: "GBSOSS",
  repo: "skill-from-masters",
};

const GH_TOKEN = process.env.GITHUB_TOKEN || "";
const headers: Record<string, string> = {
  Accept: "application/vnd.github.v3.raw",
  "User-Agent": "SkillGene-SFM-Importer/1.0",
};
if (GH_TOKEN) headers.Authorization = `Bearer ${GH_TOKEN}`;

async function fetchFile(path: string): Promise<string | null> {
  const url = `https://api.github.com/repos/${SFM_REPO.owner}/${SFM_REPO.repo}/contents/${path}`;
  try {
    const res = await fetch(url, { headers });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

async function listDir(path: string): Promise<Array<{ name: string; path: string; type: string }>> {
  const url = `https://api.github.com/repos/${SFM_REPO.owner}/${SFM_REPO.repo}/contents/${path}`;
  const jsonHeaders = { ...headers, Accept: "application/vnd.github.v3+json" };
  try {
    const res = await fetch(url, { headers: jsonHeaders });
    if (!res.ok) return [];
    return await res.json() as any[];
  } catch {
    return [];
  }
}

async function importSFM() {
  // 初始化数据库
  getDb();

  console.log("📚 skill-from-masters 方法论导入\n");

  let imported = 0;
  let skipped = 0;
  let errors = 0;

  // 1. 导入���法论数据库
  console.log("1️⃣  导入方法论数据库...");
  const methodologyMd = await fetchFile("references/methodology-database.md");
  if (methodologyMd) {
    const capsules = SFMAdapter.methodologyToCapsules(methodologyMd);
    for (const capsule of capsules) {
      try {
        const existing = searchCapsules(capsule.name, 1);
        if (existing.length > 0 && existing[0].name === capsule.name) {
          console.log(`   ⏭ 跳过已存在: ${capsule.name}`);
          skipped++;
          continue;
        }
        const id = contributeCapsule(capsule);
        console.log(`   ✓ 导入: ${capsule.name} (${id})`);
        imported++;
      } catch (e: any) {
        console.error(`   ✗ 错误: ${capsule.name} - ${e.message}`);
        errors++;
      }
    }
  } else {
    console.log("   ⚠ 未找到 methodology-database.md");
  }

  // 2. 导入分类法
  console.log("\n2️⃣  导入技能分类法...");
  const taxonomyMd = await fetchFile("references/skill-taxonomy.md");
  if (taxonomyMd) {
    const tags = SFMAdapter.taxonomyToTags(taxonomyMd);
    console.log(`   ✓ 提取 ${tags.length} 个分类标签: ${tags.slice(0, 10).join(", ")}...`);
  } else {
    console.log("   ⚠ 未找到 skill-taxonomy.md");
  }

  // 3. 导入模板
  console.log("\n3️⃣  导入 SKILL.md 模板...");
  const templateMd = await fetchFile("SKILL.md");
  if (templateMd) {
    const capsule = SFMAdapter.templateToMetaCapsule(templateMd);
    try {
      const existing = searchCapsules(capsule.name, 1);
      if (existing.length > 0 && existing[0].name === capsule.name) {
        console.log(`   ⏭ 跳过已存在: ${capsule.name}`);
        skipped++;
      } else {
        const id = contributeCapsule(capsule);
        console.log(`   ✓ 导入: ${capsule.name} (${id})`);
        imported++;
      }
    } catch (e: any) {
      console.error(`   ✗ 错误: ${e.message}`);
      errors++;
    }
  } else {
    console.log("   ⚠ 未找到 SKILL.md");
  }

  // 4. 导入 skills 目录
  console.log("\n4️⃣  导入 skills 目录...");
  const skillDirs = await listDir("skills");
  for (const dir of skillDirs) {
    if (dir.type !== "dir") continue;
    const skillMd = await fetchFile(`skills/${dir.name}/SKILL.md`);
    if (!skillMd) continue;

    try {
      const capsule = SFMAdapter.skillFileToCapsule(skillMd, dir.name, `skills/${dir.name}/SKILL.md`);
      const existing = searchCapsules(capsule.name, 1);
      if (existing.length > 0 && existing[0].name === capsule.name) {
        console.log(`   ⏭ 跳过已存在: ${capsule.name}`);
        skipped++;
        continue;
      }
      const id = contributeCapsule(capsule);
      console.log(`   ✓ 导入: ${capsule.name} (${id})`);
      imported++;
    } catch (e: any) {
      console.error(`   ✗ 错误: ${dir.name} - ${e.message}`);
      errors++;
    }

    // 避免 API 限流
    await new Promise(r => setTimeout(r, 500));
  }

  console.log(`\n✅ SFM 导入完成！`);
  console.log(`   导入: ${imported}`);
  console.log(`   跳过: ${skipped}`);
  console.log(`   错误: ${errors}`);
}

// 直接运行
if (process.argv[1]?.includes("import-sfm")) {
  importSFM().catch(console.error);
}

export { importSFM };
