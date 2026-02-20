/**
 * 安全扫描模块 - 检测胶囊中的注入、恶意代码等风险
 */
import type { SecurityIssue, ScanResult } from "./types.js";
import { getDb, getCapsule, updateSecurityStatus } from "./db.js";

// 危险模式定义
const PATTERNS: { pattern: RegExp; severity: SecurityIssue["severity"]; category: string; description: string }[] = [
  // 命令注入
  { pattern: /\$\(.*\)|`.*`|;\s*(rm|curl|wget|bash|sh|nc|ncat)\b/gi, severity: "critical", category: "command-injection", description: "疑似命令注入或危险 shell 命令" },
  { pattern: /\beval\s*\(|new\s+Function\s*\(/gi, severity: "high", category: "code-injection", description: "动态代码执行 (eval/Function)" },
  { pattern: /\bexec\s*\(|child_process|spawn\s*\(/gi, severity: "high", category: "command-execution", description: "系统命令执行" },

  // 环境变量窃取
  { pattern: /process\.env\[?['"]?(API_KEY|SECRET|TOKEN|PASSWORD|PRIVATE_KEY)/gi, severity: "critical", category: "credential-theft", description: "疑似窃取敏感环境变量" },
  { pattern: /\b(AKIA[0-9A-Z]{16}|sk-[a-zA-Z0-9]{20,})\b/g, severity: "critical", category: "hardcoded-secret", description: "疑似硬编码密钥" },

  // 恶意 URL
  { pattern: /https?:\/\/[^\s]*\.(ru|cn|tk|ml|ga|cf)\/[^\s]*\.(exe|sh|bat|ps1|dll)/gi, severity: "high", category: "suspicious-url", description: "可疑下载链接" },
  { pattern: /data:text\/html|javascript:/gi, severity: "medium", category: "xss-vector", description: "潜在 XSS 载体" },

  // 文件系统危险操作
  { pattern: /rm\s+-rf\s+[\/~]|rmdir\s+\/|format\s+[cC]:/gi, severity: "critical", category: "destructive-command", description: "破坏性文件系统操作" },
  { pattern: /chmod\s+777|chmod\s+\+s/gi, severity: "high", category: "permission-escalation", description: "危险权限修改" },

  // 网络外传
  { pattern: /\bcurl\b.*\|\s*bash|\bwget\b.*\|\s*sh/gi, severity: "critical", category: "remote-execution", description: "远程代码下载执行" },
  { pattern: /\b(nc|ncat|netcat)\s+-[elp]/gi, severity: "high", category: "reverse-shell", description: "疑似反向 Shell" },

  // SQL 注入
  { pattern: /(['"];\s*DROP\s+TABLE|UNION\s+SELECT|OR\s+1\s*=\s*1)/gi, severity: "high", category: "sql-injection", description: "疑似 SQL 注入" },

  // 低风险提示
  { pattern: /\bsudo\b/gi, severity: "low", category: "privilege-escalation", description: "使用 sudo 提权" },
  { pattern: /--no-verify|--force/gi, severity: "info", category: "safety-bypass", description: "跳过安全检查标志" },
];

export function scanCapsule(capsuleId: string): ScanResult | null {
  const capsule = getCapsule(capsuleId);
  if (!capsule) return null;

  const issues: SecurityIssue[] = [];

  // 扫描每个 Gene 的内容
  for (const gene of capsule.genes) {
    for (const p of PATTERNS) {
      const matches = gene.content.match(p.pattern);
      if (matches) {
        issues.push({
          severity: p.severity,
          category: p.category,
          description: p.description,
          location: gene.title,
          matched: matches[0].substring(0, 100),
        });
      }
    }
  }

  // 扫描胶囊描述
  for (const p of PATTERNS) {
    const matches = capsule.description.match(p.pattern);
    if (matches) {
      issues.push({
        severity: p.severity,
        category: p.category,
        description: p.description,
        location: "capsule.description",
        matched: matches[0].substring(0, 100),
      });
    }
  }

  const status = issues.some(i => i.severity === "critical") ? "danger"
    : issues.some(i => i.severity === "high") ? "warning"
    : "safe";

  const result: ScanResult = {
    capsule_id: capsuleId,
    capsule_name: capsule.name,
    status,
    issues,
    scanned_at: new Date().toISOString(),
  };

  updateSecurityStatus(capsuleId, status, issues);
  return result;
}

// 批量扫描所有胶囊
export function scanAllCapsules(): { total: number; safe: number; warning: number; danger: number } {
  const d = getDb();
  const ids = d.prepare("SELECT id FROM capsules").all() as { id: string }[];
  let safe = 0, warning = 0, danger = 0;

  for (const { id } of ids) {
    const r = scanCapsule(id);
    if (r) {
      if (r.status === "safe") safe++;
      else if (r.status === "warning") warning++;
      else danger++;
    }
  }

  return { total: ids.length, safe, warning, danger };
}
