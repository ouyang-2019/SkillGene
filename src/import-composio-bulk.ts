#!/usr/bin/env node
/**
 * 批量导入 ComposioHQ/awesome-claude-skills/composio-skills/ 下的 832 个 SaaS 自动化 skills
 * 自动生成于 2026-02-20
 */
import { getDb, contributeCapsule } from "./db.js";

getDb();

const capsules = [
  {
    "name": "ably-automation",
    "description": "Automate Ably tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "ably",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ably 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ably 账户（OAuth/API Key）\n3. 使用 ABLY 前缀工具\n\n文档: composio.dev/toolkits/ably",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "abstract-automation",
    "description": "Automate Abstract tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "abstract",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Abstract 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Abstract 账户（OAuth/API Key）\n3. 使用 ABSTRACT 前缀工具\n\n文档: composio.dev/toolkits/abstract",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "abuselpdb-automation",
    "description": "Automate Abuselpdb tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "abuselpdb",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Abuselpdb 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Abuselpdb 账户（OAuth/API Key）\n3. 使用 ABUSELPDB 前缀工具\n\n文档: composio.dev/toolkits/abuselpdb",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "abyssale-automation",
    "description": "Automate Abyssale tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "abyssale",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Abyssale 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Abyssale 账户（OAuth/API Key）\n3. 使用 ABYSSALE 前缀工具\n\n文档: composio.dev/toolkits/abyssale",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "accelo-automation",
    "description": "Automate Accelo tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "accelo",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Accelo 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Accelo 账户（OAuth/API Key）\n3. 使用 ACCELO 前缀工具\n\n文档: composio.dev/toolkits/accelo",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "accredible-certificates-automation",
    "description": "Automate Accredible Certificates tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "accredible-certificates",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Accredible Certificates 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Accredible Certificates 账户（OAuth/API Key）\n3. 使用 ACCREDIBLE-CERTIFICATES 前缀工具\n\n文档: composio.dev/toolkits/accredible-certificates",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "acculynx-automation",
    "description": "Automate Acculynx tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "acculynx",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Acculynx 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Acculynx 账户（OAuth/API Key）\n3. 使用 ACCULYNX 前缀工具\n\n文档: composio.dev/toolkits/acculynx",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "active-campaign-automation",
    "description": "Automate ActiveCampaign tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "active-campaign",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Active Campaign 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Active Campaign 账户（OAuth/API Key）\n3. 使用 ACTIVE-CAMPAIGN 前缀工具\n\n文档: composio.dev/toolkits/active-campaign",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "addresszen-automation",
    "description": "Automate Addresszen tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "addresszen",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Addresszen 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Addresszen 账户（OAuth/API Key）\n3. 使用 ADDRESSZEN 前缀工具\n\n文档: composio.dev/toolkits/addresszen",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "adobe-automation",
    "description": "Automate Adobe tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "adobe",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Adobe 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Adobe 账户（OAuth/API Key）\n3. 使用 ADOBE 前缀工具\n\n文档: composio.dev/toolkits/adobe",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "adrapid-automation",
    "description": "Automate Adrapid tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "adrapid",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Adrapid 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Adrapid 账户（OAuth/API Key）\n3. 使用 ADRAPID 前缀工具\n\n文档: composio.dev/toolkits/adrapid",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "adyntel-automation",
    "description": "Automate Adyntel tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "adyntel",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Adyntel 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Adyntel 账户（OAuth/API Key）\n3. 使用 ADYNTEL 前缀工具\n\n文档: composio.dev/toolkits/adyntel",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "aero-workflow-automation",
    "description": "Automate Aero Workflow tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "aero-workflow",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Aero Workflow 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Aero Workflow 账户（OAuth/API Key）\n3. 使用 AERO-WORKFLOW 前缀工具\n\n文档: composio.dev/toolkits/aero-workflow",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "aeroleads-automation",
    "description": "Automate Aeroleads tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "aeroleads",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Aeroleads 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Aeroleads 账户（OAuth/API Key）\n3. 使用 AEROLEADS 前缀工具\n\n文档: composio.dev/toolkits/aeroleads",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "affinda-automation",
    "description": "Automate Affinda tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "affinda",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Affinda 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Affinda 账户（OAuth/API Key）\n3. 使用 AFFINDA 前缀工具\n\n文档: composio.dev/toolkits/affinda",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "affinity-automation",
    "description": "Automate Affinity tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "affinity",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Affinity 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Affinity 账户（OAuth/API Key）\n3. 使用 AFFINITY 前缀工具\n\n文档: composio.dev/toolkits/affinity",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "agencyzoom-automation",
    "description": "Automate Agencyzoom tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "meetings-scheduling",
    "tags": [
      "agencyzoom",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Agencyzoom 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Agencyzoom 账户（OAuth/API Key）\n3. 使用 AGENCYZOOM 前缀工具\n\n文档: composio.dev/toolkits/agencyzoom",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "agent-mail-automation",
    "description": "Automate Agent Mail tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "agent-mail",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Agent Mail 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Agent Mail 账户（OAuth/API Key）\n3. 使用 AGENT-MAIL 前缀工具\n\n文档: composio.dev/toolkits/agent-mail",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "agentql-automation",
    "description": "Automate Agentql tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "agentql",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Agentql 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Agentql 账户（OAuth/API Key）\n3. 使用 AGENTQL 前缀工具\n\n文档: composio.dev/toolkits/agentql",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "agenty-automation",
    "description": "Automate Agenty tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "agenty",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Agenty 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Agenty 账户（OAuth/API Key）\n3. 使用 AGENTY 前缀工具\n\n文档: composio.dev/toolkits/agenty",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "agiled-automation",
    "description": "Automate Agiled tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "agiled",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Agiled 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Agiled 账户（OAuth/API Key）\n3. 使用 AGILED 前缀工具\n\n文档: composio.dev/toolkits/agiled",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "agility-cms-automation",
    "description": "Automate Agility CMS tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "agility-cms",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Agility Cms 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Agility Cms 账户（OAuth/API Key）\n3. 使用 AGILITY-CMS 前缀工具\n\n文档: composio.dev/toolkits/agility-cms",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ahrefs Automation",
    "description": "Automate SEO research with Ahrefs -- analyze backlink profiles, research keywords, track domain metrics history, audit organic rankings, and perform batch URL analysis through the Composio Ahrefs integration.",
    "domain": "saas-automation",
    "tags": [
      "ahrefs",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ahrefs 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ahrefs 账户（OAuth/API Key）\n3. 使用 AHREFS 前缀工具\n\n文档: composio.dev/toolkits/ahrefs",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "ai-ml-api-automation",
    "description": "Automate AI ML API tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "ai-ml-api",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ai Ml Api 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ai Ml Api 账户（OAuth/API Key）\n3. 使用 AI-ML-API 前缀工具\n\n文档: composio.dev/toolkits/ai-ml-api",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "aivoov-automation",
    "description": "Automate Aivoov tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "aivoov",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Aivoov 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Aivoov 账户（OAuth/API Key）\n3. 使用 AIVOOV 前缀工具\n\n文档: composio.dev/toolkits/aivoov",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "alchemy-automation",
    "description": "Automate Alchemy tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "alchemy",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Alchemy 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Alchemy 账户（OAuth/API Key）\n3. 使用 ALCHEMY 前缀工具\n\n文档: composio.dev/toolkits/alchemy",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "algodocs-automation",
    "description": "Automate Algodocs tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "google-workspace",
    "tags": [
      "algodocs",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Algodocs 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Algodocs 账户（OAuth/API Key）\n3. 使用 ALGODOCS 前缀工具\n\n文档: composio.dev/toolkits/algodocs",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "algolia-automation",
    "description": "Automate Algolia tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "algolia",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Algolia 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Algolia 账户（OAuth/API Key）\n3. 使用 ALGOLIA 前缀工具\n\n文档: composio.dev/toolkits/algolia",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "all-images-ai-automation",
    "description": "Automate All Images AI tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "all-images-ai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "All Images Ai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 All Images Ai 账户（OAuth/API Key）\n3. 使用 ALL-IMAGES-AI 前缀工具\n\n文档: composio.dev/toolkits/all-images-ai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "alpha-vantage-automation",
    "description": "Automate Alpha Vantage tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "alpha-vantage",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Alpha Vantage 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Alpha Vantage 账户（OAuth/API Key）\n3. 使用 ALPHA-VANTAGE 前缀工具\n\n文档: composio.dev/toolkits/alpha-vantage",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "altoviz-automation",
    "description": "Automate Altoviz tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "altoviz",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Altoviz 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Altoviz 账户（OAuth/API Key）\n3. 使用 ALTOVIZ 前缀工具\n\n文档: composio.dev/toolkits/altoviz",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "alttext-ai-automation",
    "description": "Automate Alttext AI tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "alttext-ai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Alttext Ai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Alttext Ai 账户（OAuth/API Key）\n3. 使用 ALTTEXT-AI 前缀工具\n\n文档: composio.dev/toolkits/alttext-ai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "amara-automation",
    "description": "Automate Amara tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "amara",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Amara 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Amara 账户（OAuth/API Key）\n3. 使用 AMARA 前缀工具\n\n文档: composio.dev/toolkits/amara",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "amazon-automation",
    "description": "Automate Amazon tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "amazon",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Amazon 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Amazon 账户（OAuth/API Key）\n3. 使用 AMAZON 前缀工具\n\n文档: composio.dev/toolkits/amazon",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "ambee-automation",
    "description": "Automate Ambee tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "ambee",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ambee 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ambee 账户（OAuth/API Key）\n3. 使用 AMBEE 前缀工具\n\n文档: composio.dev/toolkits/ambee",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "ambient-weather-automation",
    "description": "Automate Ambient Weather tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "ambient-weather",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ambient Weather 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ambient Weather 账户（OAuth/API Key）\n3. 使用 AMBIENT-WEATHER 前缀工具\n\n文档: composio.dev/toolkits/ambient-weather",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "amcards-automation",
    "description": "Automate Amcards tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "amcards",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Amcards 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Amcards 账户（OAuth/API Key）\n3. 使用 AMCARDS 前缀工具\n\n文档: composio.dev/toolkits/amcards",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "anchor-browser-automation",
    "description": "Automate Anchor Browser tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "anchor-browser",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Anchor Browser 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Anchor Browser 账户（OAuth/API Key）\n3. 使用 ANCHOR-BROWSER 前缀工具\n\n文档: composio.dev/toolkits/anchor-browser",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "anonyflow-automation",
    "description": "Automate Anonyflow tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "anonyflow",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Anonyflow 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Anonyflow 账户（OAuth/API Key）\n3. 使用 ANONYFLOW 前缀工具\n\n文档: composio.dev/toolkits/anonyflow",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "anthropic-administrator-automation",
    "description": "Automate Anthropic Admin tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "ai-services",
    "tags": [
      "anthropic-administrator",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Anthropic Administrator 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Anthropic Administrator 账户（OAuth/API Key）\n3. 使用 ANTHROPIC-ADMINISTRATOR 前缀工具\n\n文档: composio.dev/toolkits/anthropic-administrator",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "anthropic_administrator-automation",
    "description": "Automate Anthropic Admin tasks via Rube MCP (Composio): API keys, usage, workspaces, and organization management. Always search tools first for current schemas.",
    "domain": "ai-services",
    "tags": [
      "anthropic_administrator",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Anthropic_Administrator 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Anthropic_Administrator 账户（OAuth/API Key）\n3. 使用 ANTHROPIC_ADMINISTRATOR 前缀工具\n\n文档: composio.dev/toolkits/anthropic_administrator",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "apaleo-automation",
    "description": "Automate Apaleo tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "apaleo",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Apaleo 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Apaleo 账户（OAuth/API Key）\n3. 使用 APALEO 前缀工具\n\n文档: composio.dev/toolkits/apaleo",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "apex27-automation",
    "description": "Automate Apex27 tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "apex27",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Apex27 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Apex27 账户（OAuth/API Key）\n3. 使用 APEX27 前缀工具\n\n文档: composio.dev/toolkits/apex27",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "api-bible-automation",
    "description": "Automate API Bible tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "api-bible",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Api Bible 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Api Bible 账户（OAuth/API Key）\n3. 使用 API-BIBLE 前缀工具\n\n文档: composio.dev/toolkits/api-bible",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "api-labz-automation",
    "description": "Automate API Labz tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "api-labz",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Api Labz 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Api Labz 账户（OAuth/API Key）\n3. 使用 API-LABZ 前缀工具\n\n文档: composio.dev/toolkits/api-labz",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "api-ninjas-automation",
    "description": "Automate API Ninjas tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "api-ninjas",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Api Ninjas 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Api Ninjas 账户（OAuth/API Key）\n3. 使用 API-NINJAS 前缀工具\n\n文档: composio.dev/toolkits/api-ninjas",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "api-sports-automation",
    "description": "Automate API Sports tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "api-sports",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Api Sports 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Api Sports 账户（OAuth/API Key）\n3. 使用 API-SPORTS 前缀工具\n\n文档: composio.dev/toolkits/api-sports",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "api2pdf-automation",
    "description": "Automate Api2pdf tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "api2pdf",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Api2Pdf 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Api2Pdf 账户（OAuth/API Key）\n3. 使用 API2PDF 前缀工具\n\n文档: composio.dev/toolkits/api2pdf",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "apiflash-automation",
    "description": "Automate Apiflash tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "apiflash",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Apiflash 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Apiflash 账户（OAuth/API Key）\n3. 使用 APIFLASH 前缀工具\n\n文档: composio.dev/toolkits/apiflash",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Apify Automation",
    "description": "Automate web scraping and data extraction with Apify -- run Actors, manage datasets, create reusable tasks, and retrieve crawl results through the Composio Apify integration.",
    "domain": "saas-automation",
    "tags": [
      "apify",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Apify 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Apify 账户（OAuth/API Key）\n3. 使用 APIFY 前缀工具\n\n文档: composio.dev/toolkits/apify",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "apilio-automation",
    "description": "Automate Apilio tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "apilio",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Apilio 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Apilio 账户（OAuth/API Key）\n3. 使用 APILIO 前缀工具\n\n文档: composio.dev/toolkits/apilio",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "apipie-ai-automation",
    "description": "Automate Apipie AI tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "apipie-ai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Apipie Ai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Apipie Ai 账户（OAuth/API Key）\n3. 使用 APIPIE-AI 前缀工具\n\n文档: composio.dev/toolkits/apipie-ai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "apitemplate-io-automation",
    "description": "Automate Apitemplate IO tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "apitemplate-io",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Apitemplate Io 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Apitemplate Io 账户（OAuth/API Key）\n3. 使用 APITEMPLATE-IO 前缀工具\n\n文档: composio.dev/toolkits/apitemplate-io",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "apiverve-automation",
    "description": "Automate Apiverve tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "apiverve",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Apiverve 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Apiverve 账户（OAuth/API Key）\n3. 使用 APIVERVE 前缀工具\n\n文档: composio.dev/toolkits/apiverve",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Apollo Automation",
    "description": "Automate Apollo.io lead generation -- search organizations, discover contacts, enrich prospect data, manage contact stages, and build targeted outreach lists -- using natural language through the Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "apollo",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Search Organizations",
        "content": "Find target companies using filters like name, location, employee count, and industry keywords.",
        "gene_type": "pattern"
      },
      {
        "title": "Discover People at Companies",
        "content": "Search Apollo's contact database for people matching title, seniority, location, and company criteria.",
        "gene_type": "pattern"
      },
      {
        "title": "Enrich Individual Contacts",
        "content": "Get comprehensive data (email, phone, LinkedIn, company info) for a single person using their email, LinkedIn URL, or name + company.",
        "gene_type": "pattern"
      }
    ]
  },
  {
    "name": "appcircle-automation",
    "description": "Automate Appcircle tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "appcircle",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Appcircle 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Appcircle 账户（OAuth/API Key）\n3. 使用 APPCIRCLE 前缀工具\n\n文档: composio.dev/toolkits/appcircle",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "appdrag-automation",
    "description": "Automate Appdrag tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "appdrag",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Appdrag 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Appdrag 账户（OAuth/API Key）\n3. 使用 APPDRAG 前缀工具\n\n文档: composio.dev/toolkits/appdrag",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "appointo-automation",
    "description": "Automate Appointo tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "appointo",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Appointo 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Appointo 账户（OAuth/API Key）\n3. 使用 APPOINTO 前缀工具\n\n文档: composio.dev/toolkits/appointo",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "appsflyer-automation",
    "description": "Automate Appsflyer tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "appsflyer",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Appsflyer 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Appsflyer 账户（OAuth/API Key）\n3. 使用 APPSFLYER 前缀工具\n\n文档: composio.dev/toolkits/appsflyer",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "appveyor-automation",
    "description": "Automate Appveyor tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "appveyor",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Appveyor 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Appveyor 账户（OAuth/API Key）\n3. 使用 APPVEYOR 前缀工具\n\n文档: composio.dev/toolkits/appveyor",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "aryn-automation",
    "description": "Automate Aryn tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "aryn",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Aryn 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Aryn 账户（OAuth/API Key）\n3. 使用 ARYN 前缀工具\n\n文档: composio.dev/toolkits/aryn",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "ascora-automation",
    "description": "Automate Ascora tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "ascora",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ascora 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ascora 账户（OAuth/API Key）\n3. 使用 ASCORA 前缀工具\n\n文档: composio.dev/toolkits/ascora",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ashby Automation",
    "description": "Automate recruiting and hiring workflows in Ashby -- manage candidates, jobs, applications, interviews, and notes through natural language commands.",
    "domain": "saas-automation",
    "tags": [
      "ashby",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ashby 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ashby 账户（OAuth/API Key）\n3. 使用 ASHBY 前缀工具\n\n文档: composio.dev/toolkits/ashby",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "asin-data-api-automation",
    "description": "Automate Asin Data API tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "asin-data-api",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Asin Data Api 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Asin Data Api 账户（OAuth/API Key）\n3. 使用 ASIN-DATA-API 前缀工具\n\n文档: composio.dev/toolkits/asin-data-api",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "astica-ai-automation",
    "description": "Automate Astica AI tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "astica-ai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Astica Ai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Astica Ai 账户（OAuth/API Key）\n3. 使用 ASTICA-AI 前缀工具\n\n文档: composio.dev/toolkits/astica-ai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "async-interview-automation",
    "description": "Automate Async Interview tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "async-interview",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Async Interview 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Async Interview 账户（OAuth/API Key）\n3. 使用 ASYNC-INTERVIEW 前缀工具\n\n文档: composio.dev/toolkits/async-interview",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "atlassian-automation",
    "description": "Automate Atlassian tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "atlassian",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Atlassian 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Atlassian 账户（OAuth/API Key）\n3. 使用 ATLASSIAN 前缀工具\n\n文档: composio.dev/toolkits/atlassian",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Attio Automation",
    "description": "Automate Attio CRM operations -- search records, query contacts and companies with advanced filters, manage notes, list attributes, and navigate your relationship data -- using natural language through the Composio MCP integration.",
    "domain": "crm-sales",
    "tags": [
      "attio",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Fuzzy Search Across Records",
        "content": "Search for people, companies, deals, or any object by name, domain, email, phone, or social handle.",
        "gene_type": "pattern"
      },
      {
        "title": "Advanced Filtered Queries",
        "content": "Query records with server-side filtering, sorting, and complex conditions -- far more powerful than fuzzy search.",
        "gene_type": "pattern"
      },
      {
        "title": "Find Records by ID or Attributes",
        "content": "Look up a specific record by its unique ID or search by unique attribute values.",
        "gene_type": "pattern"
      }
    ]
  },
  {
    "name": "auth0-automation",
    "description": "Automate Auth0 tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "security-identity",
    "tags": [
      "auth0",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Auth0 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Auth0 账户（OAuth/API Key）\n3. 使用 AUTH0 前缀工具\n\n文档: composio.dev/toolkits/auth0",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "autobound-automation",
    "description": "Automate Autobound tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "autobound",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Autobound 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Autobound 账户（OAuth/API Key）\n3. 使用 AUTOBOUND 前缀工具\n\n文档: composio.dev/toolkits/autobound",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "autom-automation",
    "description": "Automate Autom tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "autom",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Autom 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Autom 账户（OAuth/API Key）\n3. 使用 AUTOM 前缀工具\n\n文档: composio.dev/toolkits/autom",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "axonaut-automation",
    "description": "Automate Axonaut tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "axonaut",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Axonaut 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Axonaut 账户（OAuth/API Key）\n3. 使用 AXONAUT 前缀工具\n\n文档: composio.dev/toolkits/axonaut",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "ayrshare-automation",
    "description": "Automate Ayrshare tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "ayrshare",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ayrshare 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ayrshare 账户（OAuth/API Key）\n3. 使用 AYRSHARE 前缀工具\n\n文档: composio.dev/toolkits/ayrshare",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "backendless-automation",
    "description": "Automate Backendless tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "backendless",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Backendless 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Backendless 账户（OAuth/API Key）\n3. 使用 BACKENDLESS 前缀工具\n\n文档: composio.dev/toolkits/backendless",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "bannerbear-automation",
    "description": "Automate Bannerbear tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "bannerbear",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Bannerbear 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Bannerbear 账户（OAuth/API Key）\n3. 使用 BANNERBEAR 前缀工具\n\n文档: composio.dev/toolkits/bannerbear",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "bart-automation",
    "description": "Automate Bart tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "bart",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Bart 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Bart 账户（OAuth/API Key）\n3. 使用 BART 前缀工具\n\n文档: composio.dev/toolkits/bart",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "baselinker-automation",
    "description": "Automate Baselinker tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "baselinker",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Baselinker 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Baselinker 账户（OAuth/API Key）\n3. 使用 BASELINKER 前缀工具\n\n文档: composio.dev/toolkits/baselinker",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "baserow-automation",
    "description": "Automate Baserow tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "database-storage",
    "tags": [
      "baserow",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Baserow 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Baserow 账户（OAuth/API Key）\n3. 使用 BASEROW 前缀工具\n\n文档: composio.dev/toolkits/baserow",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "basin-automation",
    "description": "Automate Basin tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "basin",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Basin 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Basin 账户（OAuth/API Key）\n3. 使用 BASIN 前缀工具\n\n文档: composio.dev/toolkits/basin",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "battlenet-automation",
    "description": "Automate Battlenet tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "battlenet",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Battlenet 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Battlenet 账户（OAuth/API Key）\n3. 使用 BATTLENET 前缀工具\n\n文档: composio.dev/toolkits/battlenet",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "beaconchain-automation",
    "description": "Automate Beaconchain tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "beaconchain",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Beaconchain 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Beaconchain 账户（OAuth/API Key）\n3. 使用 BEACONCHAIN 前缀工具\n\n文档: composio.dev/toolkits/beaconchain",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "beaconstac-automation",
    "description": "Automate Beaconstac tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "beaconstac",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Beaconstac 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Beaconstac 账户（OAuth/API Key）\n3. 使用 BEACONSTAC 前缀工具\n\n文档: composio.dev/toolkits/beaconstac",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "beamer-automation",
    "description": "Automate Beamer tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "beamer",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Beamer 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Beamer 账户（OAuth/API Key）\n3. 使用 BEAMER 前缀工具\n\n文档: composio.dev/toolkits/beamer",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "beeminder-automation",
    "description": "Automate Beeminder tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "beeminder",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Beeminder 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Beeminder 账户（OAuth/API Key）\n3. 使用 BEEMINDER 前缀工具\n\n文档: composio.dev/toolkits/beeminder",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "bench-automation",
    "description": "Automate Bench tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "bench",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Bench 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Bench 账户（OAuth/API Key）\n3. 使用 BENCH 前缀工具\n\n文档: composio.dev/toolkits/bench",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "benchmark-email-automation",
    "description": "Automate Benchmark Email tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "email-marketing",
    "tags": [
      "benchmark-email",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Benchmark Email 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Benchmark Email 账户（OAuth/API Key）\n3. 使用 BENCHMARK-EMAIL 前缀工具\n\n文档: composio.dev/toolkits/benchmark-email",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "benzinga-automation",
    "description": "Automate Benzinga tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "benzinga",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Benzinga 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Benzinga 账户（OAuth/API Key）\n3. 使用 BENZINGA 前缀工具\n\n文档: composio.dev/toolkits/benzinga",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "bestbuy-automation",
    "description": "Automate Bestbuy tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "bestbuy",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Bestbuy 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Bestbuy 账户（OAuth/API Key）\n3. 使用 BESTBUY 前缀工具\n\n文档: composio.dev/toolkits/bestbuy",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "better-proposals-automation",
    "description": "Automate Better Proposals tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "better-proposals",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Better Proposals 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Better Proposals 账户（OAuth/API Key）\n3. 使用 BETTER-PROPOSALS 前缀工具\n\n文档: composio.dev/toolkits/better-proposals",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "better-stack-automation",
    "description": "Automate Better Stack tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "better-stack",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Better Stack 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Better Stack 账户（OAuth/API Key）\n3. 使用 BETTER-STACK 前缀工具\n\n文档: composio.dev/toolkits/better-stack",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "bidsketch-automation",
    "description": "Automate Bidsketch tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "bidsketch",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Bidsketch 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Bidsketch 账户（OAuth/API Key）\n3. 使用 BIDSKETCH 前缀工具\n\n文档: composio.dev/toolkits/bidsketch",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "big-data-cloud-automation",
    "description": "Automate Big Data Cloud tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "big-data-cloud",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Big Data Cloud 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Big Data Cloud 账户（OAuth/API Key）\n3. 使用 BIG-DATA-CLOUD 前缀工具\n\n文档: composio.dev/toolkits/big-data-cloud",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "bigmailer-automation",
    "description": "Automate Bigmailer tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "email-marketing",
    "tags": [
      "bigmailer",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Bigmailer 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Bigmailer 账户（OAuth/API Key）\n3. 使用 BIGMAILER 前缀工具\n\n文档: composio.dev/toolkits/bigmailer",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "bigml-automation",
    "description": "Automate Bigml tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "bigml",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Bigml 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Bigml 账户（OAuth/API Key）\n3. 使用 BIGML 前缀工具\n\n文档: composio.dev/toolkits/bigml",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "bigpicture-io-automation",
    "description": "Automate Bigpicture IO tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "bigpicture-io",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Bigpicture Io 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Bigpicture Io 账户（OAuth/API Key）\n3. 使用 BIGPICTURE-IO 前缀工具\n\n文档: composio.dev/toolkits/bigpicture-io",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "bitquery-automation",
    "description": "Automate Bitquery tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "bitquery",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Bitquery 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Bitquery 账户（OAuth/API Key）\n3. 使用 BITQUERY 前缀工具\n\n文档: composio.dev/toolkits/bitquery",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "bitwarden-automation",
    "description": "Automate Bitwarden tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "bitwarden",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Bitwarden 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Bitwarden 账户（OAuth/API Key）\n3. 使用 BITWARDEN 前缀工具\n\n文档: composio.dev/toolkits/bitwarden",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "blackbaud-automation",
    "description": "Automate Blackbaud tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "blackbaud",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Blackbaud 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Blackbaud 账户（OAuth/API Key）\n3. 使用 BLACKBAUD 前缀工具\n\n文档: composio.dev/toolkits/blackbaud",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "blackboard-automation",
    "description": "Automate Blackboard tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "blackboard",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Blackboard 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Blackboard 账户（OAuth/API Key）\n3. 使用 BLACKBOARD 前缀工具\n\n文档: composio.dev/toolkits/blackboard",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "blocknative-automation",
    "description": "Automate Blocknative tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "blocknative",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Blocknative 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Blocknative 账户（OAuth/API Key）\n3. 使用 BLOCKNATIVE 前缀工具\n\n文档: composio.dev/toolkits/blocknative",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "boldsign-automation",
    "description": "Automate Boldsign tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "boldsign",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Boldsign 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Boldsign 账户（OAuth/API Key）\n3. 使用 BOLDSIGN 前缀工具\n\n文档: composio.dev/toolkits/boldsign",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "bolna-automation",
    "description": "Automate Bolna tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "bolna",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Bolna 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Bolna 账户（OAuth/API Key）\n3. 使用 BOLNA 前缀工具\n\n文档: composio.dev/toolkits/bolna",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "boloforms-automation",
    "description": "Automate Boloforms tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "boloforms",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Boloforms 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Boloforms 账户（OAuth/API Key）\n3. 使用 BOLOFORMS 前缀工具\n\n文档: composio.dev/toolkits/boloforms",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "bolt-iot-automation",
    "description": "Automate Bolt Iot tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "bolt-iot",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Bolt Iot 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Bolt Iot 账户（OAuth/API Key）\n3. 使用 BOLT-IOT 前缀工具\n\n文档: composio.dev/toolkits/bolt-iot",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "bonsai-automation",
    "description": "Automate Bonsai tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "bonsai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Bonsai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Bonsai 账户（OAuth/API Key）\n3. 使用 BONSAI 前缀工具\n\n文档: composio.dev/toolkits/bonsai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "bookingmood-automation",
    "description": "Automate Bookingmood tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "bookingmood",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Bookingmood 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Bookingmood 账户（OAuth/API Key）\n3. 使用 BOOKINGMOOD 前缀工具\n\n文档: composio.dev/toolkits/bookingmood",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "booqable-automation",
    "description": "Automate Booqable tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "booqable",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Booqable 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Booqable 账户（OAuth/API Key）\n3. 使用 BOOQABLE 前缀工具\n\n文档: composio.dev/toolkits/booqable",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "borneo-automation",
    "description": "Automate Borneo tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "borneo",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Borneo 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Borneo 账户（OAuth/API Key）\n3. 使用 BORNEO 前缀工具\n\n文档: composio.dev/toolkits/borneo",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "botbaba-automation",
    "description": "Automate Botbaba tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "botbaba",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Botbaba 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Botbaba 账户（OAuth/API Key）\n3. 使用 BOTBABA 前缀工具\n\n文档: composio.dev/toolkits/botbaba",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "botpress-automation",
    "description": "Automate Botpress tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "botpress",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Botpress 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Botpress 账户（OAuth/API Key）\n3. 使用 BOTPRESS 前缀工具\n\n文档: composio.dev/toolkits/botpress",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "botsonic-automation",
    "description": "Automate Botsonic tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "botsonic",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Botsonic 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Botsonic 账户（OAuth/API Key）\n3. 使用 BOTSONIC 前缀工具\n\n文档: composio.dev/toolkits/botsonic",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "botstar-automation",
    "description": "Automate Botstar tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "botstar",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Botstar 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Botstar 账户（OAuth/API Key）\n3. 使用 BOTSTAR 前缀工具\n\n文档: composio.dev/toolkits/botstar",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "bouncer-automation",
    "description": "Automate Bouncer tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "bouncer",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Bouncer 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Bouncer 账户（OAuth/API Key）\n3. 使用 BOUNCER 前缀工具\n\n文档: composio.dev/toolkits/bouncer",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "boxhero-automation",
    "description": "Automate Boxhero tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "cloud-storage",
    "tags": [
      "boxhero",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Boxhero 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Boxhero 账户（OAuth/API Key）\n3. 使用 BOXHERO 前缀工具\n\n文档: composio.dev/toolkits/boxhero",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Braintree Automation",
    "description": "Braintree Automation: manage payment processing via Stripe-compatible tools for customers, subscriptions, payment methods, and transactions",
    "domain": "ecommerce-payments",
    "tags": [
      "braintree",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Braintree 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Braintree 账户（OAuth/API Key）\n3. 使用 BRAINTREE 前缀工具\n\n文档: composio.dev/toolkits/braintree",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "brandfetch-automation",
    "description": "Automate Brandfetch tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "brandfetch",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Brandfetch 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Brandfetch 账户（OAuth/API Key）\n3. 使用 BRANDFETCH 前缀工具\n\n文档: composio.dev/toolkits/brandfetch",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "breeze-automation",
    "description": "Automate Breeze tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "breeze",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Breeze 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Breeze 账户（OAuth/API Key）\n3. 使用 BREEZE 前缀工具\n\n文档: composio.dev/toolkits/breeze",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "breezy-hr-automation",
    "description": "Automate Breezy HR tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "breezy-hr",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Breezy Hr 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Breezy Hr 账户（OAuth/API Key）\n3. 使用 BREEZY-HR 前缀工具\n\n文档: composio.dev/toolkits/breezy-hr",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "brex-automation",
    "description": "Automate Brex tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "brex",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Brex 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Brex 账户（OAuth/API Key）\n3. 使用 BREX 前缀工具\n\n文档: composio.dev/toolkits/brex",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "brex-staging-automation",
    "description": "Automate Brex Staging tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "brex-staging",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Brex Staging 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Brex Staging 账户（OAuth/API Key）\n3. 使用 BREX-STAGING 前缀工具\n\n文档: composio.dev/toolkits/brex-staging",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "brightdata-automation",
    "description": "Automate Brightdata tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "brightdata",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Brightdata 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Brightdata 账户（OAuth/API Key）\n3. 使用 BRIGHTDATA 前缀工具\n\n文档: composio.dev/toolkits/brightdata",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "brightpearl-automation",
    "description": "Automate Brightpearl tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "brightpearl",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Brightpearl 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Brightpearl 账户（OAuth/API Key）\n3. 使用 BRIGHTPEARL 前缀工具\n\n文档: composio.dev/toolkits/brightpearl",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "brilliant-directories-automation",
    "description": "Automate Brilliant Directories tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "brilliant-directories",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Brilliant Directories 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Brilliant Directories 账户（OAuth/API Key）\n3. 使用 BRILLIANT-DIRECTORIES 前缀工具\n\n文档: composio.dev/toolkits/brilliant-directories",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "browseai-automation",
    "description": "Automate Browseai tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "browseai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Browseai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Browseai 账户（OAuth/API Key）\n3. 使用 BROWSEAI 前缀工具\n\n文档: composio.dev/toolkits/browseai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "browser-tool-automation",
    "description": "Automate Browser Tool tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "browser-tool",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Browser Tool 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Browser Tool 账户（OAuth/API Key）\n3. 使用 BROWSER-TOOL 前缀工具\n\n文档: composio.dev/toolkits/browser-tool",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "browserbase-tool-automation",
    "description": "Automate Browserbase Tool tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "browserbase-tool",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Browserbase Tool 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Browserbase Tool 账户（OAuth/API Key）\n3. 使用 BROWSERBASE-TOOL 前缀工具\n\n文档: composio.dev/toolkits/browserbase-tool",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "browserhub-automation",
    "description": "Automate Browserhub tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "browserhub",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Browserhub 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Browserhub 账户（OAuth/API Key）\n3. 使用 BROWSERHUB 前缀工具\n\n文档: composio.dev/toolkits/browserhub",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "browserless-automation",
    "description": "Automate Browserless tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "web-scraping",
    "tags": [
      "browserless",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Browserless 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Browserless 账户（OAuth/API Key）\n3. 使用 BROWSERLESS 前缀工具\n\n文档: composio.dev/toolkits/browserless",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "btcpay-server-automation",
    "description": "Automate Btcpay Server tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "btcpay-server",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Btcpay Server 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Btcpay Server 账户（OAuth/API Key）\n3. 使用 BTCPAY-SERVER 前缀工具\n\n文档: composio.dev/toolkits/btcpay-server",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "bubble-automation",
    "description": "Automate Bubble tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "bubble",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Bubble 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Bubble 账户（OAuth/API Key）\n3. 使用 BUBBLE 前缀工具\n\n文档: composio.dev/toolkits/bubble",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "bugbug-automation",
    "description": "Automate Bugbug tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "bugbug",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Bugbug 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Bugbug 账户（OAuth/API Key）\n3. 使用 BUGBUG 前缀工具\n\n文档: composio.dev/toolkits/bugbug",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Bugherd Automation",
    "description": "Automate Bugherd workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "bugherd",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Bugherd 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Bugherd 账户（OAuth/API Key）\n3. 使用 BUGHERD 前缀工具\n\n文档: composio.dev/toolkits/bugherd",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Bugsnag Automation",
    "description": "Automate Bugsnag workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "bugsnag",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Bugsnag 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Bugsnag 账户（OAuth/API Key）\n3. 使用 BUGSNAG 前缀工具\n\n文档: composio.dev/toolkits/bugsnag",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "buildkite-automation",
    "description": "Automate Buildkite tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "devops",
    "tags": [
      "buildkite",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Buildkite 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Buildkite 账户（OAuth/API Key）\n3. 使用 BUILDKITE 前缀工具\n\n文档: composio.dev/toolkits/buildkite",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "builtwith-automation",
    "description": "Automate Builtwith tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "builtwith",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Builtwith 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Builtwith 账户（OAuth/API Key）\n3. 使用 BUILTWITH 前缀工具\n\n文档: composio.dev/toolkits/builtwith",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "bunnycdn-automation",
    "description": "Automate Bunnycdn tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "bunnycdn",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Bunnycdn 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Bunnycdn 账户（OAuth/API Key）\n3. 使用 BUNNYCDN 前缀工具\n\n文档: composio.dev/toolkits/bunnycdn",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "byteforms-automation",
    "description": "Automate Byteforms tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "byteforms",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Byteforms 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Byteforms 账户（OAuth/API Key）\n3. 使用 BYTEFORMS 前缀工具\n\n文档: composio.dev/toolkits/byteforms",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Cabinpanda Automation",
    "description": "Automate Cabinpanda workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "cabinpanda",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Cabinpanda 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Cabinpanda 账户（OAuth/API Key）\n3. 使用 CABINPANDA 前缀工具\n\n文档: composio.dev/toolkits/cabinpanda",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "cal-automation",
    "description": "Automate Cal tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "meetings-scheduling",
    "tags": [
      "cal",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Cal 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Cal 账户（OAuth/API Key）\n3. 使用 CAL 前缀工具\n\n文档: composio.dev/toolkits/cal",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Calendarhero Automation",
    "description": "Automate Calendarhero workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "calendarhero",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Calendarhero 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Calendarhero 账户（OAuth/API Key）\n3. 使用 CALENDARHERO 前缀工具\n\n文档: composio.dev/toolkits/calendarhero",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "callerapi-automation",
    "description": "Automate Callerapi tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "meetings-scheduling",
    "tags": [
      "callerapi",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Callerapi 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Callerapi 账户（OAuth/API Key）\n3. 使用 CALLERAPI 前缀工具\n\n文档: composio.dev/toolkits/callerapi",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Callingly Automation",
    "description": "Automate Callingly workflows via Composio MCP integration.",
    "domain": "meetings-scheduling",
    "tags": [
      "callingly",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Callingly 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Callingly 账户（OAuth/API Key）\n3. 使用 CALLINGLY 前缀工具\n\n文档: composio.dev/toolkits/callingly",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "callpage-automation",
    "description": "Automate Callpage tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "meetings-scheduling",
    "tags": [
      "callpage",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Callpage 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Callpage 账户（OAuth/API Key）\n3. 使用 CALLPAGE 前缀工具\n\n文档: composio.dev/toolkits/callpage",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Campaign Cleaner Automation",
    "description": "Automate Campaign Cleaner workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "campaign-cleaner",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Campaign Cleaner 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Campaign Cleaner 账户（OAuth/API Key）\n3. 使用 CAMPAIGN-CLEANER 前缀工具\n\n文档: composio.dev/toolkits/campaign-cleaner",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Campayn Automation",
    "description": "Automate Campayn workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "campayn",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Campayn 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Campayn 账户（OAuth/API Key）\n3. 使用 CAMPAYN 前缀工具\n\n文档: composio.dev/toolkits/campayn",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "canny-automation",
    "description": "Automate Canny tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "canny",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Canny 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Canny 账户（OAuth/API Key）\n3. 使用 CANNY 前缀工具\n\n文档: composio.dev/toolkits/canny",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "canvas-automation",
    "description": "Automate Canvas tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "design-collaboration",
    "tags": [
      "canvas",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Canvas 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Canvas 账户（OAuth/API Key）\n3. 使用 CANVAS 前缀工具\n\n文档: composio.dev/toolkits/canvas",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Capsule CRM Automation",
    "description": "Automate Capsule CRM operations -- manage contacts (parties), run structured filter queries, track tasks and projects, log entries, and handle organizations -- using natural language through the Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "capsule-crm",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Run Structured Filter Queries",
        "content": "Query parties, opportunities, or cases (projects) with multiple filter conditions, operators, and sorting.",
        "gene_type": "pattern"
      },
      {
        "title": "List and Manage Contacts (Parties)",
        "content": "Retrieve all contacts with optional filtering by modification date and embedded related data.",
        "gene_type": "pattern"
      },
      {
        "title": "Create New Contacts",
        "content": "Add people or organizations to your Capsule CRM with full details including emails, phones, addresses, tags, and custom fields.",
        "gene_type": "pattern"
      }
    ]
  },
  {
    "name": "capsule_crm-automation",
    "description": "Automate Capsule CRM tasks via Rube MCP (Composio): contacts, opportunities, cases, tasks, and pipeline management. Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "capsule_crm",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Capsule_Crm 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Capsule_Crm 账户（OAuth/API Key）\n3. 使用 CAPSULE_CRM 前缀工具\n\n文档: composio.dev/toolkits/capsule_crm",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "carbone-automation",
    "description": "Automate Carbone tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "carbone",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Carbone 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Carbone 账户（OAuth/API Key）\n3. 使用 CARBONE 前缀工具\n\n文档: composio.dev/toolkits/carbone",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Cardly Automation",
    "description": "Automate Cardly workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "cardly",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Cardly 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Cardly 账户（OAuth/API Key）\n3. 使用 CARDLY 前缀工具\n\n文档: composio.dev/toolkits/cardly",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Castingwords Automation",
    "description": "Automate Castingwords workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "castingwords",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Castingwords 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Castingwords 账户（OAuth/API Key）\n3. 使用 CASTINGWORDS 前缀工具\n\n文档: composio.dev/toolkits/castingwords",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Cats Automation",
    "description": "Automate Cats workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "cats",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Cats 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Cats 账户（OAuth/API Key）\n3. 使用 CATS 前缀工具\n\n文档: composio.dev/toolkits/cats",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "cdr-platform-automation",
    "description": "Automate Cdr Platform tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "cdr-platform",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Cdr Platform 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Cdr Platform 账户（OAuth/API Key）\n3. 使用 CDR-PLATFORM 前缀工具\n\n文档: composio.dev/toolkits/cdr-platform",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "census-bureau-automation",
    "description": "Automate Census Bureau tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "census-bureau",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Census Bureau 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Census Bureau 账户（OAuth/API Key）\n3. 使用 CENSUS-BUREAU 前缀工具\n\n文档: composio.dev/toolkits/census-bureau",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "centralstationcrm-automation",
    "description": "Automate Centralstationcrm tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "centralstationcrm",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Centralstationcrm 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Centralstationcrm 账户（OAuth/API Key）\n3. 使用 CENTRALSTATIONCRM 前缀工具\n\n文档: composio.dev/toolkits/centralstationcrm",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Certifier Automation",
    "description": "Automate Certifier workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "certifier",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Certifier 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Certifier 账户（OAuth/API Key）\n3. 使用 CERTIFIER 前缀工具\n\n文档: composio.dev/toolkits/certifier",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "chaser-automation",
    "description": "Automate Chaser tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "chaser",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Chaser 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Chaser 账户（OAuth/API Key）\n3. 使用 CHASER 前缀工具\n\n文档: composio.dev/toolkits/chaser",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Chatbotkit Automation",
    "description": "Automate Chatbotkit workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "chatbotkit",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Chatbotkit 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Chatbotkit 账户（OAuth/API Key）\n3. 使用 CHATBOTKIT 前缀工具\n\n文档: composio.dev/toolkits/chatbotkit",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Chatfai Automation",
    "description": "Automate Chatfai workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "chatfai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Chatfai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Chatfai 账户（OAuth/API Key）\n3. 使用 CHATFAI 前缀工具\n\n文档: composio.dev/toolkits/chatfai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "chatwork-automation",
    "description": "Automate Chatwork tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "chatwork",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Chatwork 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Chatwork 账户（OAuth/API Key）\n3. 使用 CHATWORK 前缀工具\n\n文档: composio.dev/toolkits/chatwork",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "chmeetings-automation",
    "description": "Automate Chmeetings tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "google-workspace",
    "tags": [
      "chmeetings",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Chmeetings 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Chmeetings 账户（OAuth/API Key）\n3. 使用 CHMEETINGS 前缀工具\n\n文档: composio.dev/toolkits/chmeetings",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Cincopa Automation",
    "description": "Automate Cincopa workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "cincopa",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Cincopa 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Cincopa 账户（OAuth/API Key）\n3. 使用 CINCOPA 前缀工具\n\n文档: composio.dev/toolkits/cincopa",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "claid-ai-automation",
    "description": "Automate Claid AI tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "claid-ai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Claid Ai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Claid Ai 账户（OAuth/API Key）\n3. 使用 CLAID-AI 前缀工具\n\n文档: composio.dev/toolkits/claid-ai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Classmarker Automation",
    "description": "Automate Classmarker workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "classmarker",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Classmarker 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Classmarker 账户（OAuth/API Key）\n3. 使用 CLASSMARKER 前缀工具\n\n文档: composio.dev/toolkits/classmarker",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Clearout Automation",
    "description": "Automate Clearout workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "clearout",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Clearout 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Clearout 账户（OAuth/API Key）\n3. 使用 CLEAROUT 前缀工具\n\n文档: composio.dev/toolkits/clearout",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Clickmeeting Automation",
    "description": "Automate Clickmeeting workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "clickmeeting",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Clickmeeting 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Clickmeeting 账户（OAuth/API Key）\n3. 使用 CLICKMEETING 前缀工具\n\n文档: composio.dev/toolkits/clickmeeting",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Clockify Automation",
    "description": "Automate Clockify workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "clockify",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Clockify 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Clockify 账户（OAuth/API Key）\n3. 使用 CLOCKIFY 前缀工具\n\n文档: composio.dev/toolkits/clockify",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "cloudcart-automation",
    "description": "Automate Cloudcart tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "cloudcart",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Cloudcart 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Cloudcart 账户（OAuth/API Key）\n3. 使用 CLOUDCART 前缀工具\n\n文档: composio.dev/toolkits/cloudcart",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Cloudconvert Automation",
    "description": "Automate Cloudconvert workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "cloudconvert",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Cloudconvert 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Cloudconvert 账户（OAuth/API Key）\n3. 使用 CLOUDCONVERT 前缀工具\n\n文档: composio.dev/toolkits/cloudconvert",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Cloudflare Api Key Automation",
    "description": "Automate Cloudflare Api Key workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "cloudflare-api-key",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Cloudflare Api Key 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Cloudflare Api Key 账户（OAuth/API Key）\n3. 使用 CLOUDFLARE-API-KEY 前缀工具\n\n文档: composio.dev/toolkits/cloudflare-api-key",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Cloudflare Automation",
    "description": "Automate Cloudflare workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "cloudflare",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Cloudflare 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Cloudflare 账户（OAuth/API Key）\n3. 使用 CLOUDFLARE 前缀工具\n\n文档: composio.dev/toolkits/cloudflare",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "cloudflare-browser-rendering-automation",
    "description": "Automate Cloudflare Browser Rendering tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "devops",
    "tags": [
      "cloudflare-browser-rendering",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Cloudflare Browser Rendering 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Cloudflare Browser Rendering 账户（OAuth/API Key）\n3. 使用 CLOUDFLARE-BROWSER-RENDERING 前缀工具\n\n文档: composio.dev/toolkits/cloudflare-browser-rendering",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Cloudinary Automation",
    "description": "Automate Cloudinary workflows via Composio MCP integration.",
    "domain": "cloud-storage",
    "tags": [
      "cloudinary",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Cloudinary 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Cloudinary 账户（OAuth/API Key）\n3. 使用 CLOUDINARY 前缀工具\n\n文档: composio.dev/toolkits/cloudinary",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Cloudlayer Automation",
    "description": "Automate Cloudlayer workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "cloudlayer",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Cloudlayer 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Cloudlayer 账户（OAuth/API Key）\n3. 使用 CLOUDLAYER 前缀工具\n\n文档: composio.dev/toolkits/cloudlayer",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Cloudpress Automation",
    "description": "Automate Cloudpress workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "cloudpress",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Cloudpress 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Cloudpress 账户（OAuth/API Key）\n3. 使用 CLOUDPRESS 前缀工具\n\n文档: composio.dev/toolkits/cloudpress",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "coassemble-automation",
    "description": "Automate Coassemble tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "coassemble",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Coassemble 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Coassemble 账户（OAuth/API Key）\n3. 使用 COASSEMBLE 前缀工具\n\n文档: composio.dev/toolkits/coassemble",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Codacy Automation",
    "description": "Automate Codacy workflows via Composio MCP integration.",
    "domain": "database-storage",
    "tags": [
      "codacy",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Codacy 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Codacy 账户（OAuth/API Key）\n3. 使用 CODACY 前缀工具\n\n文档: composio.dev/toolkits/codacy",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Codeinterpreter Automation",
    "description": "Automate Codeinterpreter workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "codeinterpreter",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Codeinterpreter 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Codeinterpreter 账户（OAuth/API Key）\n3. 使用 CODEINTERPRETER 前缀工具\n\n文档: composio.dev/toolkits/codeinterpreter",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Codereadr Automation",
    "description": "Automate Codereadr workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "codereadr",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Codereadr 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Codereadr 账户（OAuth/API Key）\n3. 使用 CODEREADR 前缀工具\n\n文档: composio.dev/toolkits/codereadr",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Coinbase Automation",
    "description": "Automate Coinbase workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "coinbase",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Coinbase 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Coinbase 账户（OAuth/API Key）\n3. 使用 COINBASE 前缀工具\n\n文档: composio.dev/toolkits/coinbase",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "coinmarketcal-automation",
    "description": "Automate Coinmarketcal tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "meetings-scheduling",
    "tags": [
      "coinmarketcal",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Coinmarketcal 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Coinmarketcal 账户（OAuth/API Key）\n3. 使用 COINMARKETCAL 前缀工具\n\n文档: composio.dev/toolkits/coinmarketcal",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Coinmarketcap Automation",
    "description": "Automate Coinmarketcap workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "coinmarketcap",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Coinmarketcap 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Coinmarketcap 账户（OAuth/API Key）\n3. 使用 COINMARKETCAP 前缀工具\n\n文档: composio.dev/toolkits/coinmarketcap",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Coinranking Automation",
    "description": "Automate Coinranking workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "coinranking",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Coinranking 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Coinranking 账户（OAuth/API Key）\n3. 使用 COINRANKING 前缀工具\n\n文档: composio.dev/toolkits/coinranking",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "College Football Data Automation",
    "description": "Automate College Football Data workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "college-football-data",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "College Football Data 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 College Football Data 账户（OAuth/API Key）\n3. 使用 COLLEGE-FOOTBALL-DATA 前缀工具\n\n文档: composio.dev/toolkits/college-football-data",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Composio Automation",
    "description": "Automate Composio workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "composio",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Composio 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Composio 账户（OAuth/API Key）\n3. 使用 COMPOSIO 前缀工具\n\n文档: composio.dev/toolkits/composio",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "composio-search-automation",
    "description": "Automate Composio Search tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "composio-search",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Composio Search 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Composio Search 账户（OAuth/API Key）\n3. 使用 COMPOSIO-SEARCH 前缀工具\n\n文档: composio.dev/toolkits/composio-search",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Connecteam Automation",
    "description": "Automate Connecteam workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "connecteam",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Connecteam 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Connecteam 账户（OAuth/API Key）\n3. 使用 CONNECTEAM 前缀工具\n\n文档: composio.dev/toolkits/connecteam",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Contentful Automation",
    "description": "Automate Contentful workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "contentful",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Contentful 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Contentful 账户（OAuth/API Key）\n3. 使用 CONTENTFUL 前缀工具\n\n文档: composio.dev/toolkits/contentful",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Contentful Graphql Automation",
    "description": "Automate Contentful Graphql workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "contentful-graphql",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Contentful Graphql 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Contentful Graphql 账户（OAuth/API Key）\n3. 使用 CONTENTFUL-GRAPHQL 前缀工具\n\n文档: composio.dev/toolkits/contentful-graphql",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Control D Automation",
    "description": "Automate Control D workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "control-d",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Control D 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Control D 账户（OAuth/API Key）\n3. 使用 CONTROL-D 前缀工具\n\n文档: composio.dev/toolkits/control-d",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Conversion Tools Automation",
    "description": "Automate Conversion Tools workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "conversion-tools",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Conversion Tools 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Conversion Tools 账户（OAuth/API Key）\n3. 使用 CONVERSION-TOOLS 前缀工具\n\n文档: composio.dev/toolkits/conversion-tools",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Convertapi Automation",
    "description": "Automate Convertapi workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "convertapi",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Convertapi 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Convertapi 账户（OAuth/API Key）\n3. 使用 CONVERTAPI 前缀工具\n\n文档: composio.dev/toolkits/convertapi",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Conveyor Automation",
    "description": "Automate Conveyor workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "conveyor",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Conveyor 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Conveyor 账户（OAuth/API Key）\n3. 使用 CONVEYOR 前缀工具\n\n文档: composio.dev/toolkits/conveyor",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Convolo Ai Automation",
    "description": "Automate Convolo Ai workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "convolo-ai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Convolo Ai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Convolo Ai 账户（OAuth/API Key）\n3. 使用 CONVOLO-AI 前缀工具\n\n文档: composio.dev/toolkits/convolo-ai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Corrently Automation",
    "description": "Automate Corrently workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "corrently",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Corrently 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Corrently 账户（OAuth/API Key）\n3. 使用 CORRENTLY 前缀工具\n\n文档: composio.dev/toolkits/corrently",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Countdown Api Automation",
    "description": "Automate Countdown Api workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "countdown-api",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Countdown Api 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Countdown Api 账户（OAuth/API Key）\n3. 使用 COUNTDOWN-API 前缀工具\n\n文档: composio.dev/toolkits/countdown-api",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Coupa Automation",
    "description": "Automate Coupa workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "coupa",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Coupa 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Coupa 账户（OAuth/API Key）\n3. 使用 COUPA 前缀工具\n\n文档: composio.dev/toolkits/coupa",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Craftmypdf Automation",
    "description": "Automate Craftmypdf workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "craftmypdf",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Craftmypdf 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Craftmypdf 账户（OAuth/API Key）\n3. 使用 CRAFTMYPDF 前缀工具\n\n文档: composio.dev/toolkits/craftmypdf",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Crowdin Automation",
    "description": "Automate Crowdin workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "crowdin",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Crowdin 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Crowdin 账户（OAuth/API Key）\n3. 使用 CROWDIN 前缀工具\n\n文档: composio.dev/toolkits/crowdin",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Crustdata Automation",
    "description": "Automate Crustdata workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "crustdata",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Crustdata 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Crustdata 账户（OAuth/API Key）\n3. 使用 CRUSTDATA 前缀工具\n\n文档: composio.dev/toolkits/crustdata",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Cults Automation",
    "description": "Automate Cults workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "cults",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Cults 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Cults 账户（OAuth/API Key）\n3. 使用 CULTS 前缀工具\n\n文档: composio.dev/toolkits/cults",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Curated Automation",
    "description": "Automate Curated workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "curated",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Curated 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Curated 账户（OAuth/API Key）\n3. 使用 CURATED 前缀工具\n\n文档: composio.dev/toolkits/curated",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Currents Api Automation",
    "description": "Automate Currents Api workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "currents-api",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Currents Api 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Currents Api 账户（OAuth/API Key）\n3. 使用 CURRENTS-API 前缀工具\n\n文档: composio.dev/toolkits/currents-api",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Customerio Automation",
    "description": "Automate Customerio workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "customerio",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Customerio 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Customerio 账户（OAuth/API Key）\n3. 使用 CUSTOMERIO 前缀工具\n\n文档: composio.dev/toolkits/customerio",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Customgpt Automation",
    "description": "Automate Customgpt workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "customgpt",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Customgpt 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Customgpt 账户（OAuth/API Key）\n3. 使用 CUSTOMGPT 前缀工具\n\n文档: composio.dev/toolkits/customgpt",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Customjs Automation",
    "description": "Automate Customjs workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "customjs",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Customjs 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Customjs 账户（OAuth/API Key）\n3. 使用 CUSTOMJS 前缀工具\n\n文档: composio.dev/toolkits/customjs",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Cutt Ly Automation",
    "description": "Automate Cutt Ly workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "cutt-ly",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Cutt Ly 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Cutt Ly 账户（OAuth/API Key）\n3. 使用 CUTT-LY 前缀工具\n\n文档: composio.dev/toolkits/cutt-ly",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "D2Lbrightspace Automation",
    "description": "Automate D2Lbrightspace workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "d2lbrightspace",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "D2Lbrightspace 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 D2Lbrightspace 账户（OAuth/API Key）\n3. 使用 D2LBRIGHTSPACE 前缀工具\n\n文档: composio.dev/toolkits/d2lbrightspace",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Dadata Ru Automation",
    "description": "Automate Dadata Ru workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "dadata-ru",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Dadata Ru 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Dadata Ru 账户（OAuth/API Key）\n3. 使用 DADATA-RU 前缀工具\n\n文档: composio.dev/toolkits/dadata-ru",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Daffy Automation",
    "description": "Automate Daffy workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "daffy",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Daffy 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Daffy 账户（OAuth/API Key）\n3. 使用 DAFFY 前缀工具\n\n文档: composio.dev/toolkits/daffy",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Dailybot Automation",
    "description": "Automate Dailybot workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "dailybot",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Dailybot 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Dailybot 账户（OAuth/API Key）\n3. 使用 DAILYBOT 前缀工具\n\n文档: composio.dev/toolkits/dailybot",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Datagma Automation",
    "description": "Automate Datagma workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "datagma",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Datagma 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Datagma 账户（OAuth/API Key）\n3. 使用 DATAGMA 前缀工具\n\n文档: composio.dev/toolkits/datagma",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Datarobot Automation",
    "description": "Automate Datarobot workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "datarobot",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Datarobot 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Datarobot 账户（OAuth/API Key）\n3. 使用 DATAROBOT 前缀工具\n\n文档: composio.dev/toolkits/datarobot",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Deadline Funnel Automation",
    "description": "Automate Deadline Funnel workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "deadline-funnel",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Deadline Funnel 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Deadline Funnel 账户（OAuth/API Key）\n3. 使用 DEADLINE-FUNNEL 前缀工具\n\n文档: composio.dev/toolkits/deadline-funnel",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Deel Automation",
    "description": "Automate Deel workflows via Composio MCP integration.",
    "domain": "hr-people",
    "tags": [
      "deel",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Deel 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Deel 账户（OAuth/API Key）\n3. 使用 DEEL 前缀工具\n\n文档: composio.dev/toolkits/deel",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Deepgram Automation",
    "description": "Automate Deepgram workflows via Composio MCP integration.",
    "domain": "ai-services",
    "tags": [
      "deepgram",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Deepgram 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Deepgram 账户（OAuth/API Key）\n3. 使用 DEEPGRAM 前缀工具\n\n文档: composio.dev/toolkits/deepgram",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Demio Automation",
    "description": "Automate Demio workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "demio",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Demio 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Demio 账户（OAuth/API Key）\n3. 使用 DEMIO 前缀工具\n\n文档: composio.dev/toolkits/demio",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Desktime Automation",
    "description": "Automate Desktime workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "desktime",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Desktime 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Desktime 账户（OAuth/API Key）\n3. 使用 DESKTIME 前缀工具\n\n文档: composio.dev/toolkits/desktime",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Detrack Automation",
    "description": "Automate Detrack workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "detrack",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Detrack 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Detrack 账户（OAuth/API Key）\n3. 使用 DETRACK 前缀工具\n\n文档: composio.dev/toolkits/detrack",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Dialmycalls Automation",
    "description": "Automate Dialmycalls workflows via Composio MCP integration.",
    "domain": "meetings-scheduling",
    "tags": [
      "dialmycalls",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Dialmycalls 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Dialmycalls 账户（OAuth/API Key）\n3. 使用 DIALMYCALLS 前缀工具\n\n文档: composio.dev/toolkits/dialmycalls",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Dialpad Automation",
    "description": "Automate Dialpad workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "dialpad",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Dialpad 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Dialpad 账户（OAuth/API Key）\n3. 使用 DIALPAD 前缀工具\n\n文档: composio.dev/toolkits/dialpad",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Dictionary Api Automation",
    "description": "Automate Dictionary Api workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "dictionary-api",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Dictionary Api 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Dictionary Api 账户（OAuth/API Key）\n3. 使用 DICTIONARY-API 前缀工具\n\n文档: composio.dev/toolkits/dictionary-api",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Diffbot Automation",
    "description": "Automate Diffbot workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "diffbot",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Diffbot 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Diffbot 账户（OAuth/API Key）\n3. 使用 DIFFBOT 前缀工具\n\n文档: composio.dev/toolkits/diffbot",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Digicert Automation",
    "description": "Automate Digicert workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "digicert",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Digicert 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Digicert 账户（OAuth/API Key）\n3. 使用 DIGICERT 前缀工具\n\n文档: composio.dev/toolkits/digicert",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Digital Ocean Automation",
    "description": "Automate Digital Ocean workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "digital-ocean",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Digital Ocean 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Digital Ocean 账户（OAuth/API Key）\n3. 使用 DIGITAL-OCEAN 前缀工具\n\n文档: composio.dev/toolkits/digital-ocean",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Discordbot Automation",
    "description": "Automate Discordbot workflows via Composio MCP integration.",
    "domain": "communication",
    "tags": [
      "discordbot",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Discordbot 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Discordbot 账户（OAuth/API Key）\n3. 使用 DISCORDBOT 前缀工具\n\n文档: composio.dev/toolkits/discordbot",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Dnsfilter Automation",
    "description": "Automate Dnsfilter workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "dnsfilter",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Dnsfilter 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Dnsfilter 账户（OAuth/API Key）\n3. 使用 DNSFILTER 前缀工具\n\n文档: composio.dev/toolkits/dnsfilter",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Dock Certs Automation",
    "description": "Automate Dock Certs workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "dock-certs",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Dock Certs 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Dock Certs 账户（OAuth/API Key）\n3. 使用 DOCK-CERTS 前缀工具\n\n文档: composio.dev/toolkits/dock-certs",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Docker Hub Automation",
    "description": "Automate Docker Hub workflows via Composio MCP integration.",
    "domain": "devops",
    "tags": [
      "docker-hub",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Docker Hub 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Docker Hub 账户（OAuth/API Key）\n3. 使用 DOCKER-HUB 前缀工具\n\n文档: composio.dev/toolkits/docker-hub",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Docker_Hub Automation",
    "description": "Automate Docker_Hub workflows via Composio MCP integration.",
    "domain": "devops",
    "tags": [
      "docker_hub",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Docker_Hub 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Docker_Hub 账户（OAuth/API Key）\n3. 使用 DOCKER_HUB 前缀工具\n\n文档: composio.dev/toolkits/docker_hub",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Docmosis Automation",
    "description": "Automate Docmosis workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "docmosis",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Docmosis 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Docmosis 账户（OAuth/API Key）\n3. 使用 DOCMOSIS 前缀工具\n\n文档: composio.dev/toolkits/docmosis",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Docnify Automation",
    "description": "Automate Docnify workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "docnify",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Docnify 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Docnify 账户（OAuth/API Key）\n3. 使用 DOCNIFY 前缀工具\n\n文档: composio.dev/toolkits/docnify",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Docsbot Ai Automation",
    "description": "Automate Docsbot Ai workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "docsbot-ai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Docsbot Ai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Docsbot Ai 账户（OAuth/API Key）\n3. 使用 DOCSBOT-AI 前缀工具\n\n文档: composio.dev/toolkits/docsbot-ai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Docsumo Automation",
    "description": "Automate Docsumo workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "docsumo",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Docsumo 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Docsumo 账户（OAuth/API Key）\n3. 使用 DOCSUMO 前缀工具\n\n文档: composio.dev/toolkits/docsumo",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Docugenerate Automation",
    "description": "Automate Docugenerate workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "docugenerate",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Docugenerate 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Docugenerate 账户（OAuth/API Key）\n3. 使用 DOCUGENERATE 前缀工具\n\n文档: composio.dev/toolkits/docugenerate",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Documenso Automation",
    "description": "Automate Documenso workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "documenso",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Documenso 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Documenso 账户（OAuth/API Key）\n3. 使用 DOCUMENSO 前缀工具\n\n文档: composio.dev/toolkits/documenso",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Documint Automation",
    "description": "Automate Documint workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "documint",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Documint 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Documint 账户（OAuth/API Key）\n3. 使用 DOCUMINT 前缀工具\n\n文档: composio.dev/toolkits/documint",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "docupilot-automation",
    "description": "Automate Docupilot tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "docupilot",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Docupilot 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Docupilot 账户（OAuth/API Key）\n3. 使用 DOCUPILOT 前缀工具\n\n文档: composio.dev/toolkits/docupilot",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Docupost Automation",
    "description": "Automate Docupost workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "docupost",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Docupost 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Docupost 账户（OAuth/API Key）\n3. 使用 DOCUPOST 前缀工具\n\n文档: composio.dev/toolkits/docupost",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "docuseal-automation",
    "description": "Automate Docuseal tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "docuseal",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Docuseal 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Docuseal 账户（OAuth/API Key）\n3. 使用 DOCUSEAL 前缀工具\n\n文档: composio.dev/toolkits/docuseal",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "doppler-marketing-automation-automation",
    "description": "Automate Doppler Marketing Automation tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "doppler-marketing",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Doppler Marketing 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Doppler Marketing 账户（OAuth/API Key）\n3. 使用 DOPPLER-MARKETING 前缀工具\n\n文档: composio.dev/toolkits/doppler-marketing",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Doppler Secretops Automation",
    "description": "Automate Doppler Secretops workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "doppler-secretops",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Doppler Secretops 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Doppler Secretops 账户（OAuth/API Key）\n3. 使用 DOPPLER-SECRETOPS 前缀工具\n\n文档: composio.dev/toolkits/doppler-secretops",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "dotsimple-automation",
    "description": "Automate Dotsimple tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "dotsimple",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Dotsimple 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Dotsimple 账户（OAuth/API Key）\n3. 使用 DOTSIMPLE 前缀工具\n\n文档: composio.dev/toolkits/dotsimple",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Dovetail Automation",
    "description": "Automate Dovetail workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "dovetail",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Dovetail 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Dovetail 账户（OAuth/API Key）\n3. 使用 DOVETAIL 前缀工具\n\n文档: composio.dev/toolkits/dovetail",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Dpd2 Automation",
    "description": "Automate Dpd2 workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "dpd2",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Dpd2 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Dpd2 账户（OAuth/API Key）\n3. 使用 DPD2 前缀工具\n\n文档: composio.dev/toolkits/dpd2",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Draftable Automation",
    "description": "Automate Draftable workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "draftable",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Draftable 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Draftable 账户（OAuth/API Key）\n3. 使用 DRAFTABLE 前缀工具\n\n文档: composio.dev/toolkits/draftable",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Dreamstudio Automation",
    "description": "Automate Dreamstudio workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "dreamstudio",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Dreamstudio 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Dreamstudio 账户（OAuth/API Key）\n3. 使用 DREAMSTUDIO 前缀工具\n\n文档: composio.dev/toolkits/dreamstudio",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Drip Jobs Automation",
    "description": "Automate Drip Jobs workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "drip-jobs",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Drip Jobs 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Drip Jobs 账户（OAuth/API Key）\n3. 使用 DRIP-JOBS 前缀工具\n\n文档: composio.dev/toolkits/drip-jobs",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Dripcel Automation",
    "description": "Automate Dripcel workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "dripcel",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Dripcel 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Dripcel 账户（OAuth/API Key）\n3. 使用 DRIPCEL 前缀工具\n\n文档: composio.dev/toolkits/dripcel",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Dromo Automation",
    "description": "Automate Dromo workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "dromo",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Dromo 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Dromo 账户（OAuth/API Key）\n3. 使用 DROMO 前缀工具\n\n文档: composio.dev/toolkits/dromo",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Dropbox Sign Automation",
    "description": "Automate Dropbox Sign workflows via Composio MCP integration.",
    "domain": "cloud-storage",
    "tags": [
      "dropbox-sign",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Dropbox Sign 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Dropbox Sign 账户（OAuth/API Key）\n3. 使用 DROPBOX-SIGN 前缀工具\n\n文档: composio.dev/toolkits/dropbox-sign",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "dropcontact-automation",
    "description": "Automate Dropcontact tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "dropcontact",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Dropcontact 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Dropcontact 账户（OAuth/API Key）\n3. 使用 DROPCONTACT 前缀工具\n\n文档: composio.dev/toolkits/dropcontact",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "dungeon-fighter-online-automation",
    "description": "Automate Dungeon Fighter Online tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "dungeon-fighter-online",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Dungeon Fighter Online 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Dungeon Fighter Online 账户（OAuth/API Key）\n3. 使用 DUNGEON-FIGHTER-ONLINE 前缀工具\n\n文档: composio.dev/toolkits/dungeon-fighter-online",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Dynamics365 Automation",
    "description": "Automate Dynamics365 workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "dynamics365",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Dynamics365 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Dynamics365 账户（OAuth/API Key）\n3. 使用 DYNAMICS365 前缀工具\n\n文档: composio.dev/toolkits/dynamics365",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "echtpost-automation",
    "description": "Automate Echtpost tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "saas-automation",
    "tags": [
      "echtpost",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Echtpost 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Echtpost 账户（OAuth/API Key）\n3. 使用 ECHTPOST 前缀工具\n\n文档: composio.dev/toolkits/echtpost",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Elevenlabs Automation",
    "description": "Automate Elevenlabs workflows via Composio MCP integration.",
    "domain": "ai-services",
    "tags": [
      "elevenlabs",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Elevenlabs 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Elevenlabs 账户（OAuth/API Key）\n3. 使用 ELEVENLABS 前缀工具\n\n文档: composio.dev/toolkits/elevenlabs",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Elorus Automation",
    "description": "Automate Elorus workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "elorus",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Elorus 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Elorus 账户（OAuth/API Key）\n3. 使用 ELORUS 前缀工具\n\n文档: composio.dev/toolkits/elorus",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Emailable Automation",
    "description": "Automate Emailable workflows via Composio MCP integration.",
    "domain": "email-marketing",
    "tags": [
      "emailable",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Emailable 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Emailable 账户（OAuth/API Key）\n3. 使用 EMAILABLE 前缀工具\n\n文档: composio.dev/toolkits/emailable",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "emaillistverify-automation",
    "description": "Automate Emaillistverify tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "email-marketing",
    "tags": [
      "emaillistverify",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Emaillistverify 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Emaillistverify 账户（OAuth/API Key）\n3. 使用 EMAILLISTVERIFY 前缀工具\n\n文档: composio.dev/toolkits/emaillistverify",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "emailoctopus-automation",
    "description": "Automate Emailoctopus tasks via Rube MCP (Composio). Always search tools first for current schemas.",
    "domain": "email-marketing",
    "tags": [
      "emailoctopus",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Emailoctopus 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Emailoctopus 账户（OAuth/API Key）\n3. 使用 EMAILOCTOPUS 前缀工具\n\n文档: composio.dev/toolkits/emailoctopus",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Emelia Automation",
    "description": "Automate Emelia workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "emelia",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Emelia 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Emelia 账户（OAuth/API Key）\n3. 使用 EMELIA 前缀工具\n\n文档: composio.dev/toolkits/emelia",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Encodian Automation",
    "description": "Automate Encodian workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "encodian",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Encodian 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Encodian 账户（OAuth/API Key）\n3. 使用 ENCODIAN 前缀工具\n\n文档: composio.dev/toolkits/encodian",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Endorsal Automation",
    "description": "Automate Endorsal workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "endorsal",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Endorsal 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Endorsal 账户（OAuth/API Key）\n3. 使用 ENDORSAL 前缀工具\n\n文档: composio.dev/toolkits/endorsal",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Enginemailer Automation",
    "description": "Automate Enginemailer workflows via Composio MCP integration.",
    "domain": "email-marketing",
    "tags": [
      "enginemailer",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Enginemailer 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Enginemailer 账户（OAuth/API Key）\n3. 使用 ENGINEMAILER 前缀工具\n\n文档: composio.dev/toolkits/enginemailer",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Enigma Automation",
    "description": "Automate Enigma workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "enigma",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Enigma 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Enigma 账户（OAuth/API Key）\n3. 使用 ENIGMA 前缀工具\n\n文档: composio.dev/toolkits/enigma",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Entelligence Automation",
    "description": "Automate Entelligence workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "entelligence",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Entelligence 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Entelligence 账户（OAuth/API Key）\n3. 使用 ENTELLIGENCE 前缀工具\n\n文档: composio.dev/toolkits/entelligence",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Eodhd Apis Automation",
    "description": "Automate Eodhd Apis workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "eodhd-apis",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Eodhd Apis 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Eodhd Apis 账户（OAuth/API Key）\n3. 使用 EODHD-APIS 前缀工具\n\n文档: composio.dev/toolkits/eodhd-apis",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Epic Games Automation",
    "description": "Automate Epic Games workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "epic-games",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Epic Games 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Epic Games 账户（OAuth/API Key）\n3. 使用 EPIC-GAMES 前缀工具\n\n文档: composio.dev/toolkits/epic-games",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Esignatures Io Automation",
    "description": "Automate Esignatures Io workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "esignatures-io",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Esignatures Io 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Esignatures Io 账户（OAuth/API Key）\n3. 使用 ESIGNATURES-IO 前缀工具\n\n文档: composio.dev/toolkits/esignatures-io",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Espocrm Automation",
    "description": "Automate Espocrm workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "espocrm",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Espocrm 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Espocrm 账户（OAuth/API Key）\n3. 使用 ESPOCRM 前缀工具\n\n文档: composio.dev/toolkits/espocrm",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Esputnik Automation",
    "description": "Automate Esputnik workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "esputnik",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Esputnik 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Esputnik 账户（OAuth/API Key）\n3. 使用 ESPUTNIK 前缀工具\n\n文档: composio.dev/toolkits/esputnik",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Etermin Automation",
    "description": "Automate Etermin workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "etermin",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Etermin 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Etermin 账户（OAuth/API Key）\n3. 使用 ETERMIN 前缀工具\n\n文档: composio.dev/toolkits/etermin",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Evenium Automation",
    "description": "Automate Evenium workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "evenium",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Evenium 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Evenium 账户（OAuth/API Key）\n3. 使用 EVENIUM 前缀工具\n\n文档: composio.dev/toolkits/evenium",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Eventbrite Automation",
    "description": "Automate Eventbrite workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "eventbrite",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Eventbrite 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Eventbrite 账户（OAuth/API Key）\n3. 使用 EVENTBRITE 前缀工具\n\n文档: composio.dev/toolkits/eventbrite",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Eventee Automation",
    "description": "Automate Eventee workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "eventee",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Eventee 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Eventee 账户（OAuth/API Key）\n3. 使用 EVENTEE 前缀工具\n\n文档: composio.dev/toolkits/eventee",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Eventzilla Automation",
    "description": "Automate Eventzilla workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "eventzilla",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Eventzilla 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Eventzilla 账户（OAuth/API Key）\n3. 使用 EVENTZILLA 前缀工具\n\n文档: composio.dev/toolkits/eventzilla",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Everhour Automation",
    "description": "Automate Everhour workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "everhour",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Everhour 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Everhour 账户（OAuth/API Key）\n3. 使用 EVERHOUR 前缀工具\n\n文档: composio.dev/toolkits/everhour",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Eversign Automation",
    "description": "Automate Eversign workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "eversign",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Eversign 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Eversign 账户（OAuth/API Key）\n3. 使用 EVERSIGN 前缀工具\n\n文档: composio.dev/toolkits/eversign",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Exa Automation",
    "description": "Automate Exa workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "exa",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Exa 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Exa 账户（OAuth/API Key）\n3. 使用 EXA 前缀工具\n\n文档: composio.dev/toolkits/exa",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Excel Automation",
    "description": "Automate Excel workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "excel",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Excel 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Excel 账户（OAuth/API Key）\n3. 使用 EXCEL 前缀工具\n\n文档: composio.dev/toolkits/excel",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Exist Automation",
    "description": "Automate Exist workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "exist",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Exist 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Exist 账户（OAuth/API Key）\n3. 使用 EXIST 前缀工具\n\n文档: composio.dev/toolkits/exist",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Expofp Automation",
    "description": "Automate Expofp workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "expofp",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Expofp 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Expofp 账户（OAuth/API Key）\n3. 使用 EXPOFP 前缀工具\n\n文档: composio.dev/toolkits/expofp",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Extracta Ai Automation",
    "description": "Automate Extracta Ai workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "extracta-ai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Extracta Ai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Extracta Ai 账户（OAuth/API Key）\n3. 使用 EXTRACTA-AI 前缀工具\n\n文档: composio.dev/toolkits/extracta-ai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Facebook Automation",
    "description": "Automate Facebook workflows via Composio MCP integration.",
    "domain": "social-media",
    "tags": [
      "facebook",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Facebook 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Facebook 账户（OAuth/API Key）\n3. 使用 FACEBOOK 前缀工具\n\n文档: composio.dev/toolkits/facebook",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Faceup Automation",
    "description": "Automate Faceup workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "faceup",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Faceup 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Faceup 账户（OAuth/API Key）\n3. 使用 FACEUP 前缀工具\n\n文档: composio.dev/toolkits/faceup",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Factorial Automation",
    "description": "Automate Factorial workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "factorial",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Factorial 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Factorial 账户（OAuth/API Key）\n3. 使用 FACTORIAL 前缀工具\n\n文档: composio.dev/toolkits/factorial",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Feathery Automation",
    "description": "Automate Feathery workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "feathery",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Feathery 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Feathery 账户（OAuth/API Key）\n3. 使用 FEATHERY 前缀工具\n\n文档: composio.dev/toolkits/feathery",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Felt Automation",
    "description": "Automate Felt workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "felt",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Felt 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Felt 账户（OAuth/API Key）\n3. 使用 FELT 前缀工具\n\n文档: composio.dev/toolkits/felt",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Fibery Automation",
    "description": "Automate Fibery workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "fibery",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Fibery 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Fibery 账户（OAuth/API Key）\n3. 使用 FIBERY 前缀工具\n\n文档: composio.dev/toolkits/fibery",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Fidel Api Automation",
    "description": "Automate Fidel Api workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "fidel-api",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Fidel Api 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Fidel Api 账户（OAuth/API Key）\n3. 使用 FIDEL-API 前缀工具\n\n文档: composio.dev/toolkits/fidel-api",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Files Com Automation",
    "description": "Automate Files Com workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "files-com",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Files Com 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Files Com 账户（OAuth/API Key）\n3. 使用 FILES-COM 前缀工具\n\n文档: composio.dev/toolkits/files-com",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Fillout Forms Automation",
    "description": "Automate Fillout Forms workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "fillout-forms",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Fillout Forms 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Fillout Forms 账户（OAuth/API Key）\n3. 使用 FILLOUT-FORMS 前缀工具\n\n文档: composio.dev/toolkits/fillout-forms",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Fillout_Forms Automation",
    "description": "Automate Fillout_Forms workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "fillout_forms",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Fillout_Forms 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Fillout_Forms 账户（OAuth/API Key）\n3. 使用 FILLOUT_FORMS 前缀工具\n\n文档: composio.dev/toolkits/fillout_forms",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Finage Automation",
    "description": "Automate Finage workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "finage",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Finage 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Finage 账户（OAuth/API Key）\n3. 使用 FINAGE 前缀工具\n\n文档: composio.dev/toolkits/finage",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Findymail Automation",
    "description": "Automate Findymail workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "findymail",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Findymail 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Findymail 账户（OAuth/API Key）\n3. 使用 FINDYMAIL 前缀工具\n\n文档: composio.dev/toolkits/findymail",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Finerworks Automation",
    "description": "Automate Finerworks workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "finerworks",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Finerworks 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Finerworks 账户（OAuth/API Key）\n3. 使用 FINERWORKS 前缀工具\n\n文档: composio.dev/toolkits/finerworks",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Fingertip Automation",
    "description": "Automate Fingertip workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "fingertip",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Fingertip 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Fingertip 账户（OAuth/API Key）\n3. 使用 FINGERTIP 前缀工具\n\n文档: composio.dev/toolkits/fingertip",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Finmei Automation",
    "description": "Automate Finmei workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "finmei",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Finmei 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Finmei 账户（OAuth/API Key）\n3. 使用 FINMEI 前缀工具\n\n文档: composio.dev/toolkits/finmei",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Fireberry Automation",
    "description": "Automate Fireberry workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "fireberry",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Fireberry 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Fireberry 账户（OAuth/API Key）\n3. 使用 FIREBERRY 前缀工具\n\n文档: composio.dev/toolkits/fireberry",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Firecrawl Automation",
    "description": "Automate Firecrawl workflows via Composio MCP integration.",
    "domain": "web-scraping",
    "tags": [
      "firecrawl",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Firecrawl 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Firecrawl 账户（OAuth/API Key）\n3. 使用 FIRECRAWL 前缀工具\n\n文档: composio.dev/toolkits/firecrawl",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Fireflies Automation",
    "description": "Automate Fireflies workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "fireflies",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Fireflies 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Fireflies 账户（OAuth/API Key）\n3. 使用 FIREFLIES 前缀工具\n\n文档: composio.dev/toolkits/fireflies",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Firmao Automation",
    "description": "Automate Firmao workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "firmao",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Firmao 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Firmao 账户（OAuth/API Key）\n3. 使用 FIRMAO 前缀工具\n\n文档: composio.dev/toolkits/firmao",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Fitbit Automation",
    "description": "Automate Fitbit workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "fitbit",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Fitbit 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Fitbit 账户（OAuth/API Key）\n3. 使用 FITBIT 前缀工具\n\n文档: composio.dev/toolkits/fitbit",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Fixer Automation",
    "description": "Automate Fixer workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "fixer",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Fixer 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Fixer 账户（OAuth/API Key）\n3. 使用 FIXER 前缀工具\n\n文档: composio.dev/toolkits/fixer",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Fixer Io Automation",
    "description": "Automate Fixer Io workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "fixer-io",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Fixer Io 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Fixer Io 账户（OAuth/API Key）\n3. 使用 FIXER-IO 前缀工具\n\n文档: composio.dev/toolkits/fixer-io",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Flexisign Automation",
    "description": "Automate Flexisign workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "flexisign",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Flexisign 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Flexisign 账户（OAuth/API Key）\n3. 使用 FLEXISIGN 前缀工具\n\n文档: composio.dev/toolkits/flexisign",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Flowiseai Automation",
    "description": "Automate Flowiseai workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "flowiseai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Flowiseai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Flowiseai 账户（OAuth/API Key）\n3. 使用 FLOWISEAI 前缀工具\n\n文档: composio.dev/toolkits/flowiseai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Flutterwave Automation",
    "description": "Automate Flutterwave workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "flutterwave",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Flutterwave 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Flutterwave 账户（OAuth/API Key）\n3. 使用 FLUTTERWAVE 前缀工具\n\n文档: composio.dev/toolkits/flutterwave",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Fluxguard Automation",
    "description": "Automate Fluxguard workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "fluxguard",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Fluxguard 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Fluxguard 账户（OAuth/API Key）\n3. 使用 FLUXGUARD 前缀工具\n\n文档: composio.dev/toolkits/fluxguard",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Folk Automation",
    "description": "Automate Folk workflows via Composio MCP integration.",
    "domain": "crm-sales",
    "tags": [
      "folk",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Folk 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Folk 账户（OAuth/API Key）\n3. 使用 FOLK 前缀工具\n\n文档: composio.dev/toolkits/folk",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Fomo Automation",
    "description": "Automate Fomo workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "fomo",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Fomo 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Fomo 账户（OAuth/API Key）\n3. 使用 FOMO 前缀工具\n\n文档: composio.dev/toolkits/fomo",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Forcemanager Automation",
    "description": "Automate Forcemanager workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "forcemanager",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Forcemanager 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Forcemanager 账户（OAuth/API Key）\n3. 使用 FORCEMANAGER 前缀工具\n\n文档: composio.dev/toolkits/forcemanager",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Formbricks Automation",
    "description": "Automate Formbricks workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "formbricks",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Formbricks 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Formbricks 账户（OAuth/API Key）\n3. 使用 FORMBRICKS 前缀工具\n\n文档: composio.dev/toolkits/formbricks",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Formcarry Automation",
    "description": "Automate Formcarry workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "formcarry",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Formcarry 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Formcarry 账户（OAuth/API Key）\n3. 使用 FORMCARRY 前缀工具\n\n文档: composio.dev/toolkits/formcarry",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Formdesk Automation",
    "description": "Automate Formdesk workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "formdesk",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Formdesk 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Formdesk 账户（OAuth/API Key）\n3. 使用 FORMDESK 前缀工具\n\n文档: composio.dev/toolkits/formdesk",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Formsite Automation",
    "description": "Automate Formsite workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "formsite",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Formsite 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Formsite 账户（OAuth/API Key）\n3. 使用 FORMSITE 前缀工具\n\n文档: composio.dev/toolkits/formsite",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Foursquare Automation",
    "description": "Automate Foursquare workflows via Composio MCP integration.",
    "domain": "ecommerce-payments",
    "tags": [
      "foursquare",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Foursquare 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Foursquare 账户（OAuth/API Key）\n3. 使用 FOURSQUARE 前缀工具\n\n文档: composio.dev/toolkits/foursquare",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Fraudlabs Pro Automation",
    "description": "Automate Fraudlabs Pro workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "fraudlabs-pro",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Fraudlabs Pro 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Fraudlabs Pro 账户（OAuth/API Key）\n3. 使用 FRAUDLABS-PRO 前缀工具\n\n文档: composio.dev/toolkits/fraudlabs-pro",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Freshbooks Automation",
    "description": "Automate Freshbooks workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "freshbooks",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Freshbooks 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Freshbooks 账户（OAuth/API Key）\n3. 使用 FRESHBOOKS 前缀工具\n\n文档: composio.dev/toolkits/freshbooks",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Front Automation",
    "description": "Automate Front workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "front",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Front 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Front 账户（OAuth/API Key）\n3. 使用 FRONT 前缀工具\n\n文档: composio.dev/toolkits/front",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Fullenrich Automation",
    "description": "Automate Fullenrich workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "fullenrich",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Fullenrich 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Fullenrich 账户（OAuth/API Key）\n3. 使用 FULLENRICH 前缀工具\n\n文档: composio.dev/toolkits/fullenrich",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Gagelist Automation",
    "description": "Automate Gagelist workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "gagelist",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Gagelist 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Gagelist 账户（OAuth/API Key）\n3. 使用 GAGELIST 前缀工具\n\n文档: composio.dev/toolkits/gagelist",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Gamma Automation",
    "description": "Automate Gamma workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "gamma",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Gamma 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Gamma 账户（OAuth/API Key）\n3. 使用 GAMMA 前缀工具\n\n文档: composio.dev/toolkits/gamma",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Gan Ai Automation",
    "description": "Automate Gan Ai workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "gan-ai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Gan Ai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Gan Ai 账户（OAuth/API Key）\n3. 使用 GAN-AI 前缀工具\n\n文档: composio.dev/toolkits/gan-ai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Gatherup Automation",
    "description": "Automate Gatherup workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "gatherup",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Gatherup 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Gatherup 账户（OAuth/API Key）\n3. 使用 GATHERUP 前缀工具\n\n文档: composio.dev/toolkits/gatherup",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Gemini Automation",
    "description": "Automate Gemini workflows via Composio MCP integration.",
    "domain": "ai-services",
    "tags": [
      "gemini",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Gemini 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Gemini 账户（OAuth/API Key）\n3. 使用 GEMINI 前缀工具\n\n文档: composio.dev/toolkits/gemini",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Gender Api Automation",
    "description": "Automate Gender Api workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "gender-api",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Gender Api 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Gender Api 账户（OAuth/API Key）\n3. 使用 GENDER-API 前缀工具\n\n文档: composio.dev/toolkits/gender-api",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Genderapi Io Automation",
    "description": "Automate Genderapi Io workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "genderapi-io",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Genderapi Io 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Genderapi Io 账户（OAuth/API Key）\n3. 使用 GENDERAPI-IO 前缀工具\n\n文档: composio.dev/toolkits/genderapi-io",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Genderize Automation",
    "description": "Automate Genderize workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "genderize",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Genderize 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Genderize 账户（OAuth/API Key）\n3. 使用 GENDERIZE 前缀工具\n\n文档: composio.dev/toolkits/genderize",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Geoapify Automation",
    "description": "Automate Geoapify workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "geoapify",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Geoapify 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Geoapify 账户（OAuth/API Key）\n3. 使用 GEOAPIFY 前缀工具\n\n文档: composio.dev/toolkits/geoapify",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Geocodio Automation",
    "description": "Automate Geocodio workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "geocodio",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Geocodio 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Geocodio 账户（OAuth/API Key）\n3. 使用 GEOCODIO 前缀工具\n\n文档: composio.dev/toolkits/geocodio",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Geokeo Automation",
    "description": "Automate Geokeo workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "geokeo",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Geokeo 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Geokeo 账户（OAuth/API Key）\n3. 使用 GEOKEO 前缀工具\n\n文档: composio.dev/toolkits/geokeo",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Getform Automation",
    "description": "Automate Getform workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "getform",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Getform 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Getform 账户（OAuth/API Key）\n3. 使用 GETFORM 前缀工具\n\n文档: composio.dev/toolkits/getform",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Gift Up Automation",
    "description": "Automate Gift Up workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "gift-up",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Gift Up 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Gift Up 账户（OAuth/API Key）\n3. 使用 GIFT-UP 前缀工具\n\n文档: composio.dev/toolkits/gift-up",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Gigasheet Automation",
    "description": "Automate Gigasheet workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "gigasheet",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Gigasheet 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Gigasheet 账户（OAuth/API Key）\n3. 使用 GIGASHEET 前缀工具\n\n文档: composio.dev/toolkits/gigasheet",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Giphy Automation",
    "description": "Automate Giphy workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "giphy",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Giphy 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Giphy 账户（OAuth/API Key）\n3. 使用 GIPHY 前缀工具\n\n文档: composio.dev/toolkits/giphy",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Gist Automation",
    "description": "Automate Gist workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "gist",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Gist 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Gist 账户（OAuth/API Key）\n3. 使用 GIST 前缀工具\n\n文档: composio.dev/toolkits/gist",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Givebutter Automation",
    "description": "Automate Givebutter workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "givebutter",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Givebutter 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Givebutter 账户（OAuth/API Key）\n3. 使用 GIVEBUTTER 前缀工具\n\n文档: composio.dev/toolkits/givebutter",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Gladia Automation",
    "description": "Automate Gladia workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "gladia",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Gladia 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Gladia 账户（OAuth/API Key）\n3. 使用 GLADIA 前缀工具\n\n文档: composio.dev/toolkits/gladia",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Gleap Automation",
    "description": "Automate Gleap workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "gleap",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Gleap 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Gleap 账户（OAuth/API Key）\n3. 使用 GLEAP 前缀工具\n\n文档: composio.dev/toolkits/gleap",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Globalping Automation",
    "description": "Automate Globalping workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "globalping",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Globalping 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Globalping 账户（OAuth/API Key）\n3. 使用 GLOBALPING 前缀工具\n\n文档: composio.dev/toolkits/globalping",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Go To Webinar Automation",
    "description": "Automate Go To Webinar workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "go-to-webinar",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Go To Webinar 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Go To Webinar 账户（OAuth/API Key）\n3. 使用 GO-TO-WEBINAR 前缀工具\n\n文档: composio.dev/toolkits/go-to-webinar",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Godial Automation",
    "description": "Automate Godial workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "godial",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Godial 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Godial 账户（OAuth/API Key）\n3. 使用 GODIAL 前缀工具\n\n文档: composio.dev/toolkits/godial",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Gong Automation",
    "description": "Automate Gong workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "gong",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Gong 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Gong 账户（OAuth/API Key）\n3. 使用 GONG 前缀工具\n\n文档: composio.dev/toolkits/gong",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Goodbits Automation",
    "description": "Automate Goodbits workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "goodbits",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Goodbits 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Goodbits 账户（OAuth/API Key）\n3. 使用 GOODBITS 前缀工具\n\n文档: composio.dev/toolkits/goodbits",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Goody Automation",
    "description": "Automate Goody workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "goody",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Goody 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Goody 账户（OAuth/API Key）\n3. 使用 GOODY 前缀工具\n\n文档: composio.dev/toolkits/goody",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Google Address Validation Automation",
    "description": "Automate Google Address Validation workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "google-address-validation",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Google Address Validation 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Google Address Validation 账户（OAuth/API Key）\n3. 使用 GOOGLE-ADDRESS-VALIDATION 前缀工具\n\n文档: composio.dev/toolkits/google-address-validation",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Google Admin Automation",
    "description": "Automate Google Admin workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "google-admin",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Google Admin 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Google Admin 账户（OAuth/API Key）\n3. 使用 GOOGLE-ADMIN 前缀工具\n\n文档: composio.dev/toolkits/google-admin",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Google Classroom Automation",
    "description": "Automate Google Classroom workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "google-classroom",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Google Classroom 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Google Classroom 账户（OAuth/API Key）\n3. 使用 GOOGLE-CLASSROOM 前缀工具\n\n文档: composio.dev/toolkits/google-classroom",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Google Cloud Vision Automation",
    "description": "Automate Google Cloud Vision workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "google-cloud-vision",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Google Cloud Vision 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Google Cloud Vision 账户（OAuth/API Key）\n3. 使用 GOOGLE-CLOUD-VISION 前缀工具\n\n文档: composio.dev/toolkits/google-cloud-vision",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Google Maps Automation",
    "description": "Automate Google Maps workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "google-maps",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Google Maps 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Google Maps 账户（OAuth/API Key）\n3. 使用 GOOGLE-MAPS 前缀工具\n\n文档: composio.dev/toolkits/google-maps",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Google Search Console Automation",
    "description": "Automate Google Search Console workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "google-search-console",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Google Search Console 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Google Search Console 账户（OAuth/API Key）\n3. 使用 GOOGLE-SEARCH-CONSOLE 前缀工具\n\n文档: composio.dev/toolkits/google-search-console",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Google_Admin Automation",
    "description": "Automate Google_Admin workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "google_admin",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Google_Admin 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Google_Admin 账户（OAuth/API Key）\n3. 使用 GOOGLE_ADMIN 前缀工具\n\n文档: composio.dev/toolkits/google_admin",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Google_Classroom Automation",
    "description": "Automate Google_Classroom workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "google_classroom",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Google_Classroom 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Google_Classroom 账户（OAuth/API Key）\n3. 使用 GOOGLE_CLASSROOM 前缀工具\n\n文档: composio.dev/toolkits/google_classroom",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Google_Maps Automation",
    "description": "Automate Google_Maps workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "google_maps",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Google_Maps 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Google_Maps 账户（OAuth/API Key）\n3. 使用 GOOGLE_MAPS 前缀工具\n\n文档: composio.dev/toolkits/google_maps",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Google_Search_Console Automation",
    "description": "Automate Google_Search_Console workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "google_search_console",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Google_Search_Console 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Google_Search_Console 账户（OAuth/API Key）\n3. 使用 GOOGLE_SEARCH_CONSOLE 前缀工具\n\n文档: composio.dev/toolkits/google_search_console",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Googleads Automation",
    "description": "Automate Googleads workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "googleads",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Googleads 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Googleads 账户（OAuth/API Key）\n3. 使用 GOOGLEADS 前缀工具\n\n文档: composio.dev/toolkits/googleads",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Googlebigquery Automation",
    "description": "Automate Googlebigquery workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "googlebigquery",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Googlebigquery 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Googlebigquery 账户（OAuth/API Key）\n3. 使用 GOOGLEBIGQUERY 前缀工具\n\n文档: composio.dev/toolkits/googlebigquery",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Googlecalendar Automation",
    "description": "Automate Googlecalendar workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "googlecalendar",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Googlecalendar 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Googlecalendar 账户（OAuth/API Key）\n3. 使用 GOOGLECALENDAR 前缀工具\n\n文档: composio.dev/toolkits/googlecalendar",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Googledocs Automation",
    "description": "Automate Googledocs workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "googledocs",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Googledocs 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Googledocs 账户（OAuth/API Key）\n3. 使用 GOOGLEDOCS 前缀工具\n\n文档: composio.dev/toolkits/googledocs",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Googledrive Automation",
    "description": "Automate Googledrive workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "googledrive",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Googledrive 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Googledrive 账户（OAuth/API Key）\n3. 使用 GOOGLEDRIVE 前缀工具\n\n文档: composio.dev/toolkits/googledrive",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Googlemeet Automation",
    "description": "Automate Googlemeet workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "googlemeet",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Googlemeet 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Googlemeet 账户（OAuth/API Key）\n3. 使用 GOOGLEMEET 前缀工具\n\n文档: composio.dev/toolkits/googlemeet",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Googlephotos Automation",
    "description": "Automate Googlephotos workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "googlephotos",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Googlephotos 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Googlephotos 账户（OAuth/API Key）\n3. 使用 GOOGLEPHOTOS 前缀工具\n\n文档: composio.dev/toolkits/googlephotos",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Googleslides Automation",
    "description": "Automate Googleslides workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "googleslides",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Googleslides 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Googleslides 账户（OAuth/API Key）\n3. 使用 GOOGLESLIDES 前缀工具\n\n文档: composio.dev/toolkits/googleslides",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Googlesuper Automation",
    "description": "Automate Googlesuper workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "googlesuper",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Googlesuper 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Googlesuper 账户（OAuth/API Key）\n3. 使用 GOOGLESUPER 前缀工具\n\n文档: composio.dev/toolkits/googlesuper",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Googletasks Automation",
    "description": "Automate Googletasks workflows via Composio MCP integration.",
    "domain": "google-workspace",
    "tags": [
      "googletasks",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Googletasks 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Googletasks 账户（OAuth/API Key）\n3. 使用 GOOGLETASKS 前缀工具\n\n文档: composio.dev/toolkits/googletasks",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Gorgias Automation",
    "description": "Automate Gorgias workflows via Composio MCP integration.",
    "domain": "customer-support",
    "tags": [
      "gorgias",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Gorgias 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Gorgias 账户（OAuth/API Key）\n3. 使用 GORGIAS 前缀工具\n\n文档: composio.dev/toolkits/gorgias",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Gosquared Automation",
    "description": "Automate Gosquared workflows via Composio MCP integration.",
    "domain": "ecommerce-payments",
    "tags": [
      "gosquared",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Gosquared 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Gosquared 账户（OAuth/API Key）\n3. 使用 GOSQUARED 前缀工具\n\n文档: composio.dev/toolkits/gosquared",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Grafbase Automation",
    "description": "Automate Grafbase workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "grafbase",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Grafbase 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Grafbase 账户（OAuth/API Key）\n3. 使用 GRAFBASE 前缀工具\n\n文档: composio.dev/toolkits/grafbase",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Graphhopper Automation",
    "description": "Automate Graphhopper workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "graphhopper",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Graphhopper 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Graphhopper 账户（OAuth/API Key）\n3. 使用 GRAPHHOPPER 前缀工具\n\n文档: composio.dev/toolkits/graphhopper",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Griptape Automation",
    "description": "Automate Griptape workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "griptape",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Griptape 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Griptape 账户（OAuth/API Key）\n3. 使用 GRIPTAPE 前缀工具\n\n文档: composio.dev/toolkits/griptape",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Grist Automation",
    "description": "Automate Grist workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "grist",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Grist 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Grist 账户（OAuth/API Key）\n3. 使用 GRIST 前缀工具\n\n文档: composio.dev/toolkits/grist",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Groqcloud Automation",
    "description": "Automate Groqcloud workflows via Composio MCP integration.",
    "domain": "ai-services",
    "tags": [
      "groqcloud",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Groqcloud 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Groqcloud 账户（OAuth/API Key）\n3. 使用 GROQCLOUD 前缀工具\n\n文档: composio.dev/toolkits/groqcloud",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Gumroad Automation",
    "description": "Automate Gumroad workflows via Composio MCP integration.",
    "domain": "ecommerce-payments",
    "tags": [
      "gumroad",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Gumroad 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Gumroad 账户（OAuth/API Key）\n3. 使用 GUMROAD 前缀工具\n\n文档: composio.dev/toolkits/gumroad",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Habitica Automation",
    "description": "Automate Habitica workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "habitica",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Habitica 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Habitica 账户（OAuth/API Key）\n3. 使用 HABITICA 前缀工具\n\n文档: composio.dev/toolkits/habitica",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Hackernews Automation",
    "description": "Automate Hackernews workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "hackernews",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Hackernews 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Hackernews 账户（OAuth/API Key）\n3. 使用 HACKERNEWS 前缀工具\n\n文档: composio.dev/toolkits/hackernews",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Happy Scribe Automation",
    "description": "Automate Happy Scribe workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "happy-scribe",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Happy Scribe 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Happy Scribe 账户（OAuth/API Key）\n3. 使用 HAPPY-SCRIBE 前缀工具\n\n文档: composio.dev/toolkits/happy-scribe",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Harvest Automation",
    "description": "Automate Harvest workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "harvest",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Harvest 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Harvest 账户（OAuth/API Key）\n3. 使用 HARVEST 前缀工具\n\n文档: composio.dev/toolkits/harvest",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Hashnode Automation",
    "description": "Automate Hashnode workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "hashnode",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Hashnode 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Hashnode 账户（OAuth/API Key）\n3. 使用 HASHNODE 前缀工具\n\n文档: composio.dev/toolkits/hashnode",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Helcim Automation",
    "description": "Automate Helcim workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "helcim",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Helcim 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Helcim 账户（OAuth/API Key）\n3. 使用 HELCIM 前缀工具\n\n文档: composio.dev/toolkits/helcim",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Helloleads Automation",
    "description": "Automate Helloleads workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "helloleads",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Helloleads 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Helloleads 账户（OAuth/API Key）\n3. 使用 HELLOLEADS 前缀工具\n\n文档: composio.dev/toolkits/helloleads",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Helpwise Automation",
    "description": "Automate Helpwise workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "helpwise",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Helpwise 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Helpwise 账户（OAuth/API Key）\n3. 使用 HELPWISE 前缀工具\n\n文档: composio.dev/toolkits/helpwise",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Here Automation",
    "description": "Automate Here workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "here",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Here 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Here 账户（OAuth/API Key）\n3. 使用 HERE 前缀工具\n\n文档: composio.dev/toolkits/here",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Heygen Automation",
    "description": "Automate Heygen workflows via Composio MCP integration.",
    "domain": "ai-services",
    "tags": [
      "heygen",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Heygen 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Heygen 账户（OAuth/API Key）\n3. 使用 HEYGEN 前缀工具\n\n文档: composio.dev/toolkits/heygen",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Heyreach Automation",
    "description": "Automate Heyreach workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "heyreach",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Heyreach 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Heyreach 账户（OAuth/API Key）\n3. 使用 HEYREACH 前缀工具\n\n文档: composio.dev/toolkits/heyreach",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Heyzine Automation",
    "description": "Automate Heyzine workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "heyzine",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Heyzine 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Heyzine 账户（OAuth/API Key）\n3. 使用 HEYZINE 前缀工具\n\n文档: composio.dev/toolkits/heyzine",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Highergov Automation",
    "description": "Automate Highergov workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "highergov",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Highergov 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Highergov 账户（OAuth/API Key）\n3. 使用 HIGHERGOV 前缀工具\n\n文档: composio.dev/toolkits/highergov",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Highlevel Automation",
    "description": "Automate Highlevel workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "highlevel",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Highlevel 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Highlevel 账户（OAuth/API Key）\n3. 使用 HIGHLEVEL 前缀工具\n\n文档: composio.dev/toolkits/highlevel",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Honeybadger Automation",
    "description": "Automate Honeybadger workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "honeybadger",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Honeybadger 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Honeybadger 账户（OAuth/API Key）\n3. 使用 HONEYBADGER 前缀工具\n\n文档: composio.dev/toolkits/honeybadger",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Honeyhive Automation",
    "description": "Automate Honeyhive workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "honeyhive",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Honeyhive 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Honeyhive 账户（OAuth/API Key）\n3. 使用 HONEYHIVE 前缀工具\n\n文档: composio.dev/toolkits/honeyhive",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Hookdeck Automation",
    "description": "Automate Hookdeck workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "hookdeck",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Hookdeck 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Hookdeck 账户（OAuth/API Key）\n3. 使用 HOOKDECK 前缀工具\n\n文档: composio.dev/toolkits/hookdeck",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Hotspotsystem Automation",
    "description": "Automate Hotspotsystem workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "hotspotsystem",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Hotspotsystem 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Hotspotsystem 账户（OAuth/API Key）\n3. 使用 HOTSPOTSYSTEM 前缀工具\n\n文档: composio.dev/toolkits/hotspotsystem",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Html To Image Automation",
    "description": "Automate Html To Image workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "html-to-image",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Html To Image 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Html To Image 账户（OAuth/API Key）\n3. 使用 HTML-TO-IMAGE 前缀工具\n\n文档: composio.dev/toolkits/html-to-image",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Humanitix Automation",
    "description": "Automate Humanitix workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "humanitix",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Humanitix 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Humanitix 账户（OAuth/API Key）\n3. 使用 HUMANITIX 前缀工具\n\n文档: composio.dev/toolkits/humanitix",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Humanloop Automation",
    "description": "Automate Humanloop workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "humanloop",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Humanloop 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Humanloop 账户（OAuth/API Key）\n3. 使用 HUMANLOOP 前缀工具\n\n文档: composio.dev/toolkits/humanloop",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Hunter Automation",
    "description": "Automate Hunter workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "hunter",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Hunter 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Hunter 账户（OAuth/API Key）\n3. 使用 HUNTER 前缀工具\n\n文档: composio.dev/toolkits/hunter",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Hypeauditor Automation",
    "description": "Automate Hypeauditor workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "hypeauditor",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Hypeauditor 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Hypeauditor 账户（OAuth/API Key）\n3. 使用 HYPEAUDITOR 前缀工具\n\n文档: composio.dev/toolkits/hypeauditor",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Hyperbrowser Automation",
    "description": "Automate Hyperbrowser workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "hyperbrowser",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Hyperbrowser 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Hyperbrowser 账户（OAuth/API Key）\n3. 使用 HYPERBROWSER 前缀工具\n\n文档: composio.dev/toolkits/hyperbrowser",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Hyperise Automation",
    "description": "Automate Hyperise workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "hyperise",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Hyperise 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Hyperise 账户（OAuth/API Key）\n3. 使用 HYPERISE 前缀工具\n\n文档: composio.dev/toolkits/hyperise",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Hystruct Automation",
    "description": "Automate Hystruct workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "hystruct",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Hystruct 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Hystruct 账户（OAuth/API Key）\n3. 使用 HYSTRUCT 前缀工具\n\n文档: composio.dev/toolkits/hystruct",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Icims Talent Cloud Automation",
    "description": "Automate Icims Talent Cloud workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "icims-talent-cloud",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Icims Talent Cloud 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Icims Talent Cloud 账户（OAuth/API Key）\n3. 使用 ICIMS-TALENT-CLOUD 前缀工具\n\n文档: composio.dev/toolkits/icims-talent-cloud",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Icypeas Automation",
    "description": "Automate Icypeas workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "icypeas",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Icypeas 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Icypeas 账户（OAuth/API Key）\n3. 使用 ICYPEAS 前缀工具\n\n文档: composio.dev/toolkits/icypeas",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Idea Scale Automation",
    "description": "Automate Idea Scale workflows via Composio MCP integration.",
    "domain": "meetings-scheduling",
    "tags": [
      "idea-scale",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Idea Scale 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Idea Scale 账户（OAuth/API Key）\n3. 使用 IDEA-SCALE 前缀工具\n\n文档: composio.dev/toolkits/idea-scale",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Identitycheck Automation",
    "description": "Automate Identitycheck workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "identitycheck",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Identitycheck 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Identitycheck 账户（OAuth/API Key）\n3. 使用 IDENTITYCHECK 前缀工具\n\n文档: composio.dev/toolkits/identitycheck",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ignisign Automation",
    "description": "Automate Ignisign workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "ignisign",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ignisign 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ignisign 账户（OAuth/API Key）\n3. 使用 IGNISIGN 前缀工具\n\n文档: composio.dev/toolkits/ignisign",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Imagekit Io Automation",
    "description": "Automate Imagekit Io workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "imagekit-io",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Imagekit Io 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Imagekit Io 账户（OAuth/API Key）\n3. 使用 IMAGEKIT-IO 前缀工具\n\n文档: composio.dev/toolkits/imagekit-io",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Imgbb Automation",
    "description": "Automate Imgbb workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "imgbb",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Imgbb 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Imgbb 账户（OAuth/API Key）\n3. 使用 IMGBB 前缀工具\n\n文档: composio.dev/toolkits/imgbb",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Imgix Automation",
    "description": "Automate Imgix workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "imgix",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Imgix 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Imgix 账户（OAuth/API Key）\n3. 使用 IMGIX 前缀工具\n\n文档: composio.dev/toolkits/imgix",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Influxdb Cloud Automation",
    "description": "Automate Influxdb Cloud workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "influxdb-cloud",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Influxdb Cloud 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Influxdb Cloud 账户（OAuth/API Key）\n3. 使用 INFLUXDB-CLOUD 前缀工具\n\n文档: composio.dev/toolkits/influxdb-cloud",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Insighto Ai Automation",
    "description": "Automate Insighto Ai workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "insighto-ai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Insighto Ai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Insighto Ai 账户（OAuth/API Key）\n3. 使用 INSIGHTO-AI 前缀工具\n\n文档: composio.dev/toolkits/insighto-ai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Instacart Automation",
    "description": "Automate Instacart workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "instacart",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Instacart 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Instacart 账户（OAuth/API Key）\n3. 使用 INSTACART 前缀工具\n\n文档: composio.dev/toolkits/instacart",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Instantly Automation",
    "description": "Automate Instantly workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "instantly",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Instantly 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Instantly 账户（OAuth/API Key）\n3. 使用 INSTANTLY 前缀工具\n\n文档: composio.dev/toolkits/instantly",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Intelliprint Automation",
    "description": "Automate Intelliprint workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "intelliprint",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Intelliprint 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Intelliprint 账户（OAuth/API Key）\n3. 使用 INTELLIPRINT 前缀工具\n\n文档: composio.dev/toolkits/intelliprint",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Interzoid Automation",
    "description": "Automate Interzoid workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "interzoid",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Interzoid 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Interzoid 账户（OAuth/API Key）\n3. 使用 INTERZOID 前缀工具\n\n文档: composio.dev/toolkits/interzoid",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ip2Location Automation",
    "description": "Automate Ip2Location workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "ip2location",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ip2Location 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ip2Location 账户（OAuth/API Key）\n3. 使用 IP2LOCATION 前缀工具\n\n文档: composio.dev/toolkits/ip2location",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ip2Location Io Automation",
    "description": "Automate Ip2Location Io workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "ip2location-io",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ip2Location Io 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ip2Location Io 账户（OAuth/API Key）\n3. 使用 IP2LOCATION-IO 前缀工具\n\n文档: composio.dev/toolkits/ip2location-io",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ip2Proxy Automation",
    "description": "Automate Ip2Proxy workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "ip2proxy",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ip2Proxy 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ip2Proxy 账户（OAuth/API Key）\n3. 使用 IP2PROXY 前缀工具\n\n文档: composio.dev/toolkits/ip2proxy",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ip2Whois Automation",
    "description": "Automate Ip2Whois workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "ip2whois",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ip2Whois 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ip2Whois 账户（OAuth/API Key）\n3. 使用 IP2WHOIS 前缀工具\n\n文档: composio.dev/toolkits/ip2whois",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ipdata Co Automation",
    "description": "Automate Ipdata Co workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "ipdata-co",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ipdata Co 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ipdata Co 账户（OAuth/API Key）\n3. 使用 IPDATA-CO 前缀工具\n\n文档: composio.dev/toolkits/ipdata-co",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ipinfo Io Automation",
    "description": "Automate Ipinfo Io workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "ipinfo-io",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ipinfo Io 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ipinfo Io 账户（OAuth/API Key）\n3. 使用 IPINFO-IO 前缀工具\n\n文档: composio.dev/toolkits/ipinfo-io",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Iqair Airvisual Automation",
    "description": "Automate Iqair Airvisual workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "iqair-airvisual",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Iqair Airvisual 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Iqair Airvisual 账户（OAuth/API Key）\n3. 使用 IQAIR-AIRVISUAL 前缀工具\n\n文档: composio.dev/toolkits/iqair-airvisual",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Jigsawstack Automation",
    "description": "Automate Jigsawstack workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "jigsawstack",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Jigsawstack 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Jigsawstack 账户（OAuth/API Key）\n3. 使用 JIGSAWSTACK 前缀工具\n\n文档: composio.dev/toolkits/jigsawstack",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Jobnimbus Automation",
    "description": "Automate Jobnimbus workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "jobnimbus",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Jobnimbus 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Jobnimbus 账户（OAuth/API Key）\n3. 使用 JOBNIMBUS 前缀工具\n\n文档: composio.dev/toolkits/jobnimbus",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Jotform Automation",
    "description": "Automate Jotform workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "jotform",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Jotform 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Jotform 账户（OAuth/API Key）\n3. 使用 JOTFORM 前缀工具\n\n文档: composio.dev/toolkits/jotform",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Jumpcloud Automation",
    "description": "Automate Jumpcloud workflows via Composio MCP integration.",
    "domain": "security-identity",
    "tags": [
      "jumpcloud",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Jumpcloud 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Jumpcloud 账户（OAuth/API Key）\n3. 使用 JUMPCLOUD 前缀工具\n\n文档: composio.dev/toolkits/jumpcloud",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Junglescout Automation",
    "description": "Automate Junglescout workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "junglescout",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Junglescout 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Junglescout 账户（OAuth/API Key）\n3. 使用 JUNGLESCOUT 前缀工具\n\n文档: composio.dev/toolkits/junglescout",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Kadoa Automation",
    "description": "Automate Kadoa workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "kadoa",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Kadoa 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Kadoa 账户（OAuth/API Key）\n3. 使用 KADOA 前缀工具\n\n文档: composio.dev/toolkits/kadoa",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Kaggle Automation",
    "description": "Automate Kaggle workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "kaggle",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Kaggle 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Kaggle 账户（OAuth/API Key）\n3. 使用 KAGGLE 前缀工具\n\n文档: composio.dev/toolkits/kaggle",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Kaleido Automation",
    "description": "Automate Kaleido workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "kaleido",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Kaleido 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Kaleido 账户（OAuth/API Key）\n3. 使用 KALEIDO 前缀工具\n\n文档: composio.dev/toolkits/kaleido",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Keap Automation",
    "description": "Automate Keap workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "keap",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Keap 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Keap 账户（OAuth/API Key）\n3. 使用 KEAP 前缀工具\n\n文档: composio.dev/toolkits/keap",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Keen Io Automation",
    "description": "Automate Keen Io workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "keen-io",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Keen Io 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Keen Io 账户（OAuth/API Key）\n3. 使用 KEEN-IO 前缀工具\n\n文档: composio.dev/toolkits/keen-io",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Kickbox Automation",
    "description": "Automate Kickbox workflows via Composio MCP integration.",
    "domain": "cloud-storage",
    "tags": [
      "kickbox",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Kickbox 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Kickbox 账户（OAuth/API Key）\n3. 使用 KICKBOX 前缀工具\n\n文档: composio.dev/toolkits/kickbox",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Kit Automation",
    "description": "Automate Kit workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "kit",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Kit 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Kit 账户（OAuth/API Key）\n3. 使用 KIT 前缀工具\n\n文档: composio.dev/toolkits/kit",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Klipfolio Automation",
    "description": "Automate Klipfolio workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "klipfolio",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Klipfolio 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Klipfolio 账户（OAuth/API Key）\n3. 使用 KLIPFOLIO 前缀工具\n\n文档: composio.dev/toolkits/klipfolio",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ko Fi Automation",
    "description": "Automate Ko Fi workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "ko-fi",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ko Fi 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ko Fi 账户（OAuth/API Key）\n3. 使用 KO-FI 前缀工具\n\n文档: composio.dev/toolkits/ko-fi",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Kommo Automation",
    "description": "Automate Kommo workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "kommo",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Kommo 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Kommo 账户（OAuth/API Key）\n3. 使用 KOMMO 前缀工具\n\n文档: composio.dev/toolkits/kommo",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Kontent Ai Automation",
    "description": "Automate Kontent Ai workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "kontent-ai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Kontent Ai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Kontent Ai 账户（OAuth/API Key）\n3. 使用 KONTENT-AI 前缀工具\n\n文档: composio.dev/toolkits/kontent-ai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Kraken Io Automation",
    "description": "Automate Kraken Io workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "kraken-io",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Kraken Io 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Kraken Io 账户（OAuth/API Key）\n3. 使用 KRAKEN-IO 前缀工具\n\n文档: composio.dev/toolkits/kraken-io",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "L2S Automation",
    "description": "Automate L2S workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "l2s",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "L2S 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 L2S 账户（OAuth/API Key）\n3. 使用 L2S 前缀工具\n\n文档: composio.dev/toolkits/l2s",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Labs64 Netlicensing Automation",
    "description": "Automate Labs64 Netlicensing workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "labs64-netlicensing",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Labs64 Netlicensing 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Labs64 Netlicensing 账户（OAuth/API Key）\n3. 使用 LABS64-NETLICENSING 前缀工具\n\n文档: composio.dev/toolkits/labs64-netlicensing",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Landbot Automation",
    "description": "Automate Landbot workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "landbot",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Landbot 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Landbot 账户（OAuth/API Key）\n3. 使用 LANDBOT 前缀工具\n\n文档: composio.dev/toolkits/landbot",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Langbase Automation",
    "description": "Automate Langbase workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "langbase",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Langbase 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Langbase 账户（OAuth/API Key）\n3. 使用 LANGBASE 前缀工具\n\n文档: composio.dev/toolkits/langbase",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Lastpass Automation",
    "description": "Automate Lastpass workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "lastpass",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Lastpass 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Lastpass 账户（OAuth/API Key）\n3. 使用 LASTPASS 前缀工具\n\n文档: composio.dev/toolkits/lastpass",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Launch Darkly Automation",
    "description": "Automate Launch Darkly workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "launch-darkly",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Launch Darkly 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Launch Darkly 账户（OAuth/API Key）\n3. 使用 LAUNCH-DARKLY 前缀工具\n\n文档: composio.dev/toolkits/launch-darkly",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Launch_Darkly Automation",
    "description": "Automate Launch_Darkly workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "launch_darkly",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Launch_Darkly 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Launch_Darkly 账户（OAuth/API Key）\n3. 使用 LAUNCH_DARKLY 前缀工具\n\n文档: composio.dev/toolkits/launch_darkly",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Leadfeeder Automation",
    "description": "Automate Leadfeeder workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "leadfeeder",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Leadfeeder 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Leadfeeder 账户（OAuth/API Key）\n3. 使用 LEADFEEDER 前缀工具\n\n文档: composio.dev/toolkits/leadfeeder",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Leadoku Automation",
    "description": "Automate Leadoku workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "leadoku",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Leadoku 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Leadoku 账户（OAuth/API Key）\n3. 使用 LEADOKU 前缀工具\n\n文档: composio.dev/toolkits/leadoku",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Leiga Automation",
    "description": "Automate Leiga workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "leiga",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Leiga 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Leiga 账户（OAuth/API Key）\n3. 使用 LEIGA 前缀工具\n\n文档: composio.dev/toolkits/leiga",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Lemlist Automation",
    "description": "Automate Lemlist workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "lemlist",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Lemlist 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Lemlist 账户（OAuth/API Key）\n3. 使用 LEMLIST 前缀工具\n\n文档: composio.dev/toolkits/lemlist",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Lemon Squeezy Automation",
    "description": "Automate Lemon Squeezy workflows via Composio MCP integration.",
    "domain": "ecommerce-payments",
    "tags": [
      "lemon-squeezy",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Lemon Squeezy 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Lemon Squeezy 账户（OAuth/API Key）\n3. 使用 LEMON-SQUEEZY 前缀工具\n\n文档: composio.dev/toolkits/lemon-squeezy",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Lemon_Squeezy Automation",
    "description": "Automate Lemon_Squeezy workflows via Composio MCP integration.",
    "domain": "ecommerce-payments",
    "tags": [
      "lemon_squeezy",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Lemon_Squeezy 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Lemon_Squeezy 账户（OAuth/API Key）\n3. 使用 LEMON_SQUEEZY 前缀工具\n\n文档: composio.dev/toolkits/lemon_squeezy",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Lessonspace Automation",
    "description": "Automate Lessonspace workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "lessonspace",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Lessonspace 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Lessonspace 账户（OAuth/API Key）\n3. 使用 LESSONSPACE 前缀工具\n\n文档: composio.dev/toolkits/lessonspace",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Lever Automation",
    "description": "Automate Lever workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "lever",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Lever 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Lever 账户（OAuth/API Key）\n3. 使用 LEVER 前缀工具\n\n文档: composio.dev/toolkits/lever",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Lever Sandbox Automation",
    "description": "Automate Lever Sandbox workflows via Composio MCP integration.",
    "domain": "cloud-storage",
    "tags": [
      "lever-sandbox",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Lever Sandbox 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Lever Sandbox 账户（OAuth/API Key）\n3. 使用 LEVER-SANDBOX 前缀工具\n\n文档: composio.dev/toolkits/lever-sandbox",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Leverly Automation",
    "description": "Automate Leverly workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "leverly",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Leverly 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Leverly 账户（OAuth/API Key）\n3. 使用 LEVERLY 前缀工具\n\n文档: composio.dev/toolkits/leverly",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Lexoffice Automation",
    "description": "Automate Lexoffice workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "lexoffice",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Lexoffice 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Lexoffice 账户（OAuth/API Key）\n3. 使用 LEXOFFICE 前缀工具\n\n文档: composio.dev/toolkits/lexoffice",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Linguapop Automation",
    "description": "Automate Linguapop workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "linguapop",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Linguapop 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Linguapop 账户（OAuth/API Key）\n3. 使用 LINGUAPOP 前缀工具\n\n文档: composio.dev/toolkits/linguapop",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Linkhut Automation",
    "description": "Automate Linkhut workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "linkhut",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Linkhut 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Linkhut 账户（OAuth/API Key）\n3. 使用 LINKHUT 前缀工具\n\n文档: composio.dev/toolkits/linkhut",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Linkup Automation",
    "description": "Automate Linkup workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "linkup",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Linkup 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Linkup 账户（OAuth/API Key）\n3. 使用 LINKUP 前缀工具\n\n文档: composio.dev/toolkits/linkup",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Listclean Automation",
    "description": "Automate Listclean workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "listclean",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Listclean 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Listclean 账户（OAuth/API Key）\n3. 使用 LISTCLEAN 前缀工具\n\n文档: composio.dev/toolkits/listclean",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Listennotes Automation",
    "description": "Automate Listennotes workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "listennotes",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Listennotes 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Listennotes 账户（OAuth/API Key）\n3. 使用 LISTENNOTES 前缀工具\n\n文档: composio.dev/toolkits/listennotes",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Livesession Automation",
    "description": "Automate Livesession workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "livesession",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Livesession 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Livesession 账户（OAuth/API Key）\n3. 使用 LIVESESSION 前缀工具\n\n文档: composio.dev/toolkits/livesession",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Lmnt Automation",
    "description": "Automate Lmnt workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "lmnt",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Lmnt 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Lmnt 账户（OAuth/API Key）\n3. 使用 LMNT 前缀工具\n\n文档: composio.dev/toolkits/lmnt",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Lodgify Automation",
    "description": "Automate Lodgify workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "lodgify",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Lodgify 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Lodgify 账户（OAuth/API Key）\n3. 使用 LODGIFY 前缀工具\n\n文档: composio.dev/toolkits/lodgify",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Logo Dev Automation",
    "description": "Automate Logo Dev workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "logo-dev",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Logo Dev 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Logo Dev 账户（OAuth/API Key）\n3. 使用 LOGO-DEV 前缀工具\n\n文档: composio.dev/toolkits/logo-dev",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Loomio Automation",
    "description": "Automate Loomio workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "loomio",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Loomio 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Loomio 账户（OAuth/API Key）\n3. 使用 LOOMIO 前缀工具\n\n文档: composio.dev/toolkits/loomio",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Loyverse Automation",
    "description": "Automate Loyverse workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "loyverse",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Loyverse 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Loyverse 账户（OAuth/API Key）\n3. 使用 LOYVERSE 前缀工具\n\n文档: composio.dev/toolkits/loyverse",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Magnetic Automation",
    "description": "Automate Magnetic workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "magnetic",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Magnetic 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Magnetic 账户（OAuth/API Key）\n3. 使用 MAGNETIC 前缀工具\n\n文档: composio.dev/toolkits/magnetic",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Mailbluster Automation",
    "description": "Automate Mailbluster workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "mailbluster",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Mailbluster 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Mailbluster 账户（OAuth/API Key）\n3. 使用 MAILBLUSTER 前缀工具\n\n文档: composio.dev/toolkits/mailbluster",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Mailboxlayer Automation",
    "description": "Automate Mailboxlayer workflows via Composio MCP integration.",
    "domain": "cloud-storage",
    "tags": [
      "mailboxlayer",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Mailboxlayer 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Mailboxlayer 账户（OAuth/API Key）\n3. 使用 MAILBOXLAYER 前缀工具\n\n文档: composio.dev/toolkits/mailboxlayer",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Mailcheck Automation",
    "description": "Automate Mailcheck workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "mailcheck",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Mailcheck 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Mailcheck 账户（OAuth/API Key）\n3. 使用 MAILCHECK 前缀工具\n\n文档: composio.dev/toolkits/mailcheck",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Mailcoach Automation",
    "description": "Automate Mailcoach workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "mailcoach",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Mailcoach 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Mailcoach 账户（OAuth/API Key）\n3. 使用 MAILCOACH 前缀工具\n\n文档: composio.dev/toolkits/mailcoach",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Mailerlite Automation",
    "description": "Automate Mailerlite workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "mailerlite",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Mailerlite 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Mailerlite 账户（OAuth/API Key）\n3. 使用 MAILERLITE 前缀工具\n\n文档: composio.dev/toolkits/mailerlite",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Mailersend Automation",
    "description": "Automate Mailersend workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "mailersend",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Mailersend 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Mailersend 账户（OAuth/API Key）\n3. 使用 MAILERSEND 前缀工具\n\n文档: composio.dev/toolkits/mailersend",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Mails So Automation",
    "description": "Automate Mails So workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "mails-so",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Mails So 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Mails So 账户（OAuth/API Key）\n3. 使用 MAILS-SO 前缀工具\n\n文档: composio.dev/toolkits/mails-so",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Mailsoftly Automation",
    "description": "Automate Mailsoftly workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "mailsoftly",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Mailsoftly 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Mailsoftly 账户（OAuth/API Key）\n3. 使用 MAILSOFTLY 前缀工具\n\n文档: composio.dev/toolkits/mailsoftly",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Maintainx Automation",
    "description": "Automate Maintainx workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "maintainx",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Maintainx 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Maintainx 账户（OAuth/API Key）\n3. 使用 MAINTAINX 前缀工具\n\n文档: composio.dev/toolkits/maintainx",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Many Chat Automation",
    "description": "Automate Many Chat workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "many-chat",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Many Chat 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Many Chat 账户（OAuth/API Key）\n3. 使用 MANY-CHAT 前缀工具\n\n文档: composio.dev/toolkits/many-chat",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Many_Chat Automation",
    "description": "Automate Many_Chat workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "many_chat",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Many_Chat 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Many_Chat 账户（OAuth/API Key）\n3. 使用 MANY_CHAT 前缀工具\n\n文档: composio.dev/toolkits/many_chat",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Mapbox Automation",
    "description": "Automate Mapbox workflows via Composio MCP integration.",
    "domain": "cloud-storage",
    "tags": [
      "mapbox",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Mapbox 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Mapbox 账户（OAuth/API Key）\n3. 使用 MAPBOX 前缀工具\n\n文档: composio.dev/toolkits/mapbox",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Mapulus Automation",
    "description": "Automate Mapulus workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "mapulus",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Mapulus 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Mapulus 账户（OAuth/API Key）\n3. 使用 MAPULUS 前缀工具\n\n文档: composio.dev/toolkits/mapulus",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Mboum Automation",
    "description": "Automate Mboum workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "mboum",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Mboum 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Mboum 账户（OAuth/API Key）\n3. 使用 MBOUM 前缀工具\n\n文档: composio.dev/toolkits/mboum",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Melo Automation",
    "description": "Automate Melo workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "melo",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Melo 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Melo 账户（OAuth/API Key）\n3. 使用 MELO 前缀工具\n\n文档: composio.dev/toolkits/melo",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Mem Automation",
    "description": "Automate Mem workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "mem",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Mem 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Mem 账户（OAuth/API Key）\n3. 使用 MEM 前缀工具\n\n文档: composio.dev/toolkits/mem",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Mem0 Automation",
    "description": "Automate Mem0 workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "mem0",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Mem0 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Mem0 账户（OAuth/API Key）\n3. 使用 MEM0 前缀工具\n\n文档: composio.dev/toolkits/mem0",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Memberspot Automation",
    "description": "Automate Memberspot workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "memberspot",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Memberspot 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Memberspot 账户（OAuth/API Key）\n3. 使用 MEMBERSPOT 前缀工具\n\n文档: composio.dev/toolkits/memberspot",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Memberstack Automation",
    "description": "Automate Memberstack workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "memberstack",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Memberstack 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Memberstack 账户（OAuth/API Key）\n3. 使用 MEMBERSTACK 前缀工具\n\n文档: composio.dev/toolkits/memberstack",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Membervault Automation",
    "description": "Automate Membervault workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "membervault",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Membervault 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Membervault 账户（OAuth/API Key）\n3. 使用 MEMBERVAULT 前缀工具\n\n文档: composio.dev/toolkits/membervault",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Metaads Automation",
    "description": "Automate Metaads workflows via Composio MCP integration.",
    "domain": "social-media",
    "tags": [
      "metaads",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Metaads 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Metaads 账户（OAuth/API Key）\n3. 使用 METAADS 前缀工具\n\n文档: composio.dev/toolkits/metaads",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Metaphor Automation",
    "description": "Automate Metaphor workflows via Composio MCP integration.",
    "domain": "social-media",
    "tags": [
      "metaphor",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Metaphor 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Metaphor 账户（OAuth/API Key）\n3. 使用 METAPHOR 前缀工具\n\n文档: composio.dev/toolkits/metaphor",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Mezmo Automation",
    "description": "Automate Mezmo workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "mezmo",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Mezmo 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Mezmo 账户（OAuth/API Key）\n3. 使用 MEZMO 前缀工具\n\n文档: composio.dev/toolkits/mezmo",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Microsoft Clarity Automation",
    "description": "Automate Microsoft Clarity workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "microsoft-clarity",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Microsoft Clarity 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Microsoft Clarity 账户（OAuth/API Key）\n3. 使用 MICROSOFT-CLARITY 前缀工具\n\n文档: composio.dev/toolkits/microsoft-clarity",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Microsoft Tenant Automation",
    "description": "Automate Microsoft Tenant workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "microsoft-tenant",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Microsoft Tenant 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Microsoft Tenant 账户（OAuth/API Key）\n3. 使用 MICROSOFT-TENANT 前缀工具\n\n文档: composio.dev/toolkits/microsoft-tenant",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Microsoft_Clarity Automation",
    "description": "Automate Microsoft_Clarity workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "microsoft_clarity",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Microsoft_Clarity 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Microsoft_Clarity 账户（OAuth/API Key）\n3. 使用 MICROSOFT_CLARITY 前缀工具\n\n文档: composio.dev/toolkits/microsoft_clarity",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Minerstat Automation",
    "description": "Automate Minerstat workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "minerstat",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Minerstat 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Minerstat 账户（OAuth/API Key）\n3. 使用 MINERSTAT 前缀工具\n\n文档: composio.dev/toolkits/minerstat",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Missive Automation",
    "description": "Automate Missive workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "missive",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Missive 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Missive 账户（OAuth/API Key）\n3. 使用 MISSIVE 前缀工具\n\n文档: composio.dev/toolkits/missive",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Mistral Ai Automation",
    "description": "Automate Mistral Ai workflows via Composio MCP integration.",
    "domain": "ai-services",
    "tags": [
      "mistral-ai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Mistral Ai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Mistral Ai 账户（OAuth/API Key）\n3. 使用 MISTRAL-AI 前缀工具\n\n文档: composio.dev/toolkits/mistral-ai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Mistral_Ai Automation",
    "description": "Automate Mistral_Ai workflows via Composio MCP integration.",
    "domain": "ai-services",
    "tags": [
      "mistral_ai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Mistral_Ai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Mistral_Ai 账户（OAuth/API Key）\n3. 使用 MISTRAL_AI 前缀工具\n\n文档: composio.dev/toolkits/mistral_ai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Mocean Automation",
    "description": "Automate Mocean workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "mocean",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Mocean 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Mocean 账户（OAuth/API Key）\n3. 使用 MOCEAN 前缀工具\n\n文档: composio.dev/toolkits/mocean",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Moco Automation",
    "description": "Automate Moco workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "moco",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Moco 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Moco 账户（OAuth/API Key）\n3. 使用 MOCO 前缀工具\n\n文档: composio.dev/toolkits/moco",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Modelry Automation",
    "description": "Automate Modelry workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "modelry",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Modelry 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Modelry 账户（OAuth/API Key）\n3. 使用 MODELRY 前缀工具\n\n文档: composio.dev/toolkits/modelry",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Moneybird Automation",
    "description": "Automate Moneybird workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "moneybird",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Moneybird 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Moneybird 账户（OAuth/API Key）\n3. 使用 MONEYBIRD 前缀工具\n\n文档: composio.dev/toolkits/moneybird",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Moonclerk Automation",
    "description": "Automate Moonclerk workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "moonclerk",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Moonclerk 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Moonclerk 账户（OAuth/API Key）\n3. 使用 MOONCLERK 前缀工具\n\n文档: composio.dev/toolkits/moonclerk",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Moosend Automation",
    "description": "Automate Moosend workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "moosend",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Moosend 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Moosend 账户（OAuth/API Key）\n3. 使用 MOOSEND 前缀工具\n\n文档: composio.dev/toolkits/moosend",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Mopinion Automation",
    "description": "Automate Mopinion workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "mopinion",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Mopinion 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Mopinion 账户（OAuth/API Key）\n3. 使用 MOPINION 前缀工具\n\n文档: composio.dev/toolkits/mopinion",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "More Trees Automation",
    "description": "Automate More Trees workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "more-trees",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "More Trees 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 More Trees 账户（OAuth/API Key）\n3. 使用 MORE-TREES 前缀工具\n\n文档: composio.dev/toolkits/more-trees",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Moxie Automation",
    "description": "Automate Moxie workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "moxie",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Moxie 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Moxie 账户（OAuth/API Key）\n3. 使用 MOXIE 前缀工具\n\n文档: composio.dev/toolkits/moxie",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Moz Automation",
    "description": "Automate Moz workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "moz",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Moz 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Moz 账户（OAuth/API Key）\n3. 使用 MOZ 前缀工具\n\n文档: composio.dev/toolkits/moz",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Msg91 Automation",
    "description": "Automate Msg91 workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "msg91",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Msg91 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Msg91 账户（OAuth/API Key）\n3. 使用 MSG91 前缀工具\n\n文档: composio.dev/toolkits/msg91",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Mural Automation",
    "description": "Automate Mural workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "mural",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Mural 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Mural 账户（OAuth/API Key）\n3. 使用 MURAL 前缀工具\n\n文档: composio.dev/toolkits/mural",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Mx Technologies Automation",
    "description": "Automate Mx Technologies workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "mx-technologies",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Mx Technologies 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Mx Technologies 账户（OAuth/API Key）\n3. 使用 MX-TECHNOLOGIES 前缀工具\n\n文档: composio.dev/toolkits/mx-technologies",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Mx Toolbox Automation",
    "description": "Automate Mx Toolbox workflows via Composio MCP integration.",
    "domain": "cloud-storage",
    "tags": [
      "mx-toolbox",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Mx Toolbox 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Mx Toolbox 账户（OAuth/API Key）\n3. 使用 MX-TOOLBOX 前缀工具\n\n文档: composio.dev/toolkits/mx-toolbox",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Nango Automation",
    "description": "Automate Nango workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "nango",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Nango 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Nango 账户（OAuth/API Key）\n3. 使用 NANGO 前缀工具\n\n文档: composio.dev/toolkits/nango",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Nano Nets Automation",
    "description": "Automate Nano Nets workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "nano-nets",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Nano Nets 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Nano Nets 账户（OAuth/API Key）\n3. 使用 NANO-NETS 前缀工具\n\n文档: composio.dev/toolkits/nano-nets",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Nasa Automation",
    "description": "Automate Nasa workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "nasa",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Nasa 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Nasa 账户（OAuth/API Key）\n3. 使用 NASA 前缀工具\n\n文档: composio.dev/toolkits/nasa",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Nasdaq Automation",
    "description": "Automate Nasdaq workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "nasdaq",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Nasdaq 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Nasdaq 账户（OAuth/API Key）\n3. 使用 NASDAQ 前缀工具\n\n文档: composio.dev/toolkits/nasdaq",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ncscale Automation",
    "description": "Automate Ncscale workflows via Composio MCP integration.",
    "domain": "meetings-scheduling",
    "tags": [
      "ncscale",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ncscale 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ncscale 账户（OAuth/API Key）\n3. 使用 NCSCALE 前缀工具\n\n文档: composio.dev/toolkits/ncscale",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Needle Automation",
    "description": "Automate Needle workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "needle",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Needle 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Needle 账户（OAuth/API Key）\n3. 使用 NEEDLE 前缀工具\n\n文档: composio.dev/toolkits/needle",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Neon Automation",
    "description": "Automate Neon workflows via Composio MCP integration.",
    "domain": "database-storage",
    "tags": [
      "neon",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Neon 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Neon 账户（OAuth/API Key）\n3. 使用 NEON 前缀工具\n\n文档: composio.dev/toolkits/neon",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Netsuite Automation",
    "description": "Automate Netsuite workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "netsuite",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Netsuite 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Netsuite 账户（OAuth/API Key）\n3. 使用 NETSUITE 前缀工具\n\n文档: composio.dev/toolkits/netsuite",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Neuronwriter Automation",
    "description": "Automate Neuronwriter workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "neuronwriter",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Neuronwriter 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Neuronwriter 账户（OAuth/API Key）\n3. 使用 NEURONWRITER 前缀工具\n\n文档: composio.dev/toolkits/neuronwriter",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Neutrino Automation",
    "description": "Automate Neutrino workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "neutrino",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Neutrino 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Neutrino 账户（OAuth/API Key）\n3. 使用 NEUTRINO 前缀工具\n\n文档: composio.dev/toolkits/neutrino",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Neverbounce Automation",
    "description": "Automate Neverbounce workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "neverbounce",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Neverbounce 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Neverbounce 账户（OAuth/API Key）\n3. 使用 NEVERBOUNCE 前缀工具\n\n文档: composio.dev/toolkits/neverbounce",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "New Relic Automation",
    "description": "Automate New Relic workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "new-relic",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "New Relic 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 New Relic 账户（OAuth/API Key）\n3. 使用 NEW-RELIC 前缀工具\n\n文档: composio.dev/toolkits/new-relic",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "New_Relic Automation",
    "description": "Automate New_Relic workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "new_relic",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "New_Relic 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 New_Relic 账户（OAuth/API Key）\n3. 使用 NEW_RELIC 前缀工具\n\n文档: composio.dev/toolkits/new_relic",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "News Api Automation",
    "description": "Automate News Api workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "news-api",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "News Api 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 News Api 账户（OAuth/API Key）\n3. 使用 NEWS-API 前缀工具\n\n文档: composio.dev/toolkits/news-api",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Nextdns Automation",
    "description": "Automate Nextdns workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "nextdns",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Nextdns 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Nextdns 账户（OAuth/API Key）\n3. 使用 NEXTDNS 前缀工具\n\n文档: composio.dev/toolkits/nextdns",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ngrok Automation",
    "description": "Automate Ngrok workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "ngrok",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ngrok 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ngrok 账户（OAuth/API Key）\n3. 使用 NGROK 前缀工具\n\n文档: composio.dev/toolkits/ngrok",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ninox Automation",
    "description": "Automate Ninox workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "ninox",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ninox 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ninox 账户（OAuth/API Key）\n3. 使用 NINOX 前缀工具\n\n文档: composio.dev/toolkits/ninox",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Nocrm Io Automation",
    "description": "Automate Nocrm Io workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "nocrm-io",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Nocrm Io 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Nocrm Io 账户（OAuth/API Key）\n3. 使用 NOCRM-IO 前缀工具\n\n文档: composio.dev/toolkits/nocrm-io",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Npm Automation",
    "description": "Automate Npm workflows via Composio MCP integration.",
    "domain": "devops",
    "tags": [
      "npm",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Npm 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Npm 账户（OAuth/API Key）\n3. 使用 NPM 前缀工具\n\n文档: composio.dev/toolkits/npm",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ocr Web Service Automation",
    "description": "Automate Ocr Web Service workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "ocr-web-service",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ocr Web Service 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ocr Web Service 账户（OAuth/API Key）\n3. 使用 OCR-WEB-SERVICE 前缀工具\n\n文档: composio.dev/toolkits/ocr-web-service",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ocrspace Automation",
    "description": "Automate Ocrspace workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "ocrspace",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ocrspace 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ocrspace 账户（OAuth/API Key）\n3. 使用 OCRSPACE 前缀工具\n\n文档: composio.dev/toolkits/ocrspace",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Omnisend Automation",
    "description": "Automate Omnisend workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "omnisend",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Omnisend 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Omnisend 账户（OAuth/API Key）\n3. 使用 OMNISEND 前缀工具\n\n文档: composio.dev/toolkits/omnisend",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Oncehub Automation",
    "description": "Automate Oncehub workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "oncehub",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Oncehub 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Oncehub 账户（OAuth/API Key）\n3. 使用 ONCEHUB 前缀工具\n\n文档: composio.dev/toolkits/oncehub",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Onedesk Automation",
    "description": "Automate Onedesk workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "onedesk",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Onedesk 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Onedesk 账户（OAuth/API Key）\n3. 使用 ONEDESK 前缀工具\n\n文档: composio.dev/toolkits/onedesk",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Onepage Automation",
    "description": "Automate Onepage workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "onepage",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Onepage 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Onepage 账户（OAuth/API Key）\n3. 使用 ONEPAGE 前缀工具\n\n文档: composio.dev/toolkits/onepage",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Onesignal Rest Api Automation",
    "description": "Automate Onesignal Rest Api workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "onesignal-rest-api",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Onesignal Rest Api 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Onesignal Rest Api 账户（OAuth/API Key）\n3. 使用 ONESIGNAL-REST-API 前缀工具\n\n文档: composio.dev/toolkits/onesignal-rest-api",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Onesignal User Auth Automation",
    "description": "Automate Onesignal User Auth workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "onesignal-user-auth",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Onesignal User Auth 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Onesignal User Auth 账户（OAuth/API Key）\n3. 使用 ONESIGNAL-USER-AUTH 前缀工具\n\n文档: composio.dev/toolkits/onesignal-user-auth",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Onesignal_Rest_Api Automation",
    "description": "Automate Onesignal_Rest_Api workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "onesignal_rest_api",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Onesignal_Rest_Api 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Onesignal_Rest_Api 账户（OAuth/API Key）\n3. 使用 ONESIGNAL_REST_API 前缀工具\n\n文档: composio.dev/toolkits/onesignal_rest_api",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Open Sea Automation",
    "description": "Automate Open Sea workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "open-sea",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Open Sea 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Open Sea 账户（OAuth/API Key）\n3. 使用 OPEN-SEA 前缀工具\n\n文档: composio.dev/toolkits/open-sea",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Openai Automation",
    "description": "Automate Openai workflows via Composio MCP integration.",
    "domain": "ai-services",
    "tags": [
      "openai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Openai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Openai 账户（OAuth/API Key）\n3. 使用 OPENAI 前缀工具\n\n文档: composio.dev/toolkits/openai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Opencage Automation",
    "description": "Automate Opencage workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "opencage",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Opencage 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Opencage 账户（OAuth/API Key）\n3. 使用 OPENCAGE 前缀工具\n\n文档: composio.dev/toolkits/opencage",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Opengraph Io Automation",
    "description": "Automate Opengraph Io workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "opengraph-io",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Opengraph Io 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Opengraph Io 账户（OAuth/API Key）\n3. 使用 OPENGRAPH-IO 前缀工具\n\n文档: composio.dev/toolkits/opengraph-io",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Openperplex Automation",
    "description": "Automate Openperplex workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "openperplex",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Openperplex 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Openperplex 账户（OAuth/API Key）\n3. 使用 OPENPERPLEX 前缀工具\n\n文档: composio.dev/toolkits/openperplex",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Openrouter Automation",
    "description": "Automate Openrouter workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "openrouter",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Openrouter 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Openrouter 账户（OAuth/API Key）\n3. 使用 OPENROUTER 前缀工具\n\n文档: composio.dev/toolkits/openrouter",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Openweather Api Automation",
    "description": "Automate Openweather Api workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "openweather-api",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Openweather Api 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Openweather Api 账户（OAuth/API Key）\n3. 使用 OPENWEATHER-API 前缀工具\n\n文档: composio.dev/toolkits/openweather-api",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Optimoroute Automation",
    "description": "Automate Optimoroute workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "optimoroute",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Optimoroute 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Optimoroute 账户（OAuth/API Key）\n3. 使用 OPTIMOROUTE 前缀工具\n\n文档: composio.dev/toolkits/optimoroute",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Owl Protocol Automation",
    "description": "Automate Owl Protocol workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "owl-protocol",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Owl Protocol 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Owl Protocol 账户（OAuth/API Key）\n3. 使用 OWL-PROTOCOL 前缀工具\n\n文档: composio.dev/toolkits/owl-protocol",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Page X Automation",
    "description": "Automate Page X workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "page-x",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Page X 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Page X 账户（OAuth/API Key）\n3. 使用 PAGE-X 前缀工具\n\n文档: composio.dev/toolkits/page-x",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Pandadoc Automation",
    "description": "Automate Pandadoc workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "pandadoc",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Pandadoc 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Pandadoc 账户（OAuth/API Key）\n3. 使用 PANDADOC 前缀工具\n\n文档: composio.dev/toolkits/pandadoc",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Paradym Automation",
    "description": "Automate Paradym workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "paradym",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Paradym 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Paradym 账户（OAuth/API Key）\n3. 使用 PARADYM 前缀工具\n\n文档: composio.dev/toolkits/paradym",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Parallel Automation",
    "description": "Automate Parallel workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "parallel",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Parallel 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Parallel 账户（OAuth/API Key）\n3. 使用 PARALLEL 前缀工具\n\n文档: composio.dev/toolkits/parallel",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Parma Automation",
    "description": "Automate Parma workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "parma",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Parma 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Parma 账户（OAuth/API Key）\n3. 使用 PARMA 前缀工具\n\n文档: composio.dev/toolkits/parma",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Parsehub Automation",
    "description": "Automate Parsehub workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "parsehub",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Parsehub 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Parsehub 账户（OAuth/API Key）\n3. 使用 PARSEHUB 前缀工具\n\n文档: composio.dev/toolkits/parsehub",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Parsera Automation",
    "description": "Automate Parsera workflows via Composio MCP integration.",
    "domain": "web-scraping",
    "tags": [
      "parsera",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Parsera 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Parsera 账户（OAuth/API Key）\n3. 使用 PARSERA 前缀工具\n\n文档: composio.dev/toolkits/parsera",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Parseur Automation",
    "description": "Automate Parseur workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "parseur",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Parseur 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Parseur 账户（OAuth/API Key）\n3. 使用 PARSEUR 前缀工具\n\n文档: composio.dev/toolkits/parseur",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Passcreator Automation",
    "description": "Automate Passcreator workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "passcreator",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Passcreator 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Passcreator 账户（OAuth/API Key）\n3. 使用 PASSCREATOR 前缀工具\n\n文档: composio.dev/toolkits/passcreator",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Passslot Automation",
    "description": "Automate Passslot workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "passslot",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Passslot 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Passslot 账户（OAuth/API Key）\n3. 使用 PASSSLOT 前缀工具\n\n文档: composio.dev/toolkits/passslot",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Payhip Automation",
    "description": "Automate Payhip workflows via Composio MCP integration.",
    "domain": "ecommerce-payments",
    "tags": [
      "payhip",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Payhip 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Payhip 账户（OAuth/API Key）\n3. 使用 PAYHIP 前缀工具\n\n文档: composio.dev/toolkits/payhip",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Pdf Api Io Automation",
    "description": "Automate Pdf Api Io workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "pdf-api-io",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Pdf Api Io 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Pdf Api Io 账户（OAuth/API Key）\n3. 使用 PDF-API-IO 前缀工具\n\n文档: composio.dev/toolkits/pdf-api-io",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Pdf Co Automation",
    "description": "Automate Pdf Co workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "pdf-co",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Pdf Co 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Pdf Co 账户（OAuth/API Key）\n3. 使用 PDF-CO 前缀工具\n\n文档: composio.dev/toolkits/pdf-co",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Pdf4Me Automation",
    "description": "Automate Pdf4Me workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "pdf4me",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Pdf4Me 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Pdf4Me 账户（OAuth/API Key）\n3. 使用 PDF4ME 前缀工具\n\n文档: composio.dev/toolkits/pdf4me",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Pdfless Automation",
    "description": "Automate Pdfless workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "pdfless",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Pdfless 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Pdfless 账户（OAuth/API Key）\n3. 使用 PDFLESS 前缀工具\n\n文档: composio.dev/toolkits/pdfless",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Pdfmonkey Automation",
    "description": "Automate Pdfmonkey workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "pdfmonkey",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Pdfmonkey 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Pdfmonkey 账户（OAuth/API Key）\n3. 使用 PDFMONKEY 前缀工具\n\n文档: composio.dev/toolkits/pdfmonkey",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Peopledatalabs Automation",
    "description": "Automate Peopledatalabs workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "peopledatalabs",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Peopledatalabs 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Peopledatalabs 账户（OAuth/API Key）\n3. 使用 PEOPLEDATALABS 前缀工具\n\n文档: composio.dev/toolkits/peopledatalabs",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Perigon Automation",
    "description": "Automate Perigon workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "perigon",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Perigon 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Perigon 账户（OAuth/API Key）\n3. 使用 PERIGON 前缀工具\n\n文档: composio.dev/toolkits/perigon",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Perplexityai Automation",
    "description": "Automate Perplexityai workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "perplexityai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Perplexityai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Perplexityai 账户（OAuth/API Key）\n3. 使用 PERPLEXITYAI 前缀工具\n\n文档: composio.dev/toolkits/perplexityai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Persistiq Automation",
    "description": "Automate Persistiq workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "persistiq",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Persistiq 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Persistiq 账户（OAuth/API Key）\n3. 使用 PERSISTIQ 前缀工具\n\n文档: composio.dev/toolkits/persistiq",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Pexels Automation",
    "description": "Automate Pexels workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "pexels",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Pexels 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Pexels 账户（OAuth/API Key）\n3. 使用 PEXELS 前缀工具\n\n文档: composio.dev/toolkits/pexels",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Phantombuster Automation",
    "description": "Automate Phantombuster workflows via Composio MCP integration.",
    "domain": "web-scraping",
    "tags": [
      "phantombuster",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Phantombuster 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Phantombuster 账户（OAuth/API Key）\n3. 使用 PHANTOMBUSTER 前缀工具\n\n文档: composio.dev/toolkits/phantombuster",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Piggy Automation",
    "description": "Automate Piggy workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "piggy",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Piggy 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Piggy 账户（OAuth/API Key）\n3. 使用 PIGGY 前缀工具\n\n文档: composio.dev/toolkits/piggy",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Piloterr Automation",
    "description": "Automate Piloterr workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "piloterr",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Piloterr 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Piloterr 账户（OAuth/API Key）\n3. 使用 PILOTERR 前缀工具\n\n文档: composio.dev/toolkits/piloterr",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Pilvio Automation",
    "description": "Automate Pilvio workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "pilvio",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Pilvio 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Pilvio 账户（OAuth/API Key）\n3. 使用 PILVIO 前缀工具\n\n文档: composio.dev/toolkits/pilvio",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Pingdom Automation",
    "description": "Automate Pingdom workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "pingdom",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Pingdom 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Pingdom 账户（OAuth/API Key）\n3. 使用 PINGDOM 前缀工具\n\n文档: composio.dev/toolkits/pingdom",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Pipeline Crm Automation",
    "description": "Automate Pipeline Crm workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "pipeline-crm",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Pipeline Crm 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Pipeline Crm 账户（OAuth/API Key）\n3. 使用 PIPELINE-CRM 前缀工具\n\n文档: composio.dev/toolkits/pipeline-crm",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Placekey Automation",
    "description": "Automate Placekey workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "placekey",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Placekey 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Placekey 账户（OAuth/API Key）\n3. 使用 PLACEKEY 前缀工具\n\n文档: composio.dev/toolkits/placekey",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Placid Automation",
    "description": "Automate Placid workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "placid",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Placid 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Placid 账户（OAuth/API Key）\n3. 使用 PLACID 前缀工具\n\n文档: composio.dev/toolkits/placid",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Plain Automation",
    "description": "Automate Plain workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "plain",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Plain 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Plain 账户（OAuth/API Key）\n3. 使用 PLAIN 前缀工具\n\n文档: composio.dev/toolkits/plain",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Plasmic Automation",
    "description": "Automate Plasmic workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "plasmic",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Plasmic 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Plasmic 账户（OAuth/API Key）\n3. 使用 PLASMIC 前缀工具\n\n文档: composio.dev/toolkits/plasmic",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Platerecognizer Automation",
    "description": "Automate Platerecognizer workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "platerecognizer",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Platerecognizer 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Platerecognizer 账户（OAuth/API Key）\n3. 使用 PLATERECOGNIZER 前缀工具\n\n文档: composio.dev/toolkits/platerecognizer",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Plisio Automation",
    "description": "Automate Plisio workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "plisio",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Plisio 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Plisio 账户（OAuth/API Key）\n3. 使用 PLISIO 前缀工具\n\n文档: composio.dev/toolkits/plisio",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Polygon Automation",
    "description": "Automate Polygon workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "polygon",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Polygon 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Polygon 账户（OAuth/API Key）\n3. 使用 POLYGON 前缀工具\n\n文档: composio.dev/toolkits/polygon",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Polygon Io Automation",
    "description": "Automate Polygon Io workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "polygon-io",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Polygon Io 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Polygon Io 账户（OAuth/API Key）\n3. 使用 POLYGON-IO 前缀工具\n\n文档: composio.dev/toolkits/polygon-io",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Poptin Automation",
    "description": "Automate Poptin workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "poptin",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Poptin 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Poptin 账户（OAuth/API Key）\n3. 使用 POPTIN 前缀工具\n\n文档: composio.dev/toolkits/poptin",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Postgrid Automation",
    "description": "Automate Postgrid workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "postgrid",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Postgrid 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Postgrid 账户（OAuth/API Key）\n3. 使用 POSTGRID 前缀工具\n\n文档: composio.dev/toolkits/postgrid",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Postgrid Verify Automation",
    "description": "Automate Postgrid Verify workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "postgrid-verify",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Postgrid Verify 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Postgrid Verify 账户（OAuth/API Key）\n3. 使用 POSTGRID-VERIFY 前缀工具\n\n文档: composio.dev/toolkits/postgrid-verify",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Precoro Automation",
    "description": "Automate Precoro workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "precoro",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Precoro 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Precoro 账户（OAuth/API Key）\n3. 使用 PRECORO 前缀工具\n\n文档: composio.dev/toolkits/precoro",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Prerender Automation",
    "description": "Automate Prerender workflows via Composio MCP integration.",
    "domain": "devops",
    "tags": [
      "prerender",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Prerender 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Prerender 账户（OAuth/API Key）\n3. 使用 PRERENDER 前缀工具\n\n文档: composio.dev/toolkits/prerender",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Printautopilot Automation",
    "description": "Automate Printautopilot workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "printautopilot",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Printautopilot 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Printautopilot 账户（OAuth/API Key）\n3. 使用 PRINTAUTOPILOT 前缀工具\n\n文档: composio.dev/toolkits/printautopilot",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Prisma Automation",
    "description": "Automate Prisma workflows via Composio MCP integration.",
    "domain": "database-storage",
    "tags": [
      "prisma",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Prisma 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Prisma 账户（OAuth/API Key）\n3. 使用 PRISMA 前缀工具\n\n文档: composio.dev/toolkits/prisma",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Prismic Automation",
    "description": "Automate Prismic workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "prismic",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Prismic 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Prismic 账户（OAuth/API Key）\n3. 使用 PRISMIC 前缀工具\n\n文档: composio.dev/toolkits/prismic",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Process Street Automation",
    "description": "Automate Process Street workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "process-street",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Process Street 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Process Street 账户（OAuth/API Key）\n3. 使用 PROCESS-STREET 前缀工具\n\n文档: composio.dev/toolkits/process-street",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Procfu Automation",
    "description": "Automate Procfu workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "procfu",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Procfu 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Procfu 账户（OAuth/API Key）\n3. 使用 PROCFU 前缀工具\n\n文档: composio.dev/toolkits/procfu",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Productboard Automation",
    "description": "Automate Productboard workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "productboard",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Productboard 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Productboard 账户（OAuth/API Key）\n3. 使用 PRODUCTBOARD 前缀工具\n\n文档: composio.dev/toolkits/productboard",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Productlane Automation",
    "description": "Automate Productlane workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "productlane",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Productlane 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Productlane 账户（OAuth/API Key）\n3. 使用 PRODUCTLANE 前缀工具\n\n文档: composio.dev/toolkits/productlane",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Project Bubble Automation",
    "description": "Automate Project Bubble workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "project-bubble",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Project Bubble 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Project Bubble 账户（OAuth/API Key）\n3. 使用 PROJECT-BUBBLE 前缀工具\n\n文档: composio.dev/toolkits/project-bubble",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Proofly Automation",
    "description": "Automate Proofly workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "proofly",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Proofly 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Proofly 账户（OAuth/API Key）\n3. 使用 PROOFLY 前缀工具\n\n文档: composio.dev/toolkits/proofly",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Proxiedmail Automation",
    "description": "Automate Proxiedmail workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "proxiedmail",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Proxiedmail 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Proxiedmail 账户（OAuth/API Key）\n3. 使用 PROXIEDMAIL 前缀工具\n\n文档: composio.dev/toolkits/proxiedmail",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Pushbullet Automation",
    "description": "Automate Pushbullet workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "pushbullet",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Pushbullet 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Pushbullet 账户（OAuth/API Key）\n3. 使用 PUSHBULLET 前缀工具\n\n文档: composio.dev/toolkits/pushbullet",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Pushover Automation",
    "description": "Automate Pushover workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "pushover",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Pushover 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Pushover 账户（OAuth/API Key）\n3. 使用 PUSHOVER 前缀工具\n\n文档: composio.dev/toolkits/pushover",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Quaderno Automation",
    "description": "Automate Quaderno workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "quaderno",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Quaderno 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Quaderno 账户（OAuth/API Key）\n3. 使用 QUADERNO 前缀工具\n\n文档: composio.dev/toolkits/quaderno",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Qualaroo Automation",
    "description": "Automate Qualaroo workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "qualaroo",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Qualaroo 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Qualaroo 账户（OAuth/API Key）\n3. 使用 QUALAROO 前缀工具\n\n文档: composio.dev/toolkits/qualaroo",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Quickbooks Automation",
    "description": "Automate Quickbooks workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "quickbooks",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Quickbooks 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Quickbooks 账户（OAuth/API Key）\n3. 使用 QUICKBOOKS 前缀工具\n\n文档: composio.dev/toolkits/quickbooks",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Radar Automation",
    "description": "Automate Radar workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "radar",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Radar 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Radar 账户（OAuth/API Key）\n3. 使用 RADAR 前缀工具\n\n文档: composio.dev/toolkits/radar",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Rafflys Automation",
    "description": "Automate Rafflys workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "rafflys",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Rafflys 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Rafflys 账户（OAuth/API Key）\n3. 使用 RAFFLYS 前缀工具\n\n文档: composio.dev/toolkits/rafflys",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ragic Automation",
    "description": "Automate Ragic workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "ragic",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ragic 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ragic 账户（OAuth/API Key）\n3. 使用 RAGIC 前缀工具\n\n文档: composio.dev/toolkits/ragic",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Raisely Automation",
    "description": "Automate Raisely workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "raisely",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Raisely 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Raisely 账户（OAuth/API Key）\n3. 使用 RAISELY 前缀工具\n\n文档: composio.dev/toolkits/raisely",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ramp Automation",
    "description": "Automate Ramp workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "ramp",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ramp 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ramp 账户（OAuth/API Key）\n3. 使用 RAMP 前缀工具\n\n文档: composio.dev/toolkits/ramp",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ravenseotools Automation",
    "description": "Automate Ravenseotools workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "ravenseotools",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ravenseotools 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ravenseotools 账户（OAuth/API Key）\n3. 使用 RAVENSEOTOOLS 前缀工具\n\n文档: composio.dev/toolkits/ravenseotools",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Re Amaze Automation",
    "description": "Automate Re Amaze workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "re-amaze",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Re Amaze 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Re Amaze 账户（OAuth/API Key）\n3. 使用 RE-AMAZE 前缀工具\n\n文档: composio.dev/toolkits/re-amaze",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Realphonevalidation Automation",
    "description": "Automate Realphonevalidation workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "realphonevalidation",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Realphonevalidation 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Realphonevalidation 账户（OAuth/API Key）\n3. 使用 REALPHONEVALIDATION 前缀工具\n\n文档: composio.dev/toolkits/realphonevalidation",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Recallai Automation",
    "description": "Automate Recallai workflows via Composio MCP integration.",
    "domain": "meetings-scheduling",
    "tags": [
      "recallai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Recallai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Recallai 账户（OAuth/API Key）\n3. 使用 RECALLAI 前缀工具\n\n文档: composio.dev/toolkits/recallai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Recruitee Automation",
    "description": "Automate Recruitee workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "recruitee",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Recruitee 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Recruitee 账户（OAuth/API Key）\n3. 使用 RECRUITEE 前缀工具\n\n文档: composio.dev/toolkits/recruitee",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Refiner Automation",
    "description": "Automate Refiner workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "refiner",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Refiner 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Refiner 账户（OAuth/API Key）\n3. 使用 REFINER 前缀工具\n\n文档: composio.dev/toolkits/refiner",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Remarkety Automation",
    "description": "Automate Remarkety workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "remarkety",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Remarkety 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Remarkety 账户（OAuth/API Key）\n3. 使用 REMARKETY 前缀工具\n\n文档: composio.dev/toolkits/remarkety",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Remote Retrieval Automation",
    "description": "Automate Remote Retrieval workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "remote-retrieval",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Remote Retrieval 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Remote Retrieval 账户（OAuth/API Key）\n3. 使用 REMOTE-RETRIEVAL 前缀工具\n\n文档: composio.dev/toolkits/remote-retrieval",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Remove Bg Automation",
    "description": "Automate Remove Bg workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "remove-bg",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Remove Bg 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Remove Bg 账户（OAuth/API Key）\n3. 使用 REMOVE-BG 前缀工具\n\n文档: composio.dev/toolkits/remove-bg",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Renderform Automation",
    "description": "Automate Renderform workflows via Composio MCP integration.",
    "domain": "devops",
    "tags": [
      "renderform",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Renderform 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Renderform 账户（OAuth/API Key）\n3. 使用 RENDERFORM 前缀工具\n\n文档: composio.dev/toolkits/renderform",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Repairshopr Automation",
    "description": "Automate Repairshopr workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "repairshopr",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Repairshopr 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Repairshopr 账户（OAuth/API Key）\n3. 使用 REPAIRSHOPR 前缀工具\n\n文档: composio.dev/toolkits/repairshopr",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Replicate Automation",
    "description": "Automate Replicate workflows via Composio MCP integration.",
    "domain": "ai-services",
    "tags": [
      "replicate",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Replicate 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Replicate 账户（OAuth/API Key）\n3. 使用 REPLICATE 前缀工具\n\n文档: composio.dev/toolkits/replicate",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Reply Automation",
    "description": "Automate Reply workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "reply",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Reply 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Reply 账户（OAuth/API Key）\n3. 使用 REPLY 前缀工具\n\n文档: composio.dev/toolkits/reply",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Reply Io Automation",
    "description": "Automate Reply Io workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "reply-io",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Reply Io 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Reply Io 账户（OAuth/API Key）\n3. 使用 REPLY-IO 前缀工具\n\n文档: composio.dev/toolkits/reply-io",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Resend Automation",
    "description": "Automate Resend workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "resend",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Resend 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Resend 账户（OAuth/API Key）\n3. 使用 RESEND 前缀工具\n\n文档: composio.dev/toolkits/resend",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Respond Io Automation",
    "description": "Automate Respond Io workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "respond-io",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Respond Io 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Respond Io 账户（OAuth/API Key）\n3. 使用 RESPOND-IO 前缀工具\n\n文档: composio.dev/toolkits/respond-io",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Retailed Automation",
    "description": "Automate Retailed workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "retailed",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Retailed 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Retailed 账户（OAuth/API Key）\n3. 使用 RETAILED 前缀工具\n\n文档: composio.dev/toolkits/retailed",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Retellai Automation",
    "description": "Automate Retellai workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "retellai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Retellai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Retellai 账户（OAuth/API Key）\n3. 使用 RETELLAI 前缀工具\n\n文档: composio.dev/toolkits/retellai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Retently Automation",
    "description": "Automate Retently workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "retently",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Retently 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Retently 账户（OAuth/API Key）\n3. 使用 RETENTLY 前缀工具\n\n文档: composio.dev/toolkits/retently",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Rev Ai Automation",
    "description": "Automate Rev Ai workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "rev-ai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Rev Ai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Rev Ai 账户（OAuth/API Key）\n3. 使用 REV-AI 前缀工具\n\n文档: composio.dev/toolkits/rev-ai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Revolt Automation",
    "description": "Automate Revolt workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "revolt",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Revolt 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Revolt 账户（OAuth/API Key）\n3. 使用 REVOLT 前缀工具\n\n文档: composio.dev/toolkits/revolt",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ring Central Automation",
    "description": "Automate Ring Central workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "ring-central",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ring Central 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ring Central 账户（OAuth/API Key）\n3. 使用 RING-CENTRAL 前缀工具\n\n文档: composio.dev/toolkits/ring-central",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ring_Central Automation",
    "description": "Automate Ring_Central workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "ring_central",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ring_Central 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ring_Central 账户（OAuth/API Key）\n3. 使用 RING_CENTRAL 前缀工具\n\n文档: composio.dev/toolkits/ring_central",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Rippling Automation",
    "description": "Automate Rippling workflows via Composio MCP integration.",
    "domain": "hr-people",
    "tags": [
      "rippling",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Rippling 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Rippling 账户（OAuth/API Key）\n3. 使用 RIPPLING 前缀工具\n\n文档: composio.dev/toolkits/rippling",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ritekit Automation",
    "description": "Automate Ritekit workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "ritekit",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ritekit 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ritekit 账户（OAuth/API Key）\n3. 使用 RITEKIT 前缀工具\n\n文档: composio.dev/toolkits/ritekit",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Rkvst Automation",
    "description": "Automate Rkvst workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "rkvst",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Rkvst 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Rkvst 账户（OAuth/API Key）\n3. 使用 RKVST 前缀工具\n\n文档: composio.dev/toolkits/rkvst",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Rocketlane Automation",
    "description": "Automate Rocketlane workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "rocketlane",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Rocketlane 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Rocketlane 账户（OAuth/API Key）\n3. 使用 ROCKETLANE 前缀工具\n\n文档: composio.dev/toolkits/rocketlane",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Rootly Automation",
    "description": "Automate Rootly workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "rootly",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Rootly 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Rootly 账户（OAuth/API Key）\n3. 使用 ROOTLY 前缀工具\n\n文档: composio.dev/toolkits/rootly",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Rosette Text Analytics Automation",
    "description": "Automate Rosette Text Analytics workflows via Composio MCP integration.",
    "domain": "analytics",
    "tags": [
      "rosette-text-analytics",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Rosette Text Analytics 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Rosette Text Analytics 账户（OAuth/API Key）\n3. 使用 ROSETTE-TEXT-ANALYTICS 前缀工具\n\n文档: composio.dev/toolkits/rosette-text-analytics",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Route4Me Automation",
    "description": "Automate Route4Me workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "route4me",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Route4Me 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Route4Me 账户（OAuth/API Key）\n3. 使用 ROUTE4ME 前缀工具\n\n文档: composio.dev/toolkits/route4me",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Safetyculture Automation",
    "description": "Automate Safetyculture workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "safetyculture",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Safetyculture 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Safetyculture 账户（OAuth/API Key）\n3. 使用 SAFETYCULTURE 前缀工具\n\n文档: composio.dev/toolkits/safetyculture",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Sage Automation",
    "description": "Automate Sage workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "sage",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Sage 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Sage 账户（OAuth/API Key）\n3. 使用 SAGE 前缀工具\n\n文档: composio.dev/toolkits/sage",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Salesforce Marketing Cloud Automation",
    "description": "Automate Salesforce Marketing Cloud workflows via Composio MCP integration.",
    "domain": "crm-sales",
    "tags": [
      "salesforce-marketing-cloud",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Salesforce Marketing Cloud 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Salesforce Marketing Cloud 账户（OAuth/API Key）\n3. 使用 SALESFORCE-MARKETING-CLOUD 前缀工具\n\n文档: composio.dev/toolkits/salesforce-marketing-cloud",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Salesforce Service Cloud Automation",
    "description": "Automate Salesforce Service Cloud workflows via Composio MCP integration.",
    "domain": "crm-sales",
    "tags": [
      "salesforce-service-cloud",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Salesforce Service Cloud 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Salesforce Service Cloud 账户（OAuth/API Key）\n3. 使用 SALESFORCE-SERVICE-CLOUD 前缀工具\n\n文档: composio.dev/toolkits/salesforce-service-cloud",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Salesmate Automation",
    "description": "Automate Salesmate workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "salesmate",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Salesmate 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Salesmate 账户（OAuth/API Key）\n3. 使用 SALESMATE 前缀工具\n\n文档: composio.dev/toolkits/salesmate",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Sap Successfactors Automation",
    "description": "Automate Sap Successfactors workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "sap-successfactors",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Sap Successfactors 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Sap Successfactors 账户（OAuth/API Key）\n3. 使用 SAP-SUCCESSFACTORS 前缀工具\n\n文档: composio.dev/toolkits/sap-successfactors",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Satismeter Automation",
    "description": "Automate Satismeter workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "satismeter",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Satismeter 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Satismeter 账户（OAuth/API Key）\n3. 使用 SATISMETER 前缀工具\n\n文档: composio.dev/toolkits/satismeter",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Scrape Do Automation",
    "description": "Automate Scrape Do workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "scrape-do",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Scrape Do 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Scrape Do 账户（OAuth/API Key）\n3. 使用 SCRAPE-DO 前缀工具\n\n文档: composio.dev/toolkits/scrape-do",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Scrapegraph Ai Automation",
    "description": "Automate Scrapegraph Ai workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "scrapegraph-ai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Scrapegraph Ai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Scrapegraph Ai 账户（OAuth/API Key）\n3. 使用 SCRAPEGRAPH-AI 前缀工具\n\n文档: composio.dev/toolkits/scrapegraph-ai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Scrapfly Automation",
    "description": "Automate Scrapfly workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "scrapfly",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Scrapfly 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Scrapfly 账户（OAuth/API Key）\n3. 使用 SCRAPFLY 前缀工具\n\n文档: composio.dev/toolkits/scrapfly",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Scrapingant Automation",
    "description": "Automate Scrapingant workflows via Composio MCP integration.",
    "domain": "web-scraping",
    "tags": [
      "scrapingant",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Scrapingant 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Scrapingant 账户（OAuth/API Key）\n3. 使用 SCRAPINGANT 前缀工具\n\n文档: composio.dev/toolkits/scrapingant",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Scrapingbee Automation",
    "description": "Automate Scrapingbee workflows via Composio MCP integration.",
    "domain": "web-scraping",
    "tags": [
      "scrapingbee",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Scrapingbee 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Scrapingbee 账户（OAuth/API Key）\n3. 使用 SCRAPINGBEE 前缀工具\n\n文档: composio.dev/toolkits/scrapingbee",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Screenshot Fyi Automation",
    "description": "Automate Screenshot Fyi workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "screenshot-fyi",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Screenshot Fyi 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Screenshot Fyi 账户（OAuth/API Key）\n3. 使用 SCREENSHOT-FYI 前缀工具\n\n文档: composio.dev/toolkits/screenshot-fyi",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Screenshotone Automation",
    "description": "Automate Screenshotone workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "screenshotone",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Screenshotone 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Screenshotone 账户（OAuth/API Key）\n3. 使用 SCREENSHOTONE 前缀工具\n\n文档: composio.dev/toolkits/screenshotone",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Seat Geek Automation",
    "description": "Automate Seat Geek workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "seat-geek",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Seat Geek 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Seat Geek 账户（OAuth/API Key）\n3. 使用 SEAT-GEEK 前缀工具\n\n文档: composio.dev/toolkits/seat-geek",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Securitytrails Automation",
    "description": "Automate Securitytrails workflows via Composio MCP integration.",
    "domain": "security-identity",
    "tags": [
      "securitytrails",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Securitytrails 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Securitytrails 账户（OAuth/API Key）\n3. 使用 SECURITYTRAILS 前缀工具\n\n文档: composio.dev/toolkits/securitytrails",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Segmetrics Automation",
    "description": "Automate Segmetrics workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "segmetrics",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Segmetrics 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Segmetrics 账户（OAuth/API Key）\n3. 使用 SEGMETRICS 前缀工具\n\n文档: composio.dev/toolkits/segmetrics",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Seismic Automation",
    "description": "Automate Seismic workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "seismic",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Seismic 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Seismic 账户（OAuth/API Key）\n3. 使用 SEISMIC 前缀工具\n\n文档: composio.dev/toolkits/seismic",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Semanticscholar Automation",
    "description": "Automate Semanticscholar workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "semanticscholar",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Semanticscholar 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Semanticscholar 账户（OAuth/API Key）\n3. 使用 SEMANTICSCHOLAR 前缀工具\n\n文档: composio.dev/toolkits/semanticscholar",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Semrush Automation",
    "description": "Automate Semrush workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "semrush",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Semrush 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Semrush 账户（OAuth/API Key）\n3. 使用 SEMRUSH 前缀工具\n\n文档: composio.dev/toolkits/semrush",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Sendbird Ai Chabot Automation",
    "description": "Automate Sendbird Ai Chabot workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "sendbird-ai-chabot",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Sendbird Ai Chabot 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Sendbird Ai Chabot 账户（OAuth/API Key）\n3. 使用 SENDBIRD-AI-CHABOT 前缀工具\n\n文档: composio.dev/toolkits/sendbird-ai-chabot",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Sendbird Automation",
    "description": "Automate Sendbird workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "sendbird",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Sendbird 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Sendbird 账户（OAuth/API Key）\n3. 使用 SENDBIRD 前缀工具\n\n文档: composio.dev/toolkits/sendbird",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Sendfox Automation",
    "description": "Automate Sendfox workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "sendfox",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Sendfox 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Sendfox 账户（OAuth/API Key）\n3. 使用 SENDFOX 前缀工具\n\n文档: composio.dev/toolkits/sendfox",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Sendlane Automation",
    "description": "Automate Sendlane workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "sendlane",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Sendlane 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Sendlane 账户（OAuth/API Key）\n3. 使用 SENDLANE 前缀工具\n\n文档: composio.dev/toolkits/sendlane",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Sendloop Automation",
    "description": "Automate Sendloop workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "sendloop",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Sendloop 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Sendloop 账户（OAuth/API Key）\n3. 使用 SENDLOOP 前缀工具\n\n文档: composio.dev/toolkits/sendloop",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Sendspark Automation",
    "description": "Automate Sendspark workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "sendspark",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Sendspark 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Sendspark 账户（OAuth/API Key）\n3. 使用 SENDSPARK 前缀工具\n\n文档: composio.dev/toolkits/sendspark",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Sensibo Automation",
    "description": "Automate Sensibo workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "sensibo",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Sensibo 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Sensibo 账户（OAuth/API Key）\n3. 使用 SENSIBO 前缀工具\n\n文档: composio.dev/toolkits/sensibo",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Seqera Automation",
    "description": "Automate Seqera workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "seqera",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Seqera 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Seqera 账户（OAuth/API Key）\n3. 使用 SEQERA 前缀工具\n\n文档: composio.dev/toolkits/seqera",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Serpapi Automation",
    "description": "Automate Serpapi workflows via Composio MCP integration.",
    "domain": "web-scraping",
    "tags": [
      "serpapi",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Serpapi 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Serpapi 账户（OAuth/API Key）\n3. 使用 SERPAPI 前缀工具\n\n文档: composio.dev/toolkits/serpapi",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Serpdog Automation",
    "description": "Automate Serpdog workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "serpdog",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Serpdog 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Serpdog 账户（OAuth/API Key）\n3. 使用 SERPDOG 前缀工具\n\n文档: composio.dev/toolkits/serpdog",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Serply Automation",
    "description": "Automate Serply workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "serply",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Serply 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Serply 账户（OAuth/API Key）\n3. 使用 SERPLY 前缀工具\n\n文档: composio.dev/toolkits/serply",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Servicem8 Automation",
    "description": "Automate Servicem8 workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "servicem8",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Servicem8 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Servicem8 账户（OAuth/API Key）\n3. 使用 SERVICEM8 前缀工具\n\n文档: composio.dev/toolkits/servicem8",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Sevdesk Automation",
    "description": "Automate Sevdesk workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "sevdesk",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Sevdesk 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Sevdesk 账户（OAuth/API Key）\n3. 使用 SEVDESK 前缀工具\n\n文档: composio.dev/toolkits/sevdesk",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Share Point Automation",
    "description": "Automate Share Point workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "share-point",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Share Point 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Share Point 账户（OAuth/API Key）\n3. 使用 SHARE-POINT 前缀工具\n\n文档: composio.dev/toolkits/share-point",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Share_Point Automation",
    "description": "Automate Share_Point workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "share_point",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Share_Point 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Share_Point 账户（OAuth/API Key）\n3. 使用 SHARE_POINT 前缀工具\n\n文档: composio.dev/toolkits/share_point",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Shipengine Automation",
    "description": "Automate Shipengine workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "shipengine",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Shipengine 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Shipengine 账户（OAuth/API Key）\n3. 使用 SHIPENGINE 前缀工具\n\n文档: composio.dev/toolkits/shipengine",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Short Io Automation",
    "description": "Automate Short Io workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "short-io",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Short Io 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Short Io 账户（OAuth/API Key）\n3. 使用 SHORT-IO 前缀工具\n\n文档: composio.dev/toolkits/short-io",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Short Menu Automation",
    "description": "Automate Short Menu workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "short-menu",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Short Menu 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Short Menu 账户（OAuth/API Key）\n3. 使用 SHORT-MENU 前缀工具\n\n文档: composio.dev/toolkits/short-menu",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Shortcut Automation",
    "description": "Automate Shortcut workflows via Composio MCP integration.",
    "domain": "project-management",
    "tags": [
      "shortcut",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Shortcut 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Shortcut 账户（OAuth/API Key）\n3. 使用 SHORTCUT 前缀工具\n\n文档: composio.dev/toolkits/shortcut",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Shorten Rest Automation",
    "description": "Automate Shorten Rest workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "shorten-rest",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Shorten Rest 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Shorten Rest 账户（OAuth/API Key）\n3. 使用 SHORTEN-REST 前缀工具\n\n文档: composio.dev/toolkits/shorten-rest",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Shortpixel Automation",
    "description": "Automate Shortpixel workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "shortpixel",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Shortpixel 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Shortpixel 账户（OAuth/API Key）\n3. 使用 SHORTPIXEL 前缀工具\n\n文档: composio.dev/toolkits/shortpixel",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Shotstack Automation",
    "description": "Automate Shotstack workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "shotstack",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Shotstack 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Shotstack 账户（OAuth/API Key）\n3. 使用 SHOTSTACK 前缀工具\n\n文档: composio.dev/toolkits/shotstack",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Sidetracker Automation",
    "description": "Automate Sidetracker workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "sidetracker",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Sidetracker 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Sidetracker 账户（OAuth/API Key）\n3. 使用 SIDETRACKER 前缀工具\n\n文档: composio.dev/toolkits/sidetracker",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Signaturely Automation",
    "description": "Automate Signaturely workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "signaturely",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Signaturely 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Signaturely 账户（OAuth/API Key）\n3. 使用 SIGNATURELY 前缀工具\n\n文档: composio.dev/toolkits/signaturely",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Signpath Automation",
    "description": "Automate Signpath workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "signpath",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Signpath 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Signpath 账户（OAuth/API Key）\n3. 使用 SIGNPATH 前缀工具\n\n文档: composio.dev/toolkits/signpath",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Signwell Automation",
    "description": "Automate Signwell workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "signwell",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Signwell 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Signwell 账户（OAuth/API Key）\n3. 使用 SIGNWELL 前缀工具\n\n文档: composio.dev/toolkits/signwell",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Similarweb Digitalrank Api Automation",
    "description": "Automate Similarweb Digitalrank Api workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "similarweb-digitalrank-api",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Similarweb Digitalrank Api 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Similarweb Digitalrank Api 账户（OAuth/API Key）\n3. 使用 SIMILARWEB-DIGITALRANK-API 前缀工具\n\n文档: composio.dev/toolkits/similarweb-digitalrank-api",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Similarweb_Digitalrank_Api Automation",
    "description": "Automate Similarweb_Digitalrank_Api workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "similarweb_digitalrank_api",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Similarweb_Digitalrank_Api 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Similarweb_Digitalrank_Api 账户（OAuth/API Key）\n3. 使用 SIMILARWEB_DIGITALRANK_API 前缀工具\n\n文档: composio.dev/toolkits/similarweb_digitalrank_api",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Simla Com Automation",
    "description": "Automate Simla Com workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "simla-com",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Simla Com 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Simla Com 账户（OAuth/API Key）\n3. 使用 SIMLA-COM 前缀工具\n\n文档: composio.dev/toolkits/simla-com",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Simple Analytics Automation",
    "description": "Automate Simple Analytics workflows via Composio MCP integration.",
    "domain": "analytics",
    "tags": [
      "simple-analytics",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Simple Analytics 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Simple Analytics 账户（OAuth/API Key）\n3. 使用 SIMPLE-ANALYTICS 前缀工具\n\n文档: composio.dev/toolkits/simple-analytics",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Simplesat Automation",
    "description": "Automate Simplesat workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "simplesat",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Simplesat 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Simplesat 账户（OAuth/API Key）\n3. 使用 SIMPLESAT 前缀工具\n\n文档: composio.dev/toolkits/simplesat",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Sitespeakai Automation",
    "description": "Automate Sitespeakai workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "sitespeakai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Sitespeakai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Sitespeakai 账户（OAuth/API Key）\n3. 使用 SITESPEAKAI 前缀工具\n\n文档: composio.dev/toolkits/sitespeakai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Skyfire Automation",
    "description": "Automate Skyfire workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "skyfire",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Skyfire 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Skyfire 账户（OAuth/API Key）\n3. 使用 SKYFIRE 前缀工具\n\n文档: composio.dev/toolkits/skyfire",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Slackbot Automation",
    "description": "Automate Slackbot workflows via Composio MCP integration.",
    "domain": "communication",
    "tags": [
      "slackbot",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Slackbot 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Slackbot 账户（OAuth/API Key）\n3. 使用 SLACKBOT 前缀工具\n\n文档: composio.dev/toolkits/slackbot",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Smartproxy Automation",
    "description": "Automate Smartproxy workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "smartproxy",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Smartproxy 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Smartproxy 账户（OAuth/API Key）\n3. 使用 SMARTPROXY 前缀工具\n\n文档: composio.dev/toolkits/smartproxy",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Smartrecruiters Automation",
    "description": "Automate Smartrecruiters workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "smartrecruiters",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Smartrecruiters 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Smartrecruiters 账户（OAuth/API Key）\n3. 使用 SMARTRECRUITERS 前缀工具\n\n文档: composio.dev/toolkits/smartrecruiters",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Sms Alert Automation",
    "description": "Automate Sms Alert workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "sms-alert",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Sms Alert 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Sms Alert 账户（OAuth/API Key）\n3. 使用 SMS-ALERT 前缀工具\n\n文档: composio.dev/toolkits/sms-alert",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Smtp2Go Automation",
    "description": "Automate Smtp2Go workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "smtp2go",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Smtp2Go 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Smtp2Go 账户（OAuth/API Key）\n3. 使用 SMTP2GO 前缀工具\n\n文档: composio.dev/toolkits/smtp2go",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Smugmug Automation",
    "description": "Automate Smugmug workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "smugmug",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Smugmug 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Smugmug 账户（OAuth/API Key）\n3. 使用 SMUGMUG 前缀工具\n\n文档: composio.dev/toolkits/smugmug",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Snowflake Automation",
    "description": "Automate Snowflake workflows via Composio MCP integration.",
    "domain": "database-storage",
    "tags": [
      "snowflake",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Snowflake 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Snowflake 账户（OAuth/API Key）\n3. 使用 SNOWFLAKE 前缀工具\n\n文档: composio.dev/toolkits/snowflake",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Sourcegraph Automation",
    "description": "Automate Sourcegraph workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "sourcegraph",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Sourcegraph 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Sourcegraph 账户（OAuth/API Key）\n3. 使用 SOURCEGRAPH 前缀工具\n\n文档: composio.dev/toolkits/sourcegraph",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Splitwise Automation",
    "description": "Automate Splitwise workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "splitwise",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Splitwise 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Splitwise 账户（OAuth/API Key）\n3. 使用 SPLITWISE 前缀工具\n\n文档: composio.dev/toolkits/splitwise",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Spoki Automation",
    "description": "Automate Spoki workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "spoki",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Spoki 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Spoki 账户（OAuth/API Key）\n3. 使用 SPOKI 前缀工具\n\n文档: composio.dev/toolkits/spoki",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Spondyr Automation",
    "description": "Automate Spondyr workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "spondyr",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Spondyr 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Spondyr 账户（OAuth/API Key）\n3. 使用 SPONDYR 前缀工具\n\n文档: composio.dev/toolkits/spondyr",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Spotify Automation",
    "description": "Automate Spotify workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "spotify",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Spotify 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Spotify 账户（OAuth/API Key）\n3. 使用 SPOTIFY 前缀工具\n\n文档: composio.dev/toolkits/spotify",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Spotlightr Automation",
    "description": "Automate Spotlightr workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "spotlightr",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Spotlightr 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Spotlightr 账户（OAuth/API Key）\n3. 使用 SPOTLIGHTR 前缀工具\n\n文档: composio.dev/toolkits/spotlightr",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Sslmate Cert Spotter Api Automation",
    "description": "Automate Sslmate Cert Spotter Api workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "sslmate-cert-spotter-api",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Sslmate Cert Spotter Api 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Sslmate Cert Spotter Api 账户（OAuth/API Key）\n3. 使用 SSLMATE-CERT-SPOTTER-API 前缀工具\n\n文档: composio.dev/toolkits/sslmate-cert-spotter-api",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Stack Exchange Automation",
    "description": "Automate Stack Exchange workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "stack-exchange",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Stack Exchange 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Stack Exchange 账户（OAuth/API Key）\n3. 使用 STACK-EXCHANGE 前缀工具\n\n文档: composio.dev/toolkits/stack-exchange",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Stannp Automation",
    "description": "Automate Stannp workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "stannp",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Stannp 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Stannp 账户（OAuth/API Key）\n3. 使用 STANNP 前缀工具\n\n文档: composio.dev/toolkits/stannp",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Starton Automation",
    "description": "Automate Starton workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "starton",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Starton 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Starton 账户（OAuth/API Key）\n3. 使用 STARTON 前缀工具\n\n文档: composio.dev/toolkits/starton",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Statuscake Automation",
    "description": "Automate Statuscake workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "statuscake",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Statuscake 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Statuscake 账户（OAuth/API Key）\n3. 使用 STATUSCAKE 前缀工具\n\n文档: composio.dev/toolkits/statuscake",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Storeganise Automation",
    "description": "Automate Storeganise workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "storeganise",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Storeganise 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Storeganise 账户（OAuth/API Key）\n3. 使用 STOREGANISE 前缀工具\n\n文档: composio.dev/toolkits/storeganise",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Storerocket Automation",
    "description": "Automate Storerocket workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "storerocket",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Storerocket 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Storerocket 账户（OAuth/API Key）\n3. 使用 STOREROCKET 前缀工具\n\n文档: composio.dev/toolkits/storerocket",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Stormglass Io Automation",
    "description": "Automate Stormglass Io workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "stormglass-io",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Stormglass Io 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Stormglass Io 账户（OAuth/API Key）\n3. 使用 STORMGLASS-IO 前缀工具\n\n文档: composio.dev/toolkits/stormglass-io",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Strava Automation",
    "description": "Automate Strava workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "strava",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Strava 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Strava 账户（OAuth/API Key）\n3. 使用 STRAVA 前缀工具\n\n文档: composio.dev/toolkits/strava",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Streamtime Automation",
    "description": "Automate Streamtime workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "streamtime",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Streamtime 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Streamtime 账户（OAuth/API Key）\n3. 使用 STREAMTIME 前缀工具\n\n文档: composio.dev/toolkits/streamtime",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Supadata Automation",
    "description": "Automate Supadata workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "supadata",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Supadata 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Supadata 账户（OAuth/API Key）\n3. 使用 SUPADATA 前缀工具\n\n文档: composio.dev/toolkits/supadata",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Superchat Automation",
    "description": "Automate Superchat workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "superchat",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Superchat 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Superchat 账户（OAuth/API Key）\n3. 使用 SUPERCHAT 前缀工具\n\n文档: composio.dev/toolkits/superchat",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Supportbee Automation",
    "description": "Automate Supportbee workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "supportbee",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Supportbee 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Supportbee 账户（OAuth/API Key）\n3. 使用 SUPPORTBEE 前缀工具\n\n文档: composio.dev/toolkits/supportbee",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Supportivekoala Automation",
    "description": "Automate Supportivekoala workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "supportivekoala",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Supportivekoala 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Supportivekoala 账户（OAuth/API Key）\n3. 使用 SUPPORTIVEKOALA 前缀工具\n\n文档: composio.dev/toolkits/supportivekoala",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Survey Monkey Automation",
    "description": "Automate Survey Monkey workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "survey-monkey",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Survey Monkey 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Survey Monkey 账户（OAuth/API Key）\n3. 使用 SURVEY-MONKEY 前缀工具\n\n文档: composio.dev/toolkits/survey-monkey",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Survey_Monkey Automation",
    "description": "Automate Survey_Monkey workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "survey_monkey",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Survey_Monkey 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Survey_Monkey 账户（OAuth/API Key）\n3. 使用 SURVEY_MONKEY 前缀工具\n\n文档: composio.dev/toolkits/survey_monkey",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Svix Automation",
    "description": "Automate Svix workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "svix",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Svix 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Svix 账户（OAuth/API Key）\n3. 使用 SVIX 前缀工具\n\n文档: composio.dev/toolkits/svix",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Sympla Automation",
    "description": "Automate Sympla workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "sympla",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Sympla 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Sympla 账户（OAuth/API Key）\n3. 使用 SYMPLA 前缀工具\n\n文档: composio.dev/toolkits/sympla",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Synthflow Ai Automation",
    "description": "Automate Synthflow Ai workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "synthflow-ai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Synthflow Ai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Synthflow Ai 账户（OAuth/API Key）\n3. 使用 SYNTHFLOW-AI 前缀工具\n\n文档: composio.dev/toolkits/synthflow-ai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Taggun Automation",
    "description": "Automate Taggun workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "taggun",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Taggun 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Taggun 账户（OAuth/API Key）\n3. 使用 TAGGUN 前缀工具\n\n文档: composio.dev/toolkits/taggun",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Talenthr Automation",
    "description": "Automate Talenthr workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "talenthr",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Talenthr 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Talenthr 账户（OAuth/API Key）\n3. 使用 TALENTHR 前缀工具\n\n文档: composio.dev/toolkits/talenthr",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Tally Automation",
    "description": "Automate Tally workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "tally",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Tally 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Tally 账户（OAuth/API Key）\n3. 使用 TALLY 前缀工具\n\n文档: composio.dev/toolkits/tally",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Tapfiliate Automation",
    "description": "Automate Tapfiliate workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "tapfiliate",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Tapfiliate 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Tapfiliate 账户（OAuth/API Key）\n3. 使用 TAPFILIATE 前缀工具\n\n文档: composio.dev/toolkits/tapfiliate",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Tapform Automation",
    "description": "Automate Tapform workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "tapform",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Tapform 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Tapform 账户（OAuth/API Key）\n3. 使用 TAPFORM 前缀工具\n\n文档: composio.dev/toolkits/tapform",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Tavily Automation",
    "description": "Automate Tavily workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "tavily",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Tavily 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Tavily 账户（OAuth/API Key）\n3. 使用 TAVILY 前缀工具\n\n文档: composio.dev/toolkits/tavily",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Taxjar Automation",
    "description": "Automate Taxjar workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "taxjar",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Taxjar 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Taxjar 账户（OAuth/API Key）\n3. 使用 TAXJAR 前缀工具\n\n文档: composio.dev/toolkits/taxjar",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Teamcamp Automation",
    "description": "Automate Teamcamp workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "teamcamp",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Teamcamp 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Teamcamp 账户（OAuth/API Key）\n3. 使用 TEAMCAMP 前缀工具\n\n文档: composio.dev/toolkits/teamcamp",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Telnyx Automation",
    "description": "Automate Telnyx workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "telnyx",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Telnyx 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Telnyx 账户（OAuth/API Key）\n3. 使用 TELNYX 前缀工具\n\n文档: composio.dev/toolkits/telnyx",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Teltel Automation",
    "description": "Automate Teltel workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "teltel",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Teltel 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Teltel 账户（OAuth/API Key）\n3. 使用 TELTEL 前缀工具\n\n文档: composio.dev/toolkits/teltel",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Templated Automation",
    "description": "Automate Templated workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "templated",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Templated 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Templated 账户（OAuth/API Key）\n3. 使用 TEMPLATED 前缀工具\n\n文档: composio.dev/toolkits/templated",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Test App Automation",
    "description": "Automate Test App workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "test-app",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Test App 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Test App 账户（OAuth/API Key）\n3. 使用 TEST-APP 前缀工具\n\n文档: composio.dev/toolkits/test-app",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Text To Pdf Automation",
    "description": "Automate Text To Pdf workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "text-to-pdf",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Text To Pdf 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Text To Pdf 账户（OAuth/API Key）\n3. 使用 TEXT-TO-PDF 前缀工具\n\n文档: composio.dev/toolkits/text-to-pdf",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Textcortex Automation",
    "description": "Automate Textcortex workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "textcortex",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Textcortex 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Textcortex 账户（OAuth/API Key）\n3. 使用 TEXTCORTEX 前缀工具\n\n文档: composio.dev/toolkits/textcortex",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Textit Automation",
    "description": "Automate Textit workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "textit",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Textit 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Textit 账户（OAuth/API Key）\n3. 使用 TEXTIT 前缀工具\n\n文档: composio.dev/toolkits/textit",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Textrazor Automation",
    "description": "Automate Textrazor workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "textrazor",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Textrazor 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Textrazor 账户（OAuth/API Key）\n3. 使用 TEXTRAZOR 前缀工具\n\n文档: composio.dev/toolkits/textrazor",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Thanks Io Automation",
    "description": "Automate Thanks Io workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "thanks-io",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Thanks Io 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Thanks Io 账户（OAuth/API Key）\n3. 使用 THANKS-IO 前缀工具\n\n文档: composio.dev/toolkits/thanks-io",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "The Odds Api Automation",
    "description": "Automate The Odds Api workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "the-odds-api",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "The Odds Api 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 The Odds Api 账户（OAuth/API Key）\n3. 使用 THE-ODDS-API 前缀工具\n\n文档: composio.dev/toolkits/the-odds-api",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ticketmaster Automation",
    "description": "Automate Ticketmaster workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "ticketmaster",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ticketmaster 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ticketmaster 账户（OAuth/API Key）\n3. 使用 TICKETMASTER 前缀工具\n\n文档: composio.dev/toolkits/ticketmaster",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ticktick Automation",
    "description": "Automate Ticktick workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "ticktick",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ticktick 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ticktick 账户（OAuth/API Key）\n3. 使用 TICKTICK 前缀工具\n\n文档: composio.dev/toolkits/ticktick",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Timecamp Automation",
    "description": "Automate Timecamp workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "timecamp",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Timecamp 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Timecamp 账户（OAuth/API Key）\n3. 使用 TIMECAMP 前缀工具\n\n文档: composio.dev/toolkits/timecamp",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Timekit Automation",
    "description": "Automate Timekit workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "timekit",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Timekit 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Timekit 账户（OAuth/API Key）\n3. 使用 TIMEKIT 前缀工具\n\n文档: composio.dev/toolkits/timekit",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Timelinesai Automation",
    "description": "Automate Timelinesai workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "timelinesai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Timelinesai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Timelinesai 账户（OAuth/API Key）\n3. 使用 TIMELINESAI 前缀工具\n\n文档: composio.dev/toolkits/timelinesai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Timelink Automation",
    "description": "Automate Timelink workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "timelink",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Timelink 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Timelink 账户（OAuth/API Key）\n3. 使用 TIMELINK 前缀工具\n\n文档: composio.dev/toolkits/timelink",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Timely Automation",
    "description": "Automate Timely workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "timely",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Timely 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Timely 账户（OAuth/API Key）\n3. 使用 TIMELY 前缀工具\n\n文档: composio.dev/toolkits/timely",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Tinyurl Automation",
    "description": "Automate Tinyurl workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "tinyurl",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Tinyurl 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Tinyurl 账户（OAuth/API Key）\n3. 使用 TINYURL 前缀工具\n\n文档: composio.dev/toolkits/tinyurl",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Tisane Automation",
    "description": "Automate Tisane workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "tisane",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Tisane 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Tisane 账户（OAuth/API Key）\n3. 使用 TISANE 前缀工具\n\n文档: composio.dev/toolkits/tisane",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Toggl Automation",
    "description": "Automate Toggl workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "toggl",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Toggl 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Toggl 账户（OAuth/API Key）\n3. 使用 TOGGL 前缀工具\n\n文档: composio.dev/toolkits/toggl",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Token Metrics Automation",
    "description": "Automate Token Metrics workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "token-metrics",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Token Metrics 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Token Metrics 账户（OAuth/API Key）\n3. 使用 TOKEN-METRICS 前缀工具\n\n文档: composio.dev/toolkits/token-metrics",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Tomba Automation",
    "description": "Automate Tomba workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "tomba",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Tomba 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Tomba 账户（OAuth/API Key）\n3. 使用 TOMBA 前缀工具\n\n文档: composio.dev/toolkits/tomba",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Tomtom Automation",
    "description": "Automate Tomtom workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "tomtom",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Tomtom 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Tomtom 账户（OAuth/API Key）\n3. 使用 TOMTOM 前缀工具\n\n文档: composio.dev/toolkits/tomtom",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Toneden Automation",
    "description": "Automate Toneden workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "toneden",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Toneden 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Toneden 账户（OAuth/API Key）\n3. 使用 TONEDEN 前缀工具\n\n文档: composio.dev/toolkits/toneden",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Tpscheck Automation",
    "description": "Automate Tpscheck workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "tpscheck",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Tpscheck 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Tpscheck 账户（OAuth/API Key）\n3. 使用 TPSCHECK 前缀工具\n\n文档: composio.dev/toolkits/tpscheck",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Triggercmd Automation",
    "description": "Automate Triggercmd workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "triggercmd",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Triggercmd 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Triggercmd 账户（OAuth/API Key）\n3. 使用 TRIGGERCMD 前缀工具\n\n文档: composio.dev/toolkits/triggercmd",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Tripadvisor Content Api Automation",
    "description": "Automate Tripadvisor Content Api workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "tripadvisor-content-api",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Tripadvisor Content Api 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Tripadvisor Content Api 账户（OAuth/API Key）\n3. 使用 TRIPADVISOR-CONTENT-API 前缀工具\n\n文档: composio.dev/toolkits/tripadvisor-content-api",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Turbot Pipes Automation",
    "description": "Automate Turbot Pipes workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "turbot-pipes",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Turbot Pipes 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Turbot Pipes 账户（OAuth/API Key）\n3. 使用 TURBOT-PIPES 前缀工具\n\n文档: composio.dev/toolkits/turbot-pipes",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Turso Automation",
    "description": "Automate Turso workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "turso",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Turso 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Turso 账户（OAuth/API Key）\n3. 使用 TURSO 前缀工具\n\n文档: composio.dev/toolkits/turso",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Twelve Data Automation",
    "description": "Automate Twelve Data workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "twelve-data",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Twelve Data 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Twelve Data 账户（OAuth/API Key）\n3. 使用 TWELVE-DATA 前缀工具\n\n文档: composio.dev/toolkits/twelve-data",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Twitch Automation",
    "description": "Automate Twitch workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "twitch",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Twitch 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Twitch 账户（OAuth/API Key）\n3. 使用 TWITCH 前缀工具\n\n文档: composio.dev/toolkits/twitch",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Twocaptcha Automation",
    "description": "Automate Twocaptcha workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "twocaptcha",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Twocaptcha 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Twocaptcha 账户（OAuth/API Key）\n3. 使用 TWOCAPTCHA 前缀工具\n\n文档: composio.dev/toolkits/twocaptcha",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Typefully Automation",
    "description": "Automate Typefully workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "typefully",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Typefully 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Typefully 账户（OAuth/API Key）\n3. 使用 TYPEFULLY 前缀工具\n\n文档: composio.dev/toolkits/typefully",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Typless Automation",
    "description": "Automate Typless workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "typless",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Typless 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Typless 账户（OAuth/API Key）\n3. 使用 TYPLESS 前缀工具\n\n文档: composio.dev/toolkits/typless",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "U301 Automation",
    "description": "Automate U301 workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "u301",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "U301 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 U301 账户（OAuth/API Key）\n3. 使用 U301 前缀工具\n\n文档: composio.dev/toolkits/u301",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Unione Automation",
    "description": "Automate Unione workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "unione",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Unione 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Unione 账户（OAuth/API Key）\n3. 使用 UNIONE 前缀工具\n\n文档: composio.dev/toolkits/unione",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Updown Io Automation",
    "description": "Automate Updown Io workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "updown-io",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Updown Io 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Updown Io 账户（OAuth/API Key）\n3. 使用 UPDOWN-IO 前缀工具\n\n文档: composio.dev/toolkits/updown-io",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Uploadcare Automation",
    "description": "Automate Uploadcare workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "uploadcare",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Uploadcare 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Uploadcare 账户（OAuth/API Key）\n3. 使用 UPLOADCARE 前缀工具\n\n文档: composio.dev/toolkits/uploadcare",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Uptimerobot Automation",
    "description": "Automate Uptimerobot workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "uptimerobot",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Uptimerobot 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Uptimerobot 账户（OAuth/API Key）\n3. 使用 UPTIMEROBOT 前缀工具\n\n文档: composio.dev/toolkits/uptimerobot",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Userlist Automation",
    "description": "Automate Userlist workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "userlist",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Userlist 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Userlist 账户（OAuth/API Key）\n3. 使用 USERLIST 前缀工具\n\n文档: composio.dev/toolkits/userlist",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "V0 Automation",
    "description": "Automate V0 workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "v0",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "V0 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 V0 账户（OAuth/API Key）\n3. 使用 V0 前缀工具\n\n文档: composio.dev/toolkits/v0",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Venly Automation",
    "description": "Automate Venly workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "venly",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Venly 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Venly 账户（OAuth/API Key）\n3. 使用 VENLY 前缀工具\n\n文档: composio.dev/toolkits/venly",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Veo Automation",
    "description": "Automate Veo workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "veo",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Veo 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Veo 账户（OAuth/API Key）\n3. 使用 VEO 前缀工具\n\n文档: composio.dev/toolkits/veo",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Verifiedemail Automation",
    "description": "Automate Verifiedemail workflows via Composio MCP integration.",
    "domain": "email-marketing",
    "tags": [
      "verifiedemail",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Verifiedemail 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Verifiedemail 账户（OAuth/API Key）\n3. 使用 VERIFIEDEMAIL 前缀工具\n\n文档: composio.dev/toolkits/verifiedemail",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Veriphone Automation",
    "description": "Automate Veriphone workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "veriphone",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Veriphone 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Veriphone 账户（OAuth/API Key）\n3. 使用 VERIPHONE 前缀工具\n\n文档: composio.dev/toolkits/veriphone",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Vero Automation",
    "description": "Automate Vero workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "vero",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Vero 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Vero 账户（OAuth/API Key）\n3. 使用 VERO 前缀工具\n\n文档: composio.dev/toolkits/vero",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Vestaboard Automation",
    "description": "Automate Vestaboard workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "vestaboard",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Vestaboard 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Vestaboard 账户（OAuth/API Key）\n3. 使用 VESTABOARD 前缀工具\n\n文档: composio.dev/toolkits/vestaboard",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Virustotal Automation",
    "description": "Automate Virustotal workflows via Composio MCP integration.",
    "domain": "security-identity",
    "tags": [
      "virustotal",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Virustotal 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Virustotal 账户（OAuth/API Key）\n3. 使用 VIRUSTOTAL 前缀工具\n\n文档: composio.dev/toolkits/virustotal",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Visme Automation",
    "description": "Automate Visme workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "visme",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Visme 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Visme 账户（OAuth/API Key）\n3. 使用 VISME 前缀工具\n\n文档: composio.dev/toolkits/visme",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Waboxapp Automation",
    "description": "Automate Waboxapp workflows via Composio MCP integration.",
    "domain": "cloud-storage",
    "tags": [
      "waboxapp",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Waboxapp 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Waboxapp 账户（OAuth/API Key）\n3. 使用 WABOXAPP 前缀工具\n\n文档: composio.dev/toolkits/waboxapp",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Wachete Automation",
    "description": "Automate Wachete workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "wachete",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Wachete 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Wachete 账户（OAuth/API Key）\n3. 使用 WACHETE 前缀工具\n\n文档: composio.dev/toolkits/wachete",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Waiverfile Automation",
    "description": "Automate Waiverfile workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "waiverfile",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Waiverfile 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Waiverfile 账户（OAuth/API Key）\n3. 使用 WAIVERFILE 前缀工具\n\n文档: composio.dev/toolkits/waiverfile",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Wakatime Automation",
    "description": "Automate Wakatime workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "wakatime",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Wakatime 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Wakatime 账户（OAuth/API Key）\n3. 使用 WAKATIME 前缀工具\n\n文档: composio.dev/toolkits/wakatime",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Wati Automation",
    "description": "Automate Wati workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "wati",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Wati 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Wati 账户（OAuth/API Key）\n3. 使用 WATI 前缀工具\n\n文档: composio.dev/toolkits/wati",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Wave Accounting Automation",
    "description": "Automate Wave Accounting workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "wave-accounting",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Wave Accounting 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Wave Accounting 账户（OAuth/API Key）\n3. 使用 WAVE-ACCOUNTING 前缀工具\n\n文档: composio.dev/toolkits/wave-accounting",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Wave_Accounting Automation",
    "description": "Automate Wave_Accounting workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "wave_accounting",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Wave_Accounting 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Wave_Accounting 账户（OAuth/API Key）\n3. 使用 WAVE_ACCOUNTING 前缀工具\n\n文档: composio.dev/toolkits/wave_accounting",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Weathermap Automation",
    "description": "Automate Weathermap workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "weathermap",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Weathermap 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Weathermap 账户（OAuth/API Key）\n3. 使用 WEATHERMAP 前缀工具\n\n文档: composio.dev/toolkits/weathermap",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Webex Automation",
    "description": "Automate Webex workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "webex",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Webex 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Webex 账户（OAuth/API Key）\n3. 使用 WEBEX 前缀工具\n\n文档: composio.dev/toolkits/webex",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Webscraping Ai Automation",
    "description": "Automate Webscraping Ai workflows via Composio MCP integration.",
    "domain": "web-scraping",
    "tags": [
      "webscraping-ai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Webscraping Ai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Webscraping Ai 账户（OAuth/API Key）\n3. 使用 WEBSCRAPING-AI 前缀工具\n\n文档: composio.dev/toolkits/webscraping-ai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Webvizio Automation",
    "description": "Automate Webvizio workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "webvizio",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Webvizio 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Webvizio 账户（OAuth/API Key）\n3. 使用 WEBVIZIO 前缀工具\n\n文档: composio.dev/toolkits/webvizio",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Whautomate Automation",
    "description": "Automate Whautomate workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "whautomate",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Whautomate 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Whautomate 账户（OAuth/API Key）\n3. 使用 WHAUTOMATE 前缀工具\n\n文档: composio.dev/toolkits/whautomate",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Winston Ai Automation",
    "description": "Automate Winston Ai workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "winston-ai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Winston Ai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Winston Ai 账户（OAuth/API Key）\n3. 使用 WINSTON-AI 前缀工具\n\n文档: composio.dev/toolkits/winston-ai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Wit Ai Automation",
    "description": "Automate Wit Ai workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "wit-ai",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Wit Ai 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Wit Ai 账户（OAuth/API Key）\n3. 使用 WIT-AI 前缀工具\n\n文档: composio.dev/toolkits/wit-ai",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Wiz Automation",
    "description": "Automate Wiz workflows via Composio MCP integration.",
    "domain": "security-identity",
    "tags": [
      "wiz",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Wiz 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Wiz 账户（OAuth/API Key）\n3. 使用 WIZ 前缀工具\n\n文档: composio.dev/toolkits/wiz",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Wolfram Alpha Api Automation",
    "description": "Automate Wolfram Alpha Api workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "wolfram-alpha-api",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Wolfram Alpha Api 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Wolfram Alpha Api 账户（OAuth/API Key）\n3. 使用 WOLFRAM-ALPHA-API 前缀工具\n\n文档: composio.dev/toolkits/wolfram-alpha-api",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Woodpecker Co Automation",
    "description": "Automate Woodpecker Co workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "woodpecker-co",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Woodpecker Co 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Woodpecker Co 账户（OAuth/API Key）\n3. 使用 WOODPECKER-CO 前缀工具\n\n文档: composio.dev/toolkits/woodpecker-co",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Workable Automation",
    "description": "Automate Workable workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "workable",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Workable 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Workable 账户（OAuth/API Key）\n3. 使用 WORKABLE 前缀工具\n\n文档: composio.dev/toolkits/workable",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Workday Automation",
    "description": "Automate Workday workflows via Composio MCP integration.",
    "domain": "hr-people",
    "tags": [
      "workday",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Workday 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Workday 账户（OAuth/API Key）\n3. 使用 WORKDAY 前缀工具\n\n文档: composio.dev/toolkits/workday",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Workiom Automation",
    "description": "Automate Workiom workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "workiom",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Workiom 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Workiom 账户（OAuth/API Key）\n3. 使用 WORKIOM 前缀工具\n\n文档: composio.dev/toolkits/workiom",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Worksnaps Automation",
    "description": "Automate Worksnaps workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "worksnaps",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Worksnaps 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Worksnaps 账户（OAuth/API Key）\n3. 使用 WORKSNAPS 前缀工具\n\n文档: composio.dev/toolkits/worksnaps",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Writer Automation",
    "description": "Automate Writer workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "writer",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Writer 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Writer 账户（OAuth/API Key）\n3. 使用 WRITER 前缀工具\n\n文档: composio.dev/toolkits/writer",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Xero Automation",
    "description": "Automate Xero workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "xero",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Xero 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Xero 账户（OAuth/API Key）\n3. 使用 XERO 前缀工具\n\n文档: composio.dev/toolkits/xero",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Y Gy Automation",
    "description": "Automate Y Gy workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "y-gy",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Y Gy 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Y Gy 账户（OAuth/API Key）\n3. 使用 Y-GY 前缀工具\n\n文档: composio.dev/toolkits/y-gy",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Yandex Automation",
    "description": "Automate Yandex workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "yandex",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Yandex 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Yandex 账户（OAuth/API Key）\n3. 使用 YANDEX 前缀工具\n\n文档: composio.dev/toolkits/yandex",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Yelp Automation",
    "description": "Automate Yelp workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "yelp",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Yelp 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Yelp 账户（OAuth/API Key）\n3. 使用 YELP 前缀工具\n\n文档: composio.dev/toolkits/yelp",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Ynab Automation",
    "description": "Automate Ynab workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "ynab",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Ynab 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Ynab 账户（OAuth/API Key）\n3. 使用 YNAB 前缀工具\n\n文档: composio.dev/toolkits/ynab",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Yousearch Automation",
    "description": "Automate Yousearch workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "yousearch",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Yousearch 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Yousearch 账户（OAuth/API Key）\n3. 使用 YOUSEARCH 前缀工具\n\n文档: composio.dev/toolkits/yousearch",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Zenrows Automation",
    "description": "Automate Zenrows workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "zenrows",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Zenrows 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Zenrows 账户（OAuth/API Key）\n3. 使用 ZENROWS 前缀工具\n\n文档: composio.dev/toolkits/zenrows",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Zenserp Automation",
    "description": "Automate Zenserp workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "zenserp",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Zenserp 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Zenserp 账户（OAuth/API Key）\n3. 使用 ZENSERP 前缀工具\n\n文档: composio.dev/toolkits/zenserp",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Zeplin Automation",
    "description": "Automate Zeplin workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "zeplin",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Zeplin 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Zeplin 账户（OAuth/API Key）\n3. 使用 ZEPLIN 前缀工具\n\n文档: composio.dev/toolkits/zeplin",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Zerobounce Automation",
    "description": "Automate Zerobounce workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "zerobounce",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Zerobounce 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Zerobounce 账户（OAuth/API Key）\n3. 使用 ZEROBOUNCE 前缀工具\n\n文档: composio.dev/toolkits/zerobounce",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Zoho Automation",
    "description": "Automate Zoho workflows via Composio MCP integration.",
    "domain": "crm-sales",
    "tags": [
      "zoho",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Zoho 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Zoho 账户（OAuth/API Key）\n3. 使用 ZOHO 前缀工具\n\n文档: composio.dev/toolkits/zoho",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Zoho Bigin Automation",
    "description": "Automate Zoho Bigin workflows via Composio MCP integration.",
    "domain": "crm-sales",
    "tags": [
      "zoho-bigin",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Zoho Bigin 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Zoho Bigin 账户（OAuth/API Key）\n3. 使用 ZOHO-BIGIN 前缀工具\n\n文档: composio.dev/toolkits/zoho-bigin",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Zoho Books Automation",
    "description": "Automate Zoho Books workflows via Composio MCP integration.",
    "domain": "crm-sales",
    "tags": [
      "zoho-books",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Zoho Books 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Zoho Books 账户（OAuth/API Key）\n3. 使用 ZOHO-BOOKS 前缀工具\n\n文档: composio.dev/toolkits/zoho-books",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Zoho Desk Automation",
    "description": "Automate Zoho Desk workflows via Composio MCP integration.",
    "domain": "crm-sales",
    "tags": [
      "zoho-desk",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Zoho Desk 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Zoho Desk 账户（OAuth/API Key）\n3. 使用 ZOHO-DESK 前缀工具\n\n文档: composio.dev/toolkits/zoho-desk",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Zoho Inventory Automation",
    "description": "Automate Zoho Inventory workflows via Composio MCP integration.",
    "domain": "crm-sales",
    "tags": [
      "zoho-inventory",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Zoho Inventory 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Zoho Inventory 账户（OAuth/API Key）\n3. 使用 ZOHO-INVENTORY 前缀工具\n\n文档: composio.dev/toolkits/zoho-inventory",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Zoho Invoice Automation",
    "description": "Automate Zoho Invoice workflows via Composio MCP integration.",
    "domain": "crm-sales",
    "tags": [
      "zoho-invoice",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Zoho Invoice 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Zoho Invoice 账户（OAuth/API Key）\n3. 使用 ZOHO-INVOICE 前缀工具\n\n文档: composio.dev/toolkits/zoho-invoice",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Zoho Mail Automation",
    "description": "Automate Zoho Mail workflows via Composio MCP integration.",
    "domain": "crm-sales",
    "tags": [
      "zoho-mail",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Zoho Mail 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Zoho Mail 账户（OAuth/API Key）\n3. 使用 ZOHO-MAIL 前缀工具\n\n文档: composio.dev/toolkits/zoho-mail",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Zoho_Bigin Automation",
    "description": "Automate Zoho_Bigin workflows via Composio MCP integration.",
    "domain": "crm-sales",
    "tags": [
      "zoho_bigin",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Zoho_Bigin 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Zoho_Bigin 账户（OAuth/API Key）\n3. 使用 ZOHO_BIGIN 前缀工具\n\n文档: composio.dev/toolkits/zoho_bigin",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Zoho_Books Automation",
    "description": "Automate Zoho_Books workflows via Composio MCP integration.",
    "domain": "crm-sales",
    "tags": [
      "zoho_books",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Zoho_Books 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Zoho_Books 账户（OAuth/API Key）\n3. 使用 ZOHO_BOOKS 前缀工具\n\n文档: composio.dev/toolkits/zoho_books",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Zoho_Desk Automation",
    "description": "Automate Zoho_Desk workflows via Composio MCP integration.",
    "domain": "crm-sales",
    "tags": [
      "zoho_desk",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Zoho_Desk 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Zoho_Desk 账户（OAuth/API Key）\n3. 使用 ZOHO_DESK 前缀工具\n\n文档: composio.dev/toolkits/zoho_desk",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Zoho_Inventory Automation",
    "description": "Automate Zoho_Inventory workflows via Composio MCP integration.",
    "domain": "crm-sales",
    "tags": [
      "zoho_inventory",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Zoho_Inventory 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Zoho_Inventory 账户（OAuth/API Key）\n3. 使用 ZOHO_INVENTORY 前缀工具\n\n文档: composio.dev/toolkits/zoho_inventory",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Zoho_Invoice Automation",
    "description": "Automate Zoho_Invoice workflows via Composio MCP integration.",
    "domain": "crm-sales",
    "tags": [
      "zoho_invoice",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Zoho_Invoice 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Zoho_Invoice 账户（OAuth/API Key）\n3. 使用 ZOHO_INVOICE 前缀工具\n\n文档: composio.dev/toolkits/zoho_invoice",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Zoho_Mail Automation",
    "description": "Automate Zoho_Mail workflows via Composio MCP integration.",
    "domain": "crm-sales",
    "tags": [
      "zoho_mail",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Zoho_Mail 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Zoho_Mail 账户（OAuth/API Key）\n3. 使用 ZOHO_MAIL 前缀工具\n\n文档: composio.dev/toolkits/zoho_mail",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Zoominfo Automation",
    "description": "Automate Zoominfo workflows via Composio MCP integration.",
    "domain": "meetings-scheduling",
    "tags": [
      "zoominfo",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Zoominfo 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Zoominfo 账户（OAuth/API Key）\n3. 使用 ZOOMINFO 前缀工具\n\n文档: composio.dev/toolkits/zoominfo",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Zylvie Automation",
    "description": "Automate Zylvie workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "zylvie",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Zylvie 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Zylvie 账户（OAuth/API Key）\n3. 使用 ZYLVIE 前缀工具\n\n文档: composio.dev/toolkits/zylvie",
        "gene_type": "config"
      }
    ]
  },
  {
    "name": "Zyte Api Automation",
    "description": "Automate Zyte Api workflows via Composio MCP integration.",
    "domain": "saas-automation",
    "tags": [
      "zyte-api",
      "composio",
      "automation",
      "saas"
    ],
    "genes": [
      {
        "title": "Zyte Api 集成配置",
        "content": "1. 添加 Composio MCP: https://rube.app/mcp\n2. 连接 Zyte Api 账户（OAuth/API Key）\n3. 使用 ZYTE-API 前缀工具\n\n文档: composio.dev/toolkits/zyte-api",
        "gene_type": "config"
      }
    ]
  }
];

let count = 0;
let skipped = 0;
for (const c of capsules as any[]) {
  try {
    contributeCapsule({ ...c, version: 1, usage_count: 0, rating: 0 });
    count++;
  } catch (e: any) {
    if (e.message?.includes("UNIQUE")) {
      skipped++;
    } else {
      console.error("  ✗", c.name, e.message);
    }
  }
}
console.log(`Imported ${count} Composio SaaS capsules (${skipped} skipped).`);

const db = getDb();
const total = (db.prepare("SELECT COUNT(*) as c FROM capsules").get() as any).c;
const totalGenes = (db.prepare("SELECT COUNT(*) as c FROM genes").get() as any).c;
const domains = db.prepare("SELECT DISTINCT domain FROM capsules").all() as any[];
console.log(`Database total: ${total} capsules, ${totalGenes} genes, ${domains.length} domains`);
