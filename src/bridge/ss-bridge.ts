/**
 * ss-bridge.ts - Skill_Seekers v3.0.0 Python 桥接层
 *
 * 通过 python3 -c 内联执行调用 SS v3.0.0 真实 API:
 * - cli: LlmsTxtDetector / LlmsTxtDownloader / LlmsTxtParser
 * - sync: ChangeDetector (URL 变更检测)
 * - embedding: EmbeddingGenerator (需 OPENAI_API_KEY)
 *
 * 设计原则：
 * - 每次调用独立进程，故障隔离
 * - JSON IPC (stdout)
 * - 超时保护 + 重试
 */

import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { isSSAvailable } from "./ss-health.js";

const execFileAsync = promisify(execFile);

// ============================================================
// 配置与类型
// ============================================================

export interface SSBridgeConfig {
  pythonPath: string;
  timeout: number;
  maxBuffer: number;
}

export interface SSCommandResult {
  success: boolean;
  data: any;
  error?: string;
  duration: number;
}

export interface LlmsTxtDetection {
  url: string;
  variant: string;
}

export interface LlmsTxtParsedSection {
  title: string;
  urls: string[];
  content: string;
}

export interface PageChangeResult {
  url: string;
  changed: boolean;
  new_hash: string;
  content?: string;
  diff?: string;
}

const DEFAULT_CONFIG: SSBridgeConfig = {
  pythonPath: "python3",
  timeout: 30_000,
  maxBuffer: 10 * 1024 * 1024,
};

// ============================================================
// SSBridge 类 - 适配 SS v3.0.0 真实 API
// ============================================================

export class SSBridge {
  private config: SSBridgeConfig;
  private available: boolean | null = null;

  constructor(config?: Partial<SSBridgeConfig>) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  // ─── 可用性检查 ───

  async checkAvailability(): Promise<boolean> {
    if (this.available !== null) return this.available;
    this.available = await isSSAvailable(this.config.pythonPath);
    return this.available;
  }

  // ─── llms.txt 发现 ───

  /**
   * 检测网站是否有 llms.txt 文件
   */
  async detectLlmsTxt(baseUrl: string): Promise<SSCommandResult> {
    return this.runPython(`
import json
from skill_seekers.cli import LlmsTxtDetector
detector = LlmsTxtDetector("${this.escPy(baseUrl)}")
results = detector.detect_all()
print(json.dumps({"detections": results or [], "base_url": "${this.escPy(baseUrl)}"}))
`);
  }

  /**
   * 下载 llms.txt 内容
   */
  async downloadLlmsTxt(url: string): Promise<SSCommandResult> {
    return this.runPython(`
import json
from skill_seekers.cli import LlmsTxtDownloader
downloader = LlmsTxtDownloader("${this.escPy(url)}")
content = downloader.download()
filename = downloader.get_proper_filename()
print(json.dumps({"content": content, "filename": filename, "url": "${this.escPy(url)}"}))
`);
  }

  /**
   * 解析 llms.txt 内容为结构化数据
   */
  async parseLlmsTxt(content: string, baseUrl?: string): Promise<SSCommandResult> {
    // 通过 stdin 传递大内容，避免命令行长度限制
    return this.runPythonWithStdin(`
import json, sys
content = sys.stdin.read()
from skill_seekers.cli import LlmsTxtParser
parser = LlmsTxtParser(content${baseUrl ? `, "${this.escPy(baseUrl)}"` : ""})
parsed = parser.parse()
urls = parser.extract_urls()
print(json.dumps({"sections": parsed, "urls": urls}))
`, content);
  }

  /**
   * 一站式：检测 + 下载 + 解析 llms.txt
   */
  async importLlmsTxt(baseUrl: string): Promise<SSCommandResult> {
    return this.runPython(`
import json
from skill_seekers.cli import LlmsTxtDetector, LlmsTxtDownloader, LlmsTxtParser

detector = LlmsTxtDetector("${this.escPy(baseUrl)}")
detections = detector.detect_all()
if not detections:
    print(json.dumps({"found": False, "base_url": "${this.escPy(baseUrl)}"}))
else:
    results = []
    for det in detections:
        downloader = LlmsTxtDownloader(det["url"])
        content = downloader.download()
        if content:
            parser = LlmsTxtParser(content, "${this.escPy(baseUrl)}")
            parsed = parser.parse()
            urls = parser.extract_urls()
            results.append({
                "url": det["url"],
                "variant": det.get("variant", "standard"),
                "sections": parsed,
                "urls": urls,
                "content_length": len(content),
            })
    print(json.dumps({"found": True, "base_url": "${this.escPy(baseUrl)}", "results": results}))
`, 60_000);
  }

  // ─── URL 变更监控 ───

  /**
   * 检查 URL 内容是否有变更
   */
  async checkPageChange(url: string, oldHash?: string): Promise<SSCommandResult> {
    return this.runPython(`
import json
from datetime import datetime
from skill_seekers.sync import ChangeDetector
detector = ChangeDetector(timeout=20)
result = detector.check_page("${this.escPy(url)}"${oldHash ? `, old_hash="${this.escPy(oldHash)}"` : ""}, generate_diff=${oldHash ? "True" : "False"})
print(json.dumps(result.model_dump(), default=lambda o: o.isoformat() if isinstance(o, datetime) else str(o)))
`);
  }

  /**
   * 批量检查多个 URL 变更
   */
  async checkPagesChange(urls: string[], previousHashes: Record<string, string>): Promise<SSCommandResult> {
    const urlsJson = JSON.stringify(urls);
    const hashesJson = JSON.stringify(previousHashes);
    return this.runPythonWithStdin(`
import json, sys
data = json.loads(sys.stdin.read())
from skill_seekers.sync import ChangeDetector
detector = ChangeDetector(timeout=20)
result = detector.check_pages(data["urls"], data["hashes"], generate_diffs=True)
print(json.dumps(result.model_dump(), default=lambda o: o.isoformat() if hasattr(o, 'isoformat') else str(o)))
`, JSON.stringify({ urls, hashes: previousHashes }), 60_000);
  }

  /**
   * 获取页面内容和哈希值（用于首次建立基线）
   */
  async fetchPage(url: string): Promise<SSCommandResult> {
    return this.runPython(`
import json
from skill_seekers.sync import ChangeDetector
detector = ChangeDetector(timeout=20)
content, headers = detector.fetch_page("${this.escPy(url)}")
hash_val = detector.compute_hash(content)
print(json.dumps({"url": "${this.escPy(url)}", "hash": hash_val, "content_length": len(content), "content_preview": content[:2000]}))
`);
  }

  // ─── 工具函数 ───

  /**
   * 获取 SS 版本
   */
  async getVersion(): Promise<string> {
    const result = await this.runPython(`
import skill_seekers; print(skill_seekers.__version__)
`);
    return result.success ? String(result.data).trim() : "unknown";
  }

  /**
   * 读取参考文件（skill 目录中的文件）
   */
  async readReferenceFiles(skillDir: string): Promise<SSCommandResult> {
    return this.runPython(`
import json
from skill_seekers.cli import read_reference_files
result = read_reference_files("${this.escPy(skillDir)}")
# Convert to serializable format
output = {}
for k, v in result.items():
    output[k] = {kk: str(vv)[:5000] for kk, vv in v.items()} if isinstance(v, dict) else str(v)[:5000]
print(json.dumps(output))
`);
  }

  // ─── 底层执行 ───

  private escPy(s: string): string {
    return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
  }

  private async runPython(code: string, timeout?: number): Promise<SSCommandResult> {
    const start = Date.now();

    if (!(await this.checkAvailability())) {
      return {
        success: false,
        data: null,
        error: "Skill_Seekers not available. Install: pip install skill-seekers",
        duration: Date.now() - start,
      };
    }

    try {
      const { stdout, stderr } = await execFileAsync(
        this.config.pythonPath,
        ["-c", code],
        {
          timeout: timeout || this.config.timeout,
          maxBuffer: this.config.maxBuffer,
          env: { ...process.env, PYTHONIOENCODING: "utf-8", PYTHONUNBUFFERED: "1" },
        }
      );

      return {
        success: true,
        data: this.parseOutput(stdout),
        duration: Date.now() - start,
      };
    } catch (err: any) {
      return {
        success: false,
        data: null,
        error: this.formatError(err),
        duration: Date.now() - start,
      };
    }
  }

  private async runPythonWithStdin(code: string, stdin: string, timeout?: number): Promise<SSCommandResult> {
    const start = Date.now();

    if (!(await this.checkAvailability())) {
      return {
        success: false,
        data: null,
        error: "Skill_Seekers not available. Install: pip install skill-seekers",
        duration: Date.now() - start,
      };
    }

    return new Promise((resolve) => {
      const child = execFile(
        this.config.pythonPath,
        ["-c", code],
        {
          timeout: timeout || this.config.timeout,
          maxBuffer: this.config.maxBuffer,
          env: { ...process.env, PYTHONIOENCODING: "utf-8", PYTHONUNBUFFERED: "1" },
        },
        (err, stdout, stderr) => {
          if (err) {
            resolve({
              success: false,
              data: null,
              error: this.formatError(err),
              duration: Date.now() - start,
            });
          } else {
            resolve({
              success: true,
              data: this.parseOutput(stdout),
              duration: Date.now() - start,
            });
          }
        }
      );
      child.stdin?.write(stdin);
      child.stdin?.end();
    });
  }

  private parseOutput(stdout: string): any {
    const trimmed = stdout.trim();
    if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
      try { return JSON.parse(trimmed); } catch {}
    }
    const jsonMatch = trimmed.match(/(\{[\s\S]*\}|\[[\s\S]*\])\s*$/);
    if (jsonMatch) {
      try { return JSON.parse(jsonMatch[1]); } catch {}
    }
    return trimmed;
  }

  private formatError(err: any): string {
    if (err.stderr) {
      const lines = err.stderr.trim().split("\n");
      const errorLines = lines.filter((l: string) => /error|exception|traceback|failed/i.test(l));
      return (errorLines.length > 0 ? errorLines.slice(-3) : lines.slice(-3)).join("\n");
    }
    return err.message || String(err);
  }
}

// ============================================================
// 单例工厂
// ============================================================

let bridgeInstance: SSBridge | null = null;

export function getSSBridge(config?: Partial<SSBridgeConfig>): SSBridge {
  if (!bridgeInstance) {
    bridgeInstance = new SSBridge(config);
  }
  return bridgeInstance;
}

export function resetSSBridge(): void {
  bridgeInstance = null;
}
