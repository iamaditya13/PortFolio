import React from "react";

export default function GameOver({ score, restart }) {
  return (
    <section id="gameOver" className="screen active">
      <div className="level-content">
        <h2 className="level-header">GAME OVER</h2>
        <p>Final Score: {score.toString().padStart(4, "0")}</p>
        <button onClick={restart}>Restart Game</button>
      </div>
    </section>
  );
}
