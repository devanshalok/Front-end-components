import React, { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <button
        onClick={() => setIsOpen(true)}
        style={{ padding: 10, cursor: "pointer" }}
      >
        Open Modal
      </button>

      {isOpen && (
        <div
          onClick={e => e.target === e.currentTarget && setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: 20,
              minWidth: 300,
              position: "relative"
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              style={{ position: "absolute", top: 5, right: 5, cursor: "pointer" }}
            >
              ×
            </button>
            <h2>Modal Title</h2>
            <p>This is a sample modal dialog.</p>
          </div>
        </div>
      )}
    </div>
  );
}
