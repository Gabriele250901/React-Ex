import { useEffect } from "react";
import { useState } from "react";

export function CounterFunc() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((value) => value + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Counter: {counter}</h1>
    </div>
  );
}
