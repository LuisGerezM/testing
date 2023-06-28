import { useState } from "react";
import vite from "./assets/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((count) => count + 1);

  return (
    <div className="App">
      <h1>Testing with Jest + Testing Library + Vite</h1>
      <img src={vite} alt="vite logo" />
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
