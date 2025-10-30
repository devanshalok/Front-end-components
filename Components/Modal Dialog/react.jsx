import React, { useState } from "react";

export default function App() {
  // State to track whether the modal is open or closed
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
      {/* Button to open the modal */}
      <button
        onClick={() => setIsOpen(true)} // Clicking sets isOpen to true
        style={{ padding: 10, cursor: "pointer" }}
      >
        Open Modal
      </button>

      {/* Modal overlay and content, rendered only when isOpen is true */}
      {isOpen && (
        <div
          onClick={e => 
            // Close modal if user clicks on the overlay (not the modal content)
            e.target === e.currentTarget && setIsOpen(false)
          }
          style={{
            position: "fixed", // Cover entire viewport
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)", // Semi-transparent dark overlay
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* Modal content container */}
          <div
            style={{
              background: "#fff", // White modal box
              padding: 20,
              minWidth: 300,
              position: "relative" // For positioning the close button
            }}
          >
            {/* Close button in top-right corner */}
            <button
              onClick={() => setIsOpen(false)} // Clicking closes the modal
              style={{ position: "absolute", top: 5, right: 5, cursor: "pointer" }}
            >
              ×
            </button>

            {/* Modal content */}
            <h2>Modal Title</h2>
            <p>This is a sample modal dialog.</p>
          </div>
        </div>
      )}
    </div>
  );
}
