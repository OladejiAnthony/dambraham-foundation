// src/components/home/MissionStatement.js
import React from "react";
import "./MissionStatement.scss";

const MissionStatement = () => {
  return (
    <section id="mission-statement" className="mission-statement">
      <div className="container">
        <h2 className="text-center">Our Mission</h2>
        <p>
          At <strong>Dambraham Foundation</strong>, we focus on empowering a
          brighter tomorrow, our mission is to compassionately serve the
          vulnerable, advocate for social justice, and eradicate poverty,
          ensuring dignity and hope for the homeless, orphaned, widowed, sick,
          and less privileged worldwide. We empower underserved communities by
          providing access to quality education, healthcare, and economic
          opportunities. We are committed to creating sustainable change through
          innovative solutions and collaborative efforts.
        </p>

        <h2>Our objectives are to:</h2>
        <p>
          To empower vulnerable populations, promote social justice, and
          eradicate poverty through compassionate service, advocacy, and
          sustainable community development.
        </p>
        <ul>
          <li>
            Provide essential services (food, shelter, healthcare) to vulnerable
            individuals.
          </li>
          <li>
            Advocate for policy changes addressing poverty, homelessness, and
            social injustice.
          </li>
          <li>Establish community centers providing support services.</li>
          <li>Research social issues affecting vulnerable populations.</li>
          <li>
            Establish strategic partnerships with international organizations.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MissionStatement;
