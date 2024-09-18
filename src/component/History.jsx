import React from 'react';
import { useState,useEffect } from 'react';


function History(props) {
    const [history, setHistory] = useState([]);

    useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('history')) || [];
    setHistory(savedHistory);
  }, []);

    return (
        <div className="history">
      <h1>History</h1>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            <span>{item.input} = {item.result}</span>
          </li>
        ))}
      </ul>
    </div>
    );
}

export default History;