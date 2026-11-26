
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">

        {/* IDENTIDADE */}
        <div className="footer-column">
          <Link
            className="brand footer-brand"
            to="/"
            aria-label="ByteAtlas - Página inicial"
          >
            <img
              src="/byteatlas-logo.png"
              alt="ByteAtlas"
              className="brand-logo"
            />
          </Link>

          <p className="footer-text">
            Explore o universo da tecnologia através de materiais,
            cursos, trilhas de aprendizagem e experiências práticas.
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
            Um portal para explorar conteúdos, descobrir caminhos
            de aprendizagem e desenvolver habilidades em tecnologia.
          </p>
          <p className="footer-copy">© 2026 ByteAtlas</p>
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
