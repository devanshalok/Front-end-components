import React, { useState, useEffect, useRef } from "react";

const Typeahead = () => {
  // State to hold user input in the input box
  const [query, setQuery] = useState("");

  // State to hold the filtered suggestions based on the query
  const [suggestions, setSuggestions] = useState([]);

  // Ref to the container div, used to detect clicks outside
  const containerRef = useRef(null);

  // Function to fetch suggestions from randomuser API
  const fetchSuggestions = async (searchText) => {
    try {
      // Fetch 10 random US users
      const response = await fetch(`https://randomuser.me/api/?results=10&nat=us`);
      const data = await response.json();

      // Extract first + last names from API data
      const names = data.results.map(
        (user) => `${user.name.first} ${user.name.last}`
      );

      // Filter names that include the search text (case-insensitive)
      const filtered = names.filter((name) =>
        name.toLowerCase().includes(searchText.toLowerCase())
      );

      // Update the suggestions state
      setSuggestions(filtered);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value); // Update input state

    // Fetch suggestions only if input is not empty
    if (value.trim()) fetchSuggestions(value);
    else setSuggestions([]); // Clear suggestions if input is empty
  };

  // Handle selecting a suggestion
  const handleSelect = (name) => {
    setQuery(name);       // Set input to selected name
    setSuggestions([]);   // Clear suggestions after selection
  };

  // Handle clicks outside the component to hide suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener("click", handleClickOutside);

    // Cleanup listener on unmount
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef} // Attach ref to container
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        position: "relative", // For absolutely positioned suggestion list
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Input box for typing */}
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

      {/* Suggestion list */}
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
              onClick={() => handleSelect(name)} // Set input when clicked
              style={{
                padding: "10px",
                cursor: "pointer",
              }}
              onMouseOver={(e) => (e.target.style.background = "#f0f0f0")} // hover effect
              onMouseOut={(e) => (e.target.style.background = "white")}    // remove hover
            >
              {name}
            </li>
          ))}
        </ul>
      )}

      {/* Display when no results found */}
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
