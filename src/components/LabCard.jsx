import React from "react";
import { Link } from "react-router-dom";
import { isLabCompleted } from "../utils/progress";

export default function LabCard({ lab }) {
  const completed = isLabCompleted(lab.id);

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

      {completed && (
        <div className="lab-completed">
          ✓ Lab concluído
        </div>
      )}

      <Link className="card-button" to={`/labs/${lab.id}`}>
        {completed ? "Revisar Lab" : "Iniciar Lab"} <span>→</span>
      </Link>
    </article>
  );
}
