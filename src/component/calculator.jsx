import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./calculator.scss";
import Button from "./Button";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  // Xử lý khi nhấn các nút
  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        const calcResult=eval(input);
        setResult(calcResult);
        let history=JSON.parse(localStorage.getItem('history'))|| [];
        history.push({input,result:calcResult});
        localStorage.setItem('history',JSON.stringify(history));
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
        <Button value="History" onClick={() => navigate('/history')} />
      </div>
    </div>
    
  );
}

export default Calculator;
