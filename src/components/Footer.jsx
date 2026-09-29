import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" to="/">
            <span className="brand-mark">T</span>
            <span>
              <strong>TechLib</strong>
              <small>Biblioteca Tech</small>
            </span>
          </Link>
          <p className="footer-text">
            Conhecimento Tech organizado para facilitar sua jornada de aprendizagem.
          </p>
        </div>

        <div>
          <h3>Navegação</h3>
          <Link to="/biblioteca">Biblioteca</Link>
          <Link to="/cursos">Cursos gratuitos</Link>
          <Link to="/trilhas">Trilhas</Link>
          <Link to="/sobre">Sobre</Link>
        </div>

        <div>
          <h3>Projeto</h3>
          <p>V1 — catálogo comunitário de recursos educacionais.</p>
          <p className="footer-copy">© 2026 TechLib</p>
        </div>
      </div>
    </footer>
  );
}