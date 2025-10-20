import React, { useState, useEffect, useRef } from "react";

export default function Typeahead() {
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

  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (query.trim() === "") {
      setFiltered([]);
    } else {
      const results = data.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(results.length ? results : ["No results found"]);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setFiltered([]);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const styles = {
    container: {
      maxWidth: "400px",
      margin: "40px auto",
      position: "relative",
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
      top: "100%",
      left: 0,
      right: 0,
      background: "#fff",
      border: "1px solid #ccc",
      borderTop: "none",
      maxHeight: "200px",
      overflowY: "auto",
      borderRadius: "0 0 4px 4px",
      zIndex: 1000,
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
      <input
        type="text"
        placeholder="Start typing..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.input}
      />

      {filtered.length > 0 && (
        <ul style={styles.suggestions}>
          {filtered.map((item, index) => (
            <li
              key={index}
              style={item === "No results found" ? styles.noResults : styles.item}
              onClick={() => {
                if (item !== "No results found") {
                  setQuery(item);
                  setFiltered([]);
                }
              }}
              onMouseEnter={(e) =>
                item !== "No results found" &&
                (e.target.style.backgroundColor = "#f0f0f0")
              }
              onMouseLeave={(e) =>
                item !== "No results found" &&
                (e.target.style.backgroundColor = "white")
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
