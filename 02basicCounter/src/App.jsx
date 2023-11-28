import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  // let counter = 10;

  const addValue = () => {
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Made by Prabhat </h1>
      <h2>Counter value: {counter} </h2>
      <button onClick={addValue}>Add value</button>
      {"    "}
      <button onClick={removeValue}>remove value</button>
      <p>footer: </p>
    </>
  );
}

export default App;
