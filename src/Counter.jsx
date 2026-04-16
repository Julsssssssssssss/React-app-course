import { useState } from "react";
import { Button } from "./components/Button/Button";

export const Counter = () => {
  // let count = 1;

  const [count, setCount] = useState(0); // хукк

  const setCounterHandler = () => {
    setCount(count + 1);
    setCount((prev) => prev + 1); //синхронное обновление
  };

  return <Button onClick={setCounterHandler}>Count is {count}</Button>;
};
