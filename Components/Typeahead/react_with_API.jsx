import React, { useState, useEffect, useRef } from "react";

const Typeahead = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const containerRef = useRef(null);

  const fetchSuggestions = async (searchText) => {
    try {
      const response = await fetch(`https://randomuser.me/api/?results=10&nat=us`);
      const data = await response.json();
      const names = data.results.map(
        (user) => `${user.name.first} ${user.name.last}`
      );

      const filtered = names.filter((name) =>
        name.toLowerCase().includes(searchText.toLowerCase())
      );
      setSuggestions(filtered);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim()) fetchSuggestions(value);
    else setSuggestions([]);
  };

  const handleSelect = (name) => {
    setQuery(name);
    setSuggestions([]);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        position: "relative",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Start typing..."
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      {suggestions.length > 0 && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "white",
            border: "1px solid #ccc",
            borderTop: "none",
            maxHeight: "200px",
            overflowY: "auto",
            listStyle: "none",
            margin: 0,
            padding: 0,
            borderRadius: "0 0 4px 4px",
            zIndex: 10,
          }}
        >
          {suggestions.map((name, i) => (
            <li
              key={i}
              onClick={() => handleSelect(name)}
              style={{
                padding: "10px",
                cursor: "pointer",
              }}
              onMouseOver={(e) => (e.target.style.background = "#f0f0f0")}
              onMouseOut={(e) => (e.target.style.background = "white")}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
      {query && suggestions.length === 0 && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            border: "1px solid #ccc",
            background: "white",
            padding: "10px",
            color: "#888",
            borderRadius: "0 0 4px 4px",
          }}
        >
          No results found
        </div>
      )}
    </div>
  );
};

export default Typeahead;
