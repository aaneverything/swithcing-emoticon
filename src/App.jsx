import { useState } from "react";
import Ohoh from "./components/ohoh";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Ohoh />
    </>
  );
}

export default App;
