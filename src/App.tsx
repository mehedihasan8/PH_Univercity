import { useState } from "react";
import "./App.css";
import CounterWithFunComponent from "./components/CounterWithFunComponent";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="border border-purple-500 p-6 m-10">
      <p>count = {count}</p>
      <CounterWithFunComponent count={count} setCount={setCount} />
    </div>
  );
}

export default App;
