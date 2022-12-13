import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link
          to="//www.linkedin.com/in/h%C3%BCseyin-arslan444/"
          target="_blank"
        >
          <LinkedInIcon />
        </Link>

        <Link to="//github.com/huseyin-aln" target="_blank">
          <GitHubIcon />
        </Link>

        <Link to="mailto:huseyinarslan06@gmail.com" target="_blank">
          <EmailIcon />
        </Link>
      </div>
      <p>Copyright &copy; 2022, {"<h-aln>"}</p>
    </div>
  );
};

export default Footer;
