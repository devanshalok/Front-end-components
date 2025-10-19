import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
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

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search items..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.input}
      />

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
    cursor: "pointer",
  },
  noResults: {
    color: "#888",
    fontStyle: "italic",
    marginTop: 10,
  },
};

export default SearchBar;
