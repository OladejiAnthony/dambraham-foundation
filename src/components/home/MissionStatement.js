// src/components/home/MissionStatement.js
import React from 'react';
import "./MissionStatement.scss"

const MissionStatement = () => {
  return (
    <section id="mission-statement" className="mission-statement">
      <div className="container">
        <h2 className="text-center">Our Mission</h2>
        <p>
          At Dambraham Foundation, our mission is to empower underserved communities by providing
          access to quality education, healthcare, and economic opportunities. We are committed to
          creating sustainable change through innovative solutions and collaborative efforts.
        </p>
        <h2>
          Our objectives are to:
        </h2>
        <ul>
          <li>Promote literacy and educational advancement in rural areas.</li>
          <li>Enhance healthcare services for the underprivileged.</li>
          <li>Foster economic growth through skill development and entrepreneurship programs.</li>
          <li>Support environmental conservation efforts to build a sustainable future.</li>
        </ul>
      </div>
    </section>
  );
};

export default MissionStatement;
