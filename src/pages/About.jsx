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
            <span className="eyebrow">SOBRE O TECHLIB</span>

            <h1>
              Tecnologia organizada
              <span> para quem quer aprender.</span>
            </h1>

            <p>
              O TechLib é uma biblioteca virtual criada para reunir recursos,
              cursos, trilhas e atividades práticas de tecnologia em um só
              lugar.
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
                  <span className="terminal-green">techlib</span>
                  <span className="terminal-muted"> ~/aprendizado</span>
                </div>

                <div className="terminal-line">
                  <span className="terminal-purple">const</span>{" "}
                  <span className="terminal-blue">aprendizado</span> = [
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
                  ✓ conhecimento organizado
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
              Um lugar para
              <span> descobrir tecnologia.</span>
            </h2>
          </div>

          <div className="about-intro-text">
            <p>
              Aprender tecnologia pode significar encontrar cursos em um lugar,
              documentações em outro e atividades práticas em vários sites
              diferentes.
            </p>

            <p>
              O TechLib nasceu com a proposta de organizar esse conhecimento e
              facilitar a descoberta de conteúdos para quem está começando ou
              quer continuar evoluindo.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdos */}
      <section className="about-section about-section-soft">
        <div className="container">
          <div className="section-heading about-heading-centered">
            <span className="section-kicker">O QUE VOCÊ ENCONTRA</span>

            <h2>
              Quatro caminhos para
              <span> aprender na prática.</span>
            </h2>

            <p>
              Diferentes formatos de conteúdo para acompanhar diferentes
              momentos da sua jornada.
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
                  Cursos gratuitos organizados para ajudar você a desenvolver
                  conhecimentos em diferentes áreas de tecnologia.
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
                  Caminhos de aprendizagem organizados para tornar seus
                  estudos mais claros e progressivos.
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
                  Atividades práticas para transformar conceitos estudados em
                  experiências e desafios.
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
              Menos tempo procurando.
              <span> Mais tempo aprendendo.</span>
            </h2>

            <p>
              O objetivo do TechLib é tornar o aprendizado em tecnologia mais
              acessível, organizado e prático, reunindo diferentes tipos de
              conteúdo em uma única plataforma.
            </p>
          </div>

          <div className="about-purpose-points">
            <div>
              <span>01</span>
              <strong>Descobrir</strong>
              <p>Encontre novos conteúdos e áreas da tecnologia.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Organizar</strong>
              <p>Tenha diferentes recursos reunidos em um só lugar.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Praticar</strong>
              <p>Coloque o conhecimento em ação através dos Labs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-section">
        <div className="container">
          <div className="about-cta">
            <div>
              <span className="section-kicker">COMECE AGORA</span>

              <h2>
                Seu próximo aprendizado
                <span> pode começar aqui.</span>
              </h2>

              <p>
                Explore os conteúdos disponíveis e encontre o próximo passo da
                sua jornada em tecnologia.
              </p>
            </div>

            <div className="about-cta-actions">
              <Link className="primary-button" to="/biblioteca">
                Explorar biblioteca →
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
