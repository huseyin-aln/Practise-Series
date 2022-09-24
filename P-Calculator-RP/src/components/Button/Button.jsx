import React from "react";
import "./Button.css";

const Button = ({ symbol, color, handleClick }) => {
  return (
    <div
      className="wrapper"
      style={{ backgroundColor: color }}
      onClick={() => handleClick(symbol)}
    >
      {symbol}
    </div>
  );
};

export default Button;
