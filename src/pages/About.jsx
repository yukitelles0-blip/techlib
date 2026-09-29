import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="section container page-section about-page">
      <div className="about-hero">
        <span className="eyebrow">SOBRE O PROJETO</span>

        <h1>Conhecimento Tech em um só lugar.</h1>

        <p>
          O TechLib nasceu com uma proposta simples: facilitar a descoberta de
          materiais, cursos e caminhos de aprendizagem para estudantes e
          profissionais da comunidade Tech.
        </p>
      </div>

      <div className="about-grid">
        <article>
          <span>🎯</span>
          <h2>Objetivo</h2>
          <p>
            Organizar recursos que normalmente ficam espalhados por diferentes
            sites e plataformas.
          </p>
        </article>

        <article>
          <span>🎓</span>
          <h2>Educação</h2>
          <p>
            Dar destaque a oportunidades gratuitas e conteúdos que possam
            ajudar quem está começando.
          </p>
        </article>

        <article>
          <span>🤝</span>
          <h2>Comunidade</h2>
          <p>
            Construir uma base que possa crescer com indicações e contribuições
            da própria comunidade.
          </p>
        </article>
      </div>

      <div className="about-callout">
        <div>
          <span className="eyebrow">PRÓXIMA EVOLUÇÃO</span>

          <h2>De catálogo para comunidade.</h2>

          <p>
            Futuramente o projeto poderá receber sugestões de materiais,
            favoritos, acompanhamento de trilhas e um banco de dados.
          </p>
        </div>

        <Link className="primary-button" to="/biblioteca">
          Explorar agora →
        </Link>
      </div>

      <div className="curation-note">
        <strong>📌 Sobre a curadoria</strong>

        <p>
          O TechLib não hospeda materiais de terceiros. A plataforma direciona
          o visitante para as fontes externas e recomenda verificar as
          condições atuais de acesso, certificação e disponibilidade diretamente
          na fonte oficial.
        </p>
      </div>
    </section>
  );
} 