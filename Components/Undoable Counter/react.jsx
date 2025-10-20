import React, { useState } from "react";

const UndoableCounter = () => {
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);
  const [undone, setUndone] = useState([]);

  const changeCounter = (value) => {
    const before = counter;
    const after = counter + value;
    setCounter(after);
    const newHistory = [...history, { action: `${value > 0 ? "+" : ""}${value}`, before, after }];
    if (newHistory.length > 50) newHistory.shift(); // keep only last 50
    setHistory(newHistory);
    setUndone([]);
  };

  const undo = () => {
    if (history.length === 0) return;
    const lastAction = history[history.length - 1];
    setCounter(lastAction.before);
    setHistory(history.slice(0, -1));
    setUndone([lastAction, ...undone]);
  };

  const redo = () => {
    if (undone.length === 0) return;
    const [redoAction, ...remaining] = undone;
    setCounter(redoAction.after);
    setHistory([...history, redoAction]);
    setUndone(remaining);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
      }}
    >
      <h1>Undoable Counter</h1>
      <div style={{ fontSize: "36px", marginBottom: "20px" }}>{counter}</div>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
        {[1, 10, 100, -1, -10, -100].map((val) => (
          <button
            key={val}
            onClick={() => changeCounter(val)}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            {val > 0 ? `+${val}` : val}
          </button>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={undo}
          disabled={history.length === 0}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: history.length ? "#007bff" : "#ccc",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginRight: "10px",
            cursor: history.length ? "pointer" : "not-allowed",
          }}
        >
          Undo
        </button>
        <button
          onClick={redo}
          disabled={undone.length === 0}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: undone.length ? "#007bff" : "#ccc",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: undone.length ? "pointer" : "not-allowed",
          }}
        >
          Redo
        </button>
      </div>

      <h2 style={{ marginTop: "30px" }}>History</h2>
      <ul style={{ listStyle: "none", padding: 0, maxWidth: "400px", margin: "0 auto", textAlign: "left" }}>
        {history.map((entry, index) => (
          <li key={index} style={{ marginBottom: "5px" }}>
            {entry.action} ({entry.before} → {entry.after})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UndoableCounter;
