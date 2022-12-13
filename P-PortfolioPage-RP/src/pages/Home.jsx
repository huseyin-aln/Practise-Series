import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My name is Huseyin</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating</p>
          <EmailIcon />
          <GitHubIcon />
          <LinkedInIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>Reactjs, Redux, Html, Css, Javascript</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>Django</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
