import React from "react";
import Level from "./Level";

export default function Skills({ onBack }) {
const skills = [
  { name: "REACT", level: 90, icon: "⚛️" },
  { name: "JAVASCRIPT", level: 95, icon: "🟨" },
  { name: "NODE.JS", level: 87, icon: "🟢" },
  { name: "PYTHON", level: 83, icon: "🐍" },
  { name: "MONGODB", level: 85, icon: "🍃" },
  { name: "FIREBASE", level: 70, icon: "🔥" },
  { name: "VERCEL", level: 78, icon: "🚀" },
  { name: "POSTMAN", level: 82, icon: "📬" },
  { name: "EXPRESS.JS", level: 88, icon: "🚂" },
  { name: "GIT", level: 90, icon: "🔧" },
];

  return (
    <Level id="skills" num="3" title="SKILLS / POWER-UPS" onBack={onBack}>
      <div className="skills-categories">
        {skills.map((s, i) => (
          <div key={i} className="power-up-item">
            <div className="power-icon">{s.icon}</div>
            <div className="power-info">
              <div className="power-name">{s.name}</div>
              <div className="power-bar">
                <div
                  className="power-fill"
                  style={{ width: `${s.level}%` }}
                ></div>
                <span className="power-level">{s.level}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Level>
  );
}
