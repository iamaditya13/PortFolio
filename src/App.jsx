import React, { useState } from "react";
import "./App.css";
import ScoreDisplay from "./components/ScoreDisplay";
import LandingScreen from "./components/LandingScreen";
import LevelSelect from "./components/LevelSelect";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import GameOver from "./components/GameOver";
import ScorePopup from "./components/ScorePopup";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("landing");
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [bossHP, setBossHP] = useState(100);
  const [popups, setPopups] = useState([]);
  const [coinsCollected, setCoinsCollected] = useState(new Set());

  const addScore = (points, message) => {
    setScore((prev) => prev + points);
    const id = Date.now();
    setPopups((prev) => [...prev, { id, points, message }]);
    setTimeout(() => {
      setPopups((prev) => prev.filter((p) => p.id !== id));
    }, 3000);
  };

  const damageBoss = (damage) => {
    setBossHP((hp) => {
      const newHP = Math.max(0, hp - damage);
      if (newHP === 0) {
        addScore(1000, "BOSS DEFEATED!");
        setTimeout(() => setCurrentScreen("gameOver"), 2000);
      } else {
        setTimeout(() => {
          if (lives > 1) {
            setLives((l) => l - 1);
            addScore(-100, "💢 BOSS COUNTER-ATTACK!");
          }
        }, 1500);
      }
      return newHP;
    });
  };

  const collectCoin = (id) => {
    if (!coinsCollected.has(id)) {
      setCoinsCollected((prev) => new Set([...prev, id]));
      addScore(100, "✨ Hidden Coin Found!");
    }
  };

  const navigateTo = (screen) => setCurrentScreen(screen);

  return (
    <div>
      <div className="crt-overlay" />
      <ScoreDisplay
        lives={lives}
        score={score}
        currentLevel={currentScreen.toUpperCase()}
      />

      {popups.map((popup) => (
        <ScorePopup
          key={popup.id}
          points={popup.points}
          message={popup.message}
        />
      ))}

      {currentScreen === "landing" && (
        <LandingScreen onStart={() => navigateTo("levelSelect")} />
      )}
      {currentScreen === "levelSelect" && (
        <LevelSelect
          onSelect={navigateTo}
          onBack={() => navigateTo("landing")}
        />
      )}
      {currentScreen === "about" && (
        <About
          onBack={() => navigateTo("levelSelect")}
          collectCoin={collectCoin}
        />
      )}
      {currentScreen === "projects" && (
        <Projects
          onBack={() => navigateTo("levelSelect")}
          addScore={addScore}
        />
      )}
      {currentScreen === "skills" && (
        <Skills onBack={() => navigateTo("levelSelect")} addScore={addScore} />
      )}
      {currentScreen === "achievements" && (
        <Achievements
          onBack={() => navigateTo("levelSelect")}
          addScore={addScore}
        />
      )}
      {currentScreen === "contact" && (
        <Contact
          onBack={() => navigateTo("levelSelect")}
          bossHP={bossHP}
          damageBoss={damageBoss}
        />
      )}
      {currentScreen === "gameOver" && (
        <GameOver score={score} restart={() => navigateTo("landing")} />
      )}
    </div>
  );
}
