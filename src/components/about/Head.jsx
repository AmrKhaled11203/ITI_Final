import React from 'react';
import './about_Style.css';
import bgImage from '../../assets/images/about images/14.jpg'; 

export default function Head() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <h1>About Us</h1>
      <p>
        Welcome to SquareUp, where collaboration, expertise, and client-centricity
        intersect to shape the future of digital innovation.
      </p>
    </section>
  );
}
