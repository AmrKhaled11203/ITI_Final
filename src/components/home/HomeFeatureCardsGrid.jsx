// HomeFeatureCardsGrid.jsx
import React from "react";
import '../home/M-Container.css';
import HomeFeatureCard from "./HomeFeatureCard";

const cardData = [
  {
    imageSrc: require("../../assets/images/work_images/Expertise_Logo.png"),
    title: "Expertise",
    description:
      "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
  },
  {
    imageSrc: require("../../assets/images/work_images/Client-Centric-Approach-logo.png"),
    title: "Client-Centric Approach",
    description:
      "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
  },
  {
    imageSrc: require("../../assets/images/work_images/Results-Driven-Solutions-logo.png"),
    title: "Results-Driven Solutions",
    description:
      "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
  },
  {
    imageSrc: require("../../assets/images/work_images/Collaborative Partnership-logo.png"),
    title: "Collaborative Partnership",
    description:
      "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
  },
];

const HomeFeatureCardsGrid = () => {
  return (
    <section className="home-container-2">
      <div className="home-flex-container">
        <HomeFeatureCard {...cardData[0]} />
        <HomeFeatureCard {...cardData[1]} />
      </div>
      <div className="home-flex-container">
        <HomeFeatureCard {...cardData[2]} />
        <HomeFeatureCard {...cardData[3]} />
      </div>
    </section>
  );
};

export default HomeFeatureCardsGrid;
