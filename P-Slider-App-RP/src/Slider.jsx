import React, { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { data } from "./data";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const { title, desc, image } = data[index];

  const nextTour = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      if (newIndex > data.length - 1) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const prevTour = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      if (newIndex < 0) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const randomTour = () => {
    let randomNumber = Math.floor(Math.random() * data.length)
    setIndex(randomNumber)
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={title} />
      </div>
      <div className="title">
        <h4 >{title}</h4>
      </div>
      <p className="info">{desc}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevTour}>
          <FaChevronCircleLeft />
        </button>
        <button className="next-btn" onClick={nextTour}>
          <FaChevronCircleRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomTour}>Random Tour</button>
    </article>
  );
};

export default Slider;
