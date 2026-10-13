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

  // =========================================================
  // DESENVOLVIMENTO
  // =========================================================

  // ---------------------------------------------------------
  // FUNDAMENTOS
  // ---------------------------------------------------------

  {
    id: "logic-programming",
    name: "Lógica de Programação",
    type: NODE_TYPES.FOUNDATION,
    level: NODE_LEVELS.BEGINNER,
    area: "development",
    tags: ["development", "programming", "logic"],
  },

  {
    id: "algorithms",
    name: "Algoritmos",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "development",
    tags: ["development", "programming", "algorithms"],
  },

  {
    id: "data-structures",
    name: "Estruturas de Dados",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["development", "programming", "data-structures"],
  },

  {
    id: "apis",
    name: "APIs",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["development", "web", "api"],
  },

  {
    id: "json",
    name: "JSON",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "development",
    tags: ["development", "web", "data"],
  },

  // ---------------------------------------------------------
  // FRONT-END
  // ---------------------------------------------------------

  {
    id: "html",
    name: "HTML",
    type: NODE_TYPES.TECHNOLOGY,
    level: NODE_LEVELS.BEGINNER,
    area: "development",
    tags: ["development", "frontend", "web"],
  },

  {
    id: "css",
    name: "CSS",
    type: NODE_TYPES.TECHNOLOGY,
    level: NODE_LEVELS.BEGINNER,
    area: "development",
    tags: ["development", "frontend", "web"],
  },

  {
    id: "dom",
    name: "DOM",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["development", "frontend", "web", "javascript"],
  },

  {
    id: "typescript",
    name: "TypeScript",
    type: NODE_TYPES.LANGUAGE,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["development", "frontend", "programming"],
  },

  {
    id: "react",
    name: "React",
    type: NODE_TYPES.FRAMEWORK,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["development", "frontend", "javascript"],
  },

  {
    id: "vite",
    name: "Vite",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["development", "frontend", "javascript"],
  },

  {
    id: "web-accessibility",
    name: "Acessibilidade Web",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["development", "frontend", "web"],
  },

  {
    id: "frontend-testing",
    name: "Testes Front-end",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.ADVANCED,
    area: "development",
    tags: ["development", "frontend", "testing"],
  },

  // ---------------------------------------------------------
  // BACK-END
  // ---------------------------------------------------------

  {
    id: "nodejs",
    name: "Node.js",
    type: NODE_TYPES.PLATFORM,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["development", "backend", "javascript"],
  },

  {
    id: "rest-api",
    name: "APIs REST",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["development", "backend", "api", "web"],
  },

  {
    id: "backend-testing",
    name: "Testes Back-end",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.ADVANCED,
    area: "development",
    tags: ["development", "backend", "testing"],
  },

  {
    id: "application-security",
    name: "Segurança de Aplicações",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.ADVANCED,
    area: "development",
    tags: ["development", "backend", "security", "appsec"],
  },

  // ---------------------------------------------------------
  // ENGENHARIA DE SOFTWARE
  // ---------------------------------------------------------

  {
    id: "clean-code",
    name: "Clean Code",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["development", "software-engineering"],
  },

  {
    id: "solid",
    name: "SOLID",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["development", "software-engineering", "architecture"],
  },

  {
    id: "design-patterns",
    name: "Design Patterns",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.ADVANCED,
    area: "development",
    tags: ["development", "software-engineering", "architecture"],
  },

  {
    id: "software-architecture",
    name: "Arquitetura de Software",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.ADVANCED,
    area: "development",
    tags: ["development", "software-engineering", "architecture"],
  },

  {
    id: "software-testing",
    name: "Testes de Software",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["development", "software-engineering", "testing"],
  },

  {
    id: "code-review",
    name: "Code Review",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["development", "software-engineering", "git"],
  },

  {
    id: "documentation",
    name: "Documentação",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "development",
    tags: ["development", "software-engineering"],
  },

  // =========================================================
  // EXPANSAO: REDES DE COMPUTADORES
  // =========================================================

  {
    id: "osi-model",
    name: "Modelo OSI",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "networking",
    tags: ["osi", "modelo-osi", "networking"],
  },
  {
    id: "ethernet",
    name: "Ethernet",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "networking",
    tags: ["ethernet", "lan", "networking"],
  },
  {
    id: "ipv4-ipv6",
    name: "IPv4 e IPv6",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "networking",
    tags: ["ipv4", "ipv6", "ip"],
  },
  {
    id: "routing",
    name: "Roteamento",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "networking",
    tags: ["routing", "roteamento", "networking"],
  },
  {
    id: "switching",
    name: "Switching",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "networking",
    tags: ["switching", "switch", "networking"],
  },
  {
    id: "vlan",
    name: "VLAN",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "networking",
    tags: ["vlan", "segmentação", "networking"],
  },
  {
    id: "nat",
    name: "NAT",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "networking",
    tags: ["nat", "endereçamento", "networking"],
  },
  {
    id: "vpn",
    name: "VPN",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "networking",
    tags: ["vpn", "túnel", "networking"],
  },
  {
    id: "wireless-networks",
    name: "Redes sem Fio",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "networking",
    tags: ["wifi", "wireless", "networking"],
  },
  {
    id: "ports-protocols",
    name: "Portas e Protocolos",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "networking",
    tags: ["portas", "protocolos", "tcp", "udp"],
  },
  {
    id: "icmp",
    name: "ICMP e Ping",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "networking",
    tags: ["icmp", "ping", "diagnóstico"],
  },
  {
    id: "traceroute",
    name: "Traceroute",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.BEGINNER,
    area: "networking",
    tags: ["traceroute", "rota", "diagnóstico"],
  },
  {
    id: "wireshark",
    name: "Wireshark",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "networking",
    tags: ["wireshark", "pacotes", "análise-de-rede"],
  },
  {
    id: "network-troubleshooting",
    name: "Diagnóstico de Redes",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "networking",
    tags: ["troubleshooting", "diagnóstico", "networking"],
  },
  {
    id: "routing-protocols",
    name: "Protocolos de Roteamento",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.ADVANCED,
    area: "networking",
    tags: ["routing", "ospf", "bgp"],
  },

  // =========================================================
  // EXPANSAO: PROGRAMACAO
  // =========================================================

  {
    id: "python-data-types",
    name: "Tipos de Dados em Python",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "programming",
    tags: ["python", "tipos-de-dados", "programação"],
  },
  {
    id: "python-control-flow",
    name: "Condicionais e Laços em Python",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "programming",
    tags: ["python", "condicionais", "loops"],
  },
  {
    id: "python-functions",
    name: "Funções em Python",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "programming",
    tags: ["python", "funções", "programação"],
  },
  {
    id: "python-files",
    name: "Manipulação de Arquivos com Python",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "programming",
    tags: ["python", "arquivos", "automação"],
  },
  {
    id: "python-requests",
    name: "Requisições HTTP com Python",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "programming",
    tags: ["python", "http", "apis"],
  },
  {
    id: "python-testing",
    name: "Testes Automatizados com Python",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "programming",
    tags: ["python", "pytest", "testes"],
  },
  {
    id: "regex",
    name: "Expressões Regulares",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "programming",
    tags: ["regex", "texto", "validação"],
  },
  {
    id: "git-branching",
    name: "Branches e Merge no Git",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "programming",
    tags: ["git", "branches", "versionamento"],
  },
  {
    id: "debugging",
    name: "Depuração de Código",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "programming",
    tags: ["debugging", "depuração", "programação"],
  },

  // =========================================================
  // EXPANSAO: LINUX E SISTEMAS
  // =========================================================

  {
    id: "linux-filesystem",
    name: "Sistema de Arquivos Linux",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "linux",
    tags: ["linux", "filesystem", "arquivos"],
  },
  {
    id: "linux-permissions",
    name: "Permissões no Linux",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "linux",
    tags: ["linux", "permissões", "chmod"],
  },
  {
    id: "linux-processes",
    name: "Processos e Serviços Linux",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "linux",
    tags: ["linux", "processos", "serviços"],
  },
  {
    id: "bash-scripting",
    name: "Scripts Bash",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "linux",
    tags: ["bash", "shell-script", "automação"],
  },
  {
    id: "windows-basics",
    name: "Fundamentos do Windows",
    type: NODE_TYPES.PLATFORM,
    level: NODE_LEVELS.BEGINNER,
    area: "systems",
    tags: ["windows", "sistemas-operacionais", "fundamentos"],
  },
  {
    id: "virtualization",
    name: "Virtualização",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "systems",
    tags: ["virtualização", "máquinas-virtuais", "infraestrutura"],
  },

  // =========================================================
  // EXPANSAO: CLOUD E DEVOPS
  // =========================================================

  {
    id: "cloud-fundamentals",
    name: "Fundamentos de Cloud",
    type: NODE_TYPES.FOUNDATION,
    level: NODE_LEVELS.BEGINNER,
    area: "cloud",
    tags: ["cloud", "infraestrutura", "nuvem"],
  },
  {
    id: "cloud-storage",
    name: "Armazenamento em Nuvem",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cloud",
    tags: ["cloud", "storage", "armazenamento"],
  },
  {
    id: "cloud-iam",
    name: "Identidade e Acesso na Nuvem",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cloud",
    tags: ["cloud", "iam", "identidade", "acesso"],
  },
  {
    id: "containers",
    name: "Containers",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "devops",
    tags: ["containers", "docker", "devops"],
  },
  {
    id: "infrastructure-as-code",
    name: "Infraestrutura como Código",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.ADVANCED,
    area: "devops",
    tags: ["iac", "automação", "infraestrutura"],
  },
  {
    id: "observability",
    name: "Observabilidade",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "devops",
    tags: ["observabilidade", "logs", "métricas", "traces"],
  },

  // =========================================================
  // EXPANSAO: DADOS E BANCO DE DADOS
  // =========================================================

  {
    id: "relational-databases",
    name: "Bancos de Dados Relacionais",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "databases",
    tags: ["sql", "relacional", "banco-de-dados"],
  },
  {
    id: "database-modeling",
    name: "Modelagem de Dados",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "databases",
    tags: ["modelagem", "entidades", "relacionamentos"],
  },
  {
    id: "database-indexes",
    name: "Índices e Consultas SQL",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "databases",
    tags: ["sql", "índices", "consultas"],
  },
  {
    id: "data-visualization",
    name: "Visualização de Dados",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "data",
    tags: ["dados", "visualização", "dashboards"],
  },

  // =========================================================
  // EXPANSAO: DESENVOLVIMENTO WEB
  // =========================================================

  {
    id: "responsive-design",
    name: "Design Responsivo",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "development",
    tags: ["web", "css", "responsivo"],
  },
  {
    id: "web-forms",
    name: "Formulários Web",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "development",
    tags: ["html", "forms", "web"],
  },
  {
    id: "state-management",
    name: "Gerenciamento de Estado no Front-end",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["frontend", "react", "state"],
  },
  {
    id: "web-performance",
    name: "Desempenho Web",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["web", "performance", "frontend"],
  },
  {
    id: "deployment",
    name: "Publicação de Aplicações",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["deployment", "deploy", "web"],
  },


  // =========================================================
  // EXPANSÃO REVISADA: NOVOS TÓPICOS POR ÁREA
  // =========================================================

  {
    id: "security-operations-center",
    name: "Centro de Operações de Segurança (SOC)",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["soc", "blue-team", "monitoramento", "segurança"],
  },

  {
    id: "edr",
    name: "EDR",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["edr", "endpoint", "detecção", "blue-team"],
  },

  {
    id: "threat-hunting",
    name: "Threat Hunting",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.ADVANCED,
    area: "cybersecurity",
    tags: ["threat-hunting", "blue-team", "detecção"],
  },

  {
    id: "phishing-analysis",
    name: "Análise de Phishing",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["phishing", "engenharia-social", "análise"],
  },

  {
    id: "malware-analysis",
    name: "Análise de Malware",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.ADVANCED,
    area: "cybersecurity",
    tags: ["malware", "análise", "segurança"],
  },

  {
    id: "identity-access-management",
    name: "Gestão de Identidade e Acesso",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["iam", "identidade", "controle-de-acesso"],
  },

  {
    id: "security-hardening",
    name: "Hardening de Sistemas",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["hardening", "configuração-segura", "sistemas"],
  },

  {
    id: "security-awareness",
    name: "Conscientização em Segurança",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["conscientização", "phishing", "segurança"],
  },

  {
    id: "firewalls",
    name: "Firewalls",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "networking",
    tags: ["firewall", "filtragem", "segurança-de-redes"],
  },

  {
    id: "udp",
    name: "UDP",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "networking",
    tags: ["udp", "protocolos", "redes"],
  },

  {
    id: "http-https",
    name: "HTTP e HTTPS",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "networking",
    tags: ["http", "https", "tls", "web"],
  },

  {
    id: "tls-certificates",
    name: "TLS e Certificados Digitais",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "networking",
    tags: ["tls", "certificados", "criptografia"],
  },

  {
    id: "load-balancing",
    name: "Balanceamento de Carga",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.ADVANCED,
    area: "networking",
    tags: ["load-balancing", "infraestrutura", "redes"],
  },

  {
    id: "network-segmentation",
    name: "Segmentação de Redes",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "networking",
    tags: ["segmentação", "vlan", "segurança-de-redes"],
  },

  {
    id: "network-access-control",
    name: "Controle de Acesso à Rede",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.ADVANCED,
    area: "networking",
    tags: ["nac", "controle-de-acesso", "redes"],
  },

  {
    id: "python-collections",
    name: "Listas, Tuplas e Dicionários em Python",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "programming",
    tags: ["python", "listas", "dicionários", "estruturas-de-dados"],
  },

  {
    id: "python-exceptions",
    name: "Tratamento de Exceções em Python",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "programming",
    tags: ["python", "exceções", "erros"],
  },

  {
    id: "python-virtual-environments",
    name: "Ambientes Virtuais Python",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.BEGINNER,
    area: "programming",
    tags: ["python", "venv", "dependências"],
  },

  {
    id: "python-logging",
    name: "Logging em Python",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "programming",
    tags: ["python", "logging", "logs"],
  },

  {
    id: "python-cli",
    name: "Aplicações de Linha de Comando",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "programming",
    tags: ["python", "cli", "terminal"],
  },

  {
    id: "git-github-workflow",
    name: "Fluxo de Trabalho com GitHub",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "programming",
    tags: ["git", "github", "commits", "pull-request"],
  },

  {
    id: "linux-users-groups",
    name: "Usuários e Grupos no Linux",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "linux",
    tags: ["linux", "usuários", "grupos", "permissões"],
  },

  {
    id: "linux-networking",
    name: "Comandos de Rede no Linux",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.BEGINNER,
    area: "linux",
    tags: ["linux", "rede", "ip", "ping"],
  },

  {
    id: "systemd",
    name: "Serviços com systemd",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "linux",
    tags: ["linux", "systemd", "serviços"],
  },

  {
    id: "windows-powershell",
    name: "PowerShell",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "systems",
    tags: ["windows", "powershell", "automação"],
  },

  {
    id: "windows-event-logs",
    name: "Logs de Eventos do Windows",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "systems",
    tags: ["windows", "event-viewer", "logs", "blue-team"],
  },

  {
    id: "backup-recovery",
    name: "Backup e Recuperação",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "systems",
    tags: ["backup", "recuperação", "continuidade"],
  },

  {
    id: "cloud-security",
    name: "Segurança em Nuvem",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cloud",
    tags: ["cloud", "segurança", "iam"],
  },

  {
    id: "cloud-compute",
    name: "Computação e Máquinas Virtuais na Nuvem",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cloud",
    tags: ["cloud", "compute", "máquinas-virtuais"],
  },

  {
    id: "cloud-monitoring",
    name: "Monitoramento em Nuvem",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cloud",
    tags: ["cloud", "monitoramento", "observabilidade"],
  },

  {
    id: "kubernetes",
    name: "Kubernetes",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.ADVANCED,
    area: "devops",
    tags: ["kubernetes", "containers", "orquestração"],
  },

  {
    id: "secrets-management",
    name: "Gerenciamento de Segredos",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "devops",
    tags: ["secrets", "credenciais", "devsecops"],
  },

  {
    id: "database-security",
    name: "Segurança de Banco de Dados",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "databases",
    tags: ["database", "sql", "segurança", "controle-de-acesso"],
  },

  {
    id: "sql-joins",
    name: "JOINs em SQL",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "databases",
    tags: ["sql", "joins", "consultas"],
  },

  {
    id: "database-backup",
    name: "Backup de Banco de Dados",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "databases",
    tags: ["database", "backup", "recuperação"],
  },

  {
    id: "data-cleaning",
    name: "Limpeza e Preparação de Dados",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "data",
    tags: ["dados", "data-cleaning", "qualidade"],
  },

  {
    id: "data-pipelines",
    name: "Pipelines de Dados",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "data",
    tags: ["dados", "pipelines", "engenharia-de-dados"],
  },

  {
    id: "bi-dashboards",
    name: "Business Intelligence e Dashboards",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "data",
    tags: ["bi", "dashboards", "visualização"],
  },

  {
    id: "web-security-headers",
    name: "Cabeçalhos de Segurança HTTP",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["web-security", "http", "headers", "appsec"],
  },

  {
    id: "authentication-web",
    name: "Autenticação em Aplicações Web",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["web", "autenticação", "sessões", "segurança"],
  },

  {
    id: "web-deployment-ci",
    name: "Deploy e Integração Contínua",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["deploy", "ci-cd", "web"],
  },

  {
    id: "web-seo-basics",
    name: "Fundamentos de SEO Técnico",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "development",
    tags: ["web", "seo", "performance"],
  },

  {
    id: "privacy-data-protection",
    name: "Privacidade e Proteção de Dados",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["privacidade", "lgpd", "proteção-de-dados"],
  },

  {
    id: "risk-assessment",
    name: "Avaliação de Riscos",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["riscos", "avaliação", "governança"],
  },

  {
    id: "security-policies",
    name: "Políticas de Segurança",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["políticas", "governança", "compliance"],
  },

];

console.log("TechLib nodes carregados:", nodes.length);
