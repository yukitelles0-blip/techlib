import React from "react";
import { Link, useParams } from "react-router-dom";

export default function RoadmapDetail() {
  const { id } = useParams();

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
            {id}
          </h1>

          <p>
            Página do roadmap em construção.
          </p>
        </div>

      </div>
    </section>
  );
}
