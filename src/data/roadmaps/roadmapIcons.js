// =========================================================
// ÍCONES DOS ROADMAPS (lucide-react)
// =========================================================
//
// Registro central: stages.js referencia os ícones das etapas pelo
// nome (texto) e os cartões usam o ícone do tipo do conhecimento.
// Importar só o que é usado mantém o bundle enxuto.
// Para usar um ícone novo numa etapa, importe-o aqui e adicione ao
// objeto STAGE_ICONS.
// =========================================================

import {
  Activity,
  ArrowRight,
  BookOpen,
  Boxes,
  Building2,
  Cloud,
  Code,
  Cog,
  Container,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Layers,
  Lightbulb,
  Lock,
  Monitor,
  Network,
  Rocket,
  Scale,
  Search,
  Server,
  Shield,
  ShieldCheck,
  Swords,
  Target,
  Terminal,
  TrendingUp,
  Workflow,
  Wrench,
} from "lucide-react";

export const STAGE_ICONS = {
  Activity,
  BookOpen,
  Boxes,
  Cloud,
  Code,
  Cog,
  Container,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Layers,
  Lightbulb,
  Lock,
  Monitor,
  Network,
  Rocket,
  Scale,
  Search,
  Server,
  Shield,
  ShieldCheck,
  Swords,
  Target,
  Terminal,
  TrendingUp,
  Workflow,
};

export const TYPE_ICONS = {
  foundation: Layers,
  concept: Lightbulb,
  technology: Cpu,
  tool: Wrench,
  language: Code,
  framework: Boxes,
  specialization: Target,
  platform: Server,
  service: Cloud,
  organization: Building2,
};

export const ArrowIcon = ArrowRight;

export function getStageIcon(name) {
  return STAGE_ICONS[name] || Layers;
}

export function getTypeIcon(type) {
  return TYPE_ICONS[type] || Layers;
}
