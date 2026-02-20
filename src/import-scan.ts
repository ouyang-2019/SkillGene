#!/usr/bin/env node
/**
 * import-scan.ts - 将 scanned-skills/ 下的JSON文件批量导入SkillGene数据库
 */

import { readdirSync, readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getDb, contributeCapsule } from "./db.js";
import type { Capsule } from "./types.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SCAN_DIR = path.join(__dirname, "..", "scanned-skills");

getDb();

const files = readdirSync(SCAN_DIR).filter(f => f.endsWith(".json") && !f.startsWith("_"));
let imported = 0, skipped = 0, errors = 0;

console.log(`📦 导入 ${files.length} 个扫描结果文件...\n`);

for (const file of files) {
  const filePath = path.join(SCAN_DIR, file);
  const capsules: Capsule[] = JSON.parse(readFileSync(filePath, "utf-8"));
  const projName = file.replace(".json", "").replace(/__/g, "/");

  for (const c of capsules) {
    try {
      contributeCapsule(c);
      imported++;
    } catch (e: any) {
      if (e.message?.includes("UNIQUE")) { skipped++; }
      else { errors++; console.error(`  ✗ ${c.name}: ${e.message}`); }
    }
  }
  console.log(`  ✓ ${projName}: ${capsules.length} 胶囊`);
}

console.log(`\n✅ 导入完成: ${imported} 新增, ${skipped} 跳过(重复), ${errors} 错误`);
