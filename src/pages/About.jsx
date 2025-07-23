import React from "react";


import LastSection from "../components/careers/LastSection";
import "./Careers.css"
import Head from "../components/about/Head";
import AboutSection from "../components/about/About_Section";
import StorySection from "../components/about/Our Story";
const Careers = () => {
  return <div className="container">
    <Head/>
    <AboutSection/>
    < StorySection/>
    <LastSection/>
  </div>;
};
export default Careers;
