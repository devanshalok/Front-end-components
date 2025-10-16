import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes() + seconds / 60;
  const hours = time.getHours() % 12 + minutes / 60;

  const secondDeg = seconds * 6; // 360 / 60
  const minuteDeg = minutes * 6;
  const hourDeg = hours * 30; // 360 / 12

  const clockStyle = {
    width: "250px",
    height: "250px",
    border: "8px solid #333",
    borderRadius: "50%",
    position: "relative",
    margin: "50px auto",
    background: "#f0f0f0",
  };

  // handWidth = width of the hand
  // handLength = height/length of the hand
  const handStyle = (handWidth, handLength, color, deg) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    width: `${handWidth}px`,
    height: `${handLength}px`,
    backgroundColor: color,
    transformOrigin: "50% 100%", // bottom center of the hand
    transform: `translate(-50%, -100%) rotate(${deg}deg)`,
    borderRadius: "2px",
    transition: "transform 0.5s ease-in-out",
  });

  return (
    <div
      style={clockStyle}
      aria-label={`Analog clock showing time ${time.toLocaleTimeString()}`}
    >
      {/* Hour hand */}
      <div style={handStyle(6, 60, "#333", hourDeg)} />
      {/* Minute hand */}
      <div style={handStyle(4, 90, "#666", minuteDeg)} />
      {/* Second hand */}
      <div style={handStyle(2, 100, "red", secondDeg)} />
      {/* Center circle */}
      <div
        style={{
          position: "absolute",
          width: "12px",
          height: "12px",
          backgroundColor: "#333",
          borderRadius: "50%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </div>
  );
};

export default function App(){
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>React Analog Clock</h2>
      <AnalogClock />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
