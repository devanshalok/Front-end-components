import React, { useState } from "react";

// Main App component rendering the email chips input
export default function App() {
  // Sample suggestions for autocomplete
  const suggestions = [
    "alice@example.com",
    "bob@example.com",
    "carol@example.com",
    "dave@example.com",
    "eve@example.com",
  ];

  // State to store the input text
  const [input, setInput] = useState("");

  // State to store the selected chips (emails)
  const [chips, setChips] = useState([]);

  // Filter suggestions based on input and exclude already selected chips
  const filteredSuggestions = suggestions.filter(
    (s) =>
      s.toLowerCase().includes(input.toLowerCase()) && !chips.includes(s)
  );

  // Add a chip when user selects a suggestion or presses enter
  const handleAddChip = (email) => {
    if (!chips.includes(email)) setChips([...chips, email]); // Prevent duplicates
    setInput(""); // Clear input after adding
  };

  // Remove a chip when user clicks the × button
  const handleRemoveChip = (email) => {
    setChips(chips.filter((c) => c !== email));
  };

  return (
    <div style={styles.container}>
      <h2>Email Chips</h2>

      {/* Container holding chips and input field */}
      <div style={styles.chipContainer}>
        {/* Render selected chips */}
        {chips.map((chip) => (
          <div key={chip} style={styles.chip}>
            {chip}{" "}
            <span
              style={{ marginLeft: 6, cursor: "pointer" }}
              onClick={() => handleRemoveChip(chip)} // Remove chip on click
            >
              ×
            </span>
          </div>
        ))}

        {/* Input field for typing emails */}
        <input
          type="text"
          placeholder="Type email..."
          value={input}
          onChange={(e) => setInput(e.target.value)} // Update input state
          style={styles.input}
        />
      </div>

      {/* Render dropdown suggestions when user types */}
      {input && filteredSuggestions.length > 0 && (
        <div style={styles.dropdown}>
          {filteredSuggestions.map((s) => (
            <div
              key={s}
              onClick={() => handleAddChip(s)} // Add chip on click
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

// Inline styles for layout and appearance
const styles = {
  container: {
    fontFamily: "sans-serif",
    maxWidth: "400px",
    margin: "50px auto",
  },
  chipContainer: {
    display: "flex",
    flexWrap: "wrap", // Allow chips to wrap to next line
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
    flex: 1, // Take remaining space
    minWidth: "120px",
    outline: "none",
    fontSize: "14px",
  },
  dropdown: {
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginTop: "4px",
    maxHeight: "120px",
    overflowY: "auto", // Scroll if many suggestions
  },
  suggestion: {
    padding: "6px 10px",
    cursor: "pointer", // Indicate clickable items
  },
};
