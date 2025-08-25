import React from "react";

export default function Level({ id, num, title, children, onBack }) {
  return (
    <section id={id} className="screen active level">
      <div className="level-content">
        <h2 className="level-header">
          <span className="level-number">LEVEL {num}</span>
          <span className="level-title">{title}</span>
        </h2>
        {children}
        <button className="back-to-select" onClick={onBack}>
          ◄ BACK TO SELECT
        </button>
      </div>
    </section>
  );
}
