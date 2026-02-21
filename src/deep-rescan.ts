#!/usr/bin/env node
/**
 * deep-rescan.ts - 批量深度重扫描所有胶囊
 *
 * 对数据库中所有胶囊执行：
 * 1. 4维质量评分 (completeness/accuracy/coverage/health)
 * 2. 11类技能分类 (cognitive operation types)
 * 3. 来源类型标记
 * 4. 黄金案例/失败模式计数
 */
import { getDb } from "./db.js";
import { checkQuality } from "./quality.js";
import { classifySkillType } from "./taxonomy.js";
import type { Capsule, Gene } from "./types.js";

const BATCH_SIZE = 500;

function run() {
  const db = getDb();
  const total = (db.prepare("SELECT COUNT(*) as c FROM capsules").get() as any).c;
  console.log(`\n🔬 深度重扫描开始 — 共 ${total} 个胶囊\n`);

  // 预编译 SQL
  const stmtUpdate = db.prepare(`
    UPDATE capsules SET
      quality_score = ?,
      quality_grade = ?,
      skill_type = ?,
      source_type = COALESCE(source_type, 'github-scan'),
      golden_cases_count = ?,
      failure_patterns_count = ?,
      updated_at = datetime('now')
    WHERE id = ?
  `);

  const stmtGetGenes = db.prepare("SELECT * FROM genes WHERE capsule_id = ? ORDER BY order_index");
  const stmtGetCapsules = db.prepare(`
    SELECT * FROM capsules ORDER BY id LIMIT ? OFFSET ?
  `);

  // 统计
  const gradeStats: Record<string, number> = {};
  const typeStats: Record<string, number> = {};
  let scored = 0;
  let classified = 0;
  const startTime = Date.now();

  // 分批处理
  for (let offset = 0; offset < total; offset += BATCH_SIZE) {
    const rows = stmtGetCapsules.all(BATCH_SIZE, offset) as any[];

    const updateBatch = db.transaction(() => {
      for (const row of rows) {
        // 组装 Capsule 对象
        const genes = stmtGetGenes.all(row.id) as Gene[];
        const tags = typeof row.tags === "string" ? JSON.parse(row.tags) : (row.tags || []);

        const capsule: Capsule = {
          id: row.id,
          name: row.name,
          description: row.description,
          domain: row.domain,
          tags,
          genes,
          version: row.version,
          usage_count: row.usage_count,
          rating: row.rating,
          security_status: row.security_status,
          skill_type: row.skill_type,
          quality_score: row.quality_score,
        };

        // 1. 质量评分
        const quality = checkQuality(capsule);
        const grade = quality.score.grade;
        const qScore = quality.score.total;

        gradeStats[grade] = (gradeStats[grade] || 0) + 1;
        scored++;

        // 2. 技能分类
        const classification = classifySkillType(capsule);
        let skillType: string | null = null;
        if (classification.confidence >= 0.1) {
          skillType = classification.detected_type;
          typeStats[skillType] = (typeStats[skillType] || 0) + 1;
          classified++;
        }

        // 3. 统计 golden-case / anti-pattern 基因
        const goldenCount = genes.filter(g => g.gene_type === "golden-case").length;
        const antiCount = genes.filter(g => g.gene_type === "anti-pattern").length;

        // 4. 更新数据库
        stmtUpdate.run(
          qScore, grade, skillType,
          goldenCount, antiCount,
          row.id
        );
      }
    });

    updateBatch();

    const progress = Math.min(offset + BATCH_SIZE, total);
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    const rate = Math.round(progress / (parseFloat(elapsed) || 1));
    process.stdout.write(`\r  进度: ${progress}/${total} (${Math.round(progress/total*100)}%) | ${elapsed}s | ${rate}/s`);
  }

  const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);

  // 排序输出
  const sortedGrades = Object.entries(gradeStats).sort((a, b) => b[1] - a[1]);
  const sortedTypes = Object.entries(typeStats).sort((a, b) => b[1] - a[1]);

  console.log(`\n\n✅ 深度扫描完成！耗时 ${totalTime}s\n`);
  console.log(`📊 质量评分统计（${scored} 个胶囊）：`);
  console.log("  等级  |  数量  |  占比");
  console.log("  ------|--------|------");
  for (const [grade, count] of sortedGrades) {
    console.log(`  ${grade.padEnd(5)} | ${String(count).padStart(6)} | ${(count/scored*100).toFixed(1)}%`);
  }

  const avgScore = scored > 0
    ? Math.round(Object.entries(gradeStats).reduce((sum, [g, c]) => {
        // 简略估算平均分
        return sum;
      }, 0))
    : 0;

  // 直接从DB查平均分
  const avgRow = db.prepare("SELECT AVG(quality_score) as avg FROM capsules WHERE quality_score IS NOT NULL").get() as any;
  console.log(`\n  平均分: ${avgRow.avg?.toFixed(1) || 'N/A'}`);

  console.log(`\n🏷️  技能分类统计（${classified} 个胶囊已分类）：`);
  console.log("  类型            |  数量  |  占比");
  console.log("  ----------------|--------|------");
  for (const [type, count] of sortedTypes) {
    console.log(`  ${type.padEnd(16)} | ${String(count).padStart(6)} | ${(count/classified*100).toFixed(1)}%`);
  }

  console.log(`\n  未分类: ${scored - classified} 个（置信度 < 0.2）\n`);
}

run();
