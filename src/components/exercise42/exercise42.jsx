import { useCallback, useState } from "react";


export function CallBackCounter({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)

    const handleIncrement = useCallback(function handleIncrement(){
        setCounter((c)=> c + 1)
    },[])
    const handleDecrease = useCallback(function handleDecrease(){
        setCounter((c)=> c - 1)
    },[])
    const handleReset = useCallback(function handleReset(){
        setCounter(initialValue)
    },[initialValue])

    return (
        <div>
            <h1>Count: {counter}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrease}>-</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
