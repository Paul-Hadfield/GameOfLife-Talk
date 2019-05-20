import GridSetup from "./gridsetup";

const applyRules = (isLive, liveNeighbours) => {
  if (isLive) {
    return (liveNeighbours == 2) | (liveNeighbours == 3);
  } else {
    return liveNeighbours == 3;
  }
};

const excludeSelf = (cell, currentCell) => {
  return !(cell.x == currentCell.x && cell.y == currentCell.y);
};

const isLive = cell => {
  return cell.live;
};

const includeNeighbours = (cell, currentCell) => {
  return (
    (cell.x >= currentCell.x - 1) & (cell.x <= currentCell.x + 1) &&
    (cell.y >= currentCell.y - 1) & (cell.y <= currentCell.y + 1)
  );
};

const getNumberOfLiveNeighbours = (cell, currentGrid) => {
  return currentGrid
    .filter(nc => includeNeighbours(nc, cell))
    .filter(nc => excludeSelf(nc, cell))
    .filter(isLive).length;
};

const GameEngine = {
  setupBlinker: () => GridSetup.blinker(),
  setupToad: () => GridSetup.toad(),
  setupBeacon: () => GridSetup.beacon(),
  setupRandom: () => GridSetup.random(),
  setupPulsar: () => GridSetup.pulsar(),
  setupAcorn: () => GridSetup.acorn(),
  setupDiehard: () => GridSetup.diehard(),

  determineNewGrid: grid => {
    return grid.map(cell => this.determineNewState(cell, grid));
  },

  determineNewState: (cell, currentGrid) => {
    return {
      x: cell.x,
      y: cell.y,
      live: applyRules(cell.live, getNumberOfLiveNeighbours(cell, currentGrid))
    };
  }
};

export default GameEngine;
