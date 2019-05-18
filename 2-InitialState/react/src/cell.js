import React from "react";

// eslint-disable-next-line react/prop-types
const Cell = ({ cell }) => {
  return (
    <div
      className="cell"
      style={{ backgroundColor: cell.live ? "white" : "white" }}
    >
      {cell.live ? "X" : "0"}
    </div>
  );
};

export default Cell;
