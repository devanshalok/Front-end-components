import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "5px", marginBottom: "8px" }}>
      <button
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onToggle();
        }}
        style={{
          width: "100%",
          padding: "12px",
          textAlign: "left",
          background: "#f7f7f7",
          border: "none",
          outline: "none",
          cursor: "pointer",
          fontSize: "16px",
        }}
        aria-expanded={isOpen}
      >
        {title}
        <span style={{ float: "right" }}>{isOpen ? "-" : "+"}</span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? "200px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          padding: isOpen ? "12px" : "0 12px",
          background: "#fff",
        }}
      >
        {content}
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!items || items.length === 0) return <p>No items available.</p>;

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto" }}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => toggleIndex(index)}
        />
      ))}
    </div>
  );
};

export default function App() {
  const accordionData = [
    { title: "Section 1", content: "Content for section 1" },
    { title: "Section 2", content: "Content for section 2" },
    { title: "Section 3", content: "Content for section 3" },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>React Accordion Example</h2>
      <Accordion items={accordionData} />
    </div>
  );
};
