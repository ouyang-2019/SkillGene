import Database from "better-sqlite3";
import { randomUUID } from "crypto";
import path from "path";
import { fileURLToPath } from "url";
import type {
  Capsule, Gene, SearchResult, EvolveFeedback, SecurityIssue,
  GoldenCase, FailurePattern, SkillType, QualityGrade,
} from "./types.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.join(__dirname, "..", "skillgene.db");

let db: Database.Database;

export function getDb(): Database.Database {
  if (!db) {
    db = new Database(DB_PATH);
    db.pragma("journal_mode = WAL");
    db.pragma("foreign_keys = ON");
    initSchema(db);
  }
  return db;
}

function initSchema(db: Database.Database) {
  // 迁移：添加新列（兼容已有数据库）
  const migrations = [
    `ALTER TABLE capsules ADD COLUMN security_status TEXT DEFAULT 'pending'`,
    `ALTER TABLE capsules ADD COLUMN skill_type TEXT DEFAULT NULL`,
    `ALTER TABLE capsules ADD COLUMN quality_score REAL DEFAULT NULL`,
    `ALTER TABLE capsules ADD COLUMN quality_grade TEXT DEFAULT NULL`,
    `ALTER TABLE capsules ADD COLUMN golden_cases_count INTEGER DEFAULT 0`,
    `ALTER TABLE capsules ADD COLUMN failure_patterns_count INTEGER DEFAULT 0`,
    `ALTER TABLE capsules ADD COLUMN source_type TEXT DEFAULT NULL`,
  ];
  for (const sql of migrations) {
    try { db.exec(sql); } catch { /* 列已存在 */ }
  }

  db.exec(`
    CREATE TABLE IF NOT EXISTS capsules (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      domain TEXT NOT NULL,
      tags TEXT NOT NULL DEFAULT '[]',
      version INTEGER NOT NULL DEFAULT 1,
      usage_count INTEGER NOT NULL DEFAULT 0,
      rating REAL NOT NULL DEFAULT 0,
      security_status TEXT DEFAULT 'pending',
      skill_type TEXT DEFAULT NULL,
      quality_score REAL DEFAULT NULL,
      quality_grade TEXT DEFAULT NULL,
      golden_cases_count INTEGER DEFAULT 0,
      failure_patterns_count INTEGER DEFAULT 0,
      source_type TEXT DEFAULT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS genes (
      id TEXT PRIMARY KEY,
      capsule_id TEXT NOT NULL REFERENCES capsules(id) ON DELETE CASCADE,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      gene_type TEXT NOT NULL DEFAULT 'pattern',
      order_index INTEGER NOT NULL DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS security_logs (
      id TEXT PRIMARY KEY,
      capsule_id TEXT NOT NULL REFERENCES capsules(id) ON DELETE CASCADE,
      status TEXT NOT NULL DEFAULT 'pending',
      issues TEXT NOT NULL DEFAULT '[]',
      scanned_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    -- 黄金案例表 (from skill-from-masters)
    CREATE TABLE IF NOT EXISTS golden_cases (
      id TEXT PRIMARY KEY,
      capsule_id TEXT NOT NULL REFERENCES capsules(id) ON DELETE CASCADE,
      title TEXT NOT NULL,
      source TEXT NOT NULL DEFAULT '',
      description TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    -- 失败模式表 (from skill-from-masters)
    CREATE TABLE IF NOT EXISTS failure_patterns (
      id TEXT PRIMARY KEY,
      capsule_id TEXT NOT NULL REFERENCES capsules(id) ON DELETE CASCADE,
      title TEXT NOT NULL,
      category TEXT NOT NULL DEFAULT 'common-mistake',
      description TEXT NOT NULL,
      bad_example TEXT NOT NULL DEFAULT '',
      fix_example TEXT NOT NULL DEFAULT '',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE VIRTUAL TABLE IF NOT EXISTS capsules_fts USING fts5(
      name, description, domain, tags,
      content='capsules', content_rowid='rowid'
    );

    CREATE TRIGGER IF NOT EXISTS capsules_ai AFTER INSERT ON capsules BEGIN
      INSERT INTO capsules_fts(rowid, name, description, domain, tags)
      VALUES (new.rowid, new.name, new.description, new.domain, new.tags);
    END;

    CREATE TRIGGER IF NOT EXISTS capsules_ad AFTER DELETE ON capsules BEGIN
      INSERT INTO capsules_fts(capsules_fts, rowid, name, description, domain, tags)
      VALUES ('delete', old.rowid, old.name, old.description, old.domain, old.tags);
    END;

    CREATE TRIGGER IF NOT EXISTS capsules_au AFTER UPDATE ON capsules BEGIN
      INSERT INTO capsules_fts(capsules_fts, rowid, name, description, domain, tags)
      VALUES ('delete', old.rowid, old.name, old.description, old.domain, old.tags);
      INSERT INTO capsules_fts(rowid, name, description, domain, tags)
      VALUES (new.rowid, new.name, new.description, new.domain, new.tags);
    END;
  `);
}

// ============================================================
// 搜索 (扩展返回 skill_type, quality_grade, quality_score)
// ============================================================
export function searchCapsules(query: string, limit = 10): SearchResult[] {
  const d = getDb();
  const trimmed = query.trim();
  if (!trimmed) return [];

  try {
    const safeQuery = trimmed
      .split(/\s+/)
      .map(w => `"${w.replace(/"/g, '""')}"`)
      .join(" OR ");

    const results = d.prepare(`
      SELECT c.id, c.name, c.description, c.domain, c.tags, c.rating, c.usage_count,
             c.skill_type, c.quality_grade, c.quality_score, rank
      FROM capsules_fts f
      JOIN capsules c ON c.rowid = f.rowid
      WHERE capsules_fts MATCH ?
      ORDER BY rank
      LIMIT ?
    `).all(safeQuery, limit) as SearchResult[];

    if (results.length > 0) return results;
  } catch {
    // FTS5 查询失败，回退到 LIKE
  }

  const likePattern = `%${trimmed}%`;
  return d.prepare(`
    SELECT id, name, description, domain, tags, rating, usage_count,
           skill_type, quality_grade, quality_score, 0 as rank
    FROM capsules
    WHERE name LIKE ? OR description LIKE ? OR tags LIKE ?
    ORDER BY quality_score DESC NULLS LAST, usage_count DESC
    LIMIT ?
  `).all(likePattern, likePattern, likePattern, limit) as SearchResult[];
}

// ============================================================
// 获取胶囊 (含 golden_cases 和 failure_patterns 计数)
// ============================================================
export function getCapsule(id: string): (Capsule & { genes: Gene[] }) | null {
  const d = getDb();
  const capsule = d.prepare("SELECT * FROM capsules WHERE id = ?").get(id) as any;
  if (!capsule) return null;

  const genes = d.prepare(
    "SELECT * FROM genes WHERE capsule_id = ? ORDER BY order_index"
  ).all(id) as Gene[];

  // 增加使用计数
  d.prepare("UPDATE capsules SET usage_count = usage_count + 1 WHERE id = ?").run(id);

  return {
    ...capsule,
    tags: JSON.parse(capsule.tags),
    genes,
  };
}

// ============================================================
// 贡献胶囊 (支持新字段)
// ============================================================
export function contributeCapsule(capsule: Capsule): string {
  const d = getDb();
  const id = capsule.id || randomUUID();
  const tags = JSON.stringify(capsule.tags);

  const insertCapsule = d.prepare(`
    INSERT INTO capsules (id, name, description, domain, tags, version, skill_type, quality_score, quality_grade, source_type)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const insertGene = d.prepare(`
    INSERT INTO genes (id, capsule_id, title, content, gene_type, order_index)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const tx = d.transaction(() => {
    insertCapsule.run(
      id, capsule.name, capsule.description, capsule.domain, tags,
      capsule.version ?? 1,
      capsule.skill_type || null,
      capsule.quality_score ?? null,
      capsule.quality_grade || null,
      capsule.source_type || null,
    );
    for (let i = 0; i < capsule.genes.length; i++) {
      const g = capsule.genes[i];
      insertGene.run(g.id || randomUUID(), id, g.title, g.content, g.gene_type, i);
    }
  });
  tx();
  return id;
}

// ============================================================
// 进化胶囊
// ============================================================
export function evolveCapsule(feedback: EvolveFeedback): boolean {
  const d = getDb();
  const capsule = d.prepare("SELECT * FROM capsules WHERE id = ?").get(feedback.capsule_id) as any;
  if (!capsule) return false;

  const insertGene = d.prepare(`
    INSERT INTO genes (id, capsule_id, title, content, gene_type, order_index)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const tx = d.transaction(() => {
    d.prepare(`
      UPDATE capsules SET version = version + 1, updated_at = datetime('now')
      WHERE id = ?
    `).run(feedback.capsule_id);

    if (feedback.new_genes?.length) {
      const maxOrder = (d.prepare(
        "SELECT MAX(order_index) as m FROM genes WHERE capsule_id = ?"
      ).get(feedback.capsule_id) as any)?.m ?? 0;

      for (let i = 0; i < feedback.new_genes.length; i++) {
        const g = feedback.new_genes[i];
        insertGene.run(
          g.id || randomUUID(), feedback.capsule_id,
          g.title, g.content, g.gene_type, maxOrder + i + 1
        );
      }
    }
  });
  tx();
  return true;
}

// ============================================================
// 安全状态
// ============================================================
export function updateSecurityStatus(capsuleId: string, status: string, issues: SecurityIssue[]): void {
  const d = getDb();
  d.prepare("UPDATE capsules SET security_status = ?, updated_at = datetime('now') WHERE id = ?").run(status, capsuleId);
  d.prepare(`INSERT INTO security_logs (id, capsule_id, status, issues) VALUES (?, ?, ?, ?)`)
    .run(randomUUID(), capsuleId, status, JSON.stringify(issues));
}

// ============================================================
// 标签和领域
// ============================================================
export function updateCapsuleTags(capsuleId: string, domain: string, tags: string[]): boolean {
  const d = getDb();
  const r = d.prepare("UPDATE capsules SET domain = ?, tags = ?, updated_at = datetime('now') WHERE id = ?")
    .run(domain, JSON.stringify(tags), capsuleId);
  return r.changes > 0;
}

// ============================================================
// Gene 更新
// ============================================================
export function updateCapsuleGenes(capsuleId: string, genes: Gene[]): boolean {
  const d = getDb();
  const capsule = d.prepare("SELECT id FROM capsules WHERE id = ?").get(capsuleId) as any;
  if (!capsule) return false;

  const tx = d.transaction(() => {
    d.prepare("DELETE FROM genes WHERE capsule_id = ?").run(capsuleId);
    const ins = d.prepare("INSERT INTO genes (id, capsule_id, title, content, gene_type, order_index) VALUES (?, ?, ?, ?, ?, ?)");
    for (let i = 0; i < genes.length; i++) {
      const g = genes[i];
      ins.run(g.id || randomUUID(), capsuleId, g.title, g.content, g.gene_type, i);
    }
    d.prepare("UPDATE capsules SET version = version + 1, updated_at = datetime('now') WHERE id = ?").run(capsuleId);
  });
  tx();
  return true;
}

// ============================================================
// 质量评分更新 (新增)
// ============================================================
export function updateQualityScore(
  capsuleId: string, score: number, grade: QualityGrade
): boolean {
  const d = getDb();
  const r = d.prepare(`
    UPDATE capsules SET quality_score = ?, quality_grade = ?, updated_at = datetime('now')
    WHERE id = ?
  `).run(score, grade, capsuleId);
  return r.changes > 0;
}

// ============================================================
// 技能类型更新 (新增)
// ============================================================
export function updateSkillType(capsuleId: string, skillType: SkillType): boolean {
  const d = getDb();
  const r = d.prepare(`
    UPDATE capsules SET skill_type = ?, updated_at = datetime('now')
    WHERE id = ?
  `).run(skillType, capsuleId);
  return r.changes > 0;
}

// ============================================================
// 黄金案例 CRUD (新增, from skill-from-masters)
// ============================================================
export function addGoldenCase(capsuleId: string, gc: GoldenCase): string {
  const d = getDb();
  const id = gc.id || randomUUID();
  d.prepare(`
    INSERT INTO golden_cases (id, capsule_id, title, source, description, content)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(id, capsuleId, gc.title, gc.source, gc.description, gc.content);

  // 更新计数
  d.prepare(`
    UPDATE capsules SET golden_cases_count = (
      SELECT COUNT(*) FROM golden_cases WHERE capsule_id = ?
    ), updated_at = datetime('now') WHERE id = ?
  `).run(capsuleId, capsuleId);

  return id;
}

export function getGoldenCases(capsuleId: string): GoldenCase[] {
  const d = getDb();
  return d.prepare(
    "SELECT * FROM golden_cases WHERE capsule_id = ? ORDER BY created_at"
  ).all(capsuleId) as GoldenCase[];
}

// ============================================================
// 失败模式 CRUD (新增, from skill-from-masters)
// ============================================================
export function addFailurePattern(capsuleId: string, fp: FailurePattern): string {
  const d = getDb();
  const id = fp.id || randomUUID();
  d.prepare(`
    INSERT INTO failure_patterns (id, capsule_id, title, category, description, bad_example, fix_example)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(id, capsuleId, fp.title, fp.category, fp.description, fp.bad_example, fp.fix_example);

  // 更新计数
  d.prepare(`
    UPDATE capsules SET failure_patterns_count = (
      SELECT COUNT(*) FROM failure_patterns WHERE capsule_id = ?
    ), updated_at = datetime('now') WHERE id = ?
  `).run(capsuleId, capsuleId);

  return id;
}

export function getFailurePatterns(capsuleId: string): FailurePattern[] {
  const d = getDb();
  return d.prepare(
    "SELECT * FROM failure_patterns WHERE capsule_id = ? ORDER BY created_at"
  ).all(capsuleId) as FailurePattern[];
}

// ============================================================
// 统计 (新增)
// ============================================================
export function getQualityStats(): {
  total: number;
  scored: number;
  avgScore: number;
  byGrade: Record<string, number>;
  bySkillType: Record<string, number>;
} {
  const d = getDb();
  const total = (d.prepare("SELECT COUNT(*) as c FROM capsules").get() as any).c;
  const scored = (d.prepare("SELECT COUNT(*) as c FROM capsules WHERE quality_score IS NOT NULL").get() as any).c;
  const avgRow = d.prepare("SELECT AVG(quality_score) as avg FROM capsules WHERE quality_score IS NOT NULL").get() as any;
  const avgScore = Math.round(avgRow?.avg || 0);

  const gradeRows = d.prepare(
    "SELECT quality_grade, COUNT(*) as c FROM capsules WHERE quality_grade IS NOT NULL GROUP BY quality_grade"
  ).all() as Array<{ quality_grade: string; c: number }>;
  const byGrade: Record<string, number> = {};
  for (const r of gradeRows) byGrade[r.quality_grade] = r.c;

  const typeRows = d.prepare(
    "SELECT skill_type, COUNT(*) as c FROM capsules WHERE skill_type IS NOT NULL GROUP BY skill_type"
  ).all() as Array<{ skill_type: string; c: number }>;
  const bySkillType: Record<string, number> = {};
  for (const r of typeRows) bySkillType[r.skill_type] = r.c;

  return { total, scored, avgScore, byGrade, bySkillType };
}
