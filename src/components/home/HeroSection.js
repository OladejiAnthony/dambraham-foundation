// src/components/HeroSection.js
import React from 'react';
import Slider from 'react-slick';
import './HeroSection.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import FontAwesome icons
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import hero1 from "../../assets/images/hero.jpg";
import hero2 from "../../assets/images/hero2.jpg";
import hero3 from "../../assets/images/hero3.jpg";
import hero4 from "../../assets/images/hero4.jpg";
import hero5 from "../../assets/images/hero5.jpg";

const HeroSection = ({ scrollToSection }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <FaArrowLeft className="slick-prev" />,
    nextArrow: <FaArrowRight className="slick-next" />,
  };

  return (
    <section className="hero">
      <Slider {...settings}>
        <div className="slide">
          <img src={hero1} alt="Hero 1" />
          <div className="overlay">
            <h1>Welcome to Dambraham Foundation</h1>
            <p>A beacon of Happiness, delivering exceptional care and support that exceeds expectations and touches hearts.</p>
            <button onClick={() => scrollToSection('mission')}>Learn More</button>
          </div>
        </div>
        <div className="slide">
          <img src={hero2} alt="Hero 2" />
          <div className="overlay">
            <h1>Join Us in Our Mission</h1>
            <p>Impacting Lives One at a Time...</p>
            <button onClick={() => scrollToSection('mission')}>Learn More</button>
          </div>
        </div>
        <div className="slide">
          <img src={hero3} alt="Hero 3" />
          <div className="overlay">
            <h1>Your Support Matters</h1>
            <p>Help Us Make a Difference...</p>
            <button onClick={() => scrollToSection('mission')}>Learn More</button>
          </div>
        </div>
        <div className="slide">
          <img src={hero5} alt="Hero 5" />
          <div className="overlay">
            <h1>Improving Well-being</h1>
            <p>Our Focus is on Enhancing the Well-being of People Everywhere...</p>
            <button onClick={() => scrollToSection('mission')}>Learn More</button>
          </div>
        </div>
        <div className="slide">
          <img src={hero4} alt="Hero 4" />
          <div className="overlay">
            <h1>Together We Can Achieve More</h1>
            <p>Let's Work Together for a Better Tomorrow...</p>
            <button onClick={() => scrollToSection('mission')}>Learn More</button>
          </div>
        </div>
        
      </Slider>
    </section>
  );
};

export default HeroSection;
