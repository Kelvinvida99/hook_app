import { useState } from "react";

export const useCounter = (newCounter = 10) => {
  const [counter, setCounter] = useState(newCounter);

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    if(counter < 1) return
    setCounter(counter - 1)
  }

  const reset = () => {
    setCounter(newCounter)
  }

  return {
    counter,
    increment,
    decrement,
    reset
  };
};
