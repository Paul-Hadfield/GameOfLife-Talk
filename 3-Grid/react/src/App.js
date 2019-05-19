import React from "react";
import "./App.css";
import GameEngine from "./engine/gameengine";
import Grid from "./grid";

function App() {
  let grid = GameEngine.setupBlinker();

  return (
    <div className="App">
      <Grid gameGrid={grid} />
    </div>
  );
}

export default App;
