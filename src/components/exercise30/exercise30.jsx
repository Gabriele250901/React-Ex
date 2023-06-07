import { useEffect, useState } from "react";
import { SideEffect } from "./exercise32";

export function ClickCounterFunc({ props }) {
  const [counter, setCounter] = useState(0);

  function incrementCount() {
    setCounter(counter + 1);
  }
  function decreaseCount() {
    setCounter(counter - 1);
  }
  function resetCount() {
    setCounter(0);
  } 

  function onCounterChange(){
    console.log(`The counter is ${counter}`)
  }
  

  

  return (
    <div>
      <SideEffect incrementCount={incrementCount} decreaseCount={decreaseCount} resetCount={resetCount} counter={counter} 
      counterChange={onCounterChange}/>
    </div>
  );
}

// non era richiesto un secondo bottone li ho aggiunti per esercitarmi
