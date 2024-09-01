// src/pages/HomePage.js
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import MissionStatement from '../components/home/MissionStatement';
import CallToAction from '../components/home/CallToAction';
import Success from '../components/home/Success';

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
      <Success  />
    </div>
  );
};

export default HomePage;


