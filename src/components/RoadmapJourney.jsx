import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  ArrowIcon,
  getStageIcon,
} from "../data/roadmaps/roadmapIcons";
import { CONNECTION_GROUPS } from "../data/roadmaps/roadmapLabels";
import {
  getConnectionsForNode,
  getNodeById,
  resolveRoadmap,
} from "../data/roadmaps/stageUtils";

import RoadmapStage from "./RoadmapStage";
import RoadmapNodePanel from "./RoadmapNodePanel";

import "./RoadmapJourney.css";

// Quantas colunas cada grupo usa em telas largas.
function getColumnCount(stageCount) {
  if (stageCount <= 5) return Math.max(stageCount, 1);
  if (stageCount === 6) return 3;
  return 4;
}

function findCard(nodeId) {
  const escaped =
    typeof CSS !== "undefined" && CSS.escape ? CSS.escape(nodeId) : nodeId;

  return document.querySelector(`.rj-card[data-node-id="${escaped}"]`);
}

export default function RoadmapJourney({
  roadmapId,
  roadmapPaths = [],
}) {
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [panelSide, setPanelSide] = useState("right");

  const panelRef = useRef(null);
  const returnFocusRef = useRef(null);

  const roadmap = useMemo(
    () => resolveRoadmap(roadmapId, roadmapPaths),
    [roadmapId, roadmapPaths]
  );

  const selectedNode = selectedNodeId ? getNodeById(selectedNodeId) : null;

  const selectedStage = selectedNodeId
    ? roadmap.stageByNodeId.get(selectedNodeId)
    : null;

  const connectionGroups = useMemo(() => {
    if (!selectedNodeId) return [];

    return getConnectionsForNode(
      selectedNodeId,
      roadmap.connections,
      CONNECTION_GROUPS
    );
  }, [selectedNodeId, roadmap.connections]);

  // O painel abre do lado oposto ao cartão clicado, para não cobri-lo.
  const updateSide = useCallback((nodeId) => {
    const card = findCard(nodeId);

    if (!card) return;

    const rect = card.getBoundingClientRect();
    const center = rect.left + rect.width / 2;

    setPanelSide(center > window.innerWidth / 2 ? "left" : "right");
  }, []);

  const handleClose = useCallback(() => {
    setSelectedNodeId(null);

    const target = returnFocusRef.current;

    if (target && typeof target.focus === "function") {
      target.focus();
    }
  }, []);

  const handleSelectFromCard = useCallback(
    (nodeId) => {
      // Clicar no cartão já aberto fecha o painel.
      if (nodeId === selectedNodeId) {
        handleClose();
        return;
      }

      returnFocusRef.current = document.activeElement;
      updateSide(nodeId);
      setSelectedNodeId(nodeId);
    },
    [selectedNodeId, updateSide, handleClose]
  );

  const handleSelectFromPanel = useCallback(
    (nodeId) => {
      updateSide(nodeId);
      setSelectedNodeId(nodeId);

      const card = findCard(nodeId);

      if (card) {
        returnFocusRef.current = card;
        card.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    },
    [updateSide]
  );

  // Foco no painel quando ele abre ou troca de conhecimento.
  useEffect(() => {
    if (selectedNodeId && panelRef.current) {
      panelRef.current.focus({ preventScroll: true });
    }
  }, [selectedNodeId]);

  // Esc fecha o painel; clique fora (em telas largas) também.
  useEffect(() => {
    if (!selectedNodeId) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    function handlePointerDown(event) {
      const target = event.target;

      if (!(target instanceof Element)) return;

      // O fundo escurecido (celular) tem o próprio onClick para fechar.
      if (
        target.closest(".rj-panel") ||
        target.closest(".rj-card") ||
        target.closest(".rj-backdrop")
      ) {
        return;
      }

      handleClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [selectedNodeId, handleClose]);

  if (roadmap.stageCount === 0) {
    return (
      <div className="rj">
        <div className="empty-state">
          Este roadmap ainda não possui conhecimentos cadastrados.
        </div>
      </div>
    );
  }

  const hasMultipleGroups = roadmap.groups.length > 1;

  return (
    <div className="rj">
      <div className="rj-summary">
        <strong>Trilha de aprendizagem</strong>

        <span>
          {roadmap.stageCount}{" "}
          {roadmap.stageCount === 1 ? "etapa" : "etapas"}
        </span>

        <span>{roadmap.nodeCount} conhecimentos</span>
      </div>

      {roadmap.groups.map((group) => {
        const columns = getColumnCount(group.stages.length);
        const showStrip =
          group.kind === "sequence" && group.stages.length > 1;

        return (
          <section
            key={group.id}
            className="rj-group"
            data-kind={group.kind}
          >
            {group.title && (
              <header className="rj-group-head">
                <h3>{group.title}</h3>
                {group.description && <p>{group.description}</p>}
              </header>
            )}

            {showStrip && (
              <ol
                className="rj-strip"
                aria-hidden="true"
                style={{ "--rj-cols": columns }}
              >
                {group.stages.map((stage) => {
                  const StageIcon = getStageIcon(stage.icon);

                  return (
                    <li
                      key={stage.id}
                      style={{ "--stage": `var(--rj-${stage.color})` }}
                    >
                      <span className="rj-strip-icon">
                        <StageIcon size={24} strokeWidth={1.9} />
                      </span>

                      <ArrowIcon
                        className="rj-strip-arrow"
                        size={22}
                        strokeWidth={1.8}
                      />
                    </li>
                  );
                })}
              </ol>
            )}

            <div
              className="rj-grid"
              style={{ "--rj-cols": columns }}
            >
              {group.stages.map((stage) => (
                <RoadmapStage
                  key={stage.id}
                  stage={stage}
                  headingLevel={hasMultipleGroups ? 4 : 3}
                  selectedNodeId={selectedNodeId}
                  onSelectNode={handleSelectFromCard}
                />
              ))}
            </div>
          </section>
        );
      })}

      {selectedNode && (
        <RoadmapNodePanel
          node={selectedNode}
          stage={selectedStage}
          connectionGroups={connectionGroups}
          side={panelSide}
          panelRef={panelRef}
          onClose={handleClose}
          onSelectNode={handleSelectFromPanel}
        />
      )}
    </div>
  );
}
