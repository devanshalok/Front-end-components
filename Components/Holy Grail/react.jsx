import React from "react";

export default function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>Header</header>
      <aside style={styles.left}>Left Sidebar</aside>
      <main style={styles.main}>
        <p>Main content goes here.</p>
        <p>Scroll down to see more content.</p>
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i}>Content line {i + 1}</p>
        ))}
      </main>
      <aside style={styles.right}>Right Sidebar</aside>
      <footer style={styles.footer}>Footer</footer>
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateAreas: `
      "header header header"
      "left main right"
      "footer footer footer"
    `,
    gridTemplateRows: "60px 1fr 40px",
    gridTemplateColumns: "200px 1fr 200px",
    height: "100vh",
    gap: "10px",
    fontFamily: "sans-serif",
  },
  header: {
    gridArea: "header",
    background: "#1976d2",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    gridArea: "footer",
    background: "#1976d2",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  left: {
    gridArea: "left",
    background: "#eeeeee",
    padding: "10px",
    overflowY: "auto",
  },
  right: {
    gridArea: "right",
    background: "#eeeeee",
    padding: "10px",
    overflowY: "auto",
  },
  main: {
    gridArea: "main",
    padding: "10px",
    background: "#fff",
    overflowY: "auto",
    border: "1px solid #ccc",
  },
};
