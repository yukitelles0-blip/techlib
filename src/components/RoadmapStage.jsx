import React from "react";

import { getStageIcon } from "../data/roadmaps/roadmapIcons";
import { getNodeById } from "../data/roadmaps/stageUtils";

import RoadmapKnowledgeCard from "./RoadmapKnowledgeCard";

export default function RoadmapStage({
  stage,
  headingLevel = 3,
  selectedNodeId,
  onSelectNode,
}) {
  const StageIcon = getStageIcon(stage.icon);
  const Heading = `h${headingLevel}`;
  const titleId = `rj-stage-title-${stage.id}`;

  return (
    <section
      className="rj-stage"
      data-kind={stage.kind}
      style={{ "--stage": `var(--rj-${stage.color})` }}
      aria-labelledby={titleId}
    >
      <header className="rj-stage-header">
        <span
          className="rj-stage-badge"
          aria-label={
            stage.kind === "branch"
              ? `Especialização ${stage.label}`
              : `Etapa ${stage.label}`
          }
        >
          {stage.label}
        </span>

        <Heading id={titleId} className="rj-stage-title">
          {stage.title}
        </Heading>

        <span className="rj-stage-icon" aria-hidden="true">
          <StageIcon size={20} strokeWidth={1.9} />
        </span>
      </header>

      {stage.description && (
        <p className="rj-stage-description">{stage.description}</p>
      )}

      <ol className="rj-stage-list">
        {stage.nodeIds.map((nodeId) => {
          const node = getNodeById(nodeId);

          if (!node) return null;

          return (
            <li key={nodeId} className="rj-stage-item">
              <RoadmapKnowledgeCard
                node={node}
                selected={selectedNodeId === nodeId}
                onSelect={onSelectNode}
              />
            </li>
          );
        })}
      </ol>
    </section>
  );
}
