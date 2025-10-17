import React, { useState } from "react";

export default function App() {
  const suggestions = [
    "alice@example.com",
    "bob@example.com",
    "carol@example.com",
    "dave@example.com",
    "eve@example.com",
  ];

  const [input, setInput] = useState("");
  const [chips, setChips] = useState([]);

  const filteredSuggestions = suggestions.filter(
    (s) =>
      s.toLowerCase().includes(input.toLowerCase()) && !chips.includes(s)
  );

  const handleAddChip = (email) => {
    if (!chips.includes(email)) setChips([...chips, email]);
    setInput("");
  };

  const handleRemoveChip = (email) => {
    setChips(chips.filter((c) => c !== email));
  };

  return (
    <div style={styles.container}>
      <h2>Email Chips</h2>
      <div style={styles.chipContainer}>
        {chips.map((chip) => (
          <div key={chip} style={styles.chip}>
            {chip}{" "}
            <span
              style={{ marginLeft: 6, cursor: "pointer" }}
              onClick={() => handleRemoveChip(chip)}
            >
              ×
            </span>
          </div>
        ))}
        <input
          type="text"
          placeholder="Type email..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
      </div>
      {input && filteredSuggestions.length > 0 && (
        <div style={styles.dropdown}>
          {filteredSuggestions.map((s) => (
            <div
              key={s}
              onClick={() => handleAddChip(s)}
              style={styles.suggestion}
            >
              {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "sans-serif",
    maxWidth: "400px",
    margin: "50px auto",
  },
  chipContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    padding: "6px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    minHeight: "40px",
  },
  chip: {
    background: "#1976d2",
    color: "white",
    padding: "4px 8px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
  },
  input: {
    border: "none",
    flex: 1,
    minWidth: "120px",
    outline: "none",
    fontSize: "14px",
  },
  dropdown: {
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginTop: "4px",
    maxHeight: "120px",
    overflowY: "auto",
  },
  suggestion: {
    padding: "6px 10px",
    cursor: "pointer",
  },
};
