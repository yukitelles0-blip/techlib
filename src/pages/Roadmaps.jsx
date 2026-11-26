
import React from "react";
import { Link } from "react-router-dom";
import { roadmaps } from "../data/roadmaps";

export default function Roadmaps() {
  return (
    <section className="roadmaps-page">
      <div className="container">

        <div className="roadmaps-hero">
          <span className="eyebrow">
            🧭 BYTEATLAS · MAPAS DE APRENDIZAGEM
          </span>

          <h1>
            Encontre seu caminho na tecnologia
          </h1>

          <p>
            Explore mapas visuais que conectam conhecimentos,
            tecnologias e possibilidades de especialização.
            Descubra os fundamentos e conheça diferentes caminhos
            para desenvolver suas habilidades.
          </p>
        </div>

        <div className="roadmaps-grid">
          {roadmaps.map((roadmap) => (
            <Link
              key={roadmap.id}
              to={`/roadmaps/${roadmap.id}`}
              className="roadmap-card"
            >
              <div className="roadmap-card-icon">
                {roadmap.icon}
              </div>

              <div className="roadmap-card-content">
                <h2>{roadmap.name}</h2>

                <p>{roadmap.description}</p>

                <span className="roadmap-card-link">
                  Explorar roadmap →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
