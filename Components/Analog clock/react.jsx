import React, { useEffect, useState } from "react";

// AnalogClock displays a real-time analog clock using React and inline styles
export default function AnalogClock() {
  const [time, setTime] = useState(new Date()); 
  // Holds the current time and triggers re-render every second

  useEffect(() => {
    // Set up an interval to update time every second
    const timer = setInterval(() => setTime(new Date()), 1000);
    // Cleanup interval when component unmounts
    return () => clearInterval(timer);
  }, []);

  // Extract hours, minutes, and seconds from the current time
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  // Calculate rotation angles for clock hands
  const secondDegrees = seconds * 6; // 360deg / 60s = 6deg per second
  const minuteDegrees = minutes * 6 + seconds * 0.1; // Add fractional movement
  const hourDegrees = hours * 30 + minutes * 0.5; // 360deg / 12h = 30deg per hour

  // Clock container style (circular, bordered)
  const clockStyle = {
    position: "relative",
    width: "300px",
    height: "300px",
    border: "8px solid #61dafb",
    borderRadius: "50%", // Make it circular
    background: "#fff",
    boxShadow: "0 0 20px rgba(0,0,0,0.2)",
  };

  // Small center circle at the middle of the clock
  const centerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "10px",
    height: "10px",
    background: "#333",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)", // Center it exactly
    zIndex: 10,
  };

  // Base style shared by all hands for positioning and rotation origin
  const handBase = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transformOrigin: "bottom center", // Rotate around the bottom of the hand
    transition: "transform 0.1s cubic-bezier(0.4, 2.3, 0.3, 1)", // Smooth motion
  };

  // Hour hand style
  const hourStyle = {
    ...handBase,
    width: "6px",
    height: "90px",
    backgroundColor: "#333",
    transform: `translate(-50%, -100%) rotate(${hourDegrees}deg)`, 
    // Move pivot to center, rotate according to time
    zIndex: 3,
  };

  // Minute hand style
  const minuteStyle = {
    ...handBase,
    width: "4px",
    height: "120px",
    backgroundColor: "#007bff",
    transform: `translate(-50%, -100%) rotate(${minuteDegrees}deg)`,
    zIndex: 2,
  };

  // Second hand style
  const secondStyle = {
    ...handBase,
    width: "2px",
    height: "130px",
    backgroundColor: "#ff0000",
    transform: `translate(-50%, -100%) rotate(${secondDegrees}deg)`,
    zIndex: 1,
  };

  // Full viewport container to center the clock
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#282c34", // Dark background
  };

  return (
    <div style={containerStyle}>
      <div style={clockStyle}>
        {/* Center circle */}
        <div style={centerStyle}></div>

        {/* Clock hands */}
        <div style={hourStyle}></div>
        <div style={minuteStyle}></div>
        <div style={secondStyle}></div>
      </div>
    </div>
  );
}
