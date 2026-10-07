import React from "react";
import { Link, useParams } from "react-router-dom";

import { roadmaps } from "../data/roadmaps";
import { paths } from "../data/roadmaps/paths";

import RoadmapMap from "../components/RoadmapMap";

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

            <h1>
              Roadmap não encontrado
            </h1>

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

        <div className="roadmap-section-heading">

          <span className="eyebrow">
            MAPA INTERATIVO
          </span>

          <h2>
            Sua jornada de aprendizagem
          </h2>

          <p>
            Explore os conhecimentos, tecnologias
            e conexões que fazem parte deste caminho.
            Clique em um conhecimento para ver mais detalhes.
          </p>

        </div>

        <RoadmapMap
          roadmapId={id}
          roadmapPaths={roadmapPaths}
        />

      </div>

    </section>
  );
}
