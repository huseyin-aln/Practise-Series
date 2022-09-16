import React from "react";
import img from "../assets/developer.png"

const Main = () => {
  return (
    <div className="container mt-5 w-100 h-80 d-flex flex-column align-items-center justify-content-center">
        <img src={img} class="img-fluid" alt="img" style={{"width": "60%"}}></img>
        <div className="mt-2 px-1  py-2 bg-primary text-white ">
           <h1 className="fs-3"> WEB DEVELOPER</h1>
        </div>
    </div>
  )
};

export default Main;
