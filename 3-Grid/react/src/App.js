import React from "react";
import "./App.css";
import GameEngine from "./engine/gameengine";
import Grid from "./grid";

function App() {
  let grid = GameEngine.setupBlinker();

  let rows = 0;
  let cols = 0;

  grid.forEach(cell => {
    if (cell.x > cols) {
      cols = cell.x;
    }
    if (cell.y > rows) {
      rows = cell.y;
    }
  });

  const dimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
    rows,
    cols
  };

  return (
    <div className="App">
      <Grid dimensions={dimensions} gameGrid={grid} />
    </div>
  );
}

export default App;
