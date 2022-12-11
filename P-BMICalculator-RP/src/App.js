import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const calcBmi = (e) => {
    e.preventDefault();
    if (weight === "" || height === "") {
      alert("Please enter weight and height...");
    } else {
      let bmi = weight / (height * height);
      setBmi(bmi.toFixed());

      if (bmi <= 18) {
        setMessage("You are weak");
        setImage(
          "https://cdn1.vectorstock.com/i/thumb-large/23/30/muscle-weakness-rgb-color-icon-vector-40002330.jpg"
        );
      } else if (bmi <= 25 && bmi > 18) {
        setMessage("You are normal");
        setImage(
          "https://www.freeiconspng.com/thumbs/fitness-icon-png/gym-icon-png-kansas-city-5.png"
        );
      } else if (bmi <= 30 && bmi > 25) {
        setMessage("You are fat");
        setImage("https://cdn-icons-png.flaticon.com/512/1951/1951542.png");
      } else if (bmi <= 35 && bmi > 30) {
        setMessage("You are obese");
        setImage(
          "https://www.logogallery.net/wp-content/uploads/2020/12/580363563fac0626f3f8d6b39b84d803.png"
        );
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
              onFocus
            />
          </div>
          <div>
            <label htmlFor="">Height (m)</label>
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
        {bmi && (
          <>
            <div className="center">
              <h3>Your Bmi is : {bmi}</h3>
              <p>{message}</p>
            </div>

            <div className="img-container">
              <img src={image} alt="bmi-img" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
