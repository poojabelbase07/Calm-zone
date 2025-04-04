import React, { useState } from "react";
import "./Card.css";
import profileImage from "../assets/profile.jpg";

const Card = ({ title, description }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    
    <div
      className={`card ${isActive ? "active" : ""}`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="profile-container">
      <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="explore-button">
        <span className="arrow">→</span>
        <span className="text">Explore</span>
      </button>
    </div>
  );
};

export default Card;
