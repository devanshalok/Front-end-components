import React, { useState } from "react";

export default function App() {
  const [images, setImages] = useState([
    "https://picsum.photos/600/400?random=1",
    "https://picsum.photos/600/400?random=2",
    "https://picsum.photos/600/400?random=3",
    "https://picsum.photos/600/400?random=4",
    "https://picsum.photos/600/400?random=5",
    "https://picsum.photos/600/400?random=6"
  ]);

  const [lightboxImage, setLightboxImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setImages((prev) => [...prev, event.target.result]);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 20, textAlign: "center" }}>
      <h1>Photo Gallery</h1>

      <div style={{ marginBottom: 20 }}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>

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
            onClick={() => setLightboxImage(src)}
          />
        ))}
      </div>

      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000
          }}
        >
          <img
            src={lightboxImage}
            alt="Enlarged"
            style={{ maxWidth: "90%", maxHeight: "90%", borderRadius: 4 }}
          />
        </div>
      )}
    </div>
  );
}
