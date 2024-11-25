import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [count, setCount] = useState(0);

  const incrementFn = useCallback((value) => {
    setCount((c) => c + value);
  }, []);

  return (
    <>
      <h4> CallBackHook Counter: {count}</h4>
      <ShowIncrement increment={incrementFn} />
    </>
  );
};
