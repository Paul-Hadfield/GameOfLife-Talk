import React from 'react';
import './options.css'

// eslint-disable-next-line react/prop-types
const Options = ({pattern, typeChanged, restartClick}) => {
    return (
        <form>
            <div className="options">
                <div><input type="Radio" id="blinker" name="pattern" onChange={typeChanged} value="blinker" checked={pattern === 'blinker'} /><label htmlFor="blinker" selected>Blinker</label></div>
                <div><input type="Radio" id="toad" name="pattern" onChange={typeChanged} value="toad" checked={pattern === 'toad'} /><label htmlFor="toad" selected>Toad</label></div>
                <div><input type="Radio" id="beacon" name="pattern" onChange={typeChanged} value="beacon" checked={pattern === 'beacon'} /><label htmlFor="beacon" selected>Beacon</label></div>
                <div><input type="Radio" id="pulsar" name="pattern" onChange={typeChanged} value="pulsar" checked={pattern === 'pulsar'} /><label htmlFor="pulsar" selected>Pulsar</label></div>
                <div><input type="Radio" id="acorn" name="pattern" onChange={typeChanged} value="acorn" checked={pattern === 'acorn'} /><label htmlFor="acorn" selected>Acorn</label></div>
                <div><input type="Radio" id="diehard" name="pattern" onChange={typeChanged} value="diehard" checked={pattern === 'diehard'} /><label htmlFor="diehard" selected>Diehard</label></div>
                <div><input type="Radio" id="random" name="pattern" onChange={typeChanged} value="random" checked={pattern === 'random'} /><label htmlFor="random">Random</label></div>
            </div>
            <button onClick={restartClick}>Restart</button>
        </form>
    );
}

export default Options;