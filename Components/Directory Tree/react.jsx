import React, { useState } from "react";

export default function App() {
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

  const Directory = ({ node, level = 0 }) => {
    const [open, setOpen] = useState(false);

    if (node.type === "file") {
      return (
        <div style={{ ...styles.item, marginLeft: level * 16 }}>
          📄 {node.name}
        </div>
      );
    }

    return (
      <div>
        <div
          onClick={() => setOpen(!open)}
          style={{ ...styles.item, marginLeft: level * 16, cursor: "pointer" }}
        >
          {open ? "📂" : "📁"} {node.name}
        </div>
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
      <Directory node={data} />
    </div>
  );
}

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
