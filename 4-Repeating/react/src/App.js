import React from "react";
import "./App.css";
import GameEngine from "./gameengine";
import Grid from "./grid";

function App() {
  let [grid, setGrid] = React.useState([]);
  if (grid.length === 0) {
    grid = GameEngine.setupBlinker();
  }

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

  React.useEffect(() => {
    const timerId = setTimeout(() => {
      const newGrid = grid.map(cell =>
        GameEngine.determineNewState(cell, grid)
      );
      setGrid(newGrid);
    }, 1000);
    return () => clearTimeout(timerId);
  });

  return (
    <div className="App">
      <Grid dimensions={dimensions} gameGrid={grid} />
    </div>
  );
}

export default App;
