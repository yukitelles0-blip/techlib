import React from "react";
import { Link } from "react-router-dom";
import { roadmaps } from "../data/roteiros";

export default function Roadmaps() {
  return (
    <section className="roadmaps-page">
      <div className="container">

        <div className="roadmaps-hero">
          <span className="eyebrow">
            🧭 MAPAS DE APRENDIZADO
          </span>

          <h1>
            Encontre seu caminho na tecnologia
          </h1>

          <p>
            Roadmaps visuais para orientar sua jornada,
            começando pelos fundamentos e avançando para
            diferentes caminhos e especializações.
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

                <p>
                  {roadmap.description}
                </p>

                <span className="roadmap-card-link">
                  Explorar roadmap
                  <span aria-hidden="true"> →</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
