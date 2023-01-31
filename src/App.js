import Menu from "./components/Menu";
import "./App.css";
import { useState } from "react";
import { GameStateContext } from "./Helper/Contats";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";


// [menu, playing, finsished]
function App() {

  const [gameState, setGameState] = useState("finshed");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
        <h1>Quizz App</h1>
        <GameStateContext.Provider value={{gameState, setGameState, userName, setUserName, score, setScore}}>
          {gameState === "menu" && <Menu />}
          {gameState === "playing" && <Quiz />}
          {gameState === "finshed" && <EndScreen />}
        </GameStateContext.Provider>
        
    </div>
  );
}

export default App;
