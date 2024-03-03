import React, { useState, useCallback, useEffect, useMemo } from "react";

function App() {
    const [message, setMessage] = useState("Hello, World!");
    const [counter, setCounter] = useState(0);

    const greeting = useCallback((text) => {
        console.log(text);
        return text;
    }, []);

    useEffect(() => {
        greeting(message);
    }, [greeting, message]);


    const memoizedMessage = useMemo(() => {
       return greeting (message)
    }, [greeting, message])


    return (
        <div>
            <p>{memoizedMessage}</p>
            <button onClick={() => setCounter(counter + 1)}>
                На меня нажали {counter} раз.
            </button>
        </div>
    );
}

export default App;
