import React from 'react';
import "./VolunteerOpportunities.scss";

const VolunteerOpportunities = () => {
  return (
    <div className="volunteer-opportunities">
      <h2>Volunteer Opportunities</h2>
      <p>Learn how you can get involved by volunteering with us! We have various positions available:</p>
      <ul>
        <li><strong>Community Outreach Coordinator:</strong> Organize events and engage with the community.</li>
        <li><strong>Fundraising Assistant:</strong> Help with planning and executing fundraising campaigns.</li>
        <li><strong>Administrative Support:</strong> Assist with office tasks and documentation.</li>
      </ul>
      <p>Interested in applying? Fill out our <a href="/volunteer-application">application form</a> and join our team!</p>
    </div>
  );
}

export default VolunteerOpportunities;
