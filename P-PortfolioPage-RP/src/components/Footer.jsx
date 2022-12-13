import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon />
        <GitHubIcon />
      </div>
      <p>&copy; h-aln 2022</p>
    </div>
  );
};

export default Footer;
