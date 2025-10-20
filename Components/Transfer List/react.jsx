import React, { useState } from "react";

export default function TransferList() {
  const [leftList, setLeftList] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);
  const [rightList, setRightList] = useState([]);
  const [selectedLeft, setSelectedLeft] = useState([]);
  const [selectedRight, setSelectedRight] = useState([]);

  const moveRight = () => {
    const newRight = [...rightList, ...selectedLeft];
    const newLeft = leftList.filter((item) => !selectedLeft.includes(item));
    setLeftList(newLeft.sort());
    setRightList(newRight.sort());
    setSelectedLeft([]);
  };

  const moveLeft = () => {
    const newLeft = [...leftList, ...selectedRight];
    const newRight = rightList.filter((item) => !selectedRight.includes(item));
    setLeftList(newLeft.sort());
    setRightList(newRight.sort());
    setSelectedRight([]);
  };

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
      <select
        multiple
        value={selectedLeft}
        onChange={(e) =>
          setSelectedLeft(
            Array.from(e.target.selectedOptions, (option) => option.value)
          )
        }
        style={selectStyle}
      >
        {leftList.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>

      <div style={buttonContainer}>
        <button style={buttonStyle} onClick={moveRight}>
          &gt;&gt;
        </button>
        <button style={buttonStyle} onClick={moveLeft}>
          &lt;&lt;
        </button>
      </div>

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
