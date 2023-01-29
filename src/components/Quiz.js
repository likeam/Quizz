import React from 'react'
import { useState } from 'react'
import Questions from '../Helper/Questions'

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [ optionChosen, setOptionChosen] = useState("");

    const cohoseOption = (option) =>{
        setOptionChosen(option)
    }

    const nextQuestion = () => {
        if(Questions[currentQuestion].answer === optionChosen){
            console.log("Correct");
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
            <button onClick={nextQuestion}>Next Question</button>
        </div>
    )
}

export default Quiz
