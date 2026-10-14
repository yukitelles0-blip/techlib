// =========================================================
// MONTAGEM DAS ETAPAS DE UM ROADMAP
// =========================================================
// Recebe o id do Roadmap e seus paths e prepara grupos, conhecimentos
// e conexões para a interface, sem alterar os dados originais.

import { nodes } from "./nodes";
import { connections } from "./connections";
import { roadmapStages } from "./stages";

export const STAGE_COLORS = ["blue", "orange", "violet", "pink", "green", "cyan"];
const NODE_MAP = new Map(nodes.map((node) => [node.id, node]));
const IS_DEV = typeof import.meta !== "undefined" && Boolean(import.meta.env && import.meta.env.DEV);

function warn(message) {
  if (IS_DEV) console.warn(`[TechLib Roadmaps] ${message}`);
}

export function getNodeById(id) {
  return NODE_MAP.get(id);
}

function normalizeColor(color, index) {
  return STAGE_COLORS.includes(color) ? color : STAGE_COLORS[index % STAGE_COLORS.length];
}

function toStageLabel(kind, indexInKind) {
  return kind === "branch" ? String.fromCharCode(65 + (indexInKind % 26)) : String(indexInKind + 1).padStart(2, "0");
}

function buildStagesFromPaths(roadmapPaths) {
  return roadmapPaths.map((path, index) => ({
    id: path.id,
    title: path.name,
    description: path.description,
    icon: "Layers",
    color: STAGE_COLORS[index % STAGE_COLORS.length],
    kind: "sequence",
    nodes: Array.isArray(path.nodes) ? path.nodes : [],
  }));
}

export function resolveRoadmap(roadmapId, roadmapPaths = []) {
  const config = roadmapStages[roadmapId];
  const aliases = (config && config.aliases) || {};
  const canonical = (id) => aliases[id] || id;
  const sourceStages = config ? config.stages : buildStagesFromPaths(roadmapPaths);
  const placed = new Set();

  const resolved = sourceStages.map((stage, index) => {
    const nodeIds = [];
    (stage.nodes || []).forEach((rawId) => {
      const id = canonical(rawId);
      if (!NODE_MAP.has(id)) {
        warn(`Conhecimento "${rawId}" (etapa "${stage.title}", roadmap "${roadmapId}") não existe em nodes.js.`);
        return;
      }
      if (placed.has(id)) {
        if (rawId === id) warn(`Conhecimento "${id}" aparece em mais de uma etapa do roadmap "${roadmapId}"; mantido só na primeira.`);
        return;
      }
      placed.add(id);
      nodeIds.push(id);
    });
    return {
      id: stage.id,
      title: stage.title,
      description: stage.description,
      icon: stage.icon || "Layers",
      color: normalizeColor(stage.color, index),
      kind: stage.kind === "branch" ? "branch" : "sequence",
      nodeIds,
    };
  }).filter((stage) => stage.nodeIds.length > 0);

  const leftovers = [];
  roadmapPaths.forEach((path) => {
    (Array.isArray(path.nodes) ? path.nodes : []).forEach((rawId) => {
      const id = canonical(rawId);
      if (NODE_MAP.has(id) && !placed.has(id) && !leftovers.includes(id)) leftovers.push(id);
    });
  });

  if (leftovers.length > 0) {
    warn(`Roadmap "${roadmapId}": ${leftovers.length} conhecimento(s) dos paths não estão em nenhuma etapa (${leftovers.join(", ")}). Foram agrupados em "Outros conhecimentos".`);
    leftovers.forEach((id) => placed.add(id));
    resolved.push({
      id: `${roadmapId}-others`,
      title: "Outros conhecimentos",
      description: undefined,
      icon: "Layers",
      color: normalizeColor(undefined, resolved.length),
      kind: "sequence",
      nodeIds: leftovers,
    });
  }

  const counters = { sequence: 0, branch: 0 };
  const stages = resolved.map((stage) => {
    const label = toStageLabel(stage.kind, counters[stage.kind]);
    counters[stage.kind] += 1;
    return { ...stage, label };
  });
  const sequenceStages = stages.filter((stage) => stage.kind === "sequence");
  const branchStages = stages.filter((stage) => stage.kind === "branch");
  const hasBranches = branchStages.length > 0;
  const hasSequence = sequenceStages.length > 0;
  const hasBothGroups = hasBranches && hasSequence;
  const groups = [];

  if (hasSequence) groups.push({
    id: "sequence",
    kind: "sequence",
    title: hasBothGroups ? "Trilha principal" : null,
    description: hasBothGroups ? "Siga as etapas na ordem indicada." : null,
    stages: sequenceStages,
  });
  if (hasBranches) groups.push({
    id: "branch",
    kind: "branch",
    title: hasBothGroups ? "Especializações" : "Caminhos",
    description: "Escolha um caminho conforme seu objetivo. Não existe ordem entre eles.",
    stages: branchStages,
  });

  const stageByNodeId = new Map();
  stages.forEach((stage) => stage.nodeIds.forEach((id) => stageByNodeId.set(id, stage)));

  const seenConnections = new Set();
  const roadmapConnections = connections
    .filter((connection) => connection.roadmapId === roadmapId)
    .map((connection) => ({ ...connection, from: canonical(connection.from), to: canonical(connection.to) }))
    .filter((connection) => {
      if (connection.from === connection.to) return false;
      if (!placed.has(connection.from) || !placed.has(connection.to)) return false;
      const key = `${connection.from}|${connection.to}|${connection.type}`;
      if (seenConnections.has(key)) return false;
      seenConnections.add(key);
      return true;
    });

  return { groups, stages, stageByNodeId, connections: roadmapConnections, nodeCount: placed.size, stageCount: stages.length };
}

export function getConnectionsForNode(nodeId, roadmapConnections, groupsConfig) {
  const known = new Set(groupsConfig.map((group) => group.type));
  const result = groupsConfig.map((group) => {
    const ids = [];
    roadmapConnections.forEach((connection) => {
      if (connection.type !== group.type) return;
      let otherId = null;
      if (connection.from === nodeId && (group.direction === "outgoing" || group.direction === "both")) otherId = connection.to;
      else if (connection.to === nodeId && (group.direction === "incoming" || group.direction === "both")) otherId = connection.from;
      if (otherId && !ids.includes(otherId)) ids.push(otherId);
    });
    return { key: group.key, label: group.label, items: ids.map((id) => NODE_MAP.get(id)).filter(Boolean) };
  });

  const otherIds = [];
  roadmapConnections.forEach((connection) => {
    if (known.has(connection.type)) return;
    if (connection.from === nodeId && !otherIds.includes(connection.to)) otherIds.push(connection.to);
    else if (connection.to === nodeId && !otherIds.includes(connection.from)) otherIds.push(connection.from);
  });
  if (otherIds.length > 0) result.push({ key: "other", label: "Outras conexões", items: otherIds.map((id) => NODE_MAP.get(id)).filter(Boolean) });
  return result.filter((group) => group.items.length > 0);
}
