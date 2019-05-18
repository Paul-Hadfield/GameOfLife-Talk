import React from 'react';
import './App.css';
import GameEngine  from './gameengine'
import Grid from './grid'
import Options from './options'

function App() {

  let [pattern, setPattern] = React.useState('random');
  let [grid, setGrid] = React.useState([]);
  let [restartKey, setRestartKey] = React.useState(0);
  if(grid.length == 0)
  {    
    switch(pattern)
    {
      case 'blinker':
        grid = GameEngine.setupBlinker();
        break;
      case 'beacon':
        grid = GameEngine.setupBeacon();
        break;
      case 'toad':
        grid = GameEngine.setupToad();
        break;
      case 'pulsar':
        grid = GameEngine.setupPulsar();
        break;
      case 'acorn':
        grid = GameEngine.setupAcorn();
        break;
      case 'diehard':
        grid = GameEngine.setupDiehard();
        break;
        default:
        grid = GameEngine.setupRandom();
        break;
    }
    
  }
  
  console.log(pattern);

  let rows = 0;
  let cols = 0;

  grid.forEach(cell => {
    if(cell.x > cols) { cols = cell.x; }
    if(cell.y > rows) { rows = cell.y; }
  })

  const dimensions = {
    width: window.innerWidth, 
    height: window.innerHeight,
    rows, cols
  };
  
 
  const getTimeoutPeriod = () => {

    if( grid.length >= 5000)
    {
      return 250;
    }
    if( grid.length >= 2500) {
      return 500;
    }

    if( grid.length >= 500) {
      return 750;
    }

    return 1000;
  }

  const timeoutPeriod = getTimeoutPeriod();
  
  React.useEffect(() => {

    const timerId = setTimeout(() => {
      const newGrid = grid.map(cell => GameEngine.determineNewState(cell, grid));
      setGrid(newGrid);
    }, timeoutPeriod);
    return () => clearTimeout(timerId);

  });
  
  const handleTypeChanged = (changeEvent) => {
    pattern = setPattern(changeEvent.target.value);
    restartGame();
  }

  const handleRestartClicked = () => {
    event.preventDefault();
    restartGame();
  }

  const restartGame = () => {
    setGrid([]);
    setRestartKey(restartKey+1);
  }

  return (
    <div className="App">
      <Grid key={restartKey} dimensions={dimensions} gameGrid={grid} />
      <Options 
        pattern={pattern}
        typeChanged={handleTypeChanged}
        restartClick={handleRestartClicked} />
    </div>
  );
}

export default App;

