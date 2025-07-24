// components/TestimonialCard.jsx
import React from "react";
import "./TestimonialsSection.css";
const TestimonialCard = ({
  title,
  description,
  authorphoto,
  authorname,
  authorposition,
}) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <h3 className="testimonial-title">{title}</h3>
        <p className="testimonial-description">{description}</p>
      </div>
      <div className="testimonial-footer">
        <div className="testimonial-author">
          <img src={authorphoto} alt={authorname} className="testimonial-img" />
          <div className="testimonial-info">
            <p className="testimonial-name">{authorname}</p>
            <p className="testimonial-position">{authorposition}</p>
          </div>
        </div>
        <div className="testimonial-actions">
          <button className="testimonial-btn">Show More</button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
