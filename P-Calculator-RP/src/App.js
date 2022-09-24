import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import {useState} from "react"
import * as math from "mathjs"

function App() {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  
  const addToText = (val) => {
    setText((text) => [...text, val + " "])
  }

  const resetInput = () => {
    setText("")
    setResult("")
  }

  const calculate = () => {
    const input = text.join("")
    setResult(math.evaluate(input))
  }

  return (
    <div className="App">
      <div className="container">
        <Input text={text} result={result}/>
        <div className="row">
          <Button symbol="7" handleClick={addToText}/>
          <Button symbol="8" handleClick={addToText}/>
          <Button symbol="9" handleClick={addToText}/>
          <Button symbol="/" color="#00ad85" handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText}/>
          <Button symbol="5" handleClick={addToText}/>
          <Button symbol="6" handleClick={addToText}/>
          <Button symbol="*" color="#00ad85" handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText}/>
          <Button symbol="2" handleClick={addToText}/>
          <Button symbol="3" handleClick={addToText}/>
          <Button symbol="+" color="#00ad85" handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText}/>
          <Button symbol="." handleClick={addToText}/>
          <Button symbol="=" handleClick={calculate}/>
          <Button symbol="-" color="#00ad85" handleClick={addToText}/>
        </div>
        <Button symbol="Clear" color="red" handleClick={resetInput}/>
      </div>
      
    </div>
  );
}

export default App;
