// src/pages/HomePage.js
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import MissionStatement from '../components/home/MissionStatement';
import CallToAction from '../components/home/CallToAction';
import ImpactMetrics from '../components/home/ImpactMetrics';

const HomePage = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home">
      <HeroSection scrollToSection={scrollToSection} />
      <MissionStatement />
      <CallToAction />
      <ImpactMetrics />
    </div>
  );
};

export default HomePage;
