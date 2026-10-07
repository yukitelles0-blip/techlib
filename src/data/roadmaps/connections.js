export const CONNECTION_TYPES = {
  PREREQUISITE: "prerequisite",
  NEXT: "next",
  RELATED: "related",
  USED_WITH: "used_with",
};

export const connections = [
  // ==========================================
  // FUNDAMENTOS → DESENVOLVIMENTO
  // ==========================================

  {
    from: "logic",
    to: "algorithms",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "algorithms",
    to: "programming",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "git",
    to: "github",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "html",
    to: "css",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "css",
    to: "javascript",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "javascript",
    to: "typescript",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "javascript",
    to: "react",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "javascript",
    to: "vue",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "typescript",
    to: "angular",
    type: CONNECTION_TYPES.NEXT,
  },

  // ==========================================
  // WEB
  // ==========================================

  {
    from: "web",
    to: "html",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "web",
    to: "http",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "http",
    to: "apis",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "json",
    to: "apis",
    type: CONNECTION_TYPES.USED_WITH,
  },

  {
    from: "javascript",
    to: "nodejs",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "nodejs",
    to: "apis",
    type: CONNECTION_TYPES.USED_WITH,
  },

  // ==========================================
  // MOBILE
  // ==========================================

  {
    from: "javascript",
    to: "react-native",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "react-native",
    to: "mobile",
    type: CONNECTION_TYPES.USED_WITH,
  },

  {
    from: "flutter",
    to: "mobile",
    type: CONNECTION_TYPES.USED_WITH,
  },

  {
    from: "kotlin",
    to: "android",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "swift",
    to: "ios",
    type: CONNECTION_TYPES.NEXT,
  },

  // ==========================================
  // DESKTOP
  // ==========================================

  {
    from: "javascript",
    to: "electron",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "nodejs",
    to: "electron",
    type: CONNECTION_TYPES.USED_WITH,
  },

  {
    from: "tauri",
    to: "desktop",
    type: CONNECTION_TYPES.USED_WITH,
  },

  // ==========================================
  // REDES
  // ==========================================

  {
    from: "networking",
    to: "osi",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "osi",
    to: "tcp-ip",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "tcp-ip",
    to: "ipv4",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "tcp-ip",
    to: "ipv6",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "tcp-ip",
    to: "tcp",
    type: CONNECTION_TYPES.USED_WITH,
  },

  {
    from: "tcp-ip",
    to: "udp",
    type: CONNECTION_TYPES.USED_WITH,
  },

  {
    from: "networking",
    to: "ethernet",
    type: CONNECTION_TYPES.USED_WITH,
  },

  {
    from: "networking",
    to: "dns",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "networking",
    to: "dhcp",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "networking",
    to: "switching",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "switching",
    to: "vlan",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "networking",
    to: "routing",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "routing",
    to: "nat",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "networking",
    to: "vpn",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "networking",
    to: "firewall",
    type: CONNECTION_TYPES.NEXT,
  },

  // ==========================================
  // CYBERSECURITY — FUNDAMENTOS
  // ==========================================

  {
    from: "cybersecurity",
    to: "information-security",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "information-security",
    to: "cia-triad",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "information-security",
    to: "authentication",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "authentication",
    to: "authorization",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "information-security",
    to: "cryptography",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "information-security",
    to: "vulnerabilities",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "information-security",
    to: "threats",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "threats",
    to: "risks",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "networking",
    to: "network-security",
    type: CONNECTION_TYPES.USED_WITH,
  },

  {
    from: "linux",
    to: "cybersecurity",
    type: CONNECTION_TYPES.USED_WITH,
  },

  // ==========================================
  // BLUE TEAM
  // ==========================================

  {
    from: "cybersecurity",
    to: "blue-team",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "blue-team",
    to: "logs",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "logs",
    to: "monitoring",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "monitoring",
    to: "siem",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "siem",
    to: "detection",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "detection",
    to: "incident-response",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "incident-response",
    to: "threat-intelligence",
    type: CONNECTION_TYPES.RELATED,
  },

  {
    from: "blue-team",
    to: "endpoint-security",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "blue-team",
    to: "network-security",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "incident-response",
    to: "forensics",
    type: CONNECTION_TYPES.NEXT,
  },

  // ==========================================
  // RED TEAM
  // ==========================================

  {
    from: "cybersecurity",
    to: "red-team",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "red-team",
    to: "reconnaissance",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "reconnaissance",
    to: "osint",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "reconnaissance",
    to: "vulnerability-assessment",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "vulnerability-assessment",
    to: "web-security",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "web-security",
    to: "exploitation",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "exploitation",
    to: "privilege-escalation",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "privilege-escalation",
    to: "active-directory",
    type: CONNECTION_TYPES.RELATED,
  },

  // ==========================================
  // APPSEC / GRC
  // ==========================================

  {
    from: "web-security",
    to: "owasp",
    type: CONNECTION_TYPES.USED_WITH,
  },

  {
    from: "owasp",
    to: "secure-coding",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "secure-coding",
    to: "api-security",
    type: CONNECTION_TYPES.RELATED,
  },

  {
    from: "secure-coding",
    to: "sast",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "sast",
    to: "dast",
    type: CONNECTION_TYPES.RELATED,
  },

  {
    from: "dast",
    to: "devsecops",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "cybersecurity",
    to: "governance",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "governance",
    to: "compliance",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "compliance",
    to: "audit",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "compliance",
    to: "iso-27001",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "compliance",
    to: "nist",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "compliance",
    to: "lgpd",
    type: CONNECTION_TYPES.NEXT,
  },

  // ==========================================
  // CLOUD
  // ==========================================

  {
    from: "cloud-computing",
    to: "iaas",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "cloud-computing",
    to: "paas",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "cloud-computing",
    to: "saas",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "cloud-computing",
    to: "virtualization",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "cloud-computing",
    to: "cloud-storage",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "cloud-computing",
    to: "cloud-networking",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "cloud-computing",
    to: "iam",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "cloud-computing",
    to: "aws",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "cloud-computing",
    to: "azure",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "cloud-computing",
    to: "gcp",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "aws",
    to: "ec2",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "aws",
    to: "s3",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "aws",
    to: "vpc",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "aws",
    to: "rds",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "aws",
    to: "lambda",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "aws",
    to: "cloudwatch",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "iam",
    to: "authentication",
    type: CONNECTION_TYPES.RELATED,
  },

  {
    from: "cloud-networking",
    to: "networking",
    type: CONNECTION_TYPES.USED_WITH,
  },

  {
    from: "cloud-networking",
    to: "network-security",
    type: CONNECTION_TYPES.USED_WITH,
  },

  // ==========================================
  // DEVOPS
  // ==========================================

  {
    from: "devops",
    to: "linux",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "devops",
    to: "git",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "devops",
    to: "shell",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "shell",
    to: "docker",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "docker",
    to: "docker-compose",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "docker",
    to: "ci-cd",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "ci-cd",
    to: "github-actions",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "ci-cd",
    to: "gitlab-ci",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "ci-cd",
    to: "jenkins",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "ci-cd",
    to: "terraform",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "terraform",
    to: "kubernetes",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "docker",
    to: "cloud-computing",
    type: CONNECTION_TYPES.USED_WITH,
  },

  {
    from: "kubernetes",
    to: "cloud-computing",
    type: CONNECTION_TYPES.USED_WITH,
  },

  {
    from: "devsecops",
    to: "devops",
    type: CONNECTION_TYPES.USED_WITH,
  },

  // ==========================================
  // PROGRAMAÇÃO
  // ==========================================

  {
    from: "programming",
    to: "logic",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "logic",
    to: "variables",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "variables",
    to: "conditionals",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "conditionals",
    to: "loops",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "loops",
    to: "functions",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "functions",
    to: "data-structures",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "programming",
    to: "python",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "programming",
    to: "javascript",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "programming",
    to: "java",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "programming",
    to: "csharp",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "programming",
    to: "cpp",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "programming",
    to: "go",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "python",
    to: "cybersecurity",
    type: CONNECTION_TYPES.USED_WITH,
  },

  {
    from: "python",
    to: "data",
    type: CONNECTION_TYPES.USED_WITH,
  },

  // ==========================================
  // BANCO DE DADOS
  // ==========================================

  {
    from: "databases",
    to: "sql",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "sql",
    to: "select",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "select",
    to: "joins",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "joins",
    to: "indexes",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "indexes",
    to: "transactions",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "sql",
    to: "postgresql",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "sql",
    to: "mysql",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "sql",
    to: "sql-server",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "databases",
    to: "mongodb",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "databases",
    to: "redis",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "databases",
    to: "apis",
    type: CONNECTION_TYPES.USED_WITH,
  },

  // ==========================================
  // LINUX
  // ==========================================

  {
    from: "linux",
    to: "terminal",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "terminal",
    to: "files",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "files",
    to: "permissions",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "permissions",
    to: "users",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "users",
    to: "processes",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "processes",
    to: "packages",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "linux",
    to: "ssh",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "linux",
    to: "systemd",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "terminal",
    to: "bash",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "bash",
    to: "linux-security",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "linux",
    to: "devops",
    type: CONNECTION_TYPES.USED_WITH,
  },

  {
    from: "linux",
    to: "cloud-computing",
    type: CONNECTION_TYPES.USED_WITH,
  },

  // ==========================================
  // DADOS
  // ==========================================

  {
    from: "data",
    to: "statistics",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "data",
    to: "sql",
    type: CONNECTION_TYPES.USED_WITH,
  },

  {
    from: "data",
    to: "python",
    type: CONNECTION_TYPES.USED_WITH,
  },

  {
    from: "statistics",
    to: "data-visualization",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "data",
    to: "data-analysis",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "data",
    to: "data-science",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "data",
    to: "data-engineering",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "data-analysis",
    to: "excel",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "data-analysis",
    to: "pandas",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "data-analysis",
    to: "power-bi",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "data-science",
    to: "numpy",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "data-science",
    to: "machine-learning",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "data-engineering",
    to: "etl",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "etl",
    to: "data-pipelines",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "data-pipelines",
    to: "data-warehouse",
    type: CONNECTION_TYPES.NEXT,
  },

  {
    from: "data-engineering",
    to: "big-data",
    type: CONNECTION_TYPES.NEXT,
  },
];
