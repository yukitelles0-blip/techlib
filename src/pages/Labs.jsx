import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import LabCard from "../components/LabCard";
import { labs } from "../data/labs";
import { getProgressStats } from "../utils/progress";

export default function Labs() {
  const [progress, setProgress] = useState(() =>
    getProgressStats(labs.length)
  );

  useEffect(() => {
    const updateProgress = () => {
      setProgress(getProgressStats(labs.length));
    };

    window.addEventListener("storage", updateProgress);

    return () => {
      window.removeEventListener("storage", updateProgress);
    };
  }, []);

  return (
    <section className="section container page-section">
      <SectionTitle
        eyebrow="LABS PRÁTICOS"
        title="Aprenda colocando a mão na massa"
        text="Pratique conceitos de tecnologia por meio de atividades guiadas e cenários práticos."
      />

      <div className="results-line">
        <span>
          <strong>{labs.length}</strong> labs disponíveis
        </span>

        <span>
          <strong>{progress.completed}</strong> de {progress.total} concluídos
        </span>
      </div>

      <div className="lab-progress">
        <div className="lab-progress-header">
          <strong>Seu progresso</strong>
          <span>{progress.percentage}%</span>
        </div>

        <div
          className="lab-progress-bar"
          role="progressbar"
          aria-valuenow={progress.percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="lab-progress-fill"
            style={{ width: `${progress.percentage}%` }}
          />
        </div>
      </div>

      <div className="card-grid">
        {labs.map((lab) => (
          <LabCard key={lab.id} lab={lab} />
        ))}
      </div>
    </section>
  );
}
