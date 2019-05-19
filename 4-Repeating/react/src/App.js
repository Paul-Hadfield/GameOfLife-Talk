import React from "react";
import "./App.css";
import GameEngine from "./engine/gameengine";
import Grid from "./grid";

function App() {
  let [grid, setGrid] = React.useState(GameEngine.setupRandom());

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
      <Grid gameGrid={grid} />
    </div>
  );
}

export default App;
