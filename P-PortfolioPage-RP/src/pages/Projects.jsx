import React from "react";
import ProjectItem from "../components/ProjectItem";
import data from "../helpers/data";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="header">My Projects</h1>
      <div className="projectList">
        {data.map((project) => {
          return <ProjectItem key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
