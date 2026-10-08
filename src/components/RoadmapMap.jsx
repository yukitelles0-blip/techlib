import React, { useMemo, useState } from "react";

import { nodes } from "../data/roadmaps/nodes";
import { connections } from "../data/roadmaps/connections";

const NODE_WIDTH = 190;
const NODE_HEIGHT = 76;

const NODE_COLORS = {
  foundation: "#2563eb",
  concept: "#7c3aed",
  technology: "#0891b2",
  tool: "#059669",
  language: "#d97706",
  framework: "#db2777",
  specialization: "#dc2626",
  platform: "#4f46e5",
  service: "#0f766e",
  organization: "#475569",
};

const NODE_LABELS = {
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

function getNodeColor(type) {
  return NODE_COLORS[type] || "#475569";
}

function getNodeLabel(type) {
  return NODE_LABELS[type] || type;
}

export default function RoadmapMap({
  roadmapId,
  roadmapPaths = [],
}) {
  const [selectedNode, setSelectedNode] = useState(null);
  const [zoom, setZoom] = useState(1);

  // =========================================================
  // NÓS DO ROADMAP
  // =========================================================

  const roadmapNodeIds = useMemo(() => {
    const ids = new Set();

    roadmapPaths.forEach((path) => {
      if (!Array.isArray(path.nodes)) return;

      path.nodes.forEach((nodeId) => {
        ids.add(nodeId);
      });
    });

    return ids;
  }, [roadmapPaths]);

  const roadmapNodes = useMemo(() => {
    return nodes.filter((node) =>
      roadmapNodeIds.has(node.id)
    );
  }, [roadmapNodeIds]);

  // =========================================================
  // CONEXÕES DO ROADMAP
  // =========================================================

  const roadmapConnections = useMemo(() => {
    return connections.filter(
      (connection) =>
        connection.roadmapId === roadmapId &&
        roadmapNodeIds.has(connection.from) &&
        roadmapNodeIds.has(connection.to)
    );
  }, [roadmapId, roadmapNodeIds]);

  // =========================================================
  // POSIÇÕES
  // =========================================================

  const positions = useMemo(() => {
    const result = {};

    const columnWidth = 300;
    const rowHeight = 125;

    roadmapPaths.forEach((path, pathIndex) => {
      if (!Array.isArray(path.nodes)) return;

      path.nodes.forEach((nodeId, nodeIndex) => {
        if (result[nodeId]) return;

        result[nodeId] = {
          x: 60 + pathIndex * columnWidth,
          y: 60 + nodeIndex * rowHeight,
        };
      });
    });

    return result;
  }, [roadmapPaths]);

  function getPosition(nodeId) {
    return (
      positions[nodeId] || {
        x: 60,
        y: 60,
      }
    );
  }

  // =========================================================
  // CONEXÕES
  // =========================================================

  function getConnectionPoint(nodeId, side) {
    const position = getPosition(nodeId);

    if (side === "from") {
      return {
        x: position.x + NODE_WIDTH,
        y: position.y + NODE_HEIGHT / 2,
      };
    }

    return {
      x: position.x,
      y: position.y + NODE_HEIGHT / 2,
    };
  }

  function getConnectionPath(connection) {
    const from = getConnectionPoint(
      connection.from,
      "from"
    );

    const to = getConnectionPoint(
      connection.to,
      "to"
    );

    const distance = Math.max(
      60,
      Math.abs(to.x - from.x) / 2
    );

    return `
      M ${from.x} ${from.y}
      C
      ${from.x + distance} ${from.y},
      ${to.x - distance} ${to.y},
      ${to.x} ${to.y}
    `;
  }

  // =========================================================
  // ZOOM
  // =========================================================

  function zoomIn() {
    setZoom((current) =>
      Math.min(current + 0.1, 1.6)
    );
  }

  function zoomOut() {
    setZoom((current) =>
      Math.max(current - 0.1, 0.7)
    );
  }

  function resetZoom() {
    setZoom(1);
  }

  // =========================================================
  // DIMENSÕES
  // =========================================================

  const mapWidth = Math.max(
    1200,
    roadmapPaths.length * 300 + 160
  );

  const largestPath = roadmapPaths.reduce(
    (largest, path) =>
      Math.max(
        largest,
        Array.isArray(path.nodes)
          ? path.nodes.length
          : 0
      ),
    0
  );

  const mapHeight = Math.max(
    750,
    largestPath * 125 + 140
  );

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="roadmap-map-wrapper">

      {/* =====================================================
          TOOLBAR
      ===================================================== */}

      <div className="roadmap-map-toolbar">

        <div className="roadmap-map-toolbar-info">

          <div>
            <strong>
              🧭 Mapa de aprendizagem
            </strong>
          </div>

          <span>
            {roadmapNodes.length} conhecimentos
          </span>

          <span>
            {roadmapConnections.length} conexões
          </span>

        </div>

        <div className="roadmap-map-controls">

          <button
            type="button"
            onClick={zoomOut}
            aria-label="Diminuir zoom"
          >
            −
          </button>

          <span>
            {Math.round(zoom * 100)}%
          </span>

          <button
            type="button"
            onClick={zoomIn}
            aria-label="Aumentar zoom"
          >
            +
          </button>

          <button
            type="button"
            onClick={resetZoom}
          >
            Resetar
          </button>

        </div>

      </div>

      {/* =====================================================
          VIEWPORT
      ===================================================== */}

      <div className="roadmap-map-viewport">

        <div
          className="roadmap-map-canvas"
          style={{
            width: `${mapWidth}px`,
            height: `${mapHeight}px`,
            transform: `scale(${zoom})`,
            transformOrigin: "top left",
          }}
        >

          {/* =================================================
              CONEXÕES
          ================================================= */}

          <svg
            className="roadmap-map-connections"
            width={mapWidth}
            height={mapHeight}
          >

            <defs>

              <marker
                id={`roadmap-arrow-${roadmapId}`}
                markerWidth="8"
                markerHeight="8"
                refX="7"
                refY="4"
                orient="auto"
              >
                <path
                  d="M0,0 L8,4 L0,8 Z"
                />
              </marker>

            </defs>

            {roadmapConnections.map(
              (connection, index) => (
                <path
                  key={`${connection.from}-${connection.to}-${index}`}
                  d={getConnectionPath(connection)}
                  className={`roadmap-connection roadmap-connection-${connection.type}`}
                  markerEnd={`url(#roadmap-arrow-${roadmapId})`}
                />
              )
            )}

          </svg>

          {/* =================================================
              NÓS
          ================================================= */}

          <div className="roadmap-map-nodes">

            {roadmapNodes.map((node) => {

              const position =
                getPosition(node.id);

              const color =
                getNodeColor(node.type);

              const selected =
                selectedNode?.id === node.id;

              return (
                <button
                  key={node.id}
                  type="button"
                  className={`roadmap-map-node ${
                    selected
                      ? "selected"
                      : ""
                  }`}
                  style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    "--node-color": color,
                  }}
                  onClick={() =>
                    setSelectedNode(node)
                  }
                >

                  <span className="roadmap-map-node-type">
                    {getNodeLabel(node.type)}
                  </span>

                  <strong>
                    {node.name}
                  </strong>

                  <span className="roadmap-map-node-level">
                    {node.level}
                  </span>

                </button>
              );
            })}

          </div>

        </div>

      </div>

      {/* =====================================================
          LEGENDA
      ===================================================== */}

      <div className="roadmap-map-legend">

        {Object.entries(NODE_LABELS).map(
          ([type, label]) => (
            <span
              key={type}
              className="roadmap-map-legend-item"
            >

              <span
                className="roadmap-map-legend-dot"
                style={{
                  backgroundColor:
                    getNodeColor(type),
                }}
              />

              {label}

            </span>
          )
        )}

      </div>

      {/* =====================================================
          PAINEL DO NÓ
      ===================================================== */}

      {selectedNode && (

        <aside className="roadmap-node-panel">

          <button
            type="button"
            className="roadmap-node-panel-close"
            onClick={() =>
              setSelectedNode(null)
            }
            aria-label="Fechar detalhes"
          >
            ×
          </button>

          <span
            className="eyebrow"
            style={{
              color:
                getNodeColor(
                  selectedNode.type
                ),
            }}
          >
            {getNodeLabel(
              selectedNode.type
            )}
          </span>

          <h2>
            {selectedNode.name}
          </h2>

          <div className="roadmap-node-panel-meta">

            <span>
              Nível: {selectedNode.level}
            </span>

            <span>
              Área: {selectedNode.area}
            </span>

          </div>

          {selectedNode.description && (
            <p>
              {selectedNode.description}
            </p>
          )}

          <div className="roadmap-node-panel-connections">

            <h3>
              Conexões
            </h3>

            {roadmapConnections
              .filter(
                (connection) =>
                  connection.from ===
                    selectedNode.id ||
                  connection.to ===
                    selectedNode.id
              )
              .map(
                (connection, index) => {

                  const otherId =
                    connection.from ===
                    selectedNode.id
                      ? connection.to
                      : connection.from;

                  const otherNode =
                    nodes.find(
                      (node) =>
                        node.id === otherId
                    );

                  if (!otherNode) {
                    return null;
                  }

                  return (
                    <div
                      key={`${connection.from}-${connection.to}-${index}`}
                      className="roadmap-node-panel-connection"
                    >

                      <span>
                        {connection.type}
                      </span>

                      <strong>
                        {otherNode.name}
                      </strong>

                    </div>
                  );
                }
              )}

          </div>

        </aside>

      )}

    </div>
  );
}
