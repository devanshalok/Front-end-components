import React from "react";

export default function Banner() {
  const containerStyle = {
    position: "relative",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    display: "block",
  };

  const textStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "2em",
    fontWeight: "bold",
    textAlign: "center",
    textShadow: "2px 2px 5px rgba(0,0,0,0.5)",
  };

  return (
    <div style={containerStyle}>
      <img
        src="https://via.placeholder.com/1200x400"
        alt="Banner"
        style={imageStyle}
      />
      <div style={textStyle}>Welcome to Our Website</div>
    </div>
  );
}
