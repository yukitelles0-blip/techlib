
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">

        {/* IDENTIDADE */}
        <div className="footer-column">
          <Link className="brand footer-brand" to="/">
            <span className="brand-mark">T</span>
            <span>
              <strong>TechLib</strong>
              <small>Biblioteca Tech</small>
            </span>
          </Link>

          <p className="footer-text">
            Conhecimento Tech organizado para facilitar sua jornada
            de aprendizagem.
          </p>
        </div>

        {/* NAVEGAÇÃO */}
        <div className="footer-column">
          <h3>Navegação</h3>
          <Link to="/biblioteca">Biblioteca</Link>
          <Link to="/cursos">Cursos gratuitos</Link>
          <Link to="/trilhas">Trilhas</Link>
          <Link to="/roadmaps">Roadmaps</Link>
          <Link to="/labs">Labs</Link>
          <Link to="/sobre">Sobre</Link>
        </div>

        {/* PROJETO */}
        <div className="footer-column">
          <h3>Projeto</h3>
          <p>
            V1 — catálogo comunitário de recursos educacionais.
          </p>
          <p className="footer-copy">© 2026 TechLib</p>
        </div>

        {/* CONTATO */}
        <div className="footer-column">
          <h3>Contato</h3>
          <p>
            Tem alguma dúvida, sugestão ou interesse em parceria?
          </p>
          <p className="footer-contact">
            ✉ E-mail de contato em breve.
          </p>
        </div>

      </div>
    </footer>
  );
}
