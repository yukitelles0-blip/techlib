import React from "react";
import SectionTitle from "../components/SectionTitle";
import { tracks } from "../data/tracks";

export default function Tracks() {
  return (
    <section className="section container page-section">
      <SectionTitle
        eyebrow="TRILHAS"
        title="Não sabe por onde começar?"
        text="Escolha uma direção e siga uma sequência de assuntos para construir sua base."
      />

      <div className="tracks-page-grid">
        {tracks.map((track) => (
          <article className="full-track-card" key={track.id}>
            <div className="track-header">
              <span className="track-icon">{track.icon}</span>

              <div>
                <span className="tag">{track.category}</span>

                <h2>{track.title}</h2>

                <p>{track.description}</p>
              </div>
            </div>

            <div className="timeline">
              {track.steps.map((step, index) => (
                <div className="timeline-item" key={step}>
                  <span className="timeline-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{step}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}