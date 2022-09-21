import React, {useState} from "react";
import Box from "../Box/Box";
import "./Game.css"

const Game = () => {
    const [turn, setTurn] = useState("X");

    const changeTurn = () => {
        setTurn(turn => turn === "X" ? "O" : "X")
    }
    
  return (
    <div id="game">
        <div className="row">
            <Box currentState={turn} changeTurn={changeTurn}/>
            <Box currentState={turn} changeTurn={changeTurn}/>
            <Box currentState={turn} changeTurn={changeTurn}/>
        </div>
        <div className="row">
            <Box currentState={turn} changeTurn={changeTurn}/>
            <Box currentState={turn} changeTurn={changeTurn}/>
            <Box currentState={turn} changeTurn={changeTurn}/>
        </div>
        <div className="row">
            <Box currentState={turn} changeTurn={changeTurn}/>
            <Box currentState={turn} changeTurn={changeTurn}/>
            <Box currentState={turn} changeTurn={changeTurn}/>
        </div>
    </div>
  )
};

export default Game;
