import React, { useState} from 'react';



const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increamentCounter = ()=>{
        setCounter((prevCounter) => prevCounter + 1);
    };
    const decreamentCounter = () => {
        setCounter((prevCounter) => prevCounter -1);
    }

    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <button data-testid="increament" onClick={increamentCounter}>+</button>
            <p data-testid="counter">{counter}</p>
            <button onClick={decreamentCounter}>-</button>
        </div>
    )
}
export default Counter;