// ProjectsPage.js
import React from "react";
import { useParams } from "react-router-dom";

import ProjectTemplate from "./ProjectTemplate";
import projectData from "./projectData";
import "./portfolio_page.css";

const ProjectsDetailsPage = () => {
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const project = projectData.find((proj) => proj.id === projectId);
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="projects-page">
      <ProjectTemplate
        key={projectId}
        title={project.title}
        projectImage={project.projectImage}
        type={project.type}
        role={project.role}
        duration={project.duration}
        stackImages={project.stackImages}
        projectDescription={project.projectDescription}
      />
    </div>
  );
};

export default ProjectsDetailsPage;