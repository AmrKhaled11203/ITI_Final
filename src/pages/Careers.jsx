import React from "react";
import HeroSection from "../components/careers/HeroSection";
import CareersIntro from "../components/careers/CareersIntro";
import CurrentOpenings from "../components/careers/CurrentOpenings";
import LastSection from "../components/careers/LastSection";
import "./Careers.css"
const Careers = () => {
  return <div className="container">
    <HeroSection/>
    <CareersIntro/>
    <CurrentOpenings/>
    <LastSection/>
  </div>;
};
export default Careers;
