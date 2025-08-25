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
              <span className="stat-value">28</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">EXP:</span>
              <span className="stat-value">5,000+</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">COFFEE:</span>
              <span className="stat-value">∞</span>
            </div>
          </div>
        </div>
        <div className="dialog-box">
          <div className="dialog-content">
            <p>
              Passionate full-stack developer with a love for retro gaming
              aesthetics and modern web technologies.
            </p>
            <p>
              I create pixel-perfect applications that bridge the gap between
              nostalgic design and cutting-edge functionality.
            </p>
            <p>Location: Delhi </p>
          </div>
          <button className="press-start-btn" 
          onClick={handleClick}
          >
            Resume
          </button>
        </div>
      </div>
    </Level>
  );
}
