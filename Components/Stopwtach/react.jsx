import React, { useState, useRef } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);
  const startTimeRef = useRef(0);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const start = () => {
    startTimeRef.current = Date.now() - time;
    timerRef.current = setInterval(() => {
      setTime(Date.now() - startTimeRef.current);
    }, 1000);
    setIsRunning(true);
  };

  const stop = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setLaps([]);
    setIsRunning(false);
  };

  const lap = () => {
    setLaps([...laps, time]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.stopwatch}>
        <div style={styles.timeDisplay}>{formatTime(time)}</div>
        <div style={styles.buttons}>
          <button onClick={start} disabled={isRunning} style={{ ...styles.button, background: "#28a745", color: "white" }}>
            Start
          </button>
          <button onClick={stop} disabled={!isRunning} style={{ ...styles.button, background: "#dc3545", color: "white" }}>
            Stop
          </button>
          <button onClick={lap} disabled={!isRunning} style={{ ...styles.button, background: "#17a2b8", color: "white" }}>
            Lap
          </button>
          <button onClick={reset} disabled={time === 0} style={{ ...styles.button, background: "#ffc107", color: "black" }}>
            Reset
          </button>
        </div>
        <div style={styles.laps}>
          {laps.map((lapTime, index) => (
            <div key={index} style={styles.lapItem}>
              Lap {index + 1}: {formatTime(lapTime)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  stopwatch: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
  timeDisplay: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttons: {
    display: "flex",
    gap: 10,
    marginBottom: 20,
  },
  button: {
    padding: "10px 20px",
    fontSize: 16,
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    transition: "opacity 0.3s",
  },
  laps: {
    width: "100%",
    maxHeight: 200,
    overflowY: "auto",
    backgroundColor: "#f8f9fa",
    borderRadius: 5,
    border: "1px solid #ddd",
    padding: 10,
  },
  lapItem: {
    padding: "5px 0",
    borderBottom: "1px solid #ccc",
  },
};
