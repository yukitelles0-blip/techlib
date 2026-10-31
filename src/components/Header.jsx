
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  BookOpen,
  Compass,
  FlaskConical,
  GraduationCap,
  Map,
  Menu,
  X,
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container nav-wrap">

        <Link
          className="brand"
          to="/"
          onClick={closeMenu}
        >
          <span className="brand-mark">T</span>

          <span>
            <strong>TechLib</strong>
            <small>Biblioteca Tech</small>
          </span>
        </Link>

        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="techlib-main-nav"
        >
          {menuOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>

        <nav
          id="techlib-main-nav"
          className={`main-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Navegação principal"
        >
          {navItems.map(([path, label, Icon]) => (
            <NavLink
              key={path}
              to={path}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {Icon && <Icon size={17} aria-hidden="true" />}
              {label}
            </NavLink>
          ))}
        </nav>

        <Link
          className="header-cta"
          to="/biblioteca"
          onClick={closeMenu}
        >
          Explorar
        </Link>

      </div>
    </header>
  );
}
