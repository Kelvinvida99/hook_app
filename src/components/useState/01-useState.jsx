import { useState } from "react";

export const CounterApp = () => {
  const [state, setCounter] = useState({
    counter1: 1,
    counter2: 1,
    counter3: 1,
  });

  const { counter1, counter2, counter3 } = state;

  return (
    <div>
      <h3>Counter1: {counter1}</h3>
      <h3>Counter2: {counter2}</h3>
      <h3>Counter3: {counter3}</h3>
      <button
        className="btn btn-primary"
        onClick={() => setCounter({ ...state, counter1: counter1 + 1 })}
      >
        counter1 +1
      </button>
    </div>
  );
};
