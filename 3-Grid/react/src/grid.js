import React from 'react';
import Cell from './cell'

// eslint-disable-next-line react/prop-types
const Grid = ({dimensions, gameGrid}) => {
    
    const cellSize = Math.floor(Math.min(
    ...[
        ((dimensions.width-100) * .8) / dimensions.cols,
        (dimensions.height * .8) / dimensions.rows,
        200
    ]));
    
    const styles = {
        width: `${dimensions.cols*cellSize}px`,
        gridTemplateColumns: `repeat(${dimensions.cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${dimensions.rows}, ${cellSize}px)`
    }
  
    return (
        <div className="grid" style={styles}>
        {gameGrid.map((cell, index) => <Cell key={index} cell={cell} />)}
        </div>
    ); 
}
  
export default Grid;