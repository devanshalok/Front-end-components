import React, { useState } from "react";

export default function RealTimeSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales elementum tellus, non consectetur libero. Sed suscipit felis magna, vel convallis augue aliquam eu. Nam vel facilisis nulla, nec varius justo. Integer vehicula augue vitae ex elementum, ut aliquet urna posuere. Maecenas eu erat sed felis mollis tincidunt sed at dui. Nullam laoreet auctor risus, in vulputate metus elementum eu. Fusce sit amet augue efficitur, consequat mi sit amet, varius felis. Pellentesque ut ex felis.";

  const highlightText = (text, term) => {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, "gi");
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <span key={index} style={styles.highlight}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div style={styles.container}>
      <h2>Real-Time Text Search with Highlighting</h2>
      <input
        type="text"
        placeholder="Search in paragraph..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.input}
      />
      <p style={styles.paragraph}>{highlightText(text, searchTerm)}</p>
    </div>
  );
}

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
  highlight: { backgroundColor: "yellow", fontWeight: "bold" },
};
