import React, { useState } from "react";
import "./Gallery.css";
import Images from "../asserts/images";
import { FaWindowClose } from "react-icons/fa";

const Gallery = () => {
  const [picture, setPicture] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setPicture(true);
  };

  return (
    <>
      <div className={picture ? "open" : "picture"}>
        <img src={tempImgSrc} alt="" />
        <FaWindowClose onClick={() => setPicture(false)} />
      </div>
      <div className="gallery">
        {Images.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.image)}
            >
              <img src={item.image} alt="" style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
