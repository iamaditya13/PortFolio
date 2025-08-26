import React from "react";
import Level from "./Level";
import resumePDF from "./Resume.pdf";

export default function About({ onBack }) {
   const handleClick = () => {
     window.open(resumePDF, "_blank"); 
   };
  return (
    <Level id="about" num="1" title="ABOUT ME" onBack={onBack}>
      <div className="about-container">
        <div className="character-display">
          <div className="pixel-character">🎮</div>
          <div className="character-stats">
            <div className="stat-item">
              <span className="stat-label">LEVEL:</span>
              <span className="stat-value">22</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">EXP:</span>
              <span className="stat-value">--</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">LOCATION:</span>
              <span className="stat-value">Delhi</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">AURA:</span>
              <span className="stat-value">∞</span>
            </div>
          </div>
        </div>
        <div className="dialog-box">
          <div className="dialog-content">
            <p>
              Enthusiastic software developer with strong problem-solving
              skills, specializing in Data Structures and Algorithms using
              Python.
            </p>
            <p>
              Experienced in building scalable, full-stack applications with the
              MERN stack.
            </p>
            <p>
              Passionate about writing clean, efficient code and crafting
              seamless user experiences.
            </p>
          </div>
          <button className="press-start-btn" onClick={handleClick}>
            Resume
          </button>
        </div>
      </div>
    </Level>
  );
}
