import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { GameStateContext } from '../Helper/Contats';
import Questions from '../Helper/Questions'

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [ optionChosen, setOptionChosen] = useState("");

    const [score, setScore] = useContext(GameStateContext);

    const cohoseOption = (option) =>{
        setOptionChosen(option)
    }

    const nextQuestion = () => {
        if(Questions[currentQuestion].answer === optionChosen){
            setScore(score + 1)
        }else{
            console.log("Wrong");
        }
        setCurrentQuestion(currentQuestion +1);
    }

    return (
        <div className='Quiz'>
            <h1>{Questions[currentQuestion].prompt}</h1>
            <div className="questions">
                <button onClick={() =>{cohoseOption('optionA')}}>{Questions[currentQuestion].optionA}</button>
                <button onClick={() =>{cohoseOption('optionB')}}>{Questions[currentQuestion].optionB}</button>
                <button onClick={() =>{cohoseOption('optionC')}}>{Questions[currentQuestion].optionC}</button>
                <button onClick={() =>{cohoseOption('optionC')}}>{Questions[currentQuestion].optionD}</button>
            </div>
            {score}
            <button onClick={nextQuestion}>Next Question</button>
        </div>
    )
}

export default Quiz
