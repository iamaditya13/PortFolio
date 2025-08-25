import React from "react";
import Level from "./Level";

export default function Contact({ onBack, bossHP, damageBoss }) {
  return (
    <Level id="contact" num="BOSS" title="CONTACT" onBack={onBack}>
      <div className="boss-container">
        <div className="boss-character">
          <div className="boss-sprite">👾</div>
          <div className="boss-name">Boss Name</div>
          <div className="boss-hp">
            <span className="hp-label">HP</span>
            <div className="hp-bar">
              <div className="hp-fill" style={{ width: `${bossHP}%` }}></div>
            </div>
          </div>
        </div>

       
        <div className="battle-interface">
          <div className="battle-text">
            <p>Defeat the boss by sending your attack!</p>
          </div>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              damageBoss(Math.floor(Math.random() * 30) + 20);
              e.target.reset(); 
            }}
          >
            <div className="form-row">
              <input
                type="text"
                className="battle-input"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-row">
              <input
                type="email"
                className="battle-input"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-row">
              <textarea
                className="battle-input"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="attack-button">
              Attack Boss!
            </button>
          </form>
        </div>
      </div>
    </Level>
  );
}
