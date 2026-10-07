import React from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  ["/biblioteca", "📚 Biblioteca"],
  ["/cursos", "🎓 Cursos"],
  ["/trilhas", "🗺️ Trilhas"],
  ["/labs", "🧪 Labs"],
  ["/roadmaps", "🧭 Roadmaps"],
  ["/sobre", "Sobre"],
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">

        <Link className="brand" to="/">
          <span className="brand-mark">T</span>

          <span>
            <strong>TechLib</strong>
            <small>Biblioteca Tech</small>
          </span>
        </Link>

        <nav
          className="main-nav"
          aria-label="Navegação principal"
        >
          {navItems.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link
          className="header-cta"
          to="/biblioteca"
        >
          Explorar
        </Link>

      </div>
    </header>
  );
}
