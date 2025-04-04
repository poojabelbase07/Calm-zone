import React from "react";
import "./LandingPage.css";

const LandingPage = ({ onContinue }) => {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Calm Zone</h1>
      <p className="landing-text">There are lots of way to feel calmer.</p>
      <button className="start-button" onClick={onContinue}>
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
