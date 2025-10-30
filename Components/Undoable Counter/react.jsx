import React, { useState } from "react";

const UndoableCounter = () => {
  // Counter state
  const [counter, setCounter] = useState(0);

  // History of actions performed
  const [history, setHistory] = useState([]);

  // Actions that were undone (for redo functionality)
  const [undone, setUndone] = useState([]);

  // Function to change the counter by a value
  const changeCounter = (value) => {
    const before = counter; // previous value
    const after = counter + value; // new value after change

    setCounter(after); // update the counter

    // Add action to history with before/after values
    const newHistory = [...history, { action: `${value > 0 ? "+" : ""}${value}`, before, after }];

    // Limit history length to last 50 actions
    if (newHistory.length > 50) newHistory.shift();

    setHistory(newHistory);

    // Clear undone actions because a new action resets redo stack
    setUndone([]);
  };

  // Undo the last action
  const undo = () => {
    if (history.length === 0) return; // nothing to undo

    const lastAction = history[history.length - 1]; // get last action

    setCounter(lastAction.before); // revert counter to previous value

    setHistory(history.slice(0, -1)); // remove last action from history

    setUndone([lastAction, ...undone]); // add undone action to redo stack
  };

  // Redo the last undone action
  const redo = () => {
    if (undone.length === 0) return; // nothing to redo

    const [redoAction, ...remaining] = undone; // get first undone action

    setCounter(redoAction.after); // apply redo action

    setHistory([...history, redoAction]); // add it back to history

    setUndone(remaining); // remove it from undone stack
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

      {/* Display current counter */}
      <div style={{ fontSize: "36px", marginBottom: "20px" }}>{counter}</div>

      {/* Buttons for increment/decrement */}
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
            {val > 0 ? `+${val}` : val} {/* Show + sign for positive numbers */}
          </button>
        ))}
      </div>

      {/* Undo/Redo buttons */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={undo}
          disabled={history.length === 0} // disable if no history
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
          disabled={undone.length === 0} // disable if nothing to redo
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

      {/* Show history of actions */}
      <h2 style={{ marginTop: "30px" }}>History</h2>
      <ul style={{ listStyle: "none", padding: 0, maxWidth: "400px", margin: "0 auto", textAlign: "left" }}>
        {history.map((entry, index) => (
          <li key={index} style={{ marginBottom: "5px" }}>
            {/* Show action with before → after values */}
            {entry.action} ({entry.before} → {entry.after})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UndoableCounter;
