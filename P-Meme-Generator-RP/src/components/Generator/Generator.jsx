import React, {useState, useEffect} from "react";
import "./Generator.css"


const Generator = () => {

  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [randomImg, setRandomImg] = useState("");
  const [allImg, setAllImg] = useState([]);
  
  
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(response => {
      const {memes} = response.data
      console.log(memes);
      setAllImg(memes)
    })
  }, []);


  const handleTopChange = (e) => {
    setTopText(e)
  }

  const handleBottomChange = (e) => {
    setBottomText(e)
  }

  const randomPhoto = () => {
    let randomNum = Math.floor(Math.random() * allImg.length)
    setRandomImg(allImg[randomNum])
  }
  
  
  return (
    <div className="container">
      <div className="inputs">
        <input 
          className="input"
          type="text"
          name="topText"
          value={topText}
          placeholder="enter top text"
          onChange={(e) => handleTopChange(e.target.value)}
        />
         <input 
          className="input"
          type="text"
          name="bottomText"
          value={bottomText}
          placeholder="enter bottom text"
          onChange={(e) => handleBottomChange(e.target.value)}
        />
        <button onClick={() => randomPhoto()}>
          <div>
            <span>
              <p>Generate Meme  😀 </p>
            </span>
          </div>
          <div>
            <span>
              <p>Thanks 😉 </p>
            </span>
          </div>
        </button>

        <div className="image">
          <img src={randomImg.url} alt="" />
          <h2 className="top">{topText}</h2>
          <h2 className="bottom">{bottomText}</h2>
        </div>
      </div>
    </div>
    )
};

export default Generator;
