import React from 'react'
import { useContext } from 'react'
import { GameStateContats } from '../Helper/Contats'


const Menu = () => {
    const {gameState, setGameState, userName, setUserName} = useContext(GameStateContats)
    return (
        <div className='Menu'>
            <label >Enter Your Name</label>
            <input type="text" placeholder='Ex. John Smith' 
            onChange={(event) =>{
                setUserName(event.target.value)
            }} />
            <button 
            onClick={()=>setGameState("playing")
            }>Start Quiz</button>
        </div>
    )
}

export default Menu