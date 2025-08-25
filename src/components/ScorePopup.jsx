import React from "react";

export default function ScorePopup({ points, message }) {
  return (
    <div
      className="score-popup"
      style={{
        position: "fixed",
        top: "120px",
        right: "20px",
        background: "rgba(0, 255, 255, 0.9)",
        color: "#000",
        padding: "10px 15px",
        borderRadius: "4px",
        fontFamily: "'Press Start 2P', monospace",
        fontSize: "0.6rem",
        zIndex: 1001,
        animation: "scoreFloat 3s ease-out forwards",
        pointerEvents: "none",
        maxWidth: "200px",
      }}
    >
      <div className="score-points">{points > 0 ? `+${points}` : points}</div>
      <div className="score-message">{message}</div>
    </div>
  );
}
