export const paths = [
  // ==========================================
  // DESENVOLVIMENTO
  // ==========================================

  {
    id: "development-foundations",
    roadmapId: "development",
    name: "Fundamentos",
    description:
      "Base necessária para começar a desenvolver aplicações e sistemas.",
    nodes: [
      "logic",
      "algorithms",
      "git",
      "github",
      "terminal",
      "http",
      "json",
      "apis",
    ],
  },

  {
    id: "development-web",
    roadmapId: "development",
    name: "Web",
    description:
      "Desenvolvimento de aplicações para a Web.",
    nodes: [
      "web",
      "html",
      "css",
      "javascript",
      "typescript",
      "react",
      "vue",
      "angular",
    ],
  },

  {
    id: "development-mobile",
    roadmapId: "development",
    name: "Mobile",
    description:
      "Desenvolvimento de aplicações para dispositivos móveis.",
    nodes: [
      "mobile",
      "javascript",
      "react-native",
      "flutter",
      "kotlin",
      "swift",
      "android",
      "ios",
    ],
  },

  {
    id: "development-desktop",
    roadmapId: "development",
    name: "Desktop",
    description:
      "Desenvolvimento de aplicações para computadores.",
    nodes: [
      "desktop",
      "javascript",
      "nodejs",
      "electron",
      "tauri",
    ],
  },

  {
    id: "development-backend",
    roadmapId: "development",
    name: "Backend",
    description:
      "Desenvolvimento da lógica, APIs e serviços executados no servidor.",
    nodes: [
      "nodejs",
      "apis",
      "authentication",
      "databases",
      "architecture",
    ],
  },

  // ==========================================
  // CYBERSECURITY
  // ==========================================

  {
    id: "cybersecurity-foundations",
    roadmapId: "cybersecurity",
    name: "Fundamentos",
    description:
      "Base essencial para compreender segurança da informação e cybersecurity.",
    nodes: [
      "cybersecurity",
      "information-security",
      "cia-triad",
      "authentication",
      "authorization",
      "cryptography",
      "vulnerabilities",
      "threats",
      "risks",
    ],
  },

  {
    id: "cybersecurity-blue-team",
    roadmapId: "cybersecurity",
    name: "Blue Team",
    description:
      "Defesa, monitoramento, detecção e resposta a incidentes.",
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
    roadmapId: "cybersecurity",
    name: "Red Team",
    description:
      "Segurança ofensiva, reconhecimento e avaliação de vulnerabilidades.",
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
    roadmapId: "cybersecurity",
    name: "AppSec",
    description:
      "Segurança aplicada ao desenvolvimento de aplicações e APIs.",
    nodes: [
      "owasp",
      "secure-coding",
      "web-security",
      "api-security",
      "sast",
      "dast",
      "devsecops",
    ],
  },

  {
    id: "cybersecurity-grc",
    roadmapId: "cybersecurity",
    name: "GRC",
    description:
      "Governança, riscos, compliance e frameworks de segurança.",
    nodes: [
      "governance",
      "risks",
      "compliance",
      "audit",
      "iso-27001",
      "nist",
      "lgpd",
    ],
  },

  // ==========================================
  // REDES
  // ==========================================

  {
    id: "networking-foundations",
    roadmapId: "networking",
    name: "Fundamentos",
    description:
      "Fundamentos dos protocolos e conceitos de redes.",
    nodes: [
      "networking",
      "osi",
      "tcp-ip",
      "ethernet",
      "ipv4",
      "ipv6",
      "tcp",
      "udp",
      "dns",
      "dhcp",
      "http",
    ],
  },

  {
    id: "networking-infrastructure",
    roadmapId: "networking",
    name: "Infraestrutura",
    description:
      "Tecnologias utilizadas na construção e administração de redes.",
    nodes: [
      "switching",
      "routing",
      "vlan",
      "nat",
      "vpn",
      "firewall",
    ],
  },

  {
    id: "networking-specializations",
    roadmapId: "networking",
    name: "Especializações",
    description:
      "Caminhos para aprofundamento em redes.",
    nodes: [
      "network-security",
      "cloud-networking",
    ],
  },

  // ==========================================
  // CLOUD
  // ==========================================

  {
    id: "cloud-foundations",
    roadmapId: "cloud",
    name: "Fundamentos",
    description:
      "Conceitos essenciais de computação em nuvem.",
    nodes: [
      "cloud-computing",
      "iaas",
      "paas",
      "saas",
      "virtualization",
      "cloud-storage",
      "cloud-networking",
      "iam",
    ],
  },

  {
    id: "cloud-platforms",
    roadmapId: "cloud",
    name: "Plataformas",
    description:
      "Principais plataformas de computação em nuvem.",
    nodes: [
      "aws",
      "azure",
      "gcp",
    ],
  },

  {
    id: "cloud-aws",
    roadmapId: "cloud",
    name: "AWS",
    description:
      "Principais serviços da Amazon Web Services.",
    nodes: [
      "aws",
      "ec2",
      "s3",
      "vpc",
      "rds",
      "lambda",
      "cloudwatch",
    ],
  },

  {
    id: "cloud-security",
    roadmapId: "cloud",
    name: "Cloud Security",
    description:
      "Segurança aplicada a ambientes de nuvem.",
    nodes: [
      "iam",
      "cloud-networking",
      "network-security",
    ],
  },

  // ==========================================
  // DEVOPS
  // ==========================================

  {
    id: "devops-foundations",
    roadmapId: "devops",
    name: "Fundamentos",
    description:
      "Base necessária para compreender práticas DevOps.",
    nodes: [
      "devops",
      "linux",
      "git",
      "networking",
      "shell",
    ],
  },

  {
    id: "devops-containers",
    roadmapId: "devops",
    name: "Containers",
    description:
      "Containers e ferramentas para empacotamento de aplicações.",
    nodes: [
      "docker",
      "docker-compose",
    ],
  },

  {
    id: "devops-ci-cd",
    roadmapId: "devops",
    name: "CI/CD",
    description:
      "Integração contínua e entrega contínua.",
    nodes: [
      "ci-cd",
      "github-actions",
      "gitlab-ci",
      "jenkins",
    ],
  },

  {
    id: "devops-iac",
    roadmapId: "devops",
    name: "Infrastructure as Code",
    description:
      "Automação da infraestrutura através de código.",
    nodes: [
      "terraform",
    ],
  },

  {
    id: "devops-orchestration",
    roadmapId: "devops",
    name: "Orquestração",
    description:
      "Gerenciamento e orquestração de containers.",
    nodes: [
      "kubernetes",
    ],
  },

  // ==========================================
  // PROGRAMAÇÃO
  // ==========================================

  {
    id: "programming-foundations",
    roadmapId: "programming",
    name: "Fundamentos",
    description:
      "Conceitos fundamentais presentes em diferentes linguagens.",
    nodes: [
      "programming",
      "logic",
      "algorithms",
      "variables",
      "conditionals",
      "loops",
      "functions",
      "data-structures",
    ],
  },

  {
    id: "programming-languages",
    roadmapId: "programming",
    name: "Linguagens",
    description:
      "Principais linguagens disponíveis no roadmap.",
    nodes: [
      "python",
      "javascript",
      "java",
      "csharp",
      "cpp",
      "go",
    ],
  },

  // ==========================================
  // BANCO DE DADOS
  // ==========================================

  {
    id: "databases-foundations",
    roadmapId: "databases",
    name: "Fundamentos",
    description:
      "Fundamentos de bancos de dados e SQL.",
    nodes: [
      "databases",
      "sql",
      "select",
      "joins",
      "indexes",
      "transactions",
    ],
  },

  {
    id: "databases-sql",
    roadmapId: "databases",
    name: "SQL",
    description:
      "Principais tecnologias relacionais e SQL.",
    nodes: [
      "sql",
      "postgresql",
      "mysql",
      "sql-server",
    ],
  },

  {
    id: "databases-nosql",
    roadmapId: "databases",
    name: "NoSQL",
    description:
      "Bancos de dados não relacionais.",
    nodes: [
      "mongodb",
      "redis",
    ],
  },

  // ==========================================
  // LINUX
  // ==========================================

  {
    id: "linux-foundations",
    roadmapId: "linux",
    name: "Fundamentos",
    description:
      "Base para utilização do sistema Linux.",
    nodes: [
      "linux",
      "terminal",
      "files",
      "permissions",
      "users",
      "processes",
      "packages",
    ],
  },

  {
    id: "linux-administration",
    roadmapId: "linux",
    name: "Administração",
    description:
      "Administração e gerenciamento de sistemas Linux.",
    nodes: [
      "ssh",
      "systemd",
      "processes",
      "permissions",
      "users",
    ],
  },

  {
    id: "linux-shell",
    roadmapId: "linux",
    name: "Shell",
    description:
      "Terminal, Bash e automação através de scripts.",
    nodes: [
      "terminal",
      "bash",
      "shell",
    ],
  },

  {
    id: "linux-specializations",
    roadmapId: "linux",
    name: "Especializações",
    description:
      "Caminhos de aprofundamento em Linux.",
    nodes: [
      "linux-security",
      "devops",
      "ssh",
    ],
  },

  // ==========================================
  // DADOS
  // ==========================================

  {
    id: "data-foundations",
    roadmapId: "data",
    name: "Fundamentos",
    description:
      "Base para trabalhar com dados.",
    nodes: [
      "data",
      "statistics",
      "sql",
      "python",
      "data-visualization",
    ],
  },

  {
    id: "data-analysis",
    roadmapId: "data",
    name: "Data Analysis",
    description:
      "Análise, tratamento e visualização de dados.",
    nodes: [
      "data-analysis",
      "excel",
      "sql",
      "python",
      "pandas",
      "power-bi",
      "data-visualization",
    ],
  },

  {
    id: "data-science",
    roadmapId: "data",
    name: "Data Science",
    description:
      "Ciência de dados, estatística e machine learning.",
    nodes: [
      "data-science",
      "python",
      "statistics",
      "pandas",
      "numpy",
      "machine-learning",
    ],
  },

  {
    id: "data-engineering",
    roadmapId: "data",
    name: "Data Engineering",
    description:
      "Engenharia, pipelines e infraestrutura de dados.",
    nodes: [
      "data-engineering",
      "sql",
      "python",
      "etl",
      "data-pipelines",
      "cloud-computing",
      "data-warehouse",
      "big-data",
    ],
  },
];
