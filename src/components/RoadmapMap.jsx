import React, { useMemo, useState } from "react";

import { nodes } from "../data/roadmaps/nodes";
import { connections } from "../data/roadmaps/connections";

const NODE_WIDTH = 220;
const NODE_HEIGHT = 90;

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

function getNodeLabel(type) {
  const labels = {
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

  return labels[type] || type;
}

export default function RoadmapMap({
  roadmapId,
  roadmapPaths = [],
}) {
  const [selectedNode, setSelectedNode] = useState(null);
  const [zoom, setZoom] = useState(1);

  /*
   * =========================================================
   * NODES DO ROADMAP
   * =========================================================
   */

  const roadmapNodeIds = useMemo(() => {
    const ids = new Set();

    roadmapPaths.forEach((path) => {
      if (!Array.isArray(path.nodes)) {
        return;
      }

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

  /*
   * =========================================================
   * CONNECTIONS
   * =========================================================
   */

  const roadmapConnections = useMemo(() => {
    return connections.filter(
      (connection) =>
        roadmapNodeIds.has(connection.from) &&
        roadmapNodeIds.has(connection.to)
    );
  }, [roadmapNodeIds]);

  /*
   * =========================================================
   * POSIÇÕES
   *
   * Cada PATH vira uma coluna.
   * =========================================================
   */

  const positions = useMemo(() => {
    const result = {};

    const columnWidth = 340;
    const rowHeight = 150;

    roadmapPaths.forEach((path, pathIndex) => {
      if (!Array.isArray(path.nodes)) {
        return;
      }

      path.nodes.forEach((nodeId, nodeIndex) => {
        /*
         * Não sobrescreve uma posição já existente.
         *
         * Isso evita que um mesmo node apareça
         * em posições diferentes quando pertence
         * a mais de um caminho.
         */
        if (!result[nodeId]) {
          result[nodeId] = {
            x: 80 + pathIndex * columnWidth,
            y: 80 + nodeIndex * rowHeight,
          };
        }
      });
    });

    return result;
  }, [roadmapPaths]);

  function getPosition(nodeId) {
    return (
      positions[nodeId] || {
        x: 80,
        y: 80,
      }
    );
  }

  /*
   * =========================================================
   * CONEXÕES SVG
   * =========================================================
   */

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

  function createConnectionPath(connection) {
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

  /*
   * =========================================================
   * ZOOM
   * =========================================================
   */

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

  function resetZoom() {
    setZoom(1);
  }

  /*
   * =========================================================
   * DIMENSÕES DO MAPA
   * =========================================================
   */

  const mapWidth = Math.max(
    1200,
    roadmapPaths.length * 340 + 200
  );

  const mapHeight = Math.max(
    900,
    roadmapNodes.length * 120
  );

  /*
   * =========================================================
   * RENDER
   * =========================================================
   */

  return (
    <section
      style={{
        marginTop: "32px",
        border: "1px solid #e2e8f0",
        borderRadius: "20px",
        background: "#f8fafc",
        overflow: "hidden",
      }}
    >
      {/* =====================================================
          TOOLBAR
      ===================================================== */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          padding: "16px 20px",
          borderBottom: "1px solid #e2e8f0",
          background: "#ffffff",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <strong>
            🧭 Mapa de aprendizagem
          </strong>

          <span>
            {roadmapNodes.length} conhecimentos
          </span>

          <span>
            {roadmapConnections.length} conexões
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <button
            type="button"
            onClick={zoomOut}
            style={{
              width: "36px",
              height: "36px",
              border: "1px solid #cbd5e1",
              borderRadius: "8px",
              background: "#ffffff",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            −
          </button>

          <span
            style={{
              minWidth: "55px",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            {Math.round(zoom * 100)}%
          </span>

          <button
            type="button"
            onClick={zoomIn}
            style={{
              width: "36px",
              height: "36px",
              border: "1px solid #cbd5e1",
              borderRadius: "8px",
              background: "#ffffff",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            +
          </button>

          <button
            type="button"
            onClick={resetZoom}
            style={{
              height: "36px",
              padding: "0 12px",
              border: "1px solid #cbd5e1",
              borderRadius: "8px",
              background: "#ffffff",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Resetar
          </button>
        </div>
      </div>

      {/* =====================================================
          MAPA
      ===================================================== */}

      <div
        style={{
          width: "100%",
          height: "700px",
          overflow: "auto",
          position: "relative",
          background:
            "radial-gradient(circle, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: `${mapWidth * zoom}px`,
            height: `${mapHeight * zoom}px`,
            minWidth: `${mapWidth}px`,
            minHeight: `${mapHeight}px`,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${mapWidth}px`,
              height: `${mapHeight}px`,
              transform: `scale(${zoom})`,
              transformOrigin: "top left",
            }}
          >
            {/* =================================================
                SVG DAS CONEXÕES
            ================================================= */}

            <svg
              width={mapWidth}
              height={mapHeight}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
                overflow: "visible",
              }}
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
                    fill="#94a3b8"
                  />
                </marker>
              </defs>

              {roadmapConnections.map(
                (connection, index) => (
                  <path
                    key={`${connection.from}-${connection.to}-${index}`}
                    d={createConnectionPath(
                      connection
                    )}
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    markerEnd={`url(#roadmap-arrow-${roadmapId})`}
                  />
                )
              )}
            </svg>

            {/* =================================================
                NODES
            ================================================= */}

            {roadmapNodes.map((node) => {
              const position = getPosition(
                node.id
              );

              const color = getNodeColor(
                node.type
              );

              const selected =
                selectedNode?.id === node.id;

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() =>
                    setSelectedNode(node)
                  }
                  style={{
                    position: "absolute",
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: `${NODE_WIDTH}px`,
                    minHeight: `${NODE_HEIGHT}px`,
                    padding: "12px 14px",
                    border: `2px solid ${color}`,
                    borderRadius: "14px",
                    background: "#ffffff",
                    boxShadow: selected
                      ? `0 0 0 4px ${color}22, 0 8px 20px rgba(15,23,42,.12)`
                      : "0 4px 12px rgba(15,23,42,.08)",
                    cursor: "pointer",
                    textAlign: "left",
                    transition:
                      "transform .15s ease, box-shadow .15s ease",
                    zIndex: selected ? 10 : 2,
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      marginBottom: "5px",
                      color,
                      fontSize: "11px",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      letterSpacing: ".05em",
                    }}
                  >
                    {getNodeLabel(node.type)}
                  </span>

                  <strong
                    style={{
                      display: "block",
                      color: "#0f172a",
                      fontSize: "15px",
                      lineHeight: "1.3",
                    }}
                  >
                    {node.name}
                  </strong>

                  <span
                    style={{
                      display: "block",
                      marginTop: "5px",
                      color: "#64748b",
                      fontSize: "12px",
                    }}
                  >
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

      <div
        style={{
          display: "flex",
          gap: "14px",
          flexWrap: "wrap",
          padding: "16px 20px",
          borderTop: "1px solid #e2e8f0",
          background: "#ffffff",
        }}
      >
        {Object.entries(COLORS).map(
          ([type, color]) => (
            <div
              key={type}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                color: "#475569",
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: color,
                }}
              />

              {getNodeLabel(type)}
            </div>
          )
        )}
      </div>

      {/* =====================================================
          PAINEL DO NODE
      ===================================================== */}

      {selectedNode && (
        <aside
          style={{
            position: "relative",
            padding: "24px",
            borderTop: "1px solid #e2e8f0",
            background: "#ffffff",
          }}
        >
          <button
            type="button"
            onClick={() =>
              setSelectedNode(null)
            }
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              width: "34px",
              height: "34px",
              border: "1px solid #cbd5e1",
              borderRadius: "8px",
              background: "#ffffff",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            ×
          </button>

          <span
            style={{
              color: getNodeColor(
                selectedNode.type
              ),
              fontSize: "12px",
              fontWeight: "700",
              textTransform: "uppercase",
            }}
          >
            {getNodeLabel(
              selectedNode.type
            )}
          </span>

          <h2
            style={{
              margin:
                "6px 50px 8px 0",
              color: "#0f172a",
            }}
          >
            {selectedNode.name}
          </h2>

          <p
            style={{
              margin: "0 0 12px",
              color: "#64748b",
            }}
          >
            Nível: {selectedNode.level}
          </p>

          <p
            style={{
              margin: 0,
              color: "#475569",
            }}
          >
            Área: {selectedNode.area}
          </p>

          <div
            style={{
              marginTop: "20px",
            }}
          >
            <strong>
              Conexões
            </strong>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginTop: "10px",
              }}
            >
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
                        (item) =>
                          item.id ===
                          otherId
                      );

                    if (!otherNode) {
                      return null;
                    }

                    return (
                      <div
                        key={`${connection.from}-${connection.to}-${index}`}
                        style={{
                          padding:
                            "10px 12px",
                          border:
                            "1px solid #e2e8f0",
                          borderRadius:
                            "10px",
                          background:
                            "#f8fafc",
                        }}
                      >
                        <span
                          style={{
                            display:
                              "block",
                            color:
                              "#64748b",
                            fontSize:
                              "11px",
                            textTransform:
                              "uppercase",
                          }}
                        >
                          {
                            connection.type
                          }
                        </span>

                        <strong>
                          {
                            otherNode.name
                          }
                        </strong>
                      </div>
                    );
                  }
                )}
            </div>
          </div>
        </aside>
      )}
    </section>
  );
}
