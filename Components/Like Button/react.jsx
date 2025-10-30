import React, { useState } from "react";

export default function App() {
  // State to track whether the button is liked or not
  const [liked, setLiked] = useState(false);
  // State to track if a backend request (simulated here) is in progress
  const [loading, setLoading] = useState(false);

  // Function called when button is clicked
  const handleClick = () => {
    if (loading) return; // Ignore clicks while loading
    setLoading(true); // Start loading

    // Simulate a backend call with setTimeout
    setTimeout(() => {
      setLiked(prev => !prev); // Toggle liked state
      setLoading(false); // Stop loading
    }, 1000);

    // Example for real backend call:
    // setState("loading");
    // fetch("/api/like", { method: "POST" })
    //   .then(res => res.json())
    //   .then(() => setState("clicked"))
    //   .catch(() => setState("normal"));
  };

  // Styles for the main button, dynamically changing based on liked/loading state
  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    padding: "8px 16px",
    fontSize: 14,
    borderRadius: 4,
    border: "1px solid",
    borderColor: liked ? "red" : "#aaa", // Red border if liked
    backgroundColor: liked ? "red" : "#fff", // Red background if liked
    color: liked ? "white" : "#333", // White text if liked
    cursor: loading ? "not-allowed" : "pointer", // Disable pointer when loading
    transition: "all 0.2s"
  };

  // Heart emoji style: hide it while loading
  const heartStyle = {
    display: loading ? "none" : "inline"
  };

  // Loader (spinner) style: show only while loading
  const loaderStyle = {
    display: loading ? "inline-block" : "none",
    width: 14,
    height: 14,
    border: "2px solid #f3f3f3",
    borderTop: "2px solid red", // Top colored border for spinning effect
    borderRadius: "50%",
    animation: "spin 1s linear infinite" // Spinner animation
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      {/* Like button */}
      <button
        style={buttonStyle}
        onClick={handleClick} // Handle click events
        onMouseEnter={e => {
          // Change text color on hover if not liked or loading
          if (!liked && !loading) e.currentTarget.style.color = "red";
        }}
        onMouseLeave={e => {
          // Revert text color when hover ends
          if (!liked && !loading) e.currentTarget.style.color = "#333";
        }}
      >
        {/* Heart icon */}
        <span style={heartStyle}>❤️</span>
        {/* Text changes depending on liked state */}
        <span>{liked ? "Liked" : "Like"}</span>
        {/* Loader spinner */}
        <span style={loaderStyle}></span>
      </button>

      {/* Spinner keyframes for rotation animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
