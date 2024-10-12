import React from 'react';
import "../styles/AboutPage.scss"
import OurStory from '../components/about/OurStory';
import VisionMis from '../components/about/VisionMis';
import Team from '../components/about/Team';
import Partners from '../components/about/Partners';
import Objectives from '../components/about/Objectives';
import Activities from '../components/about/Activities';

const AboutPage = () => {
  return (
    <div className="about-page">
      <OurStory />
      <VisionMis />
      <Activities   />
      <Objectives  />
      <Team />
      <Partners />
    </div>
  );
};

export default AboutPage;
