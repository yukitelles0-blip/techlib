export default function ResourceCard({ resource }) {
  return (
    <article className="resource-card">
      <div className="card-topline">
        <span className="tag">{resource.category}</span>
        <span className="level">{resource.level}</span>
      </div>

      <div className="resource-icon">{resource.icon}</div>

      <h3>{resource.title}</h3>
      <p>{resource.description}</p>

      <div className="card-meta">
        <span>{resource.type}</span>
        {resource.free && <span>✓ Gratuito</span>}
      </div>

      <a className="card-button" href={resource.url} target="_blank" rel="noreferrer">
        Acessar recurso <span>↗</span>
      </a>
    </article>
  );
}