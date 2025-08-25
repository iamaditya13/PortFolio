import React from "react";
import Level from "./Level";

export default function Achievements({ onBack }) {
  const achievements = [
    {
      title: "CODE MASTER",
      desc: "Completed 50+ programming challenges",
      year: "2024",
      icon: "🏆",
    },
    {
      title: "PIXEL PERFECT",
      desc: "Created flawless responsive designs",
      year: "2023",
      icon: "🎯",
    },
    {
      title: "AI INTEGRATOR",
      desc: "Built projects integrating AI models with web apps",
      year: "2025",
      icon: "🤖",
    }
  ];

  return (
    <Level id="achievements" num="4" title="ACHIEVEMENTS" onBack={onBack}>
      <div className="achievements-grid">
        {achievements.map((a, i) => (
          <div key={i} className="achievement-item unlocked">
            <div className="achievement-icon">{a.icon}</div>
            <div className="achievement-info">
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
              <div className="achievement-date">{a.year}</div>
            </div>
          </div>
        ))}
      </div>
    </Level>
  );
}
