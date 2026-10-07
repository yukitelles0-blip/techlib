import React, { useMemo, useState } from "react";

import { nodes } from "../data/roadmaps/nodes";
import { connections } from "../data/roadmaps/connections";

const NODE_WIDTH = 190;
const NODE_HEIGHT = 72;

const COLORS = {
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

function getNodeColor(type) {
  return COLORS[type] || "#475569";
}

export default function RoadmapMap({ roadmapId, roadmapPaths }) {
  const [selectedNode, setSelectedNode] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({
    x: 0,
    y: 0,
  });

  const roadmapNodeIds = useMemo(() => {
    const ids = new Set();

    roadmapPaths.forEach((path) => {
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

  const roadmapConnections = useMemo(() => {
    return connections.filter(
      (connection) =>
        roadmapNodeIds.has(connection.from) &&
        roadmapNodeIds.has(connection.to)
    );
  }, [roadmapNodeIds]);

  const positions = useMemo(() => {
    const result = {};

    const columns = [
      100,
      420,
      740,
      1060,
      1380,
    ];

    roadmapPaths.forEach((path, pathIndex) => {
      const x = columns[pathIndex] || 100;

      path.nodes.forEach((nodeId, nodeIndex) => {
        result[nodeId] = {
          x,
          y: 100 + nodeIndex * 130,
        };
      });
    });

    return result;
  }, [roadmapPaths]);

  function getNodePosition(nodeId) {
    return (
      positions[nodeId] || {
        x: 100,
        y: 100,
      }
    );
  }

  function getConnectionPoint(nodeId, side) {
    const position = getNodePosition(nodeId);

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

  function zoomIn() {
    setZoom((current) =>
      Math.min(current + 0.1, 1.8)
    );
  }

  function zoomOut() {
    setZoom((current) =>
      Math.max(current - 0.1, 0.6)
    );
  }

  function resetView() {
    setZoom(1);
    setOffset({
      x: 0,
      y: 0,
    });
  }

  function handleWheel(event) {
    event.preventDefault();

    const direction =
      event.deltaY > 0 ? -0.1 : 0.1;

    setZoom((current) =>
      Math.min(
        Math.max(current + direction, 0.6),
        1.8
      )
    );
  }

  return (
    <div className="roadmap-map-wrapper">

      <div className="roadmap-map-toolbar">

        <div className="roadmap-map-toolbar-info">
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
            onClick={resetView}
          >
            Resetar
          </button>

        </div>
      </div>

      <div
        className="roadmap-map-viewport"
        onWheel={handleWheel}
      >

        <div
          className="roadmap-map-canvas"
          style={{
            transform: `
              translate(${offset.x}px, ${offset.y}px)
              scale(${zoom})
            `,
          }}
        >

          <svg
            className="roadmap-map-connections"
            width="1800"
            height="1500"
          >

            <defs>
              <marker
                id="roadmap-arrow"
                markerWidth="8"
                markerHeight="8"
                refX="7"
                refY="4"
                orient="auto"
              >
                <path
                  d="M0,0 L8,4 L0,8 Z"
                  fill="currentColor"
                />
              </marker>
            </defs>

            {roadmapConnections.map(
              (connection, index) => {

                const from =
                  getConnectionPoint(
                    connection.from,
                    "from"
                  );

                const to =
                  getConnectionPoint(
                    connection.to,
                    "to"
                  );

                const distance =
                  Math.max(
                    80,
                    Math.abs(to.x - from.x) / 2
                  );

                return (
                  <path
                    key={`${connection.from}-${connection.to}-${index}`}
                    d={`
                      M ${from.x} ${from.y}
                      C
                      ${from.x + distance} ${from.y},
                      ${to.x - distance} ${to.y},
                      ${to.x} ${to.y}
                    `}
                    className={`roadmap-connection roadmap-connection-${connection.type}`}
                    markerEnd="url(#roadmap-arrow)"
                  />
                );
              }
            )}

          </svg>

          <div className="roadmap-map-nodes">

            {roadmapNodes.map((node) => {

              const position =
                getNodePosition(node.id);

              const isSelected =
                selectedNode?.id === node.id;

              return (
                <button
                  key={node.id}
                  type="button"
                  className={`roadmap-map-node ${
                    isSelected
                      ? "selected"
                      : ""
                  }`}
                  style={{
                    left: position.x,
                    top: position.y,
                    borderColor:
                      getNodeColor(node.type),
                  }}
                  onClick={() =>
                    setSelectedNode(node)
                  }
                >

                  <span
                    className="roadmap-map-node-type"
                    style={{
                      color:
                        getNodeColor(node.type),
                    }}
                  >
                    {node.type}
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

      {selectedNode && (
        <aside className="roadmap-node-panel">

          <button
            type="button"
            className="roadmap-node-panel-close"
            onClick={() =>
              setSelectedNode(null)
            }
            aria-label="Fechar painel"
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
            {selectedNode.type}
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

          <p>
            Este conhecimento faz parte
            do caminho de aprendizagem
            de {roadmapId}.
          </p>

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
                        node.id ===
                        otherId
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
