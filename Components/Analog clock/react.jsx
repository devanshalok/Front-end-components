import React, { useEffect, useState } from "react";

export default function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDegrees = seconds * 6;
  const minuteDegrees = minutes * 6 + seconds * 0.1;
  const hourDegrees = hours * 30 + minutes * 0.5;

  const clockStyle = {
    position: "relative",
    width: "300px",
    height: "300px",
    border: "8px solid #61dafb",
    borderRadius: "50%",
    background: "#fff",
    boxShadow: "0 0 20px rgba(0,0,0,0.2)",
  };

  const centerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "10px",
    height: "10px",
    background: "#333",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 10,
  };

  const handBase = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transformOrigin: "bottom center",
    transition: "transform 0.1s cubic-bezier(0.4, 2.3, 0.3, 1)",
  };

  const hourStyle = {
    ...handBase,
    width: "6px",
    height: "90px",
    backgroundColor: "#333",
    transform: `translate(-50%, -100%) rotate(${hourDegrees}deg)`,
    zIndex: 3,
  };

  const minuteStyle = {
    ...handBase,
    width: "4px",
    height: "120px",
    backgroundColor: "#007bff",
    transform: `translate(-50%, -100%) rotate(${minuteDegrees}deg)`,
    zIndex: 2,
  };

  const secondStyle = {
    ...handBase,
    width: "2px",
    height: "130px",
    backgroundColor: "#ff0000",
    transform: `translate(-50%, -100%) rotate(${secondDegrees}deg)`,
    zIndex: 1,
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#282c34",
  };

  return (
    <div style={containerStyle}>
      <div style={clockStyle}>
        <div style={centerStyle}></div>
        <div style={hourStyle}></div>
        <div style={minuteStyle}></div>
        <div style={secondStyle}></div>
      </div>
    </div>
  );
}
