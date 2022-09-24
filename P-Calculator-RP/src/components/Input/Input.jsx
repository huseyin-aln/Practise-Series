import React from "react";
import "./Input.css"

const Input = ({text, result}) => {
  return (
    <div className="input-wrapper">
      <div className="screen-up">
        <h1>{result}</h1>
      </div>
      <div className="screen-down">
        <h3>{text}</h3>
      </div>
    </div>
  )
};

export default Input;
