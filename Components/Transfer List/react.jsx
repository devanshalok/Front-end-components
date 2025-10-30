import React, { useState } from "react";

export default function TransferList() {
  // State for items on the left and right lists
  const [leftList, setLeftList] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);
  const [rightList, setRightList] = useState([]);

  // State for selected items in each list
  const [selectedLeft, setSelectedLeft] = useState([]);
  const [selectedRight, setSelectedRight] = useState([]);

  // Move selected items from left to right
  const moveRight = () => {
    // Add selected items to right list
    const newRight = [...rightList, ...selectedLeft];

    // Remove selected items from left list
    const newLeft = leftList.filter((item) => !selectedLeft.includes(item));

    // Update state with sorted arrays
    setLeftList(newLeft.sort());
    setRightList(newRight.sort());

    // Clear selection on the left
    setSelectedLeft([]);
  };

  // Move selected items from right to left
  const moveLeft = () => {
    const newLeft = [...leftList, ...selectedRight];
    const newRight = rightList.filter((item) => !selectedRight.includes(item));

    setLeftList(newLeft.sort());
    setRightList(newRight.sort());
    setSelectedRight([]);
  };

  // Styles for container and elements
  const container = {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f4f4",
    fontFamily: "Arial, sans-serif",
  };

  const selectStyle = {
    width: "200px",
    height: "200px",
    padding: "5px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  };

  const buttonContainer = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <div style={container}>
      {/* Left select list */}
      <select
        multiple
        value={selectedLeft} // Bind selected items
        onChange={(e) =>
          setSelectedLeft(
            // Convert selected options into an array of values
            Array.from(e.target.selectedOptions, (option) => option.value)
          )
        }
        style={selectStyle}
      >
        {leftList.map((item) => (
          <option key={item}>{item}</option> // Render each item as option
        ))}
      </select>

      {/* Buttons to move items */}
      <div style={buttonContainer}>
        <button style={buttonStyle} onClick={moveRight}>
          &gt;&gt; {/* Move right */}
        </button>
        <button style={buttonStyle} onClick={moveLeft}>
          &lt;&lt; {/* Move left */}
        </button>
      </div>

      {/* Right select list */}
      <select
        multiple
        value={selectedRight}
        onChange={(e) =>
          setSelectedRight(
            Array.from(e.target.selectedOptions, (option) => option.value)
          )
        }
        style={selectStyle}
      >
        {rightList.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
