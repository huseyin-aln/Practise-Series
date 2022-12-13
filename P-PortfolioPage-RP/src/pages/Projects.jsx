import React from "react";
import ProjectItem from "../components/ProjectItem";
import data from "../helpers/data";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projectList">
        {data.map((project) => {
          return <ProjectItem name={project.name} image={project.image} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
