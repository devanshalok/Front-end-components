import React from "react";

const AdaptiveLayout = () => {
  const styles = {
    body: {
      fontFamily: "Arial, sans-serif",
      margin: 0,
      padding: 0,
      lineHeight: 1.6,
    },
    header: {
      background: "#333",
      color: "#fff",
      padding: "10px 20px",
      textAlign: "center",
    },
    nav: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "10px",
      marginTop: 10,
    },
    link: {
      color: "#fff",
      textDecoration: "none",
      padding: "8px 12px",
      borderRadius: 5,
      background: "#555",
      transition: "background 0.3s",
    },
    main: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      padding: "20px",
      justifyContent: "space-between",
    },
    content: {
      flex: "1 1 calc(66% - 20px)",
      minWidth: 200,
      background: "#f4f4f4",
      padding: "20px",
      borderRadius: 8,
    },
    aside: {
      flex: "1 1 calc(33% - 20px)",
      minWidth: 150,
      background: "#e0e0e0",
      padding: "20px",
      borderRadius: 8,
    },
    footer: {
      background: "#333",
      color: "#fff",
      textAlign: "center",
      padding: "10px 20px",
      marginTop: 20,
    },
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <h1>Adaptive Layout</h1>
        <nav style={styles.nav} aria-label="Main navigation">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              style={styles.link}
              onMouseEnter={(e) => (e.target.style.background = "#777")}
              onMouseLeave={(e) => (e.target.style.background = "#555")}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main style={styles.main} role="main">
        <article style={styles.content} aria-labelledby="main-content-title">
          <h2 id="main-content-title">Main Content Area</h2>
          <p>
            This is the main content area. It expands to take up more space compared to the sidebar, adapting to
            different screen sizes using Flexbox.
          </p>
          <p>
            Content can include text, images, videos, and more, all styled to be responsive and accessible.
          </p>
        </article>

        <aside style={styles.aside} aria-labelledby="sidebar-title">
          <h2 id="sidebar-title">Sidebar</h2>
          <p>
            This sidebar adjusts its size and position based on the screen size. On smaller screens, it stacks below the
            main content.
          </p>
        </aside>
      </main>

      <footer style={styles.footer} role="contentinfo">
        <p>&copy; 2024 Adaptive Layout Example. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdaptiveLayout;
