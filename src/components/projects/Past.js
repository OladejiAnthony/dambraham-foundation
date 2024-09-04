import React from 'react';
import "./Past.scss";

const Past = () => {
  const projects = [
    {
      title: 'Food Distribution Drive',
      description: 'A successful drive to distribute food to families in need during the holiday season.',
      impact: 'Distributed over 5,000 meals to families across the city, significantly reducing food insecurity.',
    },
    {
      title: 'Health Awareness Campaign',
      description: 'An initiative to promote health and wellness through free health screenings and educational seminars.',
      impact: 'Provided health screenings to 1,200 individuals and educated over 500 people about preventive health measures.',
    }
  ];

  return (
    <div className="past-projects">
      <h2>Past Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p><strong>Description:</strong> {project.description}</p>
          <p><strong>Impact:</strong> {project.impact}</p>
        </div>
      ))}
    </div>
  );
}

export default Past;

