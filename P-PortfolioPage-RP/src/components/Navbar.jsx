import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => setExpandNavbar((prev) => !prev)}>
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skill">Skill</Link>
      </div>
    </div>
  );
};

export default Navbar;