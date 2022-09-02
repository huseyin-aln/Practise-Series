import React from "react";

const Acordion = ({title, active, setActive}) => {
  return (
    <div className="accordion">
        <div className="accordionHeading">
            <div className="container">
                <p>{title}</p>
                <span onClick={() => setActive(title)} >CLICK ME</span>
            </div>
        </div>
        <div className={(active === title ? 'show' : "") + "accordionContent"}>
          <div className="container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, molestias? Omnis, quasi facere. Ipsam accusamus ut temporibus quas itaque! A!
            </p>
          </div>
        </div>
        
        
    </div>
  )
};

export default Acordion;
