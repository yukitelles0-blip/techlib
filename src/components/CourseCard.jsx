import React from "react";

export default function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className="course-icon">{course.icon}</div>
      <div className="course-content">
        <div className="card-topline">
          <span className="tag">{course.category}</span>
          {course.certificate && <span className="certificate">🎓 Certificado</span>}
        </div>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <div className="course-meta">
          <span>🏫 {course.platform}</span>
          <span>◉ {course.level}</span>
          <span>⏱ {course.duration}</span>
        </div>
        <a className="card-button" href={course.url} target="_blank" rel="noreferrer">
          Ver curso <span>↗</span>
        </a>
      </div>
    </article>
  );
}