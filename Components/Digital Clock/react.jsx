import React, { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (num) => num.toString().padStart(2, "0");

  const hours = formatTime(time.getHours());
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());

  return (
    <div style={styles.container}>
      <h1 style={styles.clock}>
        {hours}:{minutes}:{seconds}
      </h1>
      <p style={styles.text}>Digital Clock</p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    fontFamily: "monospace",
  },
  clock: {
    fontSize: "60px",
    margin: "0",
    color: "#333",
  },
  text: {
    fontSize: "18px",
    color: "#555",
    marginTop: "10px",
  },
};
