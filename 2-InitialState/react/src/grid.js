import React from "react";
import Cell from "./cell";

// eslint-disable-next-line react/prop-types
const Grid = ({ gameGrid }) => {
  return (
    <div className="grid">
      {gameGrid.map((cell, index) => (
        <Cell key={index} cell={cell} />
      ))}
    </div>
  );
};

export default Grid;
