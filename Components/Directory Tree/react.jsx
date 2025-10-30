import React, { useState } from "react";

// Main App component rendering a directory tree
export default function App() {
  // Sample directory data (nested folders and files)
  const data = {
    name: "root",
    type: "folder",
    children: [
      {
        name: "src",
        type: "folder",
        children: [
          { name: "App.jsx", type: "file" },
          { name: "index.js", type: "file" },
          {
            name: "components",
            type: "folder",
            children: [{ name: "Navbar.jsx", type: "file" }],
          },
        ],
      },
      {
        name: "public",
        type: "folder",
        children: [{ name: "index.html", type: "file" }],
      },
      { name: "package.json", type: "file" },
    ],
  };

  // Recursive Directory component to render files and folders
  const Directory = ({ node, level = 0 }) => {
    // State to track if folder is open or closed
    const [open, setOpen] = useState(false);

    // If the node is a file, render it with a file icon
    if (node.type === "file") {
      return (
        <div style={{ ...styles.item, marginLeft: level * 16 }}>
          📄 {node.name} {/* File icon and name */}
        </div>
      );
    }

    // If the node is a folder, render folder icon and name
    return (
      <div>
        <div
          onClick={() => setOpen(!open)} // Toggle folder open/closed on click
          style={{ ...styles.item, marginLeft: level * 16, cursor: "pointer" }}
        >
          {open ? "📂" : "📁"} {node.name} {/* Open/closed folder icon */}
        </div>

        {/* If folder is open, recursively render children */}
        {open &&
          node.children?.map((child, i) => (
            <Directory key={i} node={child} level={level + 1} />
          ))}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <h2>Directory Tree</h2>
      <Directory node={data} /> {/* Render the root node */}
    </div>
  );
}

// Inline styles for container and items
const styles = {
  container: {
    fontFamily: "sans-serif",
    maxWidth: "400px",
    margin: "40px auto",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  item: {
    padding: "4px 0",
  },
};
