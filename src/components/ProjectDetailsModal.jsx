import React from "react";

export default function ProjectDetailsModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="project-details">
      <div className="detail-screen">
        <div className="detail-header">
          <h3>{project.name}</h3>
          <button className="close-details" onClick={onClose}>
            ✖
          </button>
        </div>
        <div className="detail-content">
          <p>{project.description}</p>
          <div className="tech-stack">{project.tech}</div>
        </div>
      </div>
    </div>
  );
}
