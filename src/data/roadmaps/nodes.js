export const NODE_TYPES = {
  FOUNDATION: "foundation",
  CONCEPT: "concept",
  TECHNOLOGY: "technology",
  TOOL: "tool",
  LANGUAGE: "language",
  FRAMEWORK: "framework",
  SPECIALIZATION: "specialization",
  PLATFORM: "platform",
  SERVICE: "service",
};

export const NODE_LEVELS = {
  BEGINNER: "beginner",
  INTERMEDIATE: "intermediate",
  ADVANCED: "advanced",
};

export const nodes = [
  // ==========================================
  // FUNDAMENTOS GERAIS
  // ==========================================

  {
    id: "logic",
    name: "Lógica de Programação",
    type: NODE_TYPES.FOUNDATION,
    level: NODE_LEVELS.BEGINNER,
    area: "programming",
    tags: ["logica", "programacao", "fundamentos"],
  },

  {
    id: "algorithms",
    name: "Algoritmos",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "programming",
    tags: ["algoritmos", "programacao"],
  },

  {
    id: "git",
    name: "Git",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.BEGINNER,
    area: "development",
    tags: ["git", "versionamento"],
  },

  {
    id: "github",
    name: "GitHub",
    type: NODE_TYPES.PLATFORM,
    level: NODE_LEVELS.BEGINNER,
    area: "development",
    tags: ["github", "git", "versionamento"],
  },

  {
    id: "terminal",
    name: "Terminal",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.BEGINNER,
    area: "development",
    tags: ["terminal", "linha-de-comando", "cli"],
  },

  {
    id: "http",
    name: "HTTP / HTTPS",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "development",
    tags: ["http", "https", "web", "protocolos"],
  },

  {
    id: "json",
    name: "JSON",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "development",
    tags: ["json", "dados", "apis"],
  },

  {
    id: "apis",
    name: "APIs",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "development",
    tags: ["api", "apis", "web", "backend"],
  },

  // ==========================================
  // FRONTEND / WEB
  // ==========================================

  {
    id: "web",
    name: "Como a Web Funciona",
    type: NODE_TYPES.FOUNDATION,
    level: NODE_LEVELS.BEGINNER,
    area: "development",
    tags: ["web", "internet", "frontend"],
  },

  {
    id: "html",
    name: "HTML",
    type: NODE_TYPES.LANGUAGE,
    level: NODE_LEVELS.BEGINNER,
    area: "development",
    tags: ["html", "frontend", "web"],
  },

  {
    id: "css",
    name: "CSS",
    type: NODE_TYPES.LANGUAGE,
    level: NODE_LEVELS.BEGINNER,
    area: "development",
    tags: ["css", "frontend", "web"],
  },

  {
    id: "javascript",
    name: "JavaScript",
    type: NODE_TYPES.LANGUAGE,
    level: NODE_LEVELS.BEGINNER,
    area: "programming",
    tags: ["javascript", "js", "frontend", "web"],
  },

  {
    id: "typescript",
    name: "TypeScript",
    type: NODE_TYPES.LANGUAGE,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["typescript", "javascript", "frontend"],
  },

  {
    id: "react",
    name: "React",
    type: NODE_TYPES.FRAMEWORK,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["react", "javascript", "frontend", "web"],
  },

  {
    id: "vue",
    name: "Vue",
    type: NODE_TYPES.FRAMEWORK,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["vue", "javascript", "frontend", "web"],
  },

  {
    id: "angular",
    name: "Angular",
    type: NODE_TYPES.FRAMEWORK,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["angular", "typescript", "frontend", "web"],
  },

  // ==========================================
  // BACKEND
  // ==========================================

  {
    id: "nodejs",
    name: "Node.js",
    type: NODE_TYPES.TECHNOLOGY,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["nodejs", "javascript", "backend", "api"],
  },

  {
    id: "authentication",
    name: "Autenticação",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["autenticacao", "seguranca", "backend", "web"],
  },

  {
    id: "architecture",
    name: "Arquitetura de Software",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["arquitetura", "software", "backend", "desenvolvimento"],
  },

  // ==========================================
  // MOBILE
  // ==========================================

  {
    id: "mobile",
    name: "Fundamentos Mobile",
    type: NODE_TYPES.FOUNDATION,
    level: NODE_LEVELS.BEGINNER,
    area: "development",
    tags: ["mobile", "aplicativos", "desenvolvimento"],
  },

  {
    id: "react-native",
    name: "React Native",
    type: NODE_TYPES.FRAMEWORK,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["react-native", "javascript", "mobile"],
  },

  {
    id: "flutter",
    name: "Flutter",
    type: NODE_TYPES.FRAMEWORK,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["flutter", "dart", "mobile"],
  },

  {
    id: "kotlin",
    name: "Kotlin",
    type: NODE_TYPES.LANGUAGE,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "programming",
    tags: ["kotlin", "android", "mobile"],
  },

  {
    id: "swift",
    name: "Swift",
    type: NODE_TYPES.LANGUAGE,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "programming",
    tags: ["swift", "ios", "mobile"],
  },

  {
    id: "android",
    name: "Android",
    type: NODE_TYPES.PLATFORM,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["android", "mobile", "kotlin"],
  },

  {
    id: "ios",
    name: "iOS",
    type: NODE_TYPES.PLATFORM,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["ios", "mobile", "swift"],
  },

  // ==========================================
  // DESKTOP
  // ==========================================

  {
    id: "desktop",
    name: "Desenvolvimento Desktop",
    type: NODE_TYPES.FOUNDATION,
    level: NODE_LEVELS.BEGINNER,
    area: "development",
    tags: ["desktop", "aplicativos", "desenvolvimento"],
  },

  {
    id: "electron",
    name: "Electron",
    type: NODE_TYPES.FRAMEWORK,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["electron", "javascript", "desktop", "nodejs"],
  },

  {
    id: "tauri",
    name: "Tauri",
    type: NODE_TYPES.FRAMEWORK,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "development",
    tags: ["tauri", "rust", "desktop"],
  },

  // ==========================================
  // REDES
  // ==========================================

  {
    id: "networking",
    name: "Redes de Computadores",
    type: NODE_TYPES.FOUNDATION,
    level: NODE_LEVELS.BEGINNER,
    area: "networking",
    tags: ["redes", "networking"],
  },

  {
    id: "osi",
    name: "Modelo OSI",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "networking",
    tags: ["osi", "redes", "protocolos"],
  },

  {
    id: "tcp-ip",
    name: "TCP/IP",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "networking",
    tags: ["tcp-ip", "tcp", "ip", "redes"],
  },

  {
    id: "ethernet",
    name: "Ethernet",
    type: NODE_TYPES.TECHNOLOGY,
    level: NODE_LEVELS.BEGINNER,
    area: "networking",
    tags: ["ethernet", "redes"],
  },

  {
    id: "ipv4",
    name: "IPv4",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "networking",
    tags: ["ipv4", "ip", "redes"],
  },

  {
    id: "ipv6",
    name: "IPv6",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "networking",
    tags: ["ipv6", "ip", "redes"],
  },

  {
    id: "tcp",
    name: "TCP",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "networking",
    tags: ["tcp", "redes", "protocolos"],
  },

  {
    id: "udp",
    name: "UDP",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "networking",
    tags: ["udp", "redes", "protocolos"],
  },

  {
    id: "dns",
    name: "DNS",
    type: NODE_TYPES.SERVICE,
    level: NODE_LEVELS.BEGINNER,
    area: "networking",
    tags: ["dns", "redes", "internet"],
  },

  {
    id: "dhcp",
    name: "DHCP",
    type: NODE_TYPES.SERVICE,
    level: NODE_LEVELS.BEGINNER,
    area: "networking",
    tags: ["dhcp", "redes"],
  },

  {
    id: "switching",
    name: "Switching",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "networking",
    tags: ["switching", "switch", "redes"],
  },

  {
    id: "routing",
    name: "Routing",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "networking",
    tags: ["routing", "roteamento", "redes"],
  },

  {
    id: "vlan",
    name: "VLAN",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "networking",
    tags: ["vlan", "redes", "switching"],
  },

  {
    id: "nat",
    name: "NAT",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "networking",
    tags: ["nat", "redes"],
  },

  {
    id: "vpn",
    name: "VPN",
    type: NODE_TYPES.TECHNOLOGY,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "networking",
    tags: ["vpn", "redes", "seguranca"],
  },

  {
    id: "firewall",
    name: "Firewall",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "networking",
    tags: ["firewall", "redes", "seguranca"],
  },

  // ==========================================
  // CYBERSECURITY
  // ==========================================

  {
    id: "cybersecurity",
    name: "Cybersecurity",
    type: NODE_TYPES.FOUNDATION,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["cybersecurity", "seguranca", "seguranca-da-informacao"],
  },

  {
    id: "information-security",
    name: "Segurança da Informação",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["seguranca-da-informacao", "seguranca"],
  },

  {
    id: "cia-triad",
    name: "Tríade CIA",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["cia", "confidencialidade", "integridade", "disponibilidade"],
  },

  {
    id: "authorization",
    name: "Autorização",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["autorizacao", "controle-de-acesso", "seguranca"],
  },

  {
    id: "cryptography",
    name: "Criptografia",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["criptografia", "seguranca"],
  },

  {
    id: "vulnerabilities",
    name: "Vulnerabilidades",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["vulnerabilidades", "seguranca"],
  },

  {
    id: "threats",
    name: "Ameaças",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["ameacas", "threats", "seguranca"],
  },

  {
    id: "risks",
    name: "Riscos",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["riscos", "risk", "seguranca"],
  },

  // ==========================================
  // BLUE TEAM
  // ==========================================

  {
    id: "blue-team",
    name: "Blue Team",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["blue-team", "defensiva", "soc"],
  },

  {
    id: "logs",
    name: "Logs",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["logs", "logging", "blue-team"],
  },

  {
    id: "monitoring",
    name: "Monitoramento",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["monitoramento", "monitoring", "blue-team"],
  },

  {
    id: "siem",
    name: "SIEM",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["siem", "logs", "monitoramento", "blue-team"],
  },

  {
    id: "detection",
    name: "Detecção",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["deteccao", "threat-detection", "blue-team"],
  },

  {
    id: "incident-response",
    name: "Incident Response",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["incident-response", "incidente", "blue-team"],
  },

  {
    id: "threat-intelligence",
    name: "Threat Intelligence",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["threat-intelligence", "cti", "blue-team"],
  },

  {
    id: "endpoint-security",
    name: "Endpoint Security",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["endpoint-security", "edr", "blue-team"],
  },

  {
    id: "network-security",
    name: "Network Security",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["network-security", "redes", "seguranca"],
  },

  {
    id: "forensics",
    name: "Forensics",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.ADVANCED,
    area: "cybersecurity",
    tags: ["forensics", "forense", "blue-team"],
  },

  // ==========================================
  // RED TEAM
  // ==========================================

  {
    id: "red-team",
    name: "Red Team",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["red-team", "ofensiva", "pentest"],
  },

  {
    id: "reconnaissance",
    name: "Reconhecimento",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["reconhecimento", "recon", "pentest"],
  },

  {
    id: "osint",
    name: "OSINT",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["osint", "reconhecimento", "inteligencia"],
  },

  {
    id: "vulnerability-assessment",
    name: "Vulnerability Assessment",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["vulnerability-assessment", "vulnerabilidades", "pentest"],
  },

  {
    id: "web-security",
    name: "Web Security",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["web-security", "seguranca-web", "owasp"],
  },

  {
    id: "exploitation",
    name: "Exploitation",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["exploitation", "exploracao", "pentest"],
  },

  {
    id: "privilege-escalation",
    name: "Privilege Escalation",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.ADVANCED,
    area: "cybersecurity",
    tags: ["privilege-escalation", "pentest"],
  },

  {
    id: "active-directory",
    name: "Active Directory",
    type: NODE_TYPES.TECHNOLOGY,
    level: NODE_LEVELS.ADVANCED,
    area: "cybersecurity",
    tags: ["active-directory", "windows", "red-team"],
  },

  // ==========================================
  // APPSEC / GRC
  // ==========================================

  {
    id: "owasp",
    name: "OWASP",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["owasp", "web-security", "appsec"],
  },

  {
    id: "secure-coding",
    name: "Secure Coding",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["secure-coding", "appsec", "desenvolvimento"],
  },

  {
    id: "api-security",
    name: "API Security",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["api-security", "apis", "appsec"],
  },

  {
    id: "sast",
    name: "SAST",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["sast", "appsec", "secure-coding"],
  },

  {
    id: "dast",
    name: "DAST",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["dast", "appsec", "web-security"],
  },

  {
    id: "devsecops",
    name: "DevSecOps",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.ADVANCED,
    area: "cybersecurity",
    tags: ["devsecops", "devops", "seguranca"],
  },

  {
    id: "governance",
    name: "Governança",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cybersecurity",
    tags: ["governanca", "grc"],
  },

  {
    id: "compliance",
    name: "Compliance",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["compliance", "grc"],
  },

  {
    id: "audit",
    name: "Auditoria",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["auditoria", "grc"],
  },

  {
    id: "iso-27001",
    name: "ISO 27001",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["iso-27001", "compliance", "grc"],
  },

  {
    id: "nist",
    name: "NIST",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["nist", "framework", "grc", "seguranca"],
  },

  {
    id: "lgpd",
    name: "LGPD",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cybersecurity",
    tags: ["lgpd", "privacidade", "compliance"],
  },

  // ==========================================
  // CLOUD
  // ==========================================

  {
    id: "cloud-computing",
    name: "Cloud Computing",
    type: NODE_TYPES.FOUNDATION,
    level: NODE_LEVELS.BEGINNER,
    area: "cloud",
    tags: ["cloud", "cloud-computing", "nuvem"],
  },

  {
    id: "iaas",
    name: "IaaS",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cloud",
    tags: ["iaas", "cloud"],
  },

  {
    id: "paas",
    name: "PaaS",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cloud",
    tags: ["paas", "cloud"],
  },

  {
    id: "saas",
    name: "SaaS",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cloud",
    tags: ["saas", "cloud"],
  },

  {
    id: "virtualization",
    name: "Virtualização",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "cloud",
    tags: ["virtualizacao", "cloud", "infraestrutura"],
  },

  {
    id: "cloud-storage",
    name: "Cloud Storage",
    type: NODE_TYPES.SERVICE,
    level: NODE_LEVELS.BEGINNER,
    area: "cloud",
    tags: ["cloud-storage", "storage", "cloud"],
  },

  {
    id: "cloud-networking",
    name: "Cloud Networking",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cloud",
    tags: ["cloud-networking", "networking", "cloud"],
  },

  {
    id: "iam",
    name: "IAM",
    type: NODE_TYPES.SERVICE,
    level: NODE_LEVELS.BEGINNER,
    area: "cloud",
    tags: ["iam", "identity", "cloud-security"],
  },

  {
    id: "aws",
    name: "AWS",
    type: NODE_TYPES.PLATFORM,
    level: NODE_LEVELS.BEGINNER,
    area: "cloud",
    tags: ["aws", "cloud"],
  },

  {
    id: "azure",
    name: "Microsoft Azure",
    type: NODE_TYPES.PLATFORM,
    level: NODE_LEVELS.BEGINNER,
    area: "cloud",
    tags: ["azure", "cloud"],
  },

  {
    id: "gcp",
    name: "Google Cloud",
    type: NODE_TYPES.PLATFORM,
    level: NODE_LEVELS.BEGINNER,
    area: "cloud",
    tags: ["gcp", "google-cloud", "cloud"],
  },

  {
    id: "ec2",
    name: "Amazon EC2",
    type: NODE_TYPES.SERVICE,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cloud",
    tags: ["ec2", "aws", "cloud"],
  },

  {
    id: "s3",
    name: "Amazon S3",
    type: NODE_TYPES.SERVICE,
    level: NODE_LEVELS.BEGINNER,
    area: "cloud",
    tags: ["s3", "aws", "storage"],
  },

  {
    id: "vpc",
    name: "Amazon VPC",
    type: NODE_TYPES.SERVICE,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cloud",
    tags: ["vpc", "aws", "networking"],
  },

  {
    id: "rds",
    name: "Amazon RDS",
    type: NODE_TYPES.SERVICE,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cloud",
    tags: ["rds", "aws", "database"],
  },

  {
    id: "lambda",
    name: "AWS Lambda",
    type: NODE_TYPES.SERVICE,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cloud",
    tags: ["lambda", "aws", "serverless"],
  },

  {
    id: "cloudwatch",
    name: "Amazon CloudWatch",
    type: NODE_TYPES.SERVICE,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "cloud",
    tags: ["cloudwatch", "aws", "monitoring"],
  },

  // ==========================================
  // DEVOPS
  // ==========================================

  {
    id: "devops",
    name: "DevOps",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.BEGINNER,
    area: "devops",
    tags: ["devops", "automacao", "infraestrutura"],
  },

  {
    id: "shell",
    name: "Shell",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "devops",
    tags: ["shell", "terminal", "linux"],
  },

  {
    id: "docker",
    name: "Docker",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "devops",
    tags: ["docker", "containers", "devops"],
  },

  {
    id: "docker-compose",
    name: "Docker Compose",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "devops",
    tags: ["docker-compose", "docker", "containers"],
  },

  {
    id: "ci-cd",
    name: "CI/CD",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "devops",
    tags: ["ci-cd", "devops", "automacao"],
  },

  {
    id: "github-actions",
    name: "GitHub Actions",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "devops",
    tags: ["github-actions", "ci-cd", "github"],
  },

  {
    id: "gitlab-ci",
    name: "GitLab CI",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "devops",
    tags: ["gitlab-ci", "ci-cd", "devops"],
  },

  {
    id: "jenkins",
    name: "Jenkins",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "devops",
    tags: ["jenkins", "ci-cd", "devops"],
  },

  {
    id: "terraform",
    name: "Terraform",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "devops",
    tags: ["terraform", "iac", "devops", "cloud"],
  },

  {
    id: "kubernetes",
    name: "Kubernetes",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.ADVANCED,
    area: "devops",
    tags: ["kubernetes", "containers", "devops", "cloud"],
  },

  // ==========================================
  // PROGRAMAÇÃO
  // ==========================================

  {
    id: "programming",
    name: "Programação",
    type: NODE_TYPES.FOUNDATION,
    level: NODE_LEVELS.BEGINNER,
    area: "programming",
    tags: ["programacao", "desenvolvimento"],
  },

  {
    id: "variables",
    name: "Variáveis",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "programming",
    tags: ["variaveis", "programacao"],
  },

  {
    id: "conditionals",
    name: "Condicionais",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "programming",
    tags: ["condicionais", "programacao"],
  },

  {
    id: "loops",
    name: "Loops",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "programming",
    tags: ["loops", "repeticao", "programacao"],
  },

  {
    id: "functions",
    name: "Funções",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "programming",
    tags: ["funcoes", "programacao"],
  },

  {
    id: "data-structures",
    name: "Estruturas de Dados",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "programming",
    tags: ["estruturas-de-dados", "programacao"],
  },

  {
    id: "python",
    name: "Python",
    type: NODE_TYPES.LANGUAGE,
    level: NODE_LEVELS.BEGINNER,
    area: "programming",
    tags: ["python", "programacao", "automacao", "dados", "cybersecurity"],
  },

  {
    id: "java",
    name: "Java",
    type: NODE_TYPES.LANGUAGE,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "programming",
    tags: ["java", "programacao"],
  },

  {
    id: "csharp",
    name: "C#",
    type: NODE_TYPES.LANGUAGE,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "programming",
    tags: ["csharp", "c#", "programacao"],
  },

  {
    id: "cpp",
    name: "C/C++",
    type: NODE_TYPES.LANGUAGE,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "programming",
    tags: ["c", "cpp", "c++", "programacao"],
  },

  {
    id: "go",
    name: "Go",
    type: NODE_TYPES.LANGUAGE,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "programming",
    tags: ["go", "golang", "programacao"],
  },

  // ==========================================
  // BANCO DE DADOS
  // ==========================================

  {
    id: "databases",
    name: "Banco de Dados",
    type: NODE_TYPES.FOUNDATION,
    level: NODE_LEVELS.BEGINNER,
    area: "databases",
    tags: ["banco-de-dados", "database", "dados"],
  },

  {
    id: "sql",
    name: "SQL",
    type: NODE_TYPES.LANGUAGE,
    level: NODE_LEVELS.BEGINNER,
    area: "databases",
    tags: ["sql", "database", "banco-de-dados"],
  },

  {
    id: "select",
    name: "SELECT",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "databases",
    tags: ["sql", "select", "database"],
  },

  {
    id: "joins",
    name: "JOIN",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "databases",
    tags: ["sql", "join", "database"],
  },

  {
    id: "indexes",
    name: "Índices",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "databases",
    tags: ["indices", "sql", "database", "performance"],
  },

  {
    id: "transactions",
    name: "Transações",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "databases",
    tags: ["transacoes", "sql", "database"],
  },

  {
    id: "postgresql",
    name: "PostgreSQL",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "databases",
    tags: ["postgresql", "sql", "database"],
  },

  {
    id: "mysql",
    name: "MySQL",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "databases",
    tags: ["mysql", "sql", "database"],
  },

  {
    id: "sql-server",
    name: "SQL Server",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "databases",
    tags: ["sql-server", "sql", "database"],
  },

  {
    id: "mongodb",
    name: "MongoDB",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "databases",
    tags: ["mongodb", "nosql", "database"],
  },

  {
    id: "redis",
    name: "Redis",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "databases",
    tags: ["redis", "nosql", "database", "cache"],
  },

  // ==========================================
  // LINUX
  // ==========================================

  {
    id: "linux",
    name: "Linux",
    type: NODE_TYPES.TECHNOLOGY,
    level: NODE_LEVELS.BEGINNER,
    area: "linux",
    tags: ["linux", "sistema-operacional", "terminal"],
  },

  {
    id: "files",
    name: "Arquivos e Diretórios",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "linux",
    tags: ["linux", "arquivos", "diretorios", "terminal"],
  },

  {
    id: "permissions",
    name: "Permissões",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "linux",
    tags: ["linux", "permissoes", "seguranca"],
  },

  {
    id: "users",
    name: "Usuários",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "linux",
    tags: ["linux", "usuarios", "administracao"],
  },

  {
    id: "processes",
    name: "Processos",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "linux",
    tags: ["linux", "processos", "sistema-operacional"],
  },

  {
    id: "packages",
    name: "Gerenciamento de Pacotes",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "linux",
    tags: ["linux", "pacotes", "terminal"],
  },

  {
    id: "ssh",
    name: "SSH",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "linux",
    tags: ["ssh", "linux", "redes"],
  },

  {
    id: "systemd",
    name: "systemd",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "linux",
    tags: ["systemd", "linux", "servicos"],
  },

  {
    id: "bash",
    name: "Bash",
    type: NODE_TYPES.LANGUAGE,
    level: NODE_LEVELS.BEGINNER,
    area: "linux",
    tags: ["bash", "shell", "linux", "automacao"],
  },

  {
    id: "linux-security",
    name: "Linux Security",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "linux",
    tags: ["linux-security", "linux", "seguranca"],
  },

  // ==========================================
  // DADOS
  // ==========================================

  {
    id: "data",
    name: "Dados",
    type: NODE_TYPES.FOUNDATION,
    level: NODE_LEVELS.BEGINNER,
    area: "data",
    tags: ["dados", "data"],
  },

  {
    id: "statistics",
    name: "Estatística",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "data",
    tags: ["estatistica", "dados", "data"],
  },

  {
    id: "data-visualization",
    name: "Visualização de Dados",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.BEGINNER,
    area: "data",
    tags: ["visualizacao", "dados", "data"],
  },

  {
    id: "data-analysis",
    name: "Data Analysis",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "data",
    tags: ["data-analysis", "dados", "analise"],
  },

  {
    id: "data-science",
    name: "Data Science",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "data",
    tags: ["data-science", "dados", "machine-learning"],
  },

  {
    id: "data-engineering",
    name: "Data Engineering",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "data",
    tags: ["data-engineering", "dados", "etl", "cloud"],
  },

  {
    id: "excel",
    name: "Excel",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.BEGINNER,
    area: "data",
    tags: ["excel", "dados", "analise"],
  },

  {
    id: "pandas",
    name: "Pandas",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "data",
    tags: ["pandas", "python", "dados"],
  },

  {
    id: "numpy",
    name: "NumPy",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "data",
    tags: ["numpy", "python", "dados"],
  },

  {
    id: "power-bi",
    name: "Power BI",
    type: NODE_TYPES.TOOL,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "data",
    tags: ["power-bi", "dados", "visualizacao"],
  },

  {
    id: "machine-learning",
    name: "Machine Learning",
    type: NODE_TYPES.SPECIALIZATION,
    level: NODE_LEVELS.ADVANCED,
    area: "data",
    tags: ["machine-learning", "ia", "data-science"],
  },

  {
    id: "etl",
    name: "ETL",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "data",
    tags: ["etl", "data-engineering", "dados"],
  },

  {
    id: "data-pipelines",
    name: "Data Pipelines",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "data",
    tags: ["data-pipelines", "etl", "data-engineering"],
  },

  {
    id: "data-warehouse",
    name: "Data Warehouse",
    type: NODE_TYPES.CONCEPT,
    level: NODE_LEVELS.INTERMEDIATE,
    area: "data",
    tags: ["data-warehouse", "data-engineering", "dados"],
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
