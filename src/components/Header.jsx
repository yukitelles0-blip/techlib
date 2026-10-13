import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BookOpen,
  Compass,
  FlaskConical,
  GraduationCap,
  Map,
} from "lucide-react";

const navItems = [
  ["/biblioteca", "Biblioteca", BookOpen],
  ["/cursos", "Cursos", GraduationCap],
  ["/trilhas", "Trilhas", Map],
  ["/labs", "Labs", FlaskConical],
  ["/roadmaps", "Roadmaps", Compass],
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
          {navItems.map(([path, label, Icon]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              {Icon && <Icon size={15} aria-hidden="true" />}
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
