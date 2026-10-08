export const paths = [

  // =========================================================
  // DESENVOLVIMENTO
  // =========================================================

  {
    id: "development-foundations",
    roadmapId: "development",
    name: "Fundamentos",
    description:
      "Base necessária para compreender programação e desenvolvimento de software.",
    level: "beginner",
    nodes: [
      "logic-programming",
      "algorithms",
      "data-structures",
      "git",
      "github",
    ],
  },

  {
    id: "development-frontend",
    roadmapId: "development",
    name: "Front-end",
    description:
      "Construção de interfaces web e aplicações executadas no navegador.",
    level: "beginner",
    nodes: [
      "html",
      "css",
      "javascript",
      "dom",
      "typescript",
      "react",
      "vite",
      "web-accessibility",
      "frontend-testing",
    ],
  },

  {
    id: "development-backend",
    roadmapId: "development",
    name: "Back-end",
    description:
      "Desenvolvimento de aplicações, APIs e serviços executados no servidor.",
    level: "intermediate",
    nodes: [
      "javascript",
      "nodejs",
      "apis",
      "json",
      "rest-api",
      "backend-testing",
      "application-security",
    ],
  },

  {
    id: "development-fullstack",
    roadmapId: "development",
    name: "Full Stack",
    description:
      "Integração entre front-end e back-end para construção de aplicações completas.",
    level: "intermediate",
    nodes: [
      "html",
      "css",
      "javascript",
      "react",
      "nodejs",
      "apis",
      "rest-api",
    ],
  },

  {
    id: "development-software-engineering",
    roadmapId: "development",
    name: "Engenharia de Software",
    description:
      "Boas práticas, arquitetura, testes, qualidade e manutenção de software.",
    level: "intermediate",
    nodes: [
      "clean-code",
      "solid",
      "design-patterns",
      "software-architecture",
      "software-testing",
      "code-review",
      "documentation",
    ],
  },

  // =========================================================
  // CYBERSECURITY
  // =========================================================

  {
    id: "cybersecurity-foundations",
    roadmapId: "cybersecurity",
    name: "Fundamentos",
    description:
      "Base para compreender segurança da informação, ameaças, riscos e proteção de sistemas.",
    level: "beginner",
    nodes: [
      "information-security",
      "cybersecurity",
      "cia-triad",
      "authentication",
      "authorization",
      "threats",
      "vulnerabilities",
      "risks",
    ],
  },

  {
    id: "cybersecurity-blue-team",
    roadmapId: "cybersecurity",
    name: "Blue Team",
    description:
      "Defesa, monitoramento, análise de logs, detecção e resposta a incidentes.",
    level: "intermediate",
    nodes: [
      "blue-team",
      "logs",
      "monitoring",
      "siem",
      "detection",
      "incident-response",
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
      "Segurança ofensiva, reconhecimento, avaliação de vulnerabilidades e exploração.",
    level: "intermediate",
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
    name: "AppSec e DevSecOps",
    description:
      "Segurança aplicada ao desenvolvimento, aplicações, APIs e pipelines.",
    level: "intermediate",
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
    roadmapId: "cybersecurity",
    name: "Governança e Compliance",
    description:
      "Governança, auditoria, normas, riscos, conformidade e privacidade.",
    level: "intermediate",
    nodes: [
      "governance",
      "compliance",
      "audit",
      "iso-27001",
      "nist",
      "lgpd",
    ],
  },

  // =========================================================
  // REDES
  // =========================================================

  {
    id: "networking-foundations",
    roadmapId: "networking",
    name: "Fundamentos",
    description:
      "Base para compreender redes de computadores e comunicação entre dispositivos.",
    level: "beginner",
    nodes: [
      "networking",
      "tcp-ip",
      "dns",
      "dhcp",
      "http",
    ],
  },

  {
    id: "networking-ip",
    roadmapId: "networking",
    name: "Endereçamento e Sub-redes",
    description:
      "Endereçamento IP, comunicação e divisão de redes.",
    level: "intermediate",
    nodes: [
      "tcp-ip",
      "subnetting",
      "networking",
    ],
  },

  {
    id: "networking-services",
    roadmapId: "networking",
    name: "Serviços de Rede",
    description:
      "Principais serviços utilizados na comunicação entre sistemas.",
    level: "beginner",
    nodes: [
      "dns",
      "dhcp",
      "http",
    ],
  },

  {
    id: "networking-security",
    roadmapId: "networking",
    name: "Segurança de Redes",
    description:
      "Conceitos de proteção e segurança aplicados à infraestrutura de redes.",
    level: "intermediate",
    nodes: [
      "networking",
      "tcp-ip",
      "network-security",
      "dns",
      "http",
    ],
  },

  // =========================================================
  // CLOUD
  // =========================================================

  {
    id: "cloud-foundations",
    roadmapId: "cloud",
    name: "Fundamentos de Cloud",
    description:
      "Conceitos fundamentais de computação em nuvem e infraestrutura.",
    level: "beginner",
    nodes: [
      "cloud",
      "cloud-networking",
      "iam",
    ],
  },

  {
    id: "cloud-networking",
    roadmapId: "cloud",
    name: "Cloud Networking",
    description:
      "Conceitos de redes aplicados a ambientes de computação em nuvem.",
    level: "intermediate",
    nodes: [
      "cloud",
      "cloud-networking",
      "networking",
      "tcp-ip",
      "dns",
    ],
  },

  {
    id: "cloud-security",
    roadmapId: "cloud",
    name: "Cloud Security",
    description:
      "Identidade, acesso e fundamentos de segurança em ambientes cloud.",
    level: "intermediate",
    nodes: [
      "cloud",
      "iam",
      "cloud-networking",
      "network-security",
    ],
  },

  // =========================================================
  // DEVOPS
  // =========================================================

  {
    id: "devops-foundations",
    roadmapId: "devops",
    name: "Fundamentos",
    description:
      "Base de DevOps, automação e integração entre desenvolvimento e operações.",
    level: "intermediate",
    nodes: [
      "devops",
      "git",
      "github",
      "linux",
    ],
  },

  {
    id: "devops-containers",
    roadmapId: "devops",
    name: "Containers",
    description:
      "Containers e ferramentas utilizadas para empacotamento e execução de aplicações.",
    level: "intermediate",
    nodes: [
      "docker",
      "linux",
      "devops",
    ],
  },

  {
    id: "devops-cicd",
    roadmapId: "devops",
    name: "CI/CD",
    description:
      "Automação de integração, testes e entrega de software.",
    level: "intermediate",
    nodes: [
      "git",
      "github",
      "ci-cd",
      "docker",
      "devops",
    ],
  },

  {
    id: "devops-security",
    roadmapId: "devops",
    name: "DevSecOps",
    description:
      "Integração de segurança ao ciclo de desenvolvimento e operações.",
    level: "advanced",
    nodes: [
      "devops",
      "devsecops",
      "docker",
      "ci-cd",
      "secure-coding",
    ],
  },

  // =========================================================
  // PROGRAMAÇÃO
  // =========================================================

  {
    id: "programming-foundations",
    roadmapId: "programming",
    name: "Fundamentos",
    description:
      "Lógica e conceitos fundamentais para começar a programar.",
    level: "beginner",
    nodes: [
      "programming",
      "logic-programming",
      "algorithms",
    ],
  },

  {
    id: "programming-python",
    roadmapId: "programming",
    name: "Python",
    description:
      "Programação com Python, automação e desenvolvimento de scripts.",
    level: "beginner",
    nodes: [
      "python",
      "programming",
      "logic-programming",
      "algorithms",
    ],
  },

  {
    id: "programming-javascript",
    roadmapId: "programming",
    name: "JavaScript",
    description:
      "Programação com JavaScript e fundamentos para desenvolvimento web.",
    level: "beginner",
    nodes: [
      "javascript",
      "programming",
      "logic-programming",
      "algorithms",
      "git",
    ],
  },

  {
    id: "programming-version-control",
    roadmapId: "programming",
    name: "Versionamento",
    description:
      "Controle de versão e colaboração em projetos de software.",
    level: "beginner",
    nodes: [
      "git",
      "github",
      "programming",
    ],
  },

  // =========================================================
  // BANCO DE DADOS
  // =========================================================

  {
    id: "databases-foundations",
    roadmapId: "databases",
    name: "Fundamentos",
    description:
      "Conceitos fundamentais de bancos de dados e armazenamento de informações.",
    level: "beginner",
    nodes: [
      "databases",
      "sql",
    ],
  },

  {
    id: "databases-sql",
    roadmapId: "databases",
    name: "SQL",
    description:
      "Consultas, manipulação e organização de dados utilizando SQL.",
    level: "beginner",
    nodes: [
      "databases",
      "sql",
    ],
  },

  {
    id: "databases-nosql",
    roadmapId: "databases",
    name: "NoSQL",
    description:
      "Conceitos e características dos bancos de dados NoSQL.",
    level: "intermediate",
    nodes: [
      "databases",
      "nosql",
    ],
  },

  // =========================================================
  // LINUX
  // =========================================================

  {
    id: "linux-foundations",
    roadmapId: "linux",
    name: "Fundamentos",
    description:
      "Introdução ao sistema operacional Linux e seus principais conceitos.",
    level: "beginner",
    nodes: [
      "linux",
      "linux-terminal",
    ],
  },

  {
    id: "linux-terminal",
    roadmapId: "linux",
    name: "Terminal",
    description:
      "Uso do terminal Linux e comandos essenciais.",
    level: "beginner",
    nodes: [
      "linux",
      "linux-terminal",
      "bash",
    ],
  },

  {
    id: "linux-bash",
    roadmapId: "linux",
    name: "Bash e Automação",
    description:
      "Shell scripting e automação de tarefas no Linux.",
    level: "intermediate",
    nodes: [
      "linux",
      "bash",
      "linux-terminal",
    ],
  },

  {
    id: "linux-cybersecurity",
    roadmapId: "linux",
    name: "Linux para Cybersecurity",
    description:
      "Uso do Linux como base para atividades de segurança e administração.",
    level: "intermediate",
    nodes: [
      "linux",
      "linux-terminal",
      "bash",
      "cybersecurity",
      "logs",
    ],
  },

  // =========================================================
  // DADOS
  // =========================================================

  {
    id: "data-foundations",
    roadmapId: "data",
    name: "Fundamentos",
    description:
      "Base para compreender dados, análise e tomada de decisão.",
    level: "beginner",
    nodes: [
      "data",
      "data-analysis",
    ],
  },

  {
    id: "data-analysis",
    roadmapId: "data",
    name: "Análise de Dados",
    description:
      "Análise, interpretação e visualização de dados.",
    level: "intermediate",
    nodes: [
      "data",
      "data-analysis",
      "databases",
      "sql",
    ],
  },

  {
    id: "data-science",
    roadmapId: "data",
    name: "Data Science",
    description:
      "Ciência de dados e aplicação de métodos analíticos.",
    level: "advanced",
    nodes: [
      "data",
      "data-analysis",
      "data-science",
      "python",
    ],
  },

  {
    id: "data-engineering",
    roadmapId: "data",
    name: "Data Engineering",
    description:
      "Engenharia, processamento e organização de dados.",
    level: "advanced",
    nodes: [
      "data",
      "data-engineering",
      "big-data",
      "databases",
      "sql",
    ],
  },

];
