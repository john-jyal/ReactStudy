import React, { useState } from 'react';

const Counter = ({ onIncrease, onDecrease, number }) => {

    const defStyle = {
        width: "100px",
        margin: "10 auto",
        textAlign: "middle",
    }

    return(
        <div style={{defStyle}}>
            <h1 style={{paddingLeft: "100"}}>{number}</h1>
            <button style={{ color: "red" }} onClick={onIncrease} > +1 </button>
            <button style={{ color: "blue" }} onClick={onDecrease}> -1 </button>
        </div>
    );
}

export default Counter;