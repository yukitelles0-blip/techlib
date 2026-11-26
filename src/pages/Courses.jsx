
import React from "react";
import { useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

export default function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [certificateOnly, setCertificateOnly] = useState(false);

  const categories = [...new Set(courses.map((item) => item.category))].sort();

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();

    return courses.filter((course) => {
      const matchesSearch =
        !query ||
        `${course.title} ${course.platform} ${course.description}`
          .toLowerCase()
          .includes(query);

      const matchesCategory =
        category === "Todos" || course.category === category;

      const matchesCertificate =
        !certificateOnly || course.certificate;

      return matchesSearch && matchesCategory && matchesCertificate;
    });
  }, [search, category, certificateOnly]);

  return (
    <section className="section container page-section">
      <SectionTitle
        eyebrow="EXPLORE E APRENDA"
        title="Cursos para ampliar seus conhecimentos"
        text="Descubra cursos e oportunidades de aprendizado em diferentes áreas da tecnologia. Confira as condições e a disponibilidade diretamente nas plataformas oficiais."
      />

      <div className="course-filters">
        <div className="search-box">
          <span>⌕</span>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar curso, plataforma..."
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Todos</option>

          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <label className="checkbox-control">
          <input
            type="checkbox"
            checked={certificateOnly}
            onChange={(e) => setCertificateOnly(e.target.checked)}
          />

          Apenas com certificado
        </label>
      </div>

      <div className="results-line">
        <span>
          <strong>{filtered.length}</strong> cursos encontrados
        </span>
      </div>

      <div className="course-list">
        {filtered.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}
      </div>
    </section>
  );
}
