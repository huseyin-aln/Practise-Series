import React from "react";
import "./Screen.css"

const Screen = ({text, result}) => {
  return (
    <div className="screen-container">
      <div className="screen-up">
        <h1>{result}</h1>
      </div>
      <div className="screen-down">
        <h3>{text}</h3>
      </div>
    </div>
  )
};

export default Screen;
