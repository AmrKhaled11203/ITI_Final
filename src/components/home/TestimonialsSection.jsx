import React from "react";
import TestimonialsContent from "./TestimonialsContent";
import "./TestimonialsSection.css";
import bg from "../../assets/images/WhatsApp Image 2025-07-12 at 17.20.43_857a17b6.jpg"; 

const TestimonialsSection = () => {
  return (
    <>
      <section className="TestimonialsSection" id="TestimonialsSection">
        <img src={bg} alt="Background" className="TestimonialsSection-image" />
        <div className="text-overlay">
          <p className="main_Paragraph">What our Clients say About us</p>
          <p className="sub_Paragraph">
            At SquareUp, we take pride in delivering exceptional digital
            products and services that drive success for our clients. Here's
            what some of our satisfied clients have to say about their
            experience working with us.
          </p>
        </div>
      </section>
      <TestimonialsContent />
    </>
  );
};

export default TestimonialsSection;
