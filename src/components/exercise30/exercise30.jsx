import { useEffect, useState } from "react";
import { SideEffect } from "./exercise32";

function useCounter(){
  const [counter, setCounter] = useState(0)

  function incrementCount() {
    setCounter(counter + 1);
  }

   
  function decreaseCount() {
    setCounter(counter - 1);
  }

  function resetCount() {
    setCounter(0);
  } 

  return {
    counter : counter,
    onIncrement: incrementCount,
    onDecrement: decreaseCount,
    onReset: resetCount,

  }

}



export function ClickCounterFunc({ props }) {
      const {counter , onDecrement , onReset, onIncrement} = useCounter()


 

  

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrease</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

// non era richiesto un secondo bottone li ho aggiunti per esercitarmi
