
import React from "react";
import { Link } from "react-router-dom";
import { resources } from "../data/resources";
import { courses } from "../data/courses";
import { tracks } from "../data/tracks";
import { labs } from "../data/labs";

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-grid"></div>
        <div className="about-glow about-glow-one"></div>
        <div className="about-glow about-glow-two"></div>

        <div className="container about-hero-content">
          <div className="about-hero-copy">
            <span className="eyebrow">SOBRE O BYTEATLAS</span>

            <h1>
              Explore o universo
              <span> da tecnologia.</span>
            </h1>

            <p>
              O ByteAtlas é um portal de conhecimento tecnológico que conecta
              pessoas a conteúdos, recursos e referências de diferentes áreas
              da tecnologia.
            </p>
          </div>

          <div className="about-hero-card">
            <div className="about-terminal">
              <div className="about-terminal-header">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="about-terminal-body">
                <div>
                  <span className="terminal-green">byteatlas</span>
                  <span className="terminal-muted"> ~/explore</span>
                </div>

                <div className="terminal-line">
                  <span className="terminal-purple">const</span>{" "}
                  <span className="terminal-blue">jornada</span> = [
                </div>

                <div className="terminal-indent">
                  <span className="terminal-yellow">"explorar"</span>,
                </div>

                <div className="terminal-indent">
                  <span className="terminal-yellow">"aprender"</span>,
                </div>

                <div className="terminal-indent">
                  <span className="terminal-yellow">"praticar"</span>,
                </div>

                <div className="terminal-indent">
                  <span className="terminal-yellow">"evoluir"</span>
                </div>

                <div className="terminal-line">];</div>

                <div className="terminal-output">
                  ✓ conhecimento conectado
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="about-section">
        <div className="container about-intro-grid">
          <div>
            <span className="section-kicker">O PROJETO</span>

            <h2>
              Conhecimento que
              <span> conecta possibilidades.</span>
            </h2>
          </div>

          <div className="about-intro-text">
            <p>
              O universo da tecnologia reúne diferentes áreas, ferramentas,
              comunidades e possibilidades de aprendizado. Encontrar conteúdos
              relevantes e descobrir novos caminhos nem sempre é simples.
            </p>

            <p>
              O ByteAtlas surgiu com a proposta de conectar pessoas a esse
              universo, reunindo referências, materiais e oportunidades de
              aprendizado em um portal organizado e acessível.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdos */}
      <section className="about-section about-section-soft">
        <div className="container">
          <div className="section-heading about-heading-centered">
            <span className="section-kicker">EXPLORE O BYTEATLAS</span>

            <h2>
              Diferentes formas de
              <span> descobrir tecnologia.</span>
            </h2>

            <p>
              Explore conteúdos e recursos que ajudam você a conhecer,
              estudar e praticar diferentes áreas da tecnologia.
            </p>
          </div>

          <div className="about-features">
            <article className="about-feature-card">
              <div className="about-feature-icon">📚</div>

              <div>
                <span className="about-feature-number">01</span>
                <h3>Biblioteca</h3>

                <p>
                  Recursos, documentações e materiais para consultar,
                  pesquisar e aprofundar seus conhecimentos.
                </p>

                <Link to="/biblioteca">
                  Explorar biblioteca →
                </Link>
              </div>
            </article>

            <article className="about-feature-card">
              <div className="about-feature-icon">🎓</div>

              <div>
                <span className="about-feature-number">02</span>
                <h3>Cursos</h3>

                <p>
                  Cursos gratuitos para desenvolver conhecimentos em
                  diferentes áreas da tecnologia.
                </p>

                <Link to="/cursos">
                  Ver cursos →
                </Link>
              </div>
            </article>

            <article className="about-feature-card">
              <div className="about-feature-icon">🗺️</div>

              <div>
                <span className="about-feature-number">03</span>
                <h3>Trilhas</h3>

                <p>
                  Caminhos de aprendizagem organizados para orientar seus
                  estudos e explorar novas possibilidades.
                </p>

                <Link to="/trilhas">
                  Explorar trilhas →
                </Link>
              </div>
            </article>

            <article className="about-feature-card">
              <div className="about-feature-icon">🧪</div>

              <div>
                <span className="about-feature-number">04</span>
                <h3>Labs</h3>

                <p>
                  Atividades práticas para transformar conceitos estudados
                  em experiências e desafios.
                </p>

                <Link to="/labs">
                  Explorar Labs →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="about-section">
        <div className="container">
          <div className="about-stats">
            <div className="about-stat">
              <strong>{resources.length}+</strong>
              <span>recursos</span>
            </div>

            <div className="about-stat">
              <strong>{courses.length}+</strong>
              <span>cursos</span>
            </div>

            <div className="about-stat">
              <strong>{tracks.length}</strong>
              <span>trilhas</span>
            </div>

            <div className="about-stat">
              <strong>{labs.length}</strong>
              <span>labs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Proposta */}
      <section className="about-section about-section-dark">
        <div className="about-dark-grid"></div>

        <div className="container about-purpose">
          <div className="about-purpose-copy">
            <span className="section-kicker section-kicker-light">
              NOSSA PROPOSTA
            </span>

            <h2>
              Um universo de possibilidades.
              <span> Um ponto de partida.</span>
            </h2>

            <p>
              O ByteAtlas busca facilitar a descoberta de conhecimento
              tecnológico, conectando pessoas a conteúdos, referências e
              recursos de diferentes áreas em um só portal.
            </p>
          </div>

          <div className="about-purpose-points">
            <div>
              <span>01</span>
              <strong>Descobrir</strong>
              <p>Conheça novas áreas, conteúdos e possibilidades.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Conectar</strong>
              <p>Encontre referências e recursos em diferentes áreas.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Evoluir</strong>
              <p>Transforme descobertas em conhecimento e prática.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-section">
        <div className="container">
          <div className="about-cta">
            <div>
              <span className="section-kicker">EXPLORE O BYTEATLAS</span>

              <h2>
                Seu próximo caminho
                <span> na tecnologia começa aqui.</span>
              </h2>

              <p>
                Explore o portal, descubra novos conteúdos e encontre
                referências para continuar sua jornada na tecnologia.
              </p>
            </div>

            <div className="about-cta-actions">
              <Link className="primary-button" to="/biblioteca">
                Explorar conteúdos →
              </Link>

              <Link className="secondary-button" to="/trilhas">
                Ver trilhas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
