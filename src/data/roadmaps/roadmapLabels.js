// =========================================================
// RÓTULOS EM PORTUGUÊS PARA A INTERFACE DOS ROADMAPS
// =========================================================

export const NODE_TYPE_LABELS = {
  foundation: "Fundamento",
  concept: "Conceito",
  technology: "Tecnologia",
  tool: "Ferramenta",
  language: "Linguagem",
  framework: "Framework",
  specialization: "Especialização",
  platform: "Plataforma",
  service: "Serviço",
  organization: "Organização",
};

export const NODE_LEVEL_LABELS = {
  beginner: "Iniciante",
  intermediate: "Intermediário",
  advanced: "Avançado",
};

export const AREA_LABELS = {
  cybersecurity: "Cybersecurity",
  networking: "Redes",
  linux: "Linux",
  programming: "Programação",
  databases: "Banco de Dados",
  cloud: "Cloud",
  devops: "DevOps",
  data: "Dados",
  development: "Desenvolvimento",
  systems: "Sistemas",
};

// Grupos de conexões exibidos no painel de detalhes.
// "direction" indica de que lado do conhecimento selecionado a conexão sai.
export const CONNECTION_GROUPS = [
  { key: "before", label: "Vem antes", type: "NEXT", direction: "incoming" },
  { key: "after", label: "Leva a", type: "NEXT", direction: "outgoing" },
  { key: "related", label: "Relacionados", type: "RELATED", direction: "both" },
  { key: "usedWith", label: "Usado com", type: "USED_WITH", direction: "both" },
];

export function getTypeLabel(type) {
  return NODE_TYPE_LABELS[type] || type;
}

export function getLevelLabel(level) {
  return NODE_LEVEL_LABELS[level] || level;
}

export function getAreaLabel(area) {
  return AREA_LABELS[area] || area;
}
