import Menu from "./components/Menu";
import "./App.css";
import { useState } from "react";
import { GameStateContext } from "./Helper/Contats";
import Quiz from "./components/Quiz";


// [menu, playing, finsished]
function App() {

  const [gameState, setGameState] = useState('menu');
  const [userName, setUserName] = useState('menu');
  const [score, setScore] = useState(0);

  return (
    <div className="App">
        <h1>Quizz App</h1>
        <GameStateContext.Provider value={{gameState, setGameState, userName, setUserName, score, setScore}}>
          {gameState === "menu" && <Menu />}
          {gameState === "playing" && <Quiz />}
        </GameStateContext.Provider>
        
    </div>
  );
}

export default App;
