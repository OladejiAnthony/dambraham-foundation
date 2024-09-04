import React from 'react';
import "../styles/AboutPage.scss"
import OurStory from '../components/about/OurStory';
import VisionMis from '../components/about/VisionMis';
import Team from '../components/about/Team';
import Partners from '../components/about/Partners';

const AboutPage = () => {
  return (
    <div className="about-page">
      <OurStory />
      <VisionMis />
      <Team />
      <Partners />
    </div>
  );
};

export default AboutPage;
