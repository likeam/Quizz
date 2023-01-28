import Menu from "./components/Menu";
import "./App.css";
import { useState } from "react";


// [menu, playing, finsished]
function App() {

  const [gameStae, setGameState] = useState('menu');
  return (
    <div className="App">
        <h1>Quizz App</h1>
        {gameStae === "menu" && <Menu />}
        
    </div>
  );
}

export default App;
