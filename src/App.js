import Menu from "./components/Menu";
import "./App.css";
import { useState } from "react";
import { GameStateContats } from "./Helper/Contats";
import Quiz from "./components/Quiz";


// [menu, playing, finsished]
function App() {

  const [gameState, setGameState] = useState('menu');
  const [userName, setUserName] = useState('menu');

  return (
    <div className="App">
        <h1>Quizz App</h1>
        <GameStateContats.Provider value={{gameState, setGameState, userName, setUserName}}>
          {gameState === "menu" && <Menu />}
          {gameState === "playing" && <Quiz />}
        </GameStateContats.Provider>
        
    </div>
  );
}

export default App;
