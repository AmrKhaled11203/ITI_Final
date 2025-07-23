import React from "react";
import './about_Style.css';
import aboutImage from "../../assets/images/about images/13.png"; 

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-text">
        <h2>About SquareUp</h2>
        <p>
          SquareUp is a digital product agency that is passionate about crafting exceptional
          digital experiences. We specialize in design, engineering, and project management,
          helping businesses thrive in the digital landscape.
          At SquareUp, we follow a structured and collaborative process to ensure the
          successful delivery of exceptional digital products. Our process combines industry
          best practices, creative thinking, and a client-centric approach.
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="About" />
      </div>
    </section>
  );
};

export default AboutSection;
