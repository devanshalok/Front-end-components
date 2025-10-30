import React, { useState } from "react";

const GridLights = () => {
  const gridSize = 5; // Grid is 5x5
  const totalLights = gridSize * gridSize; // Total number of lights

  // State to track which lights are currently on (true = on, false = off)
  const [lights, setLights] = useState(Array(totalLights).fill(false));

  // Stack to track the order in which lights were turned on
  const [lightStack, setLightStack] = useState([]);

  // Function to turn on a light
  const toggleLight = (index) => {
    if (lights[index]) return; // Do nothing if the light is already on

    const newLights = [...lights]; // Create a copy of lights array
    newLights[index] = true; // Turn on the clicked light
    setLights(newLights); // Update state

    setLightStack([...lightStack, index]); // Add this light to the stack
  };

  // Function to turn off lights in reverse order of turning them on
  const turnOffReverse = () => {
    if (lightStack.length === 0) {
      alert("No more lights to turn off!"); // Alert if stack is empty
      return;
    }

    const stackCopy = [...lightStack]; // Copy the stack
    const lastIndex = stackCopy.pop(); // Get the last turned-on light

    const newLights = [...lights]; // Copy lights array
    newLights[lastIndex] = false; // Turn off the last light

    setLights(newLights); // Update lights state
    setLightStack(stackCopy); // Update stack without the last light
  };

  return (
    <div style={styles.container}>
      <h1>Grid Lights with Reverse Turn Off</h1>

      {/* Grid container */}
      <div style={styles.grid}>
        {lights.map((isOn, idx) => (
          <div
            key={idx}
            style={{
              ...styles.light,
              backgroundColor: isOn ? "yellow" : "#ddd", // Yellow if on, gray if off
            }}
            onClick={() => toggleLight(idx)} // Turn on light on click
          ></div>
        ))}
      </div>

      {/* Button to turn off lights in reverse order */}
      <button style={styles.button} onClick={turnOffReverse}>
        Turn Off Lights in Reverse
      </button>
    </div>
  );
};

// Inline styles for the grid and lights
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
    gridTemplateColumns: "repeat(5, 60px)", // 5 columns
    gap: 10,
    marginBottom: 20,
  },
  light: {
    width: 60,
    height: 60,
    borderRadius: 4,
    cursor: "pointer",
    transition: "background-color 0.3s", // Smooth color change
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
