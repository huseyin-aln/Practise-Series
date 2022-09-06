import React, {useState} from "react";
import {data} from "./data"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const [readMore, setReadMore] = useState("");
    

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div>
        <Slider {...settings}>
        {data.map(item => (
            <div className="card">
                <div className="card-top">
                    <img src={item.image} alt="img" />
                    <h1>{item.title} </h1>

                </div>
                <div className="card-bottom">
                    <p >      
                        {readMore ? item.desc : item.desc.slice(0,100) + "..."}
                        <button className="readmore" onClick={() => setReadMore(!readMore)}>
                            {readMore ? 'show less' : 'read more'}
                        </button>
                    </p>
                </div>

            </div>
        ))}
        </Slider>
    </div>
  )
};

export default Carousel;
