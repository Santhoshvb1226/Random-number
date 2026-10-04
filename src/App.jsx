import { useState } from "react";
import "./App.css";

// The range we generate numbers from (inclusive)
const MIN = 1;
const MAX = 100;

function App() {
  // State: null means "nothing generated yet"
  const [number, setNumber] = useState(null);

  // Runs every time the button is clicked
  const generateNumber = () => {
    const random = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
    setNumber(random); // updating state re-renders the component
  };

  return (
    <main className="app">
      <div className="card">
        <h1>Random Number Generator</h1>
        <p className="range">
          Picks a number from {MIN} to {MAX}
        </p>

        {/* Conditional rendering: placeholder before first click, number after */}
        <div className="display">
          {number === null ? (
            <p className="placeholder">No number generated yet</p>
          ) : (
            <p className="result">{number}</p>
          )}
        </div>

        <button onClick={generateNumber}>Generate Random Number</button>
      </div>
    </main>
  );
}

export default App;