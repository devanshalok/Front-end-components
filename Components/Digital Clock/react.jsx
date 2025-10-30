import React, { useState, useEffect } from "react";

// Main App component displaying a digital clock
export default function App() {
  // State to track the current time
  const [time, setTime] = useState(new Date());

  // useEffect to set up a timer that updates every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000); 
    // Clean up interval when component unmounts to avoid memory leaks
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this runs only once on mount

  // Helper function to format numbers as 2 digits (e.g., 5 -> "05")
  const formatTime = (num) => num.toString().padStart(2, "0");

  // Get formatted hours, minutes, and seconds
  const hours = formatTime(time.getHours());
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());

  return (
    <div style={styles.container}>
      {/* Display the formatted digital clock */}
      <h1 style={styles.clock}>
        {hours}:{minutes}:{seconds}
      </h1>
      <p style={styles.text}>Digital Clock</p>
    </div>
  );
}

// Inline styles for the clock component
const styles = {
  container: {
    display: "flex",
    flexDirection: "column", // Stack clock and label vertically
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    height: "100vh", // Full viewport height
    backgroundColor: "#f5f5f5", // Light background
    fontFamily: "monospace", // Monospaced font for digital look
  },
  clock: {
    fontSize: "60px", // Large font for time
    margin: "0",
    color: "#333",
  },
  text: {
    fontSize: "18px", // Smaller label below clock
    color: "#555",
    marginTop: "10px",
  },
};
