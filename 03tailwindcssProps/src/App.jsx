import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-green-400 p-4 rounded-md">
        Vite with tailwind
      </h1>
      <Card username="Prabhat Kumar" />
      <Card post="Working Professional" />
      <Card />
    </>
  );
}

export default App;
