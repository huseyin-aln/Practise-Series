import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter weight and height...");
    } else {
      let bmi = weight / (height * height);
      setBmi(bmi.toFixed());

      if (bmi <= 18) {
        setMessage("You are weak");
        setImage("https://i.ytimg.com/vi/okoB9frBGIw/hqdefault.jpg");
      } else if (bmi <= 25 && bmi > 18) {
        setMessage("You are normal");
        setImage(
          "https://galeri.uludagsozluk.com/33/kurtlar-vadisi-pusu-kazim_42709.jpg"
        );
      } else if (bmi <= 30 && bmi > 25) {
        setMessage("You are fat");
        setImage(
          "https://galeri13.uludagsozluk.com/713/kurtlar-vadisi-abidin_2162358.jpg"
        );
      } else if (bmi <= 35 && bmi > 30) {
        setMessage("You are obese");
        setImage("https://i.ytimg.com/vi/IPbyySh9ROM/hqdefault.jpg");
      } else if (bmi >= 35) {
        setMessage("Morbid obesity");
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2 className="center">Bmi Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label htmlFor="">Weight (kg)</label>
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Height (cm)</label>
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit" onClick={() => calcBmi()}>
              Submit
            </button>
            <button
              className="btn btn-outline"
              type="submit"
              onClick={() => reload()}
            >
              Delete Informations
            </button>
          </div>
        </form>
        <div className="center">
          <h3>Your Bmi is : {bmi}</h3>
          <p>{message}</p>
        </div>
        <div className="img-container">
          <img src={image} alt="bmi-img" />
        </div>
      </div>
    </div>
  );
}

export default App;
