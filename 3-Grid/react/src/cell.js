import React from 'react';

// eslint-disable-next-line react/prop-types
const Cell = ({cell}) => {
    return (
        <div className="cell" style={{backgroundColor: cell.live ? 'black' : 'white' }}></div>
    )
};

export default Cell;