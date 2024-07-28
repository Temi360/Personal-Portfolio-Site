import React from "react";
import projectData from "./projectData";
import ProjectListingsTemplate from "./ProjectTemplate";

import "./portfolio_page.css";

const ProjectListingsPage = () => {
  return (
    <div className="projectListing-page">
      {projectData.map((project) => (
        <ProjectListingsTemplate
          key={project.id}
          title={project.title}
          projectDescription={project.projectDescription}
        />
      ))}
    </div>
  );
};

export default ProjectListingsPage;
