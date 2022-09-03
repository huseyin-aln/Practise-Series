import { useState } from "react";
import "./App.css";

function App() {

  const [hex, setHex] = useState("#fff");
  
  const randomHex = () => {
    const randomhex = "#" + Math.floor(Math.random() * 16777721).toString(16)
    setHex(randomhex)
  }

  return (
    <div className="App" style={{backgroundColor: `${hex}`}}>
      <h1>{hex}</h1>
      <button onClick={randomHex} >CLICK FOR NEW BACKGROUND</button>
      <button onClick={() => navigator.clipboard.writeText(hex)} >COPY THE HEX VALUE</button>
    </div>
  );
}

export default App;
