import { useState } from "react";


export function ClickCounterFunc({initialValue = 0}){
    const [ counter, setCounter] = useState(initialValue);

    function incrementCount(){
        setCounter(counter + 1)
    }
    function decreaseCount(){
        setCounter(counter-1)
    }
    function resetCount(){
        setCounter(initialValue)
    }

    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={incrementCount}>Increase!!!</button>
            <button onClick={decreaseCount}>Decrease!</button>
            <button onClick={resetCount}>Reset!</button>
        </div>
    )
}

// non era richiesto un secondo bottone li ho aggiunti per esercitarmi 