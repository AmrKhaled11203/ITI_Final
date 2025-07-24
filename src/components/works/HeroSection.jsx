import React from 'react';
import '../works/Works_Style.css'
import maskImage from '../../assets/images/work_images/Mask__.jpg'

const HeroSection = () => {
  return (
    <section className="hero-container">
      <img className="hero-background" src={maskImage} alt="Mask background" />
      <div className="hero-content">
        <h1 className="hero-title">Our Works</h1>
        <p className="hero-text">
          Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our
          creativity and expertise.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
