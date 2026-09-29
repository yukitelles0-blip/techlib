import React from "react";
import { useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import FilterBar from "../components/FilterBar";
import ResourceCard from "../components/ResourceCard";
import { resources } from "../data/resources";

export default function Library() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [level, setLevel] = useState("Todos");
  const [type, setType] = useState("Todos");

  const categories = [...new Set(resources.map((item) => item.category))].sort();
  const levels = [...new Set(resources.map((item) => item.level))].sort();
  const types = [...new Set(resources.map((item) => item.type))].sort();

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();
    return resources.filter((item) => {
      const matchesSearch = !query ||
        `${item.title} ${item.description} ${item.category}`.toLowerCase().includes(query);
      const matchesCategory = category === "Todos" || item.category === category;
      const matchesLevel = level === "Todos" || item.level === level;
      const matchesType = type === "Todos" || item.type === type;
      return matchesSearch && matchesCategory && matchesLevel && matchesType;
    });
  }, [search, category, level, type]);

  return (
    <section className="section container page-section">
      <SectionTitle
        eyebrow="BIBLIOTECA"
        title="Encontre o que você precisa para estudar"
        text="Pesquise e filtre materiais por área, nível e formato."
      />

      <FilterBar
        {...{ search, setSearch, category, setCategory, level, setLevel, type, setType }}
        categories={categories}
        levels={levels}
        types={types}
      />

      <div className="results-line">
        <span><strong>{filtered.length}</strong> recursos encontrados</span>
        {(search || category !== "Todos" || level !== "Todos" || type !== "Todos") && (
          <button className="clear-button" onClick={() => {
            setSearch(""); setCategory("Todos"); setLevel("Todos"); setType("Todos");
          }}>Limpar filtros</button>
        )}
      </div>

      {filtered.length ? (
        <div className="card-grid">
          {filtered.map((resource) => <ResourceCard key={resource.id} resource={resource} />)}
        </div>
      ) : (
        <div className="empty-state">
          <span>🔎</span>
          <h3>Nenhum recurso encontrado</h3>
          <p>Tente outro termo ou remova alguns filtros.</p>
        </div>
      )}
    </section>
  );
}