import React from "react";

export default function LevelSelect({ onSelect, onBack }) {
  const levels = [
    { id: "about", num: "1", name: "ABOUT ME", icon: "👤" },
    { id: "projects", num: "2", name: "PROJECTS", icon: "🎮" },
    { id: "skills", num: "3", name: "SKILLS", icon: "⚡" },
    { id: "achievements", num: "4", name: "ACHIEVEMENTS", icon: "🏆" },
    { id: "contact", num: "BOSS", name: "CONTACT", icon: "👾", boss: true },
  ];

  return (
    <section id="levelSelect" className="screen active">
      <div className="level-select-content">
        <h2 className="level-title">SELECT LEVEL</h2>
        <div className="level-grid">
          {levels.map((lvl) => (
            <button
              key={lvl.id}
              className={`level-btn ${lvl.boss ? "boss-level" : ""}`}
              onClick={() => onSelect(lvl.id)}
            >
              <div className="level-icon">{lvl.icon}</div>
              <div className="level-text">
                <div className="level-number">LEVEL {lvl.num}</div>
                <div className="level-name">{lvl.name}</div>
              </div>
              <div className="level-status">
                {lvl.boss ? "FINAL BOSS" : "AVAILABLE"}
              </div>
            </button>
          ))}
        </div>
        <button className="back-btn" onClick={onBack}>
          ◄ BACK TO START
        </button>
      </div>
    </section>
  );
}
