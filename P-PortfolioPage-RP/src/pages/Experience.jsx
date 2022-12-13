import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const Experience = () => {
  return (
    <div className="expContainer">
      <div className="expElements">
        <ol>
          <li>
            <SchoolIcon />
            <h3>Graduation</h3>,<p>Beykent Univercity</p>
          </li>
          <li>
            <BusinessCenterIcon />
            <h3>Frontend Developer</h3>
            <p>Upwork.com</p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Experience;
