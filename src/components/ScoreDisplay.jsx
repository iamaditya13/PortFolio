import React from "react";

export default function ScoreDisplay({ lives, score, currentLevel }) {
  return (
    <div className="score-display">
      <div className="score-item">
        Lives: <span>{lives}</span>
      </div>
      <div className="score-item">
        Score: <span>{score.toString().padStart(4, "0")}</span>
      </div>
      <div className="score-item">
        Level: <span>{currentLevel}</span>
      </div>
    </div>
  );
}
