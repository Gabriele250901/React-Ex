import { useEffect } from "react";

export function SideEffect(props) {
  useEffect(() => props.counterChange, [props.counter, props.counterChange]);

  return (
    <div>
      <h1>Counter: {props.counter}</h1>
      <button onClick={props.incrementCount}>Increase!!!</button>
      <button onClick={props.decreaseCount}>Decrease!</button>
      <button onClick={props.resetCount}>Reset!</button>
    </div>
  );
}
