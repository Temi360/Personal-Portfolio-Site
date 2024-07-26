// ProjectsPage.js
import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import projectData from "./projectData";
import "./portfolio_page.css";

const ProjectsPage2 = () => {
  return (
    <div className="projects-page">
      {projectData.map((project) => (
        <ProjectTemplate
          key={project.id}
          title={project.title}
          projectImage={project.projectImage}
          type={project.type}
          role={project.role}
          duration={project.duration}
          stackImages={project.stackImages}
          projectDescription={project.projectDescription}
        />
      ))}
    </div>
  );
};

export default ProjectsPage2;
