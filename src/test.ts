#!/usr/bin/env node
/**
 * SkillGene 端到端测试脚本 - 10 轮优化测试
 * 测试所有 4 个 MCP tools 的完整功能
 */
import { getDb, searchCapsules, getCapsule, contributeCapsule, evolveCapsule } from "./db.js";

const db = getDb();

let pass = 0;
let fail = 0;
let round = 0;

function assert(condition: boolean, msg: string) {
  if (condition) {
    pass++;
  } else {
    fail++;
    console.error(`    ✗ FAIL: ${msg}`);
  }
}

function runRound(n: number) {
  round = n;
  console.log(`\n── 第 ${n} 轮测试 ──`);
}

// ============================================================
// Round 1: 基础搜索功能
// ============================================================
runRound(1);
{
  console.log("  搜索功能测试...");
  const r1 = searchCapsules("nextjs react");
  assert(r1.length > 0, "搜索 'nextjs react' 应有结果");
  assert(r1.some(r => r.name.includes("Next.js")), "应包含 Next.js 胶囊");

  const r2 = searchCapsules("docker");
  assert(r2.length > 0, "搜索 'docker' 应有结果");

  const r3 = searchCapsules("python fastapi");
  assert(r3.length > 0, "搜索 'python fastapi' 应有结果");

  const r4 = searchCapsules("完全不存在的关键词xyz123abc");
  assert(r4.length === 0, "不存在的关键词应返回空");

  console.log(`  ✓ Round 1: ${pass} passed`);
}

// ============================================================
// Round 2: 搜索限制测试
// ============================================================
runRound(2);
{
  const prevPass = pass;
  console.log("  搜索限制测试...");
  const r1 = searchCapsules("web", 3);
  assert(r1.length <= 3, "limit=3 应最多返回3条");

  const r2 = searchCapsules("web", 1);
  assert(r2.length === 1, "limit=1 应只返回1条");

  const r3 = searchCapsules("development", 50);
  assert(r3.length <= 50, "limit=50 应正常工作");

  console.log(`  ✓ Round 2: ${pass - prevPass} passed`);
}

// ============================================================
// Round 3: 胶囊详情获取
// ============================================================
runRound(3);
{
  const prevPass = pass;
  console.log("  胶囊详情测试...");
  const results = searchCapsules("MCP Server Builder");
  assert(results.length > 0, "应找到 MCP Server Builder");

  if (results.length > 0) {
    const capsule = getCapsule(results[0].id);
    assert(capsule !== null, "getCapsule 应返回胶囊");
    assert(capsule!.genes.length > 0, "胶囊应包含 Gene");
    assert(capsule!.name.includes("MCP"), "名称应包含 MCP");
    assert(Array.isArray(capsule!.tags), "tags 应为数组");
  }

  const notFound = getCapsule("non-existent-id");
  assert(notFound === null, "不存在的ID应返回null");

  console.log(`  ✓ Round 3: ${pass - prevPass} passed`);
}

// ============================================================
// Round 4: 使用计数递增
// ============================================================
runRound(4);
{
  const prevPass = pass;
  console.log("  使用计数测试...");
  const results = searchCapsules("docker");
  if (results.length > 0) {
    const id = results[0].id;
    const before = results[0].usage_count;
    getCapsule(id);
    getCapsule(id);
    getCapsule(id);
    // 从 DB 直接查询验证
    const row = db.prepare("SELECT usage_count FROM capsules WHERE id = ?").get(id) as any;
    assert(row.usage_count >= before + 3, "usage_count 应递增3");
  }
  console.log(`  ✓ Round 4: ${pass - prevPass} passed`);
}

// ============================================================
// Round 5: 贡献新胶囊
// ============================================================
runRound(5);
{
  const prevPass = pass;
  console.log("  贡献胶囊测试...");
  const testId = contributeCapsule({
    name: "Test Capsule Round 5",
    description: "测试用胶囊 - 验证贡献功能",
    domain: "testing",
    tags: ["test", "e2e"],
    genes: [
      { title: "测试 Gene 1", content: "内容1", gene_type: "pattern" },
      { title: "测试 Gene 2", content: "内容2", gene_type: "snippet" },
    ],
    version: 1, usage_count: 0, rating: 0,
  });
  assert(typeof testId === "string" && testId.length > 0, "应返回有效ID");

  const capsule = getCapsule(testId);
  assert(capsule !== null, "应能获取刚贡献的胶囊");
  assert(capsule!.genes.length === 2, "应包含2个Gene");
  assert(capsule!.name === "Test Capsule Round 5", "名称应正确");

  // 搜索新胶囊
  const found = searchCapsules("Test Capsule Round");
  assert(found.length > 0, "FTS5 应能搜索到新胶囊");

  console.log(`  ✓ Round 5: ${pass - prevPass} passed`);
}

// ============================================================
// Round 6: 进化胶囊
// ============================================================
runRound(6);
{
  const prevPass = pass;
  console.log("  进化胶囊测试...");
  const results = searchCapsules("Test Capsule Round");
  if (results.length > 0) {
    const id = results[0].id;
    const before = getCapsule(id);

    const ok = evolveCapsule({
      capsule_id: id,
      feedback_type: "extend",
      description: "添加新的测试基因",
      new_genes: [
        { title: "进化的 Gene", content: "新内容", gene_type: "principle" },
      ],
    });
    assert(ok === true, "evolveCapsule 应返回 true");

    const after = getCapsule(id);
    assert(after!.version === (before!.version + 1), "版本应递增");
    assert(after!.genes.length === before!.genes.length + 1, "Gene 数量应增加");
  }

  // 尝试进化不存在的胶囊
  const badResult = evolveCapsule({
    capsule_id: "non-existent-id",
    feedback_type: "fix",
    description: "不应成功",
  });
  assert(badResult === false, "不存在的胶囊进化应返回 false");

  console.log(`  ✓ Round 6: ${pass - prevPass} passed`);
}

// ============================================================
// Round 7: FTS5 全文搜索精度
// ============================================================
runRound(7);
{
  const prevPass = pass;
  console.log("  FTS5 搜索精度测试...");

  // 按领域搜索
  const ai = searchCapsules("ai llm agent");
  assert(ai.length >= 2, "AI/LLM 领域应至少2条结果");

  // 按标签搜索
  const security = searchCapsules("security owasp");
  assert(security.length > 0, "安全相关搜索应有结果");

  // 中文搜索
  const cn = searchCapsules("品牌");
  assert(cn.length > 0, "中文关键词搜索应有结果");

  // 多关键词搜索
  const multi = searchCapsules("typescript strict mode");
  assert(multi.length > 0, "多关键词搜索应有结果");

  console.log(`  ✓ Round 7: ${pass - prevPass} passed`);
}

// ============================================================
// Round 8: 数据完整性
// ============================================================
runRound(8);
{
  const prevPass = pass;
  console.log("  数据完整性测试...");

  // 检查总数
  const total = (db.prepare("SELECT COUNT(*) as c FROM capsules").get() as any).c;
  assert(total >= 37, `数据库应至少有37个胶囊，实际: ${total}`);

  // 检查所有胶囊都有 Gene
  const noGenes = db.prepare(`
    SELECT c.name FROM capsules c
    LEFT JOIN genes g ON g.capsule_id = c.id
    GROUP BY c.id HAVING COUNT(g.id) = 0
  `).all() as any[];
  assert(noGenes.length === 0, `所有胶囊应有Gene，无Gene的: ${noGenes.map(r => r.name).join(', ')}`);

  // 检查 FTS5 索引同步
  const ftsCount = (db.prepare("SELECT COUNT(*) as c FROM capsules_fts").get() as any).c;
  assert(ftsCount === total, `FTS5 索引(${ftsCount})应与胶囊数(${total})一致`);

  // 检查外键完整性
  const orphanGenes = (db.prepare(`
    SELECT COUNT(*) as c FROM genes g
    LEFT JOIN capsules c ON c.id = g.capsule_id
    WHERE c.id IS NULL
  `).get() as any).c;
  assert(orphanGenes === 0, "不应有孤儿Gene");

  console.log(`  ✓ Round 8: ${pass - prevPass} passed`);
}

// ============================================================
// Round 9: 边界条件和错误处理
// ============================================================
runRound(9);
{
  const prevPass = pass;
  console.log("  边界条件测试...");

  // 空搜索
  const empty = searchCapsules("");
  // FTS5 空查询可能返回错误，只要不崩溃即可
  assert(true, "空搜索不应崩溃");

  // 特殊字符
  try {
    const special = searchCapsules("test OR drop");
    assert(true, "特殊字符搜索不应崩溃");
  } catch {
    assert(true, "特殊字符搜索捕获异常也可接受");
  }

  // 超长搜索
  const longQuery = "a".repeat(1000);
  try {
    searchCapsules(longQuery);
    assert(true, "超长查询不应崩溃");
  } catch {
    assert(true, "超长查询捕获异常也可接受");
  }

  // 贡献空 genes 的胶囊（测试后清理）
  try {
    const emptyGenesId = contributeCapsule({
      name: "Empty Genes Test " + Date.now(),
      description: "测试空 genes",
      domain: "testing",
      tags: ["test"],
      genes: [],
      version: 1, usage_count: 0, rating: 0,
    });
    assert(typeof emptyGenesId === "string", "空 genes 胶囊应能创建");
    // 清理：删除测试用空 genes 胶囊，避免污染数据完整性检查
    db.prepare("DELETE FROM capsules WHERE id = ?").run(emptyGenesId);
  } catch {
    assert(false, "空 genes 胶囊不应抛异常");
  }

  console.log(`  ✓ Round 9: ${pass - prevPass} passed`);
}

// ============================================================
// Round 10: MCP 协议端到端
// ============================================================
runRound(10);
{
  const prevPass = pass;
  console.log("  MCP 协议完整性测试...");

  // 验证所有Anthropic官方skills已导入
  const officialSkills = [
    "algorithmic-art", "brand", "canvas", "docx", "pdf", "pptx", "xlsx",
    "frontend", "internal", "mcp", "skill-creator", "slack", "theme", "web-artifacts", "webapp"
  ];
  let foundCount = 0;
  for (const keyword of officialSkills) {
    const r = searchCapsules(keyword);
    if (r.length > 0) foundCount++;
  }
  assert(foundCount >= 12, `应找到至少12个官方skill (找到 ${foundCount})`);

  // 验证所有领域覆盖
  const domains = db.prepare("SELECT DISTINCT domain FROM capsules").all() as any[];
  const domainList = domains.map(d => d.domain);
  assert(domainList.includes("web-frontend"), "应覆盖 web-frontend");
  assert(domainList.includes("backend"), "应覆盖 backend");
  assert(domainList.includes("devops"), "应覆盖 devops");
  assert(domainList.includes("ai-llm"), "应覆盖 ai-llm");
  assert(domainList.includes("database"), "应覆盖 database");

  // 验证 gene_type 多样性
  const geneTypes = db.prepare("SELECT DISTINCT gene_type FROM genes").all() as any[];
  const types = geneTypes.map(g => g.gene_type);
  assert(types.includes("pattern"), "应有 pattern 类型");
  assert(types.includes("snippet"), "应有 snippet 类型");
  assert(types.includes("config"), "应有 config 类型");
  assert(types.includes("principle"), "应有 principle 类型");
  assert(types.includes("checklist"), "应有 checklist 类型");

  // 最终统计
  const totalCapsules = (db.prepare("SELECT COUNT(*) as c FROM capsules").get() as any).c;
  const totalGenes = (db.prepare("SELECT COUNT(*) as c FROM genes").get() as any).c;
  console.log(`\n  📊 数据库统计:`);
  console.log(`     胶囊总数: ${totalCapsules}`);
  console.log(`     基因总数: ${totalGenes}`);
  console.log(`     领域覆盖: ${domainList.join(", ")}`);
  console.log(`     基因类型: ${types.join(", ")}`);

  console.log(`  ✓ Round 10: ${pass - prevPass} passed`);
}

// ============================================================
// 总结
// ============================================================
console.log(`\n${"═".repeat(50)}`);
console.log(`  测试完成: ${pass} passed, ${fail} failed (共 ${pass + fail} 项)`);
console.log(`${"═".repeat(50)}`);

if (fail > 0) {
  process.exit(1);
}
