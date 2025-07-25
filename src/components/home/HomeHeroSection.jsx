import React from "react";
import heroImage from '../../assets/images/work_images/Mask__.jpg'
import '../home/M-Container.css';
const HomeHeroSection = () => {
  return (
    <section className="home-hero-container">
      <img
        className="home-hero-background"
        src={heroImage}
        alt="Mask background"
      />
      <div className="home-hero-content">
        <h1 className="home-hero-title">Why Choose SquareUp?</h1>
        <p className="home-hero-text">
          Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to
          delivering exceptional results.
        </p>
      </div>
    </section>
  );
};

export default HomeHeroSection;
