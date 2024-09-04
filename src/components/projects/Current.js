import React from 'react';
import "./Current.scss";

const Current = () => {
  const projects = [
    {
      title: 'Community Clean-Up Initiative',
      description: 'We are currently organizing a series of community clean-up events aimed at improving local environments and fostering community spirit.',
      goals: 'To clean up local parks and streets, increase community engagement, and promote environmental awareness.',
      progress: 'We have successfully organized 5 clean-up events this month, with 150+ volunteers participating.',
    },
    {
      title: 'Youth Education Program',
      description: 'Our Youth Education Program focuses on providing educational resources and mentorship to underprivileged children.',
      goals: 'To offer tutoring, mentorship, and educational materials to over 200 students in the next year.',
      progress: 'We have enrolled 100 students so far and have organized 15 workshops on various subjects.',
    }
  ];

  return (
    <div className="current-projects">
      <h2>Current Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p><strong>Description:</strong> {project.description}</p>
          <p><strong>Goals:</strong> {project.goals}</p>
          <p><strong>Progress:</strong> {project.progress}</p>
        </div>
      ))}
    </div>
  );
}

export default Current;


