import React, { useState } from "react";
import "./calculator.scss";
import Button from "./Button";

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
        <Button value="7" onClick={handleClick} />
        <Button value="8" onClick={handleClick} />
        <Button value="9" onClick={handleClick} />
        <Button value="+" onClick={handleClick} />
        <Button value="4" onClick={handleClick} />
        <Button value="5" onClick={handleClick} />
        <Button value="6" onClick={handleClick} />
        <Button value="-" onClick={handleClick} />
        <Button value="1" onClick={handleClick} />
        <Button value="2" onClick={handleClick} />
        <Button value="3" onClick={handleClick} />
        <Button value="*" onClick={handleClick} />
        <Button value="0" onClick={handleClick} />
        <Button value="/" onClick={handleClick} />
        <Button value="=" onClick={handleClick} />
        <Button value="C" onClick={handleClick} />
      </div>
    </div>
  );
}

export default Calculator;
