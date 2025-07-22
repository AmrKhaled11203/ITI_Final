import React from "react";
import "./Careers_Styles.css";
import backgroundImage from "../../assets/images/WhatsApp Image 2025-07-12 at 17.20.43_857a17b6.jpg";

export default function HeroSection() {
  return (
    <div className="hero_Section">
      <img src={backgroundImage} alt="Background" className="hero-image" />
      <div className="text-overlay">
        <p className="main_Paragraph">Join Our Team at SquareUp</p>
        <p className="sub_Paragraph">
          Unlock your potential and join our team of innovators and problem
          solvers.
        </p>
      </div>
    </div>
  );
}
