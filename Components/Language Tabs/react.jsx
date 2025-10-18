import React, { useState } from "react";

export default function App() {
  // Sample API data
  const data = [
    { language: "English", content: "Hello World" },
    { language: "French", content: "Bonjour le Monde" },
    { language: "German", content: "Hallo Welt" }
  ];

  // useEffect(() => {
//   fetch("API_ENDPOINT")
//     .then(res => res.json())
//     .then(data => setData(data));
// }, []);


  const [activeIndex, setActiveIndex] = useState(0);

  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5"
  };

  const tabsContainerStyle = {
    border: "1px solid #ccc",
    borderRadius: 5,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    minWidth: 200
  };

  const tabsStyle = {
    display: "flex",
    backgroundColor: "#e0e0e0"
  };

  const tabStyle = (isActive) => ({
    padding: "10px 20px",
    cursor: "pointer",
    fontWeight: isActive ? "bold" : "normal",
    backgroundColor: isActive ? "#8bc34a" : "#e0e0e0"
  });

  const contentStyle = {
    padding: 20,
    backgroundColor: "#fff",
    textAlign: "center"
  };

  return (
    <div style={containerStyle}>
      <div style={tabsContainerStyle}>
        <div style={tabsStyle}>
          {data.map((item, index) => (
            <div
              key={item.language}
              style={tabStyle(index === activeIndex)}
              onClick={() => setActiveIndex(index)}
            >
              {item.language}
            </div>
          ))}
        </div>
        <div style={contentStyle}>
          {data[activeIndex].content}
        </div>
      </div>
    </div>
  );
}
