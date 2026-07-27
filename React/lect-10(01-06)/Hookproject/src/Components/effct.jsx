import React, { useState, useEffect } from 'react';

function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <h1>Timer is :: {count}</h1>
        </div>
    );
}

export default UseEffect;