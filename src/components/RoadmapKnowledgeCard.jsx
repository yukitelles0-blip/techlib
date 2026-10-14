import React from "react";

import { getTypeIcon } from "../data/roadmaps/roadmapIcons";
import {
  getLevelLabel,
  getTypeLabel,
} from "../data/roadmaps/roadmapLabels";

export default function RoadmapKnowledgeCard({
  node,
  selected = false,
  onSelect,
}) {
  const TypeIcon = getTypeIcon(node.type);

  return (
    <button
      type="button"
      className={`rj-card${selected ? " is-selected" : ""}`}
      data-node-id={node.id}
      aria-expanded={selected}
      aria-controls="rj-panel"
      onClick={() => onSelect(node.id)}
    >
      <span className="rj-card-icon" aria-hidden="true">
        <TypeIcon size={20} strokeWidth={1.9} />
      </span>

      <span className="rj-card-body">
        <span className="rj-card-name">{node.name}</span>

        <span className="rj-card-meta">
          <span>{getTypeLabel(node.type)}</span>
          <span className="rj-card-meta-sep" aria-hidden="true">
            ·
          </span>
          <span className="rj-card-level" data-level={node.level}>
            {getLevelLabel(node.level)}
          </span>
        </span>
      </span>
    </button>
  );
}
