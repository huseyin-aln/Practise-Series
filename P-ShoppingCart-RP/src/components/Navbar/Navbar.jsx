import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({setShow, size}) => {
  return (
    <nav>
      <div className="nav-box">
        <span className="my-shop" onClick={() => setShow(true)}>My Shopping</span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <FaShoppingCart />
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
