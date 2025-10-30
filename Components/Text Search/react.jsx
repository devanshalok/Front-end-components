import React, { useState } from "react";

export default function RealTimeSearch() {
  // searchTerm stores the current input value for real-time search
  const [searchTerm, setSearchTerm] = useState("");

  // The paragraph text we will search in
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales elementum tellus, non consectetur libero. Sed suscipit felis magna, vel convallis augue aliquam eu. Nam vel facilisis nulla, nec varius justo. Integer vehicula augue vitae ex elementum, ut aliquet urna posuere. Maecenas eu erat sed felis mollis tincidunt sed at dui. Nullam laoreet auctor risus, in vulputate metus elementum eu. Fusce sit amet augue efficitur, consequat mi sit amet, varius felis. Pellentesque ut ex felis.";

  // Function to highlight the search term within the text
  const highlightText = (text, term) => {
    if (!term) return text; // If no term is entered, return the original text

    // Create a regex to match all instances of the search term (case-insensitive)
    const regex = new RegExp(`(${term})`, "gi");

    // Split the text using the regex, then map over the parts
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        // If the part matches the term, wrap it in a span with highlight styles
        <span key={index} style={styles.highlight}>
          {part}
        </span>
      ) : (
        // Otherwise, return the text part as-is
        part
      )
    );
  };

  return (
    <div style={styles.container}>
      <h2>Real-Time Text Search with Highlighting</h2>

      {/* Input box for typing search terms */}
      <input
        type="text"
        placeholder="Search in paragraph..."
        value={searchTerm} // Controlled input value
        onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm in state
        style={styles.input}
      />

      {/* Display the paragraph with highlighted search terms */}
      <p style={styles.paragraph}>{highlightText(text, searchTerm)}</p>
    </div>
  );
}

// Styles object
const styles = {
  container: { fontFamily: "Arial, sans-serif", margin: 20 },
  input: {
    padding: 10,
    width: "100%",
    fontSize: 16,
    marginBottom: 20,
    border: "1px solid #ddd",
    borderRadius: 5,
  },
  paragraph: { fontSize: 18, lineHeight: 1.6 },
  highlight: { backgroundColor: "yellow", fontWeight: "bold" }, // Highlight style for matches
};
