import React from "react";

const Card = ({ item, handleClick }) => {
  const { title, author, price, img } = item;


  return (
    <div className="cards">
      <div className="image-box">
        <img src={img} alt={img} />
      </div>
      <div className="details">
        <p>{title.slice(0, 26) + "..."}</p>
        <p>> {author} </p>
        <p>$ {price} </p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
