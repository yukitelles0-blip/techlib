import {
  NODE_TYPES,
  NODE_LEVELS,
} from "./index.js";

export const nodes = [

  // =========================================================
  // FUNDAMENTOS
  // =========================================================

  {
    id: "cybersecurity",
    name: "Cybersecurity",
    type: NODE_TYPES.FOUNDATION,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["cybersecurity", "segurança", "segurança-cibernética"],
  },

  {
    id: "information-security",
    name: "Segurança da Informação",
    type: NODE_TYPES.FOUNDATION,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["segurança-da-informação", "information-security"],
  },

  {
    id: "networking",
    name: "Redes de Computadores",
    type: NODE_TYPES.FOUNDATION,
    level: NODE_LEVELS.BEGINNER,
    area: "networking",
    tags: ["redes", "networking", "tcp-ip"],
  },

  {
    id: "linux",
    name: "Linux",
    type: NODE_TYPES.PLATFORM,
    level: NODE_LEVELS.BEGINNER,
    area: "linux",
    tags: ["linux", "sistema-operacional", "terminal"],
  },

  {
    id: "programming",
    name: "Programação",
    type: NODE_TYPES.FOUNDATION,
    level: NODE_LEVELS.BEGINNER,
    area: "programming",
    tags: ["programação", "programming", "lógica"],
  },

  {
    id: "databases",
    name: "Banco de Dados",
    type: NODE_TYPES.FOUNDATION,
    level: NODE_LEVELS.BEGINNER,
    area: "databases",
    tags: ["banco-de-dados", "database", "sql"],
  },

  {
    id: "cloud",
    name: "Cloud Computing",
    type: NODE_TYPES.FOUNDATION,
    level: NODE_LEVELS.BEGINNER,
    area: "cloud",
    tags: ["cloud", "computação-em-nuvem"],
  },

  {
    id: "devops",
    name: "DevOps",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "devops",
    tags: ["devops", "automação", "infraestrutura"],
  },

  {
    id: "data",
    name: "Dados",
    type: NODE_TYPES.FOUNDATION,
    level: NODE_LEVELS.BEGINNER,
    area: "data",
    tags: ["dados", "data", "análise"],
  },

  // =========================================================
  // SEGURANÇA DA INFORMAÇÃO
  // =========================================================

  {
    id: "cia-triad",
    name: "Tríade CIA",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["confidencialidade", "integridade", "disponibilidade", "cia"],
  },

  {
    id: "authentication",
    name: "Autenticação",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["autenticação", "authentication", "identidade"],
  },

  {
    id: "authorization",
    name: "Autorização",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["autorização", "authorization", "acesso"],
  },

  {
    id: "cryptography",
    name: "Criptografia",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["criptografia", "cryptography", "hash"],
  },

  {
    id: "vulnerabilities",
    name: "Vulnerabilidades",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["vulnerabilidades", "vulnerability"],
  },

  {
    id: "threats",
    name: "Ameaças",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["ameaças", "threats", "cyber-threat"],
  },

  {
    id: "risks",
    name: "Riscos",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["riscos", "risk-management"],
  },

  // =========================================================
  // BLUE TEAM
  // =========================================================

  {
    id: "blue-team",
    name: "Blue Team",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["blue-team", "defesa", "defensive-security"],
  },

  {
    id: "logs",
    name: "Logs",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["logs", "logging", "eventos"],
  },

  {
    id: "monitoring",
    name: "Monitoramento",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["monitoramento", "monitoring"],
  },

  {
    id: "siem",
    name: "SIEM",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["siem", "logs", "monitoramento", "soc"],
  },

  {
    id: "detection",
    name: "Detecção",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["detecção", "detection", "soc"],
  },

  {
    id: "incident-response",
    name: "Resposta a Incidentes",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["incident-response", "resposta-a-incidentes"],
  },

  {
    id: "threat-intelligence",
    name: "Threat Intelligence",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.ADVANCED,
    area: "cybersecurity",
    tags: ["threat-intelligence", "inteligência-de-ameaças"],
  },

  {
    id: "endpoint-security",
    name: "Endpoint Security",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["endpoint", "edr", "endpoint-security"],
  },

  {
    id: "network-security",
    name: "Network Security",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["network-security", "segurança-de-redes"],
  },

  {
    id: "forensics",
    name: "Forense Digital",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.ADVANCED,
    area: "cybersecurity",
    tags: ["forensics", "forense-digital", "digital-forensics"],
  },

  // =========================================================
  // RED TEAM
  // =========================================================

  {
    id: "red-team",
    name: "Red Team",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["red-team", "ofensiva", "offensive-security"],
  },

  {
    id: "reconnaissance",
    name: "Reconhecimento",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["reconnaissance", "reconhecimento"],
  },

  {
    id: "osint",
    name: "OSINT",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["osint", "inteligência", "reconhecimento"],
  },

  {
    id: "vulnerability-assessment",
    name: "Avaliação de Vulnerabilidades",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["vulnerability-assessment", "vulnerabilidades"],
  },

  {
    id: "web-security",
    name: "Web Security",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["web-security", "segurança-web", "web"],
  },

  {
    id: "exploitation",
    name: "Exploitation",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.ADVANCED,
    area: "cybersecurity",
    tags: ["exploitation", "exploração"],
  },

  {
    id: "privilege-escalation",
    name: "Privilege Escalation",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.ADVANCED,
    area: "cybersecurity",
    tags: ["privilege-escalation", "privilégios"],
  },

  {
    id: "active-directory",
    name: "Active Directory",
    type: NODE_TYPES.PLATFORM,
    level: NODE_LEVELS.ADVANCED,
    area: "cybersecurity",
    tags: ["active-directory", "ad", "windows"],
  },

  // =========================================================
  // APPSEC / DEVSECOPS
  // =========================================================

  {
    id: "owasp",
    name: "OWASP",
    type: NODE_TYPES.ORGANIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["owasp", "web-security", "segurança"],
  },

  {
    id: "secure-coding",
    name: "Secure Coding",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["secure-coding", "programação-segura"],
  },

  {
    id: "api-security",
    name: "API Security",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["api-security", "apis", "segurança"],
  },

  {
    id: "sast",
    name: "SAST",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["sast", "code-security"],
  },

  {
    id: "dast",
    name: "DAST",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["dast", "web-security"],
  },

  {
    id: "devsecops",
    name: "DevSecOps",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.ADVANCED,
    area: "devops",
    tags: ["devsecops", "devops", "security"],
  },

  // =========================================================
  // GOVERNANÇA
  // =========================================================

  {
    id: "governance",
    name: "Governança",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["governança", "security-governance"],
  },

  {
    id: "compliance",
    name: "Compliance",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["compliance", "conformidade"],
  },

  {
    id: "audit",
    name: "Auditoria",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["auditoria", "audit"],
  },

  {
    id: "iso-27001",
    name: "ISO 27001",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["iso-27001", "iso", "compliance"],
  },

  {
    id: "nist",
    name: "NIST",
    type: NODE_TYPES.ORGANIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["nist", "framework", "cybersecurity"],
  },

  {
    id: "lgpd",
    name: "LGPD",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["lgpd", "privacidade", "dados"],
  },

  // =========================================================
  // REDES
  // =========================================================

  {
    id: "tcp-ip",
    name: "TCP/IP",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "networking",
    tags: ["tcp-ip", "tcp", "ip", "redes"],
  },

  {
    id: "dns",
    name: "DNS",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "networking",
    tags: ["dns", "redes"],
  },

  {
    id: "dhcp",
    name: "DHCP",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "networking",
    tags: ["dhcp", "redes"],
  },

  {
    id: "http",
    name: "HTTP",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "networking",
    tags: ["http", "web", "redes"],
  },

  {
    id: "subnetting",
    name: "Subnetting",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "networking",
    tags: ["subnetting", "sub-redes", "ip"],
  },

  // =========================================================
  // PROGRAMAÇÃO
  // =========================================================

  {
    id: "python",
    name: "Python",
    type: NODE_TYPES.LANGUAGE,
    level: NODE_LEVELS.BEGINNER,
    area: "programming",
    tags: ["python", "programação", "automação"],
  },

  {
    id: "javascript",
    name: "JavaScript",
    type: NODE_TYPES.LANGUAGE,
    level: NODE_LEVELS.BEGINNER,
    area: "programming",
    tags: ["javascript", "js", "web"],
  },

  {
    id: "git",
    name: "Git",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.BEGINNER,
    area: "programming",
    tags: ["git", "version-control"],
  },

  {
    id: "github",
    name: "GitHub",
    type: NODE_TYPES.PLATFORM,
    level: NODE_LEVELS.BEGINNER,
    area: "programming",
    tags: ["github", "git", "version-control"],
  },

  // =========================================================
  // CLOUD
  // =========================================================

  {
    id: "cloud-networking",
    name: "Cloud Networking",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cloud",
    tags: ["cloud-networking", "cloud", "redes"],
  },

  {
    id: "iam",
    name: "IAM",
    type: NODE_TYPES.SERVICE,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cloud",
    tags: ["iam", "identity", "cloud-security"],
  },

  // =========================================================
  // DEVOPS
  // =========================================================

  {
    id: "docker",
    name: "Docker",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "devops",
    tags: ["docker", "containers", "devops"],
  },

  {
    id: "ci-cd",
    name: "CI/CD",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "devops",
    tags: ["ci-cd", "automação", "devops"],
  },

  // =========================================================
  // BANCO DE DADOS
  // =========================================================

  {
    id: "sql",
    name: "SQL",
    type: NODE_TYPES.LANGUAGE,
    level: NODE_LEVELS.BEGINNER,
    area: "databases",
    tags: ["sql", "database", "banco-de-dados"],
  },

  {
    id: "nosql",
    name: "NoSQL",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "databases",
    tags: ["nosql", "database"],
  },

  // =========================================================
  // LINUX
  // =========================================================

  {
    id: "linux-terminal",
    name: "Terminal Linux",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.BEGINNER,
    area: "linux",
    tags: ["linux", "terminal", "bash"],
  },

  {
    id: "bash",
    name: "Bash",
    type: NODE_TYPES.LANGUAGE,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "linux",
    tags: ["bash", "shell", "linux"],
  },

  // =========================================================
  // DADOS
  // =========================================================

  {
    id: "data-analysis",
    name: "Análise de Dados",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "data",
    tags: ["data-analysis", "dados", "análise"],
  },

  {
    id: "data-science",
    name: "Data Science",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.ADVANCED,
    area: "data",
    tags: ["data-science", "dados", "ciência-de-dados"],
  },

  {
    id: "data-engineering",
    name: "Data Engineering",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.ADVANCED,
    area: "data",
    tags: ["data-engineering", "dados", "engenharia-de-dados"],
  },

  {
    id: "big-data",
    name: "Big Data",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.ADVANCED,
    area: "data",
    tags: ["big-data", "dados", "data-engineering"],
  },

];

console.log("TechLib nodes carregados:", nodes.length);
