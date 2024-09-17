import React, { useState } from "react";
import "./calculator.scss";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // Xử lý khi nhấn các nút
  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult("Error");
      }
    } else {
      setInput(input + value);
    }
  };
  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div className="display">
        <p>{input}</p>
        <h2>{result}</h2>
      </div>
      <div className="buttons">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("=")}>=</button>
        <button onClick={() => handleClick("C")}>C</button>
      </div>
    </div>
  );
}

export default Calculator;
