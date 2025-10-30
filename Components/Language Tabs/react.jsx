import React, { useState } from "react";

export default function App() {
  // Sample data simulating an API response
  const data = [
    { language: "English", content: "Hello World" },
    { language: "French", content: "Bonjour le Monde" },
    { language: "German", content: "Hallo Welt" }
  ];

  // If using a real API, you would fetch data here:
  // useEffect(() => {
  //   fetch("API_ENDPOINT")
  //     .then(res => res.json())
  //     .then(data => setData(data));
  // }, []);

  // State to track which tab is currently active
  const [activeIndex, setActiveIndex] = useState(0);

  // Container style for centering everything vertically and horizontally
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5"
  };

  // Outer container for tabs and content
  const tabsContainerStyle = {
    border: "1px solid #ccc",
    borderRadius: 5,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    minWidth: 200
  };

  // Row that holds the tab buttons
  const tabsStyle = {
    display: "flex",
    backgroundColor: "#e0e0e0"
  };

  // Individual tab button style
  const tabStyle = (isActive) => ({
    padding: "10px 20px",
    cursor: "pointer",
    fontWeight: isActive ? "bold" : "normal", // Highlight active tab
    backgroundColor: isActive ? "#8bc34a" : "#e0e0e0" // Different color for active tab
  });

  // Style for the content area displayed below the tabs
  const contentStyle = {
    padding: 20,
    backgroundColor: "#fff",
    textAlign: "center"
  };

  return (
    <div style={containerStyle}>
      <div style={tabsContainerStyle}>
        {/* Tab buttons */}
        <div style={tabsStyle}>
          {data.map((item, index) => (
            <div
              key={item.language} // Unique key for each tab
              style={tabStyle(index === activeIndex)} // Highlight the active tab
              onClick={() => setActiveIndex(index)} // Set active tab when clicked
            >
              {item.language} {/* Display tab label */}
            </div>
          ))}
        </div>

        {/* Tab content area */}
        <div style={contentStyle}>
          {data[activeIndex].content} {/* Display content for the active tab */}
        </div>
      </div>
    </div>
  );
}
