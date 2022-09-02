import React, {useState} from "react";
import "./TestCard.css"
import {questions} from "../helpers/data"

const TestCard = () => {

    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    
    const handleClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        } else if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowResult(true)
        }
    }

    const handleStart = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResult(false);
    }

  return (

    <div className="container">
        <h1>Self Reliance Test</h1>
        <h2>Current Score : {score}</h2>

        {
            showResult ? (
                <div className="result">
                    <h1>Result</h1>
                    <h2>{score} out of {questions.length} you are - {((score / questions.length) * 100 ).toFixed()} % - self confident</h2>
                    <button onClick={() => handleStart()} >Restart Test</button>
                </div> 
            ) : (
                <div className="question-card">
                    <h2>Question {currentQuestion + 1} out of {questions.length} </h2>
                    <h3> {questions[currentQuestion].text} </h3>
                    <ul>
                        {
                            questions[currentQuestion].options.map((option) => {
                                return (
                                    <li onClick={() => handleClick(option.isCorrect)} 
                                    key={option.id} >
                                        {option.text} 
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        }

    </div>
  )
};

export default TestCard;
