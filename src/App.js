import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("december 30 2023");
  date.setDate(date.getDate() + counter);

  return (
    <div className="counterContainer">
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCounter((s) => s - step)}>-</button>
        <span>Count: {counter}</span>
        <button onClick={() => setCounter((s) => s + step)}>+</button>
      </div>
      <p>
        <span>
          {counter === 0
            ? "Today is "
            : counter > 0
            ? `${counter} days from today is `
            : `${Math.abs(counter)} days ago was `}
        </span>
        {date.toDateString()}
      </p>
    </div>
  );
}
