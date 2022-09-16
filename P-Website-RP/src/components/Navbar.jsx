import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          {'<h-aln>'}
        </a>
      
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white cursor-pointer" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white cursor-pointer" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white cursor-pointer" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-white cursor-pointer">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};



export default Navbar;
