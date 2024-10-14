import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Question4 = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1);
        setCount(prev => prev + 2);
    };

    return (
        <>
            <Button className='btn btn-primary w-25' onClick={increment}>Click</Button>
            <h6>{count}</h6>
            <p> If you use setCount(count + 1) directly, count might not have been updated by React yet (due to its asynchronous nature), leading to incorrect results if multiple updates are batched together. Using the functional update ensures that you are always working with the most current state.</p>
            <p> By using {`setCount((prevCount) => prevCount + 1)`}, you guarantee that React will correctly apply each increment based on the latest state value, avoiding potential issues with stale state updates.</p>
        </>
    )
}

export default Question4