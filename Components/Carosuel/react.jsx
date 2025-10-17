import React, { useState } from "react";

export default function App() {
  const images = [
    "https://picsum.photos/id/1018/600/300",
    "https://picsum.photos/id/1025/600/300",
    "https://picsum.photos/id/1035/600/300",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  if (images.length === 0) return <p>No images available</p>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "40px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ position: "relative", width: "600px", height: "300px" }}>
        <img
          src={images[currentIndex]}
          alt="carousel"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "8px",
            objectFit: "cover",
            transition: "0.3s ease-in-out",
          }}
        />
        <button
          onClick={handlePrev}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            padding: "5px 10px",
          }}
        >
          ‹
        </button>
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

      <div style={{ marginTop: "10px", display: "flex", gap: "6px" }}>
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: i === currentIndex ? "#4caf50" : "#ccc",
              cursor: "pointer",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
