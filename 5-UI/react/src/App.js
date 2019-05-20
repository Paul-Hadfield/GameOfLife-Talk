import React from "react";
import "./App.css";
import GameEngine from "./engine/gameengine";
import Grid from "./grid";
import Options from "./options";

function App() {
  const setupGrid = pattern => {
    switch (pattern) {
      case "blinker":
        return GameEngine.setupBlinker();
      case "beacon":
        return GameEngine.setupBeacon();
      case "toad":
        return GameEngine.setupToad();
      case "pulsar":
        return GameEngine.setupPulsar();
      case "acorn":
        return GameEngine.setupAcorn();
      case "diehard":
        return GameEngine.setupDiehard();
      default:
        return GameEngine.setupRandom();
    }
  };

  let [pattern, setPattern] = React.useState("random");
  let [grid, setGrid] = React.useState(setupGrid(pattern));
  let [restartKey, setRestartKey] = React.useState(0);

  React.useEffect(() => {
    const timerId = setTimeout(() => {
      setGrid(GameEngine.determineNewGrid(grid));
    }, 1000);
    return () => clearTimeout(timerId);
  });

  const handleTypeChanged = changeEvent => {
    pattern = changeEvent.target.value;
    setPattern(pattern);
    restartGame();
  };

  const handleRestartClicked = () => {
    event.preventDefault();
    restartGame();
  };

  const restartGame = () => {
    setGrid(setupGrid(pattern));
    setRestartKey(restartKey + 1);
  };

  return (
    <div className="App">
      <Grid key={restartKey} gameGrid={grid} />
      <Options
        pattern={pattern}
        typeChanged={handleTypeChanged}
        restartClick={handleRestartClicked}
      />
    </div>
  );
}

export default App;
