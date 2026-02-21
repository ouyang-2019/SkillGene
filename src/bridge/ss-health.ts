/**
 * ss-health.ts - Skill_Seekers v3.0.0 健康检查
 *
 * 检测真实可用模块:
 * - cli: LlmsTxtDetector / LlmsTxtDownloader / LlmsTxtParser
 * - sync: ChangeDetector / SyncMonitor
 * - embedding: EmbeddingGenerator / EmbeddingCache
 */

import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export interface SSHealthStatus {
  available: boolean;
  pythonVersion?: string;
  ssVersion?: string;
  features: string[];
  error?: string;
}

const DEFAULT_PYTHON_PATHS = ["python3", "python"];
const MIN_PYTHON_VERSION = "3.8.0";

async function detectPython(pythonPath?: string): Promise<{ path: string; version: string } | null> {
  const candidates = pythonPath ? [pythonPath] : DEFAULT_PYTHON_PATHS;
  for (const py of candidates) {
    try {
      const { stdout } = await execFileAsync(py, ["--version"], { timeout: 5000 });
      const match = stdout.trim().match(/Python\s+(\d+\.\d+\.\d+)/);
      if (match) return { path: py, version: match[1] };
    } catch {}
  }
  return null;
}

function compareVersions(a: string, b: string): number {
  const pa = a.split(".").map(Number);
  const pb = b.split(".").map(Number);
  for (let i = 0; i < 3; i++) {
    if ((pa[i] || 0) !== (pb[i] || 0)) return (pa[i] || 0) - (pb[i] || 0);
  }
  return 0;
}

/**
 * 检测 SS v3.0.0 真实可用功能
 */
async function detectFeatures(pythonPath: string): Promise<string[]> {
  const features: string[] = [];
  const checks = [
    { code: "from skill_seekers.cli import LlmsTxtDetector", feature: "llmstxt-detect" },
    { code: "from skill_seekers.cli import LlmsTxtDownloader", feature: "llmstxt-download" },
    { code: "from skill_seekers.cli import LlmsTxtParser", feature: "llmstxt-parse" },
    { code: "from skill_seekers.cli import read_reference_files", feature: "reference-files" },
    { code: "from skill_seekers.sync import ChangeDetector", feature: "change-detect" },
    { code: "from skill_seekers.sync import SyncMonitor", feature: "sync-monitor" },
    { code: "from skill_seekers.embedding import EmbeddingGenerator", feature: "embedding" },
    { code: "from skill_seekers.embedding import EmbeddingCache", feature: "embedding-cache" },
  ];

  // 批量检测，一次 Python 调用
  const checkCode = checks.map(c =>
    `try:\n    ${c.code}\n    features.append("${c.feature}")\nexcept: pass`
  ).join("\n");

  try {
    const { stdout } = await execFileAsync(pythonPath, [
      "-c",
      `import json\nfeatures = []\n${checkCode}\nprint(json.dumps(features))`,
    ], { timeout: 10000 });
    const detected = JSON.parse(stdout.trim());
    if (Array.isArray(detected)) return detected;
  } catch {}

  return features;
}

/**
 * 完整健康检查
 */
export async function checkSSHealth(pythonPath?: string): Promise<SSHealthStatus> {
  const python = await detectPython(pythonPath);
  if (!python) {
    return { available: false, features: [], error: "Python not found. Install Python 3.8+." };
  }

  if (compareVersions(python.version, MIN_PYTHON_VERSION) < 0) {
    return {
      available: false,
      pythonVersion: python.version,
      features: [],
      error: `Python ${python.version} < minimum ${MIN_PYTHON_VERSION}.`,
    };
  }

  // 检测 SS 版本
  let ssVersion: string | undefined;
  try {
    const { stdout } = await execFileAsync(python.path, [
      "-c", "import skill_seekers; print(skill_seekers.__version__)",
    ], { timeout: 10000 });
    ssVersion = stdout.trim();
  } catch {
    return {
      available: false,
      pythonVersion: python.version,
      features: [],
      error: "skill-seekers not installed. Run: pip install skill-seekers",
    };
  }

  const features = await detectFeatures(python.path);

  return {
    available: true,
    pythonVersion: python.version,
    ssVersion,
    features,
  };
}

/**
 * 快速检测 (缓存 1 分钟)
 */
let cachedStatus: SSHealthStatus | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = 60_000;

export async function isSSAvailable(pythonPath?: string): Promise<boolean> {
  const now = Date.now();
  if (cachedStatus && now - cacheTimestamp < CACHE_TTL) {
    return cachedStatus.available;
  }
  cachedStatus = await checkSSHealth(pythonPath);
  cacheTimestamp = now;
  return cachedStatus.available;
}

export function getCachedStatus(): SSHealthStatus | null {
  return cachedStatus;
}

export function clearHealthCache(): void {
  cachedStatus = null;
  cacheTimestamp = 0;
}
