import { useState } from "react";

const Counter = ({ render }) => {
  const [counter, setCounter] = useState(0);
  const handleInc = () => {
    setCounter((prev) => prev + 1);
  };
  return <div>{render(counter, handleInc)}</div>;
};
export default Counter;
