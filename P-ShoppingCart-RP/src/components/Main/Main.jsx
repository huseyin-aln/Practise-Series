import React from "react";
import "./Main.css"
import data from "../../assets/data"
import Card from "../Card/Card"


const Main = ({handleClick}) => {
  return (
    <section>
      {
        data.map((item) => (
          <Card key={item.id} item={item} handleClick={handleClick} />
        ))
      }
    </section>
  )
};

export default Main;
