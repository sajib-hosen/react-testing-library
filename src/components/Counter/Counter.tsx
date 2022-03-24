import React, { useState } from 'react';

const Counter = () => {
    const [counterState, setCounterState ] = useState<number>(0);
    const [inputValue, setInputValue] = useState<number>(1);
    return (
        <div>
            <p data-testid='header'>My Conter</p>
            <h2 data-testid='counter'>{counterState}</h2>
            <button data-testid='subtract-btn'>-</button>
            <input data-testid='inputid' value={inputValue} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setInputValue(Number(e.target.value))}} type="number" name="" id="" />
            <button data-testid='add-btn'>+</button>
        </div>
    );
};

export default Counter;