import React, {useState} from "react";

const Box = (props) => {
    const [text, setText] = useState("");

    const toggleText = () => {
        if (text === "") {
            setText(props.currentState)
            props.changeTurn()
        }
    }
    

  return (
    <div className="box" onClick={toggleText} > {text} </div>
  )
};

export default Box;
