import React from "react";
import SectionTitle from "../components/SectionTitle";
import LabCard from "../components/LabCard";
import { labs } from "../data/labs";

export default function Labs() {
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
      </div>

      <div className="card-grid">
        {labs.map((lab) => (
          <LabCard key={lab.id} lab={lab} />
        ))}
      </div>
    </section>
  );
}
