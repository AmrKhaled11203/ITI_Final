import React from 'react';
import '../works/Works_Style.css';

const WorkCard = ({ mainHeading, image, title, linkText, linkHref, arrowImg, description }) => {
  return (
    <div className="whole-card-container">
      <p className="card-main-heading">{mainHeading}</p>
      <div className="card">
        <img className="card-image" src={image} alt={`${title} Project`} />
        <div className="card-content">
          <div className="card-text">
            <h2 className="card-sub-heading">{title}</h2>
            <p className="card-link">{linkText}</p>
          </div>
          <a href={linkHref} target="_blank" rel="noopener noreferrer">
            <img className="arrow-button" src={arrowImg} alt="View Project" />
          </a>
        </div>
        <p className="card-paragraph">{description}</p>
      </div>
    </div>
  );
};

export default WorkCard;
