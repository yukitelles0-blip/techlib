export default function FilterBar({
  search,
  setSearch,
  category,
  setCategory,
  level,
  setLevel,
  type,
  setType,
  categories,
  levels,
  types,
}) {
  return (
    <div className="filters-panel">
      <div className="search-box">
        <span>⌕</span>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por nome ou assunto..."
          aria-label="Buscar"
        />
      </div>

      <select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Filtrar por área">
        <option value="Todos">Todas as áreas</option>
        {categories.map((item) => <option key={item}>{item}</option>)}
      </select>

      <select value={level} onChange={(e) => setLevel(e.target.value)} aria-label="Filtrar por nível">
        <option value="Todos">Todos os níveis</option>
        {levels.map((item) => <option key={item}>{item}</option>)}
      </select>

      <select value={type} onChange={(e) => setType(e.target.value)} aria-label="Filtrar por tipo">
        <option value="Todos">Todos os tipos</option>
        {types.map((item) => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
}