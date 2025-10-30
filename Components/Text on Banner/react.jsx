import React from "react";

export default function Banner() {
  // Container div styles: positions relative so the text can be absolutely positioned over the image
  const containerStyle = {
    position: "relative", // Needed for absolute positioning of the overlay text
    width: "100%",        // Full width of parent
    maxWidth: "1200px",   // Optional max width for larger screens
    margin: "0 auto",     // Center horizontally
  };

  // Image styles
  const imageStyle = {
    width: "100%",         // Take full width of container
    height: "auto",        // Maintain aspect ratio
    borderRadius: "8px",   // Slightly rounded corners
    display: "block",      // Removes default inline spacing
  };

  // Text overlay styles
  const textStyle = {
    position: "absolute",              // Positioned relative to container
    top: "50%",                        // Vertical center
    left: "50%",                       // Horizontal center
    transform: "translate(-50%, -50%)", // Exact center by offsetting its own size
    color: "white",                    // Text color
    fontSize: "2em",                   // Bigger font
    fontWeight: "bold",                // Bold text
    textAlign: "center",               // Center text alignment
    textShadow: "2px 2px 5px rgba(0,0,0,0.5)", // Shadow for better readability
  };

  return (
    <div style={containerStyle}>
      {/* Banner image */}
      <img
        src="https://via.placeholder.com/1200x400" // Placeholder image
        alt="Banner"
        style={imageStyle}
      />
      
      {/* Overlay text centered over image */}
      <div style={textStyle}>Welcome to Our Website</div>
    </div>
  );
}
