import React, { useState } from "react";

export default function App() {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (loading) return;
    setLoading(true);

    // Simulate backend call
    setTimeout(() => {
      setLiked(prev => !prev);
      setLoading(false);
    }, 1000);

    // Example for real backend call:
    // setState("loading");
    // fetch("/api/like", { method: "POST" })
    //   .then(res => res.json())
    //   .then(() => setState("clicked"))
    //   .catch(() => setState("normal"));
  };

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    padding: "8px 16px",
    fontSize: 14,
    borderRadius: 4,
    border: "1px solid",
    borderColor: liked ? "red" : "#aaa",
    backgroundColor: liked ? "red" : "#fff",
    color: liked ? "white" : "#333",
    cursor: loading ? "not-allowed" : "pointer",
    transition: "all 0.2s"
  };

  const heartStyle = {
    display: loading ? "none" : "inline"
  };

  const loaderStyle = {
    display: loading ? "inline-block" : "none",
    width: 14,
    height: 14,
    border: "2px solid #f3f3f3",
    borderTop: "2px solid red",
    borderRadius: "50%",
    animation: "spin 1s linear infinite"
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <button
        style={buttonStyle}
        onClick={handleClick}
        onMouseEnter={e => {
          if (!liked && !loading) e.currentTarget.style.color = "red";
        }}
        onMouseLeave={e => {
          if (!liked && !loading) e.currentTarget.style.color = "#333";
        }}
      >
        <span style={heartStyle}>❤️</span>
        <span>{liked ? "Liked" : "Like"}</span>
        <span style={loaderStyle}></span>
      </button>

      {/* Spinner keyframes */}
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
