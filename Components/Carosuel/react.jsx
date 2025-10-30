import React, { useState } from "react";

// Main App component rendering an image carousel
export default function App() {
  // Array of image URLs to display in the carousel
  const images = [
    "https://picsum.photos/id/1018/600/300",
    "https://picsum.photos/id/1025/600/300",
    "https://picsum.photos/id/1035/600/300",
  ];

  // Track the index of the currently displayed image
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next image, wrap around using modulo
  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  // Move to the previous image, wrap around using modulo
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  // Handle case when there are no images
  if (images.length === 0) return <p>No images available</p>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // Stack image and dots vertically
        alignItems: "center", // Center horizontally
        marginTop: "40px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Carousel container */}
      <div style={{ position: "relative", width: "600px", height: "300px" }}>
        {/* Current image */}
        <img
          src={images[currentIndex]}
          alt="carousel"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "8px", // Rounded corners
            objectFit: "cover", // Ensure image fills container without distortion
            transition: "0.3s ease-in-out", // Smooth transition effect
          }}
        />

        {/* Previous button */}
        <button
          onClick={handlePrev}
          style={{
            position: "absolute",
            top: "50%", // Center vertically
            left: "10px", // Left edge
            transform: "translateY(-50%)", // Adjust for vertical centering
            background: "rgba(0,0,0,0.5)", // Semi-transparent background
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            padding: "5px 10px",
          }}
        >
          ‹
        </button>

        {/* Next button */}
        <button
          onClick={handleNext}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            padding: "5px 10px",
          }}
        >
          ›
        </button>
      </div>

      {/* Indicator dots */}
      <div style={{ marginTop: "10px", display: "flex", gap: "6px" }}>
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)} // Clicking a dot navigates to that image
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%", // Make it circular
              background: i === currentIndex ? "#4caf50" : "#ccc", // Highlight active dot
              cursor: "pointer",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
