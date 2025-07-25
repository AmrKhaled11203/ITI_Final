import React from "react";
import "./Careers.css";
import "../components/home/M-Container.css";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FAQSection from "../components/home/FAQSection";
import Header from "../components/home/Header";
import Brands from "../components/home/Brands";
import Hero from "../components/services/Hero";
import Services from "../components/home/Services";
import HomeHeroSection from "../components/home/HomeHeroSection";
import HomeFeatureCardsGrid from "../components/home/HomeFeatureCardsGrid";
import Mid from "./../components/process/Mid";
import Foot from "./../components/process/Foot";
import Last from "./../components/process/Last";

const Careers = () => {
  return (
    <div className="container">
      <Header />
      <Brands />
      <Hero />
      <Services />
      <HomeHeroSection />
      <HomeFeatureCardsGrid />
      <TestimonialsSection />
      <FAQSection />
      <Mid />
      <Foot />
      <Last />
    </div>
  );
};
export default Careers;
