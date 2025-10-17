import React, { useState } from "react";

const GridLights = () => {
  const gridSize = 5;
  const totalLights = gridSize * gridSize;

  // State to track which lights are on
  const [lights, setLights] = useState(Array(totalLights).fill(false));
  // Stack to track order of lights turned on
  const [lightStack, setLightStack] = useState([]);

  const toggleLight = (index) => {
    if (lights[index]) return; // Ignore if already on

    const newLights = [...lights];
    newLights[index] = true;
    setLights(newLights);
    setLightStack([...lightStack, index]);
  };

  const turnOffReverse = () => {
    if (lightStack.length === 0) {
      alert("No more lights to turn off!");
      return;
    }

    const stackCopy = [...lightStack];
    const lastIndex = stackCopy.pop();

    const newLights = [...lights];
    newLights[lastIndex] = false;

    setLights(newLights);
    setLightStack(stackCopy);
  };

  return (
    <div style={styles.container}>
      <h1>Grid Lights with Reverse Turn Off</h1>
      <div style={styles.grid}>
        {lights.map((isOn, idx) => (
          <div
            key={idx}
            style={{
              ...styles.light,
              backgroundColor: isOn ? "yellow" : "#ddd",
            }}
            onClick={() => toggleLight(idx)}
          ></div>
        ))}
      </div>
      <button style={styles.button} onClick={turnOffReverse}>
        Turn Off Lights in Reverse
      </button>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f4f4",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 60px)",
    gap: 10,
    marginBottom: 20,
  },
  light: {
    width: 60,
    height: 60,
    borderRadius: 4,
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  button: {
    padding: "10px 20px",
    fontSize: 16,
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: 5,
  },
};

export default GridLights;
