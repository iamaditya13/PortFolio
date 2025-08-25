import React from "react";
import Level from "./Level";

export default function Projects({ onBack }) {
  const projects = [
    {
      name: "8-BIT E-COMMERCE",
      tech: "React • Node.js • MongoDB",
      status: "COMPLETED",
    },
    {
      name: "PIXEL PERFECT CMS",
      tech: "Vue.js • Express • PostgreSQL",
      status: "IN PROGRESS",
    },
    {
      name: "ARCADE ANALYTICS",
      tech: "React • D3.js • Python",
      status: "COMPLETED",
    },
    {
      name: "RETRO CHAT APP",
      tech: "Socket.io • React • Node.js",
      status: "BETA",
    },
  ];

  return (
    <Level id="projects" num="2" title="PROJECTS" onBack={onBack}>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-cartridge">
            <div className="cartridge-body">
              <div className="cartridge-label">{p.name}</div>
              <div className="cartridge-tech">{p.tech}</div>
              <div className="cartridge-status">{p.status}</div>
            </div>
            <div className="insert-slot"></div>
          </div>
        ))}
      </div>
    </Level>
  );
}
