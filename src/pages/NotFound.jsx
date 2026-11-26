
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section container empty-page">
      <span>404</span>

      <h1>Página não encontrada</h1>

      <p>
        Parece que este caminho não faz parte do universo ByteAtlas.
        Que tal voltar e explorar outros conteúdos?
      </p>

      <Link className="primary-button" to="/">
        Voltar para o início
      </Link>
    </section>
  );
}
