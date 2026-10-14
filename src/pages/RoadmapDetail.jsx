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
            <span className="eyebrow">ROADMAP</span>
            <h1>Roadmap não encontrado</h1>
            <p>O roadmap solicitado não existe.</p>
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
          <span className="eyebrow">{roadmap.icon} ROADMAP</span>
          <h1>{roadmap.name}</h1>
          <p>{roadmap.description}</p>
        </div>

        <div className="roadmap-section-heading">
          <span className="eyebrow">TRILHA DE APRENDIZAGEM</span>
          <h2>Sua jornada de aprendizagem</h2>
          <p>
            Siga as etapas do roadmap, uma de cada vez. Clique em um
            conhecimento para ver seus detalhes e as conexões com outros
            assuntos.
          </p>
        </div>

        <RoadmapJourney key={id} roadmapId={id} roadmapPaths={roadmapPaths} />
      </div>
    </section>
  );
}
