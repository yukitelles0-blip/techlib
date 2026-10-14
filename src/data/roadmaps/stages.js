// =========================================================
// ETAPAS DOS ROADMAPS
// =========================================================
//
// Este arquivo organiza os conhecimentos (nodes.js) em etapas de
// aprendizagem. Ele NÃO substitui nodes.js, paths.js nem
// connections.js: apenas define como cada Roadmap é apresentado.
//
// Formato de cada Roadmap:
//
//   roadmapId: {
//     aliases: { "id-duplicado": "id-que-fica-visivel" },   // opcional
//     stages: [
//       {
//         id: "identificador-unico",
//         title: "Título da etapa",
//         icon: "NomeDoIcone",            // chave de roadmapIcons.js
//         color: "blue",                  // blue | orange | violet | pink | green | cyan
//         kind: "sequence" | "branch",    // padrão: "sequence"
//         nodes: ["id-do-conhecimento", ...],
//       },
//     ],
//   }
//
// - "sequence": etapa numerada (01, 02, 03), com indicação de progressão.
// - "branch": especialização em paralelo (A, B, C), sem ordem entre si.
//
// Um conhecimento aparece uma única vez por Roadmap (a primeira etapa
// em que for listado). Conhecimentos dos paths que não estiverem aqui
// caem automaticamente na etapa "Outros conhecimentos".
//
// Para cadastrar um novo Roadmap: adicione os paths normalmente. Sem
// entrada neste arquivo, a interface gera as etapas a partir dos paths.
// =========================================================

export const roadmapStages = {
  // -------------------------------------------------------
  // CYBERSECURITY
  // -------------------------------------------------------
  cybersecurity: {
    stages: [
      {
        id: "cybersecurity-base",
        title: "Base técnica",
        icon: "Monitor",
        color: "blue",
        kind: "sequence",
        nodes: [
          "networking",
          "tcp-ip",
          "dns",
          "linux",
          "linux-terminal",
          "windows-basics",
        ],
      },
      {
        id: "cybersecurity-programming",
        title: "Programação e automação",
        icon: "Code",
        color: "orange",
        kind: "sequence",
        nodes: ["python", "bash", "regex", "git"],
      },
      {
        id: "cybersecurity-foundations",
        title: "Fundamentos de segurança",
        icon: "Shield",
        color: "violet",
        kind: "sequence",
        nodes: [
          "information-security",
          "cybersecurity",
          "cia-triad",
          "authentication",
          "authorization",
          "cryptography",
          "threats",
          "vulnerabilities",
          "risks",
        ],
      },
      {
        id: "cybersecurity-blue-team",
        title: "Blue Team",
        icon: "ShieldCheck",
        color: "pink",
        kind: "branch",
        nodes: [
          "blue-team",
          "logs",
          "monitoring",
          "siem",
          "detection",
          "incident-response",
          "threat-intelligence",
          "endpoint-security",
          "network-security",
          "forensics",
        ],
      },
      {
        id: "cybersecurity-red-team",
        title: "Red Team",
        icon: "Swords",
        color: "orange",
        kind: "branch",
        nodes: [
          "red-team",
          "reconnaissance",
          "osint",
          "vulnerability-assessment",
          "web-security",
          "exploitation",
          "privilege-escalation",
          "active-directory",
        ],
      },
      {
        id: "cybersecurity-appsec",
        title: "AppSec e DevSecOps",
        icon: "Lock",
        color: "cyan",
        kind: "branch",
        nodes: [
          "secure-coding",
          "owasp",
          "api-security",
          "sast",
          "dast",
          "devsecops",
        ],
      },
      {
        id: "cybersecurity-governance",
        title: "Governança e Compliance",
        icon: "Scale",
        color: "green",
        kind: "branch",
        nodes: ["governance", "compliance", "audit", "iso-27001", "nist", "lgpd"],
      },
    ],
  },

  // -------------------------------------------------------
  // DESENVOLVIMENTO
  // -------------------------------------------------------
  development: {
    stages: [
      {
        id: "development-foundations",
        title: "Fundamentos",
        icon: "BookOpen",
        color: "blue",
        nodes: [
          "logic-programming",
          "algorithms",
          "data-structures",
          "git",
          "github",
        ],
      },
      {
        id: "development-web",
        title: "Web básico",
        icon: "Globe",
        color: "orange",
        nodes: [
          "html",
          "css",
          "responsive-design",
          "web-forms",
          "javascript",
          "dom",
          "web-accessibility",
        ],
      },
      {
        id: "development-frontend",
        title: "Front-end moderno",
        icon: "Code",
        color: "violet",
        nodes: [
          "typescript",
          "react",
          "vite",
          "state-management",
          "web-performance",
          "frontend-testing",
        ],
      },
      {
        id: "development-backend",
        title: "Back-end",
        icon: "Server",
        color: "pink",
        nodes: [
          "nodejs",
          "apis",
          "json",
          "rest-api",
          "backend-testing",
          "application-security",
        ],
      },
      {
        id: "development-engineering",
        title: "Engenharia e entrega",
        icon: "Workflow",
        color: "green",
        nodes: [
          "clean-code",
          "solid",
          "design-patterns",
          "software-architecture",
          "software-testing",
          "code-review",
          "documentation",
          "deployment",
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // REDES
  // -------------------------------------------------------
  networking: {
    // "osi-model" e "network-osi-model" são o mesmo assunto (Modelo OSI).
    // Apenas um cartão fica visível; as conexões dos dois são reunidas.
    aliases: { "osi-model": "network-osi-model" },
    stages: [
      {
        id: "networking-foundations",
        title: "Fundamentos",
        icon: "Network",
        color: "blue",
        nodes: [
          "networking",
          "network-osi-model",
          "ethernet",
          "network-mac-address",
          "ipv4-ipv6",
          "tcp-ip",
          "ports-protocols",
        ],
      },
      {
        id: "networking-addressing",
        title: "Camada 2 e endereçamento",
        icon: "Cpu",
        color: "orange",
        nodes: ["subnetting", "network-arp", "switching", "vlan"],
      },
      {
        id: "networking-services",
        title: "Serviços e protocolos",
        icon: "Globe",
        color: "violet",
        nodes: ["icmp", "dns", "dhcp", "http", "wireless-networks"],
      },
      {
        id: "networking-routing",
        title: "Roteamento",
        icon: "GitBranch",
        color: "pink",
        nodes: [
          "routing",
          "network-routing-table",
          "routing-protocols",
          "nat",
        ],
      },
      {
        id: "networking-security",
        title: "Segurança e infraestrutura",
        icon: "Shield",
        color: "green",
        nodes: [
          "network-firewall",
          "vpn",
          "network-proxy",
          "network-load-balancing",
          "network-qos",
          "network-security",
        ],
      },
      {
        id: "networking-diagnostics",
        title: "Diagnóstico",
        icon: "Search",
        color: "cyan",
        nodes: [
          "traceroute",
          "network-troubleshooting",
          "network-dhcp-dns-troubleshooting",
          "wireshark",
          "network-packet-capture",
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // CLOUD
  // -------------------------------------------------------
  cloud: {
    stages: [
      {
        id: "cloud-foundations",
        title: "Fundamentos",
        icon: "Cloud",
        color: "blue",
        nodes: [
          "cloud",
          "cloud-fundamentals",
          "cloud-iaas-paas-saas",
          "cloud-shared-responsibility",
          "virtualization",
        ],
      },
      {
        id: "cloud-infrastructure",
        title: "Infraestrutura",
        icon: "Server",
        color: "orange",
        nodes: [
          "cloud-virtual-machines",
          "cloud-storage",
          "cloud-object-storage",
          "cloud-containers",
        ],
      },
      {
        id: "cloud-networking",
        title: "Redes em Cloud",
        icon: "Network",
        color: "violet",
        nodes: ["networking", "tcp-ip", "dns", "cloud-networking", "cloud-vpc"],
      },
      {
        id: "cloud-identity",
        title: "Identidade e segurança",
        icon: "Lock",
        color: "pink",
        nodes: [
          "iam",
          "cloud-iam",
          "cloud-security-groups",
          "network-security",
        ],
      },
      {
        id: "cloud-operations",
        title: "Operação e resiliência",
        icon: "Activity",
        color: "green",
        nodes: [
          "cloud-monitoring",
          "cloud-cost-management",
          "cloud-backup-recovery",
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // DEVOPS
  // -------------------------------------------------------
  devops: {
    stages: [
      {
        id: "devops-foundations",
        title: "Fundamentos",
        icon: "Workflow",
        color: "blue",
        nodes: ["devops", "git", "github", "linux", "virtualization"],
      },
      {
        id: "devops-containers",
        title: "Containers",
        icon: "Container",
        color: "orange",
        nodes: ["docker", "containers"],
      },
      {
        id: "devops-cicd",
        title: "CI/CD e automação",
        icon: "Rocket",
        color: "violet",
        nodes: ["ci-cd", "infrastructure-as-code"],
      },
      {
        id: "devops-security",
        title: "Observabilidade e segurança",
        icon: "Shield",
        color: "pink",
        nodes: ["observability", "devsecops", "secure-coding"],
      },
    ],
  },

  // -------------------------------------------------------
  // PROGRAMAÇÃO
  // -------------------------------------------------------
  programming: {
    stages: [
      {
        id: "programming-foundations",
        title: "Fundamentos",
        icon: "BookOpen",
        color: "blue",
        nodes: ["programming", "logic-programming", "algorithms", "debugging"],
      },
      {
        id: "programming-python",
        title: "Python",
        icon: "Code",
        color: "orange",
        nodes: [
          "python",
          "python-data-types",
          "python-control-flow",
          "python-functions",
          "python-files",
          "python-requests",
          "python-testing",
          "regex",
        ],
      },
      {
        id: "programming-versioning",
        title: "Versionamento",
        icon: "GitBranch",
        color: "violet",
        nodes: ["git", "github", "git-branching"],
      },
      {
        id: "programming-javascript",
        title: "JavaScript",
        icon: "Globe",
        color: "pink",
        nodes: ["javascript"],
      },
    ],
  },

  // -------------------------------------------------------
  // BANCO DE DADOS
  // -------------------------------------------------------
  databases: {
    stages: [
      {
        id: "databases-foundations",
        title: "Fundamentos",
        icon: "Database",
        color: "blue",
        nodes: [
          "databases",
          "relational-databases",
          "database-modeling",
          "database-relational-model",
          "database-primary-foreign-keys",
        ],
      },
      {
        id: "databases-sql",
        title: "SQL",
        icon: "Code",
        color: "orange",
        nodes: [
          "sql",
          "database-joins",
          "database-aggregations",
          "database-normalization",
          "database-indexes",
        ],
      },
      {
        id: "databases-systems",
        title: "Transações, SGBDs e NoSQL",
        icon: "Boxes",
        color: "violet",
        nodes: [
          "database-transactions",
          "database-postgresql",
          "database-mysql",
          "nosql",
        ],
      },
      {
        id: "databases-security",
        title: "Segurança e recuperação",
        icon: "Lock",
        color: "pink",
        nodes: ["database-access-control", "database-backups"],
      },
    ],
  },

  // -------------------------------------------------------
  // LINUX
  // -------------------------------------------------------
  linux: {
    stages: [
      {
        id: "linux-foundations",
        title: "Fundamentos",
        icon: "Terminal",
        color: "blue",
        nodes: [
          "linux",
          "linux-terminal",
          "linux-filesystem",
          "linux-permissions",
          "linux-users-groups",
        ],
      },
      {
        id: "linux-administration",
        title: "Administração",
        icon: "Server",
        color: "orange",
        nodes: [
          "linux-package-management",
          "linux-processes",
          "linux-systemd-services",
          "linux-ssh",
          "linux-network-tools",
        ],
      },
      {
        id: "linux-automation",
        title: "Automação",
        icon: "Cog",
        color: "violet",
        nodes: ["bash", "bash-scripting", "linux-cron"],
      },
      {
        id: "linux-monitoring",
        title: "Monitoramento e logs",
        icon: "Activity",
        color: "pink",
        nodes: ["linux-logs-journalctl", "linux-process-monitoring"],
      },
      {
        id: "linux-security",
        title: "Segurança",
        icon: "Shield",
        color: "green",
        nodes: ["linux-hardening", "cybersecurity", "logs"],
      },
    ],
  },

  // -------------------------------------------------------
  // DADOS
  // -------------------------------------------------------
  data: {
    stages: [
      {
        id: "data-foundations",
        title: "Fundamentos",
        icon: "BookOpen",
        color: "blue",
        nodes: ["data", "data-analysis"],
      },
      {
        id: "data-analysis-visualization",
        title: "Análise e visualização",
        icon: "TrendingUp",
        color: "orange",
        nodes: ["databases", "sql", "data-visualization"],
      },
      {
        id: "data-science",
        title: "Data Science",
        icon: "Lightbulb",
        color: "violet",
        nodes: ["data-science", "python"],
      },
      {
        id: "data-engineering",
        title: "Engenharia de dados",
        icon: "Server",
        color: "pink",
        nodes: ["data-engineering", "big-data"],
      },
    ],
  },
};
