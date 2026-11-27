import React from "react";

import {
  globeArcs,
  globeDotsFar,
  globeDotsMid,
  globeDotsNear,
  globeDotsOcean,
  globeNodes,
} from "./heroGlobeData";

/*
  Ilustração decorativa do hero (globo, órbitas e partículas).
  Puramente visual: SVG estático, sem estado, sem lógica e
  usando apenas as variáveis de cor já existentes no projeto.
*/
export default function HeroGlobe() {
  return (
    <svg
      className="hero-globe-art"
      viewBox="0 0 590 440"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="ba-globe-body" cx="38%" cy="32%" r="78%">
          <stop offset="0%" style={{ stopColor: "var(--primary)", stopOpacity: 0.55 }} />
          <stop offset="55%" style={{ stopColor: "var(--primary-strong)", stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: "var(--bg)", stopOpacity: 0.9 }} />
        </radialGradient>

        <radialGradient id="ba-globe-rim" cx="50%" cy="50%" r="50%">
          <stop offset="82%" style={{ stopColor: "var(--primary)", stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: "var(--primary-light)", stopOpacity: 0.55 }} />
        </radialGradient>

        <radialGradient id="ba-orb" cx="35%" cy="30%" r="75%">
          <stop offset="0%" style={{ stopColor: "var(--primary-light)" }} />
          <stop offset="100%" style={{ stopColor: "var(--primary-strong)" }} />
        </radialGradient>

        <filter id="ba-soft-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4" />
        </filter>

        <filter id="ba-globe-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      {/* Órbitas */}
      <g fill="none" style={{ stroke: "var(--primary)" }} strokeLinecap="round">
        <ellipse
          cx="300" cy="215" rx="292" ry="118"
          transform="rotate(-16 300 215)"
          strokeWidth="1.4" strokeOpacity="0.55"
        />
        <ellipse
          cx="300" cy="210" rx="262" ry="98"
          transform="rotate(-22 300 210)"
          strokeWidth="1" strokeOpacity="0.35"
        />
      </g>

      {/* Globo */}
      <g transform="translate(300 125)">
        <circle r="122" style={{ fill: "var(--primary-strong)" }} opacity="0.4" filter="url(#ba-globe-glow)" />
        <circle r="112" fill="url(#ba-globe-body)" />
        <circle r="112" fill="url(#ba-globe-rim)" />

        <g strokeLinecap="round" fill="none">
          <path d={globeDotsOcean} strokeWidth="1.2" style={{ stroke: "var(--primary-light)" }} opacity="0.18" />
          <path d={globeDotsFar} strokeWidth="1.5" style={{ stroke: "var(--primary-light)" }} opacity="0.45" />
          <path d={globeDotsMid} strokeWidth="1.9" style={{ stroke: "var(--primary-light)" }} opacity="0.75" />
          <path d={globeDotsNear} strokeWidth="2.2" style={{ stroke: "var(--ink-strong)" }} opacity="0.9" />
        </g>

        <g fill="none" strokeLinecap="round">
          {globeArcs.map((d, index) => (
            <path
              key={index}
              d={d}
              strokeWidth="1"
              style={{ stroke: index % 2 ? "var(--accent)" : "var(--primary-dark)" }}
              opacity="0.85"
            />
          ))}
        </g>

        {globeNodes.map(([x, y], index) => (
          <circle
            key={index}
            cx={x}
            cy={y}
            r="2.4"
            style={{ fill: index % 2 ? "var(--accent)" : "var(--ink-strong)" }}
          />
        ))}
      </g>

      {/* Esferas e partículas */}
      <circle cx="47" cy="331" r="22" style={{ fill: "var(--primary)" }} opacity="0.55" filter="url(#ba-soft-glow)" />
      <circle cx="47" cy="331" r="12" fill="url(#ba-orb)" />

      <circle cx="547" cy="193" r="11" style={{ fill: "var(--accent)" }} opacity="0.6" filter="url(#ba-soft-glow)" />
      <circle cx="547" cy="193" r="6" style={{ fill: "var(--accent)" }} />

      <g style={{ fill: "var(--primary-light)" }}>
        <circle cx="205" cy="22" r="4.5" />
        <circle cx="332" cy="2" r="2" opacity="0.7" />
        <circle cx="527" cy="136" r="4.5" />
        <circle cx="552" cy="290" r="2.6" />
        <circle cx="113" cy="396" r="2" opacity="0.7" />
      </g>

      <g style={{ fill: "var(--accent)" }}>
        <circle cx="52" cy="95" r="2.6" />
        <circle cx="528" cy="40" r="3.4" />
        <circle cx="58" cy="283" r="2.8" />
      </g>
    </svg>
  );
}
