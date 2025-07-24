import React from 'react';
import HeroSection from '../components/works/HeroSection';
import WorkIntro from '../components/works/WorkIntro';
import WorkCardsGrid from '../components/works/WorkCardsGrid';
import WorksFinalSection from '../components/works/WorksFinalSection';
import '../components/works/Works_Style.css';

const Works = () => {
    return (
        <div className="main-container">
            <HeroSection />
            <WorkIntro />
            <WorkCardsGrid />
            <WorksFinalSection />
        </div>
    );
};

export default Works;
