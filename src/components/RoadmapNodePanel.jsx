import React from "react";
import { X } from "lucide-react";

import { getTypeIcon } from "../data/roadmaps/roadmapIcons";
import {
  getAreaLabel,
  getLevelLabel,
  getTypeLabel,
} from "../data/roadmaps/roadmapLabels";

export default function RoadmapNodePanel({
  node,
  stage,
  connectionGroups,
  side = "right",
  panelRef,
  onClose,
  onSelectNode,
}) {
  if (!node) return null;

  const TypeIcon = getTypeIcon(node.type);

  const stageText = stage
    ? `${stage.kind === "branch" ? "Especialização" : "Etapa"} ${stage.label} · ${stage.title}`
    : null;

  const resources = Array.isArray(node.resources) ? node.resources : [];
  const tags = Array.isArray(node.tags) ? node.tags.slice(0, 6) : [];

  return (
    <>
      <div className="rj-backdrop" onClick={onClose} aria-hidden="true" />

      <aside
        id="rj-panel"
        ref={panelRef}
        className="rj-panel"
        data-side={side}
        role="dialog"
        aria-modal="false"
        aria-labelledby="rj-panel-title"
        tabIndex={-1}
        style={
          stage ? { "--stage": `var(--rj-${stage.color})` } : undefined
        }
      >
        <button
          type="button"
          className="rj-panel-close"
          onClick={onClose}
          aria-label="Fechar detalhes"
        >
          <X size={18} strokeWidth={2} />
        </button>

        {stageText && <span className="rj-panel-stage">{stageText}</span>}

        <div className="rj-panel-title-row">
          <span className="rj-panel-icon" aria-hidden="true">
            <TypeIcon size={22} strokeWidth={1.9} />
          </span>

          <h2 id="rj-panel-title">{node.name}</h2>
        </div>

        <div className="rj-panel-chips">
          <span>{getTypeLabel(node.type)}</span>
          <span>Nível: {getLevelLabel(node.level)}</span>
          {node.area && <span>Área: {getAreaLabel(node.area)}</span>}
        </div>

        {node.description && (
          <p className="rj-panel-description">{node.description}</p>
        )}

        {resources.length > 0 && (
          <div className="rj-panel-section">
            <h3>Recursos relacionados</h3>

            <ul className="rj-panel-resources">
              {resources.map((resource, index) => (
                <li key={`${resource.url || resource.title}-${index}`}>
                  {resource.url ? (
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {resource.title || resource.url}
                    </a>
                  ) : (
                    <span>{resource.title}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {connectionGroups.length > 0 && (
          <div className="rj-panel-section">
            <h3>Conexões</h3>

            {connectionGroups.map((group) => (
              <div key={group.key} className="rj-panel-group">
                <span className="rj-panel-group-label">{group.label}</span>

                <ul>
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        className="rj-panel-link"
                        onClick={() => onSelectNode(item.id)}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {tags.length > 0 && (
          <div className="rj-panel-section">
            <h3>Tags</h3>

            <ul className="rj-panel-tags">
              {tags.map((tag) => (
                <li key={tag}>{tag.replace(/-/g, " ")}</li>
              ))}
            </ul>
          </div>
        )}
      </aside>
    </>
  );
}
