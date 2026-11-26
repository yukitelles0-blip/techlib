
import React from "react";
import { Link, useParams } from "react-router-dom";

import { roadmaps } from "../data/roadmaps";
import { paths } from "../data/roadmaps/paths";

import RoadmapJourney from "../components/RoadmapJourney";

export default function RoadmapDetail() {
  const { id } = useParams();

  const roadmap = roadmaps.find((item) => item.id === id);
  const roadmapPaths = paths.filter((path) => path.roadmapId === id);

  if (!roadmap) {
    return (
      <section className="roadmap-detail-page">
        <div className="container">
          <Link to="/roadmaps" className="roadmap-back-link">
            ← Voltar para Roadmaps
          </Link>

          <div className="roadmap-detail-hero">
            <span className="eyebrow">BYTEATLAS · ROADMAPS</span>
            <h1>Roadmap não encontrado</h1>
            <p>
              O caminho de aprendizagem que você procura não está disponível.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="roadmap-detail-page">
      <div className="container">
        <Link to="/roadmaps" className="roadmap-back-link">
          ← Voltar para Roadmaps
        </Link>

        <div className="roadmap-detail-hero">
          <span className="eyebrow">{roadmap.icon} ROADMAP BYTEATLAS</span>
          <h1>{roadmap.name}</h1>
          <p>{roadmap.description}</p>
        </div>

        <div className="roadmap-section-heading">
          <span className="eyebrow">CAMINHO DE APRENDIZAGEM</span>
          <h2>Explore sua jornada de aprendizagem</h2>
          <p>
            Conheça as etapas deste roadmap e avance no seu próprio ritmo.
            Clique em um conhecimento para consultar seus detalhes e descobrir
            conexões com outros assuntos.
          </p>
        </div>

        <RoadmapJourney
          key={id}
          roadmapId={id}
          roadmapPaths={roadmapPaths}
        />
      </div>
    </section>
  );
}
