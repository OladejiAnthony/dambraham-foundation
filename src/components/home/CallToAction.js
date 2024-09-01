import React from 'react';
import './CallToAction.scss';

const CallToAction = () => {
  return (
    <section id="cta" className="cta">
      <div className="container">
        <h2>Get Involved</h2>
        <div className="buttons">
          <button>Donate Now</button>
          <button>Volunteer With Us</button>
          <button>Learn More</button>
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

