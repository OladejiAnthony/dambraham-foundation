import React from 'react';
import './CallToAction.scss';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section id="cta" className="cta">
      <div className="container">
        <h2>Get Involved</h2>
        <div className="buttons">
          <Link to="/donate">Donate Now</Link>
          <Link to="/application-form">Volunteer With Us</Link>
          <Link to="/get-involved">Learn More</Link>
        </div>
        <div className="metrics">
          <div className="metric">
            <h3>10,000+</h3>
            <p>People Helped</p>
          </div>
          <div className="metric">
            <h3>150+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="metric">
            <h3>500+</h3>
            <p>Volunteers Engaged</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

