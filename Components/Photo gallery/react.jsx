import React, { useState } from "react";

export default function App() {
  // State to store all image URLs (initially some random placeholder images)
  const [images, setImages] = useState([
    "https://picsum.photos/600/400?random=1",
    "https://picsum.photos/600/400?random=2",
    "https://picsum.photos/600/400?random=3",
    "https://picsum.photos/600/400?random=4",
    "https://picsum.photos/600/400?random=5",
    "https://picsum.photos/600/400?random=6"
  ]);

  // State to store the currently selected image for the lightbox
  const [lightboxImage, setLightboxImage] = useState(null);

  // Handles adding a new image when the user uploads a file
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (!file) return;

    const reader = new FileReader(); // FileReader to read image as base64
    reader.onload = (event) => {
      setImages((prev) => [...prev, event.target.result]); // Append new image to the gallery
    };
    reader.readAsDataURL(file); // Read file as data URL for display
    e.target.value = ""; // Reset the input so the same file can be re-uploaded
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 20, textAlign: "center" }}>
      <h1>Photo Gallery</h1>

      {/* File input to allow user to upload images */}
      <div style={{ marginBottom: 20 }}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>

      {/* Grid layout for image thumbnails */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 15
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Photo ${index + 1}`}
            style={{ width: "100%", cursor: "pointer", borderRadius: 4 }}
            onClick={() => setLightboxImage(src)} // Clicking sets the lightbox image
          />
        ))}
      </div>

      {/* Lightbox overlay */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)} // Clicking outside image closes lightbox
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)", // Semi-transparent black overlay
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000
          }}
        >
          <img
            src={lightboxImage}
            alt="Enlarged"
            style={{ maxWidth: "90%", maxHeight: "90%", borderRadius: 4 }} // Centered and scaled image
          />
        </div>
      )}
    </div>
  );
}
