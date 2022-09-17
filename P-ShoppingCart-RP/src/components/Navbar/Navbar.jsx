import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";

const Navbar = ({setShow, size}) => {
  return (
    <nav>
      <div className="nav-box">
        <span className="shop" onClick={() => setShow(true)}>{'< h-aln >'}</span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <AiOutlineShoppingCart />
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
