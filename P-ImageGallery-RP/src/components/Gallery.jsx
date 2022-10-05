import React, { useState } from "react";
import "./Gallery.css";
import Images from "../asserts/images";
import { FaWindowClose } from "react-icons/fa";

const Gallery = () => {
  const [picture, setPicture] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (img) => {
    setTempImgSrc(img);
    setPicture(true);
  };

  return (
    <>
      <div className={picture ? "picture open" : "picture"}>
        <img src={tempImgSrc} alt="" />
        <FaWindowClose className="x" onClick={() => setPicture(false)} />
      </div>
      <div className="gallery">
        {Images.map((item, index) => {
          return (
            <div className="pics" key={index}>
              <img
                src={item.image}
                alt=""
                style={{ width: "100%" }}
                onClick={() => getImg(item.image)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
