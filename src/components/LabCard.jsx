import React from "react";

export default function LabCard({ lab }) {
  return (
    <article className="resource-card">
      <div className="card-topline">
        <span className="tag">{lab.category}</span>
        <span className="level">{lab.level}</span>
      </div>

      <div className="resource-icon">{lab.icon}</div>

      <h3>{lab.title}</h3>
      <p>{lab.description}</p>

      <div className="card-meta">
        <span>{lab.type}</span>
        <span>⏱ {lab.duration}</span>
      </div>

      <div className="lab-objective">
        <strong>Objetivo:</strong>
        <span>{lab.objective}</span>
      </div>

      <button className="card-button">
        Iniciar Lab <span>→</span>
      </button>
    </article>
  );
}
