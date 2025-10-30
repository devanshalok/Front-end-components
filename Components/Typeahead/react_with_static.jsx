import React, { useState, useEffect, useRef } from "react";

export default function Typeahead() {
  // Static data for the typeahead suggestions
  const data = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tomato",
    "Ugli fruit",
    "Vanilla",
    "Watermelon",
  ];

  // State to track user input
  const [query, setQuery] = useState("");

  // State to store filtered suggestions based on the query
  const [filtered, setFiltered] = useState([]);

  // Ref to the container div to handle clicks outside
  const containerRef = useRef(null);

  // Filter the suggestions whenever query changes
  useEffect(() => {
    if (query.trim() === "") {
      // If query is empty, clear filtered suggestions
      setFiltered([]);
    } else {
      // Filter data array to match query (case-insensitive)
      const results = data.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );

      // If no match, show a "No results found" message
      setFiltered(results.length ? results : ["No results found"]);
    }
  }, [query]);

  // Detect clicks outside the container to hide suggestions
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        // If clicked outside the container, clear filtered suggestions
        setFiltered([]);
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Cleanup listener on unmount
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Inline styles for the component
  const styles = {
    container: {
      maxWidth: "400px",
      margin: "40px auto",
      position: "relative", // for absolutely positioned suggestions
      fontFamily: "Arial, sans-serif",
    },
    input: {
      width: "100%",
      padding: "10px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    suggestions: {
      position: "absolute",
      top: "100%", // place below input
      left: 0,
      right: 0,
      background: "#fff",
      border: "1px solid #ccc",
      borderTop: "none",
      maxHeight: "200px",
      overflowY: "auto",
      borderRadius: "0 0 4px 4px",
      zIndex: 1000, // keep suggestions above other elements
    },
    item: {
      padding: "10px",
      cursor: "pointer",
      listStyle: "none",
    },
    hover: {
      backgroundColor: "#f0f0f0",
    },
    noResults: {
      padding: "10px",
      color: "#888",
      listStyle: "none",
    },
  };

  return (
    <div style={styles.container} ref={containerRef}>
      {/* Input box for typing */}
      <input
        type="text"
        placeholder="Start typing..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // update query state
        style={styles.input}
      />

      {/* Suggestion dropdown */}
      {filtered.length > 0 && (
        <ul style={styles.suggestions}>
          {filtered.map((item, index) => (
            <li
              key={index}
              style={item === "No results found" ? styles.noResults : styles.item}
              onClick={() => {
                if (item !== "No results found") {
                  // Set the clicked suggestion as query and hide suggestions
                  setQuery(item);
                  setFiltered([]);
                }
              }}
              onMouseEnter={(e) =>
                item !== "No results found" &&
                (e.target.style.backgroundColor = "#f0f0f0") // hover effect
              }
              onMouseLeave={(e) =>
                item !== "No results found" &&
                (e.target.style.backgroundColor = "white") // remove hover effect
              }
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
