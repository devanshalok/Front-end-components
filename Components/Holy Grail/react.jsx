import React from "react";

export default function App() {
  return (
    <div style={styles.container}>
      {/* Header at the top spanning all columns */}
      <header style={styles.header}>Header</header>

      {/* Left sidebar */}
      <aside style={styles.left}>Left Sidebar</aside>

      {/* Main content area */}
      <main style={styles.main}>
        <p>Main content goes here.</p>
        <p>Scroll down to see more content.</p>
        {/* Adding multiple lines to demonstrate scroll */}
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i}>Content line {i + 1}</p>
        ))}
      </main>

      {/* Right sidebar */}
      <aside style={styles.right}>Right Sidebar</aside>

      {/* Footer at the bottom spanning all columns */}
      <footer style={styles.footer}>Footer</footer>
    </div>
  );
}

const styles = {
  container: {
    display: "grid", // Use CSS Grid for layout
    gridTemplateAreas: `
      "header header header"
      "left main right"
      "footer footer footer"
    `, // Define layout areas
    gridTemplateRows: "60px 1fr 40px", // Header 60px, content flexible, footer 40px
    gridTemplateColumns: "200px 1fr 200px", // Left and right sidebars 200px, main flexible
    height: "100vh", // Full viewport height
    gap: "10px", // Gap between grid items
    fontFamily: "sans-serif", // Font style
  },
  header: {
    gridArea: "header", // Assign to header area
    background: "#1976d2",
    color: "white",
    display: "flex", // Flex for centering text
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    gridArea: "footer", // Assign to footer area
    background: "#1976d2",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  left: {
    gridArea: "left", // Left sidebar area
    background: "#eeeeee",
    padding: "10px",
    overflowY: "auto", // Scroll if content exceeds height
  },
  right: {
    gridArea: "right", // Right sidebar area
    background: "#eeeeee",
    padding: "10px",
    overflowY: "auto", // Scroll if content exceeds height
  },
  main: {
    gridArea: "main", // Main content area
    padding: "10px",
    background: "#fff",
    overflowY: "auto", // Scroll main content if long
    border: "1px solid #ccc",
  },
};
