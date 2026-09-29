import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section container empty-page">
      <span>404</span>
      <h1>Página não encontrada</h1>
      <p>O caminho que você tentou acessar não existe nesta versão.</p>
      <Link className="primary-button" to="/">Voltar para o início</Link>
    </section>
  );
}