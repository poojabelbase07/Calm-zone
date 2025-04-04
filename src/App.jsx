import React, { useState } from "react";
import Card from "./components/Card"; 
import yogaImage from "./assets/yoga.png";
import "./App.css"; // Import styles

const App = () => {
  const [showCards, setShowCards] = useState(false);

  const handleGetStarted = () => {
    setShowCards(true);
  };

  return (
    <div className="app-container">
      {!showCards ? (
        <div className="landing-page">
        <img src={yogaImage} alt="Profile" className="yoga-image" />
          <h1> Calm Zone</h1>
          <p>Welcome to your safe space, a place where your mind can breathe, unwind, and feel lighter.<br></br> Life as a student can be overwhelming, but here, you’ll find a little pocket of peace. <br></br>Whether you're feeling stressed, anxious, or just need a break, Calm Zone is here to remind you: you’re not alone.</p>
          <button className="get-started" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      ) : (
        <div className="page-title"><h2>5 tools --- One platform</h2>
       
        <div className="card-container fade-in">
          {/* 6 Cards Displayed Horizontally in 2 Rows */}
          <Card title="Audio Zone" description="Let the soothing sounds and guided meditations relax your mind." />
          <Card title="Video Zone" description="Watch uplifting videos, TED Talks, animated stories" />
          <Card title="Game Zone" description="Relax and recharge with mindful and stress-free games." />
          <Card title="Book Zone" description="Words have power! Discover inspiring stories and self-help guides" />
          <Card title="Podcast Zone" description="Hearing the right words at the right time can make all the difference." />
          <Card title="Spiritual Zone" description="A space to connect with your deeper self." />
        </div> </div>
      )}
    </div>
  );
};

export default App;
