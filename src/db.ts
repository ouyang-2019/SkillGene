import Database from "better-sqlite3";
import { randomUUID } from "crypto";
import path from "path";
import { fileURLToPath } from "url";
import type { Capsule, Gene, SearchResult, EvolveFeedback } from "./types.js";

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

export function searchCapsules(query: string, limit = 10): SearchResult[] {
  const d = getDb();
  const trimmed = query.trim();
  if (!trimmed) return [];

  // 尝试 FTS5 搜索，回退到 LIKE 搜索
  try {
    // 将查询转为 FTS5 安全格式：每个词加双引号
    const safeQuery = trimmed
      .split(/\s+/)
      .map(w => `"${w.replace(/"/g, '""')}"`)
      .join(" OR ");

    const results = d.prepare(`
      SELECT c.id, c.name, c.description, c.domain, c.tags, c.rating, c.usage_count,
             rank
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

  // LIKE 回退搜索（支持中文等 FTS5 不擅长的场景）
  const likePattern = `%${trimmed}%`;
  return d.prepare(`
    SELECT id, name, description, domain, tags, rating, usage_count, 0 as rank
    FROM capsules
    WHERE name LIKE ? OR description LIKE ? OR tags LIKE ?
    ORDER BY usage_count DESC
    LIMIT ?
  `).all(likePattern, likePattern, likePattern, limit) as SearchResult[];
}

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

export function contributeCapsule(capsule: Capsule): string {
  const d = getDb();
  const id = capsule.id || randomUUID();
  const tags = JSON.stringify(capsule.tags);

  const insertCapsule = d.prepare(`
    INSERT INTO capsules (id, name, description, domain, tags, version)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const insertGene = d.prepare(`
    INSERT INTO genes (id, capsule_id, title, content, gene_type, order_index)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const tx = d.transaction(() => {
    insertCapsule.run(id, capsule.name, capsule.description, capsule.domain, tags, capsule.version ?? 1);
    for (let i = 0; i < capsule.genes.length; i++) {
      const g = capsule.genes[i];
      insertGene.run(g.id || randomUUID(), id, g.title, g.content, g.gene_type, i);
    }
  });
  tx();
  return id;
}

export function evolveCapsule(feedback: EvolveFeedback): boolean {
  const d = getDb();
  const capsule = d.prepare("SELECT * FROM capsules WHERE id = ?").get(feedback.capsule_id) as any;
  if (!capsule) return false;

  const insertGene = d.prepare(`
    INSERT INTO genes (id, capsule_id, title, content, gene_type, order_index)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const tx = d.transaction(() => {
    // 版本递增
    d.prepare(`
      UPDATE capsules SET version = version + 1, updated_at = datetime('now')
      WHERE id = ?
    `).run(feedback.capsule_id);

    // 添加新 Gene
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
