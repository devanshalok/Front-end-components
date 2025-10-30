import React, { useState, useRef } from "react";

// Stopwatch component allows starting, stopping, resetting, and recording lap times
export default function Stopwatch() {
  // time stores elapsed time in milliseconds
  const [time, setTime] = useState(0);
  // laps stores the recorded lap times
  const [laps, setLaps] = useState([]);
  // isRunning tracks whether the stopwatch is currently running
  const [isRunning, setIsRunning] = useState(false);

  // timerRef stores the interval ID for updating the time
  const timerRef = useRef(null);
  // startTimeRef stores the start timestamp to calculate elapsed time accurately
  const startTimeRef = useRef(0);

  // Converts milliseconds to HH:MM:SS format for display
  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  // Start the stopwatch
  const start = () => {
    // Record the start time accounting for previously elapsed time (for resume functionality)
    startTimeRef.current = Date.now() - time;
    // Set interval to update elapsed time every second
    timerRef.current = setInterval(() => {
      setTime(Date.now() - startTimeRef.current);
    }, 1000);
    setIsRunning(true); // update running state
  };

  // Stop the stopwatch
  const stop = () => {
    clearInterval(timerRef.current); // clear interval
    setIsRunning(false); // update running state
  };

  // Reset the stopwatch and laps
  const reset = () => {
    clearInterval(timerRef.current);
    setTime(0); // reset time
    setLaps([]); // clear laps
    setIsRunning(false);
  };

  // Record a lap
  const lap = () => {
    setLaps([...laps, time]); // append current time to laps array
  };

  return (
    <div style={styles.container}>
      <div style={styles.stopwatch}>
        {/* Display formatted elapsed time */}
        <div style={styles.timeDisplay}>{formatTime(time)}</div>

        {/* Control buttons */}
        <div style={styles.buttons}>
          {/* Start button disabled if already running */}
          <button onClick={start} disabled={isRunning} style={{ ...styles.button, background: "#28a745", color: "white" }}>
            Start
          </button>
          {/* Stop button disabled if not running */}
          <button onClick={stop} disabled={!isRunning} style={{ ...styles.button, background: "#dc3545", color: "white" }}>
            Stop
          </button>
          {/* Lap button disabled if not running */}
          <button onClick={lap} disabled={!isRunning} style={{ ...styles.button, background: "#17a2b8", color: "white" }}>
            Lap
          </button>
          {/* Reset button disabled if time is zero */}
          <button onClick={reset} disabled={time === 0} style={{ ...styles.button, background: "#ffc107", color: "black" }}>
            Reset
          </button>
        </div>

        {/* List of laps */}
        <div style={styles.laps}>
          {laps.map((lapTime, index) => (
            <div key={index} style={styles.lapItem}>
              Lap {index + 1}: {formatTime(lapTime)} {/* Format each lap time */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Styling for the stopwatch component
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
    overflowY: "auto", // allow scrolling if too many laps
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
