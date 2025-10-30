import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// AccordionItem represents each expandable/collapsible section in the accordion
const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "5px", marginBottom: "8px" }}>
      {/* Button acts as the clickable header for each accordion section */}
      <button
        onClick={onToggle} // Toggles open/close when clicked
        onKeyDown={(e) => {
          // Adds keyboard accessibility (Enter or Space can toggle)
          if (e.key === "Enter" || e.key === " ") onToggle();
        }}
        style={{
          width: "100%", // Make button full width
          padding: "12px",
          textAlign: "left", // Align text to left for title
          background: "#f7f7f7",
          border: "none",
          outline: "none",
          cursor: "pointer",
          fontSize: "16px",
        }}
        aria-expanded={isOpen} // Accessibility attribute to indicate open/closed state
      >
        {title}
        {/* Plus/minus sign to visually show toggle state */}
        <span style={{ float: "right" }}>{isOpen ? "-" : "+"}</span>
      </button>

      {/* This div holds the accordion content, expanding/collapsing with animation */}
      <div
        style={{
          maxHeight: isOpen ? "200px" : "0", // Expand/collapse height dynamically
          overflow: "hidden", // Hide content when collapsed
          transition: "max-height 0.3s ease", // Smooth open/close animation
          padding: isOpen ? "12px" : "0 12px", // Add padding only when open
          background: "#fff",
        }}
      >
        {content}
      </div>
    </div>
  );
};

// Accordion manages which AccordionItem is open at any time
const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null); // Tracks which section is open (index)

  // Function to toggle a specific section open/closed
  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Close if same section clicked, else open new one
  };

  // Show fallback message if no accordion items are passed
  if (!items || items.length === 0) return <p>No items available.</p>;

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto" }}>
      {/* Render each accordion item dynamically */}
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title} // Section header
          content={item.content} // Section content
          isOpen={openIndex === index} // Determine open state based on index
          onToggle={() => toggleIndex(index)} // Pass toggle handler
        />
      ))}
    </div>
  );
};

// Main App component that renders the Accordion
export default function App() {
  // Sample accordion data — each item has a title and content
  const accordionData = [
    { title: "Section 1", content: "Content for section 1" },
    { title: "Section 2", content: "Content for section 2" },
    { title: "Section 3", content: "Content for section 3" },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>React Accordion Example</h2>
      {/* Pass accordion data to Accordion component */}
      <Accordion items={accordionData} />
    </div>
  );
};
