import React from "react";

// AdaptiveLayout demonstrates a responsive layout using Flexbox and inline styles
const AdaptiveLayout = () => {
  // Define all styles in a single object for clarity and reuse
  const styles = {
    body: {
      fontFamily: "Arial, sans-serif", // Base font for the page
      margin: 0, // Remove default body margin
      padding: 0, // Remove default body padding
      lineHeight: 1.6, // Improve readability
    },
    header: {
      background: "#333", // Dark header background
      color: "#fff", // White text color
      padding: "10px 20px", // Some padding for spacing
      textAlign: "center", // Center-align the text
    },
    nav: {
      display: "flex", // Flex container for navigation links
      justifyContent: "center", // Center links horizontally
      flexWrap: "wrap", // Wrap links to next line on small screens
      gap: "10px", // Space between links
      marginTop: 10, // Space below header
    },
    link: {
      color: "#fff", // White link text
      textDecoration: "none", // Remove underline
      padding: "8px 12px", // Padding inside each link
      borderRadius: 5, // Rounded corners
      background: "#555", // Default dark gray background
      transition: "background 0.3s", // Smooth hover effect
    },
    main: {
      display: "flex", // Flex container for main content + sidebar
      flexWrap: "wrap", // Allow content to wrap on smaller screens
      gap: "20px", // Space between main content and sidebar
      padding: "20px", // Padding inside main container
      justifyContent: "space-between", // Distribute space between flex items
    },
    content: {
      flex: "1 1 calc(66% - 20px)", // Take roughly 2/3 width minus gap
      minWidth: 200, // Prevent content from shrinking too small
      background: "#f4f4f4", // Light gray background
      padding: "20px", // Internal padding
      borderRadius: 8, // Rounded corners
    },
    aside: {
      flex: "1 1 calc(33% - 20px)", // Take roughly 1/3 width minus gap
      minWidth: 150, // Minimum sidebar width
      background: "#e0e0e0", // Slightly darker gray than main content
      padding: "20px",
      borderRadius: 8,
    },
    footer: {
      background: "#333", // Match header color
      color: "#fff", // White text
      textAlign: "center", // Center-align text
      padding: "10px 20px", // Spacing
      marginTop: 20, // Space above footer
    },
  };

  return (
    <div style={styles.body}>
      {/* Header section with title and navigation */}
      <header style={styles.header}>
        <h1>Adaptive Layout</h1>
        <nav style={styles.nav} aria-label="Main navigation">
          {/* Map over an array of links for simplicity */}
          {["Home", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              style={styles.link}
              onMouseEnter={(e) => (e.target.style.background = "#777")} // Change background on hover
              onMouseLeave={(e) => (e.target.style.background = "#555")} // Reset background on leave
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Main content + sidebar using Flexbox */}
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

        {/* Sidebar area */}
        <aside style={styles.aside} aria-labelledby="sidebar-title">
          <h2 id="sidebar-title">Sidebar</h2>
          <p>
            This sidebar adjusts its size and position based on the screen size. On smaller screens, it stacks below the
            main content.
          </p>
        </aside>
      </main>

      {/* Footer section */}
      <footer style={styles.footer} role="contentinfo">
        <p>&copy; 2024 Adaptive Layout Example. All rights reserved.</p>
      </foot
