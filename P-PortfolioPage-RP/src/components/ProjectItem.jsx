import React from "react";

const ProjectItem = ({ image, name }) => {
  return (
    <div className="projectItem">
      <div className="picture">
        <img src={`/images/${image}.PNG`} alt={name} />
      </div>
      <h1>{name}</h1>
    </div>
  );
};

export default ProjectItem;
