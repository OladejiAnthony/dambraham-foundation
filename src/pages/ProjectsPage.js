import React from 'react';
import "../styles/ProjectPage.scss";
import Current from '../components/projects/Current';
import Past from '../components/projects/Past';
import Gallery from '../components/projects/Gallery';

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <Gallery />
      <Current />
      <Past />
    </div>
  );
}

export default ProjectsPage;


