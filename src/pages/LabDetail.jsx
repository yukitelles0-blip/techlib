import React from "react";
import { Link, useParams } from "react-router-dom";
import { labs } from "../data/labs";
import LabActivity from "../components/LabActivity";
import PhishingActivity from "../components/PhishingActivity";
import NetworkActivity from "../components/NetworkActivity";
import LinuxActivity from "../components/LinuxActivity";
import PythonActivity from "../components/PythonActivity";
import SQLActivity from "../components/SQLActivity";
import WebActivity from "../components/WebActivity";
import DockerActivity from "../components/DockerActivity";
import IPInvestigationActivity from "../components/IPInvestigationActivity";
import SecurityInvestigationActivity from "../components/SecurityInvestigationActivity";

export default function LabDetail() {
  const { id } = useParams();

  const lab = labs.find((item) => item.id === Number(id));

  if (!lab) {
    return (
      <section className="section container page-section">
        <div className="empty-page">
          <span>🔎</span>
          <h1>Lab não encontrado</h1>
          <p>O laboratório que você tentou acessar não existe.</p>

          <Link className="primary-button" to="/labs">
            Voltar para Labs
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section container page-section">
      <div className="lab-detail">
        <Link className="text-link" to="/labs">
          ← Voltar para Labs
        </Link>

        <div className="lab-detail-header">
          <span className="resource-icon">{lab.icon}</span>

          <div>
            <span className="tag">{lab.category}</span>
            <span className="level">{lab.level}</span>

            <h1>{lab.title}</h1>

            <p>{lab.description}</p>
          </div>
        </div>

        <div className="lab-detail-info">
          <div>
            <strong>Tipo</strong>
            <span>{lab.type}</span>
          </div>

          <div>
            <strong>Duração</strong>
            <span>⏱ {lab.duration}</span>
          </div>

          <div>
            <strong>Objetivo</strong>
            <span>{lab.objective}</span>
          </div>
        </div>

        {lab.id === 1 && <LabActivity />}
        {lab.id === 2 && <PhishingActivity />}
        {lab.id === 3 && <NetworkActivity />}
        {lab.id === 4 && <LinuxActivity />}
        {lab.id === 5 && <PythonActivity />}
        {lab.id === 6 && <SQLActivity />}
        {lab.id === 7 && <WebActivity />}
        {lab.id === 8 && <DockerActivity />}
        {lab.id === 9 && <IPInvestigationActivity />}
        {lab.id === 10 && <SecurityInvestigationActivity />}
      </div>
    </section>
  );
}
