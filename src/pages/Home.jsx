import React from "react";
import "./Careers.css";
import '../components/home/M-Container.css';
import TestimonialsSection from "../components/home/TestimonialsSection";
import FAQSection from "../components/home/FAQSection";
import Header from "../components/home/Header";
import Brands from "../components/home/Brands";
import Hero from "../components/services/Hero";
import Services from "../components/home/Services";
import HomeHeroSection from "../components/home/HomeHeroSection";
import HomeFeatureCardsGrid from '../components/home/HomeFeatureCardsGrid';

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
    </div>
  );
};
export default Careers;
