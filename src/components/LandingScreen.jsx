import React from "react";

export default function LandingScreen({ onStart }) {
  return (
    <section id="landing" className="screen active">
      <div className="landing-content">
        <div className="pixel-background"></div>
        <h1 className="game-title">
          PORTFOLIO
        </h1>
        <div className="player-info">
          <div className="pixel-avatar">🎮</div>
          <p className="player-name">Aditya Kumar</p>
          <p className="player-subtitle">
            Full Stack Developer 
          </p>
        </div>
        <button className="press-start-btn" onClick={onStart}>
          <span className="blink">► PRESS START ◄</span>
        </button>
        <div className="floating-particles"></div>
      </div>
    </section>
  );
}
