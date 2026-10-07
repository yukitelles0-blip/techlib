import React from "react";
import { Link, useParams } from "react-router-dom";

import { roadmaps } from "../data/roadmaps";
import { paths } from "../data/roadmaps/paths";
import { nodes } from "../data/roadmaps/nodes";

export default function RoadmapDetail() {
  const { id } = useParams();

  const roadmap = roadmaps.find(
    (item) => item.id === id
  );

  const roadmapPaths = paths.filter(
    (path) => path.roadmapId === id
  );

  if (!roadmap) {
    return (
      <section className="roadmap-detail-page">
        <div className="container">
          <Link
            to="/roadmaps"
            className="roadmap-back-link"
          >
            ← Voltar para Roadmaps
          </Link>

          <div className="roadmap-detail-hero">
            <span className="eyebrow">
              ROADMAP
            </span>

            <h1>Roadmap não encontrado</h1>

            <p>
              O roadmap solicitado não existe.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="roadmap-detail-page">
      <div className="container">

        <Link
          to="/roadmaps"
          className="roadmap-back-link"
        >
          ← Voltar para Roadmaps
        </Link>

        <div className="roadmap-detail-hero">
          <span className="eyebrow">
            {roadmap.icon} ROADMAP
          </span>

          <h1>
            {roadmap.name}
          </h1>

          <p>
            {roadmap.description}
          </p>
        </div>

        <div className="roadmap-paths">

          <div className="roadmap-section-heading">
            <span className="eyebrow">
              CAMINHOS DE APRENDIZADO
            </span>

            <h2>
              Escolha um caminho
            </h2>

            <p>
              Explore os conhecimentos e tecnologias
              organizados para esta área.
            </p>
          </div>

          <div className="roadmap-paths-grid">

            {roadmapPaths.map((path, index) => {

              const pathNodes = path.nodes
                .map((nodeId) =>
                  nodes.find(
                    (node) => node.id === nodeId
                  )
                )
                .filter(Boolean);

              return (
                <article
                  key={path.id}
                  className="roadmap-path-card"
                >

                  <div className="roadmap-path-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="roadmap-path-card-content">

                    <h3>
                      {path.name}
                    </h3>

                    <p>
                      {path.description}
                    </p>

                    <div className="roadmap-path-nodes">

                      {pathNodes.map((node) => (
                        <div
                          key={node.id}
                          className="roadmap-node-card"
                        >
                          <div className="roadmap-node-card-header">

                            <h4>
                              {node.name}
                            </h4>

                            <span className="roadmap-node-level">
                              {node.level}
                            </span>

                          </div>

                          <span className="roadmap-node-type">
                            {node.type}
                          </span>

                        </div>
                      ))}

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
