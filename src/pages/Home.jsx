import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ResourceCard from "../components/ResourceCard";
import CourseCard from "../components/CourseCard";
import { resources } from "../data/resources";
import { courses } from "../data/courses";
import { tracks } from "../data/tracks";

export default function Home() {
  const featuredResources = resources.slice(0, 3);
  const featuredCourses = courses.slice(0, 2);
  const featuredTracks = tracks.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">CONHECIMENTO TECH ORGANIZADO</span>
            <h1>Aprenda tecnologia. <span>Encontre seu caminho.</span></h1>
            <p>
              Uma biblioteca virtual para descobrir materiais, cursos gratuitos
              e trilhas de aprendizagem em tecnologia.
            </p>
            <div className="hero-actions">
              <Link className="primary-button" to="/biblioteca">Explorar biblioteca →</Link>
              <Link className="secondary-button" to="/trilhas">Ver trilhas</Link>
            </div>
            <div className="hero-stats">
              <div><strong>{resources.length}+</strong><span>recursos</span></div>
              <div><strong>{courses.length}+</strong><span>cursos</span></div>
              <div><strong>{tracks.length}</strong><span>trilhas</span></div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orb orb-one"></div>
            <div className="orb orb-two"></div>
            <div className="floating-card card-a"><span>🔐</span><b>Cybersecurity</b><small>Fundamentos</small></div>
            <div className="floating-card card-b"><span>🐍</span><b>Python</b><small>Programação</small></div>
            <div className="floating-card card-c"><span>🌐</span><b>Redes</b><small>Networking</small></div>
            <div className="hero-center"><span>📚</span><b>TECHLIB</b><small>Knowledge Hub</small></div>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionTitle
          eyebrow="EXPLORE"
          title="Tudo começa com um bom recurso"
          text="Encontre conteúdos organizados por área, nível e formato."
          action={<Link className="text-link" to="/biblioteca">Ver biblioteca →</Link>}
        />
        <div className="card-grid">
          {featuredResources.map((resource) => <ResourceCard key={resource.id} resource={resource} />)}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionTitle
            eyebrow="OPORTUNIDADES"
            title="Cursos gratuitos"
            text="Descubra cursos e capacitações para continuar estudando."
            action={<Link className="text-link" to="/cursos">Ver todos →</Link>}
          />
          <div className="course-grid">
            {featuredCourses.map((course) => <CourseCard key={course.id} course={course} />)}
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionTitle
          eyebrow="POR ONDE COMEÇAR?"
          title="Trilhas de aprendizagem"
          text="Em vez de dezenas de links soltos, siga uma sequência de estudos."
          action={<Link className="text-link" to="/trilhas">Explorar trilhas →</Link>}
        />
        <div className="track-grid">
          {featuredTracks.map((track) => (
            <article className="track-card" key={track.id}>
              <span className="track-icon">{track.icon}</span>
              <span className="tag">{track.category}</span>
              <h3>{track.title}</h3>
              <p>{track.description}</p>
              <div className="mini-steps">
                {track.steps.slice(0, 3).map((step, index) => (
                  <span key={step}><b>{String(index + 1).padStart(2, "0")}</b>{step}</span>
                ))}
              </div>
              <Link to="/trilhas" className="card-button">Ver trilha <span>→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="community-banner">
        <div className="container community-inner">
          <div>
            <span className="eyebrow">FEITO PARA A COMUNIDADE</span>
            <h2>Conhecimento fica melhor quando é compartilhado.</h2>
            <p>O TechLib pode crescer junto com a comunidade, recebendo novas indicações e trilhas.</p>
          </div>
          <Link className="primary-button" to="/sobre">Conheça o projeto →</Link>
        </div>
      </section>
    </>
  );
}