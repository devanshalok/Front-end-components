import React, { useState } from "react";

const SearchBar = () => {
  // State to store the current search query
  const [query, setQuery] = useState("");

  // Sample list of items to search from
  const items = [
    "Apple",
    "Banana",
    "Baniyan",
    "Orange",
    "Grapes",
    "Pineapple",
    "Mango",
    "Strawberry",
    "Blueberry",
    "Watermelon",
    "Cherry",
  ];

  // Filter items based on query (case-insensitive)
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={styles.container}>
      {/* Search input field */}
      <input
        type="text"
        placeholder="Search items..."
        value={query} // Controlled input
        onChange={(e) => setQuery(e.target.value)} // Update query on typing
        style={styles.input}
      />

      {/* Show filtered items or "No results found" */}
      {filteredItems.length > 0 ? (
        <ul style={styles.list}>
          {filteredItems.map((item, index) => (
            <li key={index} style={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <div style={styles.noResults}>No results found</div>
      )}
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    fontFamily: "sans-serif",
    margin: 20,
    maxWidth: 350,
  },
  input: {
    width: "100%",
    padding: 8,
    border: "1px solid #ccc",
    fontSize: 15,
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: 10,
  },
  listItem: {
    padding: "6px 8px",
    border: "1px solid #ddd",
    marginTop: 4,
    cursor: "pointer", // Indicates the items can be clicked
  },
  noResults: {
    color: "#888",
    fontStyle: "italic",
    marginTop: 10,
  },
};

export default SearchBar;
