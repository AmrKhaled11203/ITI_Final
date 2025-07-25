import React from "react";
import '../home/M-Container.css';

const HomeFeatureCard = ({ imageSrc, title, description }) => {
  return (
    <div className="home-card-container">
      <div className="home-card-content">
        <div className="home-card-text">
          <img className="home-card-image" src={imageSrc} alt={`${title} Icon`} />
          <h2 className="home-card-title">{title}</h2>
        </div>
        <p className="home-card-paragraph">{description}</p>
      </div>
    </div>
  );
};

export default HomeFeatureCard;
