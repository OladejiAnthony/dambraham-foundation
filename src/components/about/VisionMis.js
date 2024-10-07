import React from "react";
import "./VisionMis.scss";

const VisionMis = () => {
  return (
    <section className="vision-mis container">
      <h2 className="text-center">Vision and Mission</h2>
      <div className="content">
        <div className="vision">
          <h3>Our Vision</h3>
          <p>
            To make people happy by attending to their needs. To create a world
            where every individual, regardless of their background, has the
            opportunity to achieve their full potential and contribute to the
            well-being of their community.
          </p>
        </div>
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            We are on a mission to move globally to save lives, achieve social
            justice, eradicate poverty, care for people in the society at large
            (Homeless, Motherless, Fatherless,Widows, The sick, and less
            privileged). To empower communities by providing access to
            education, healthcare, and economic opportunities, fostering a
            culture of self-reliance and sustainable development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMis;
