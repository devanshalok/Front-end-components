import React, { useState } from "react";

export default function StarRating() {
  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [ratings, setRatings] = useState([]);

  const handleMouseOver = (value) => setHoverRating(value);
  const handleMouseOut = () => setHoverRating(0);
  const handleClick = (value) => {
    setCurrentRating(value);
    setRatings([...ratings, value]);
    console.log(`Rated: ${value} star(s)`);
    console.log("All ratings:", [...ratings, value]);
  };

  const averageStars = () => {
    if (ratings.length === 0) return alert("No ratings yet.");
    const sum = ratings.reduce((acc, val) => acc + val, 0);
    alert(`Average rating: ${(sum / ratings.length).toFixed(2)} stars`);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <div style={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            style={{
              ...styles.star,
              color: value <= (hoverRating || currentRating) ? "#ffcc00" : "#ccc",
            }}
            onMouseOver={() => handleMouseOver(value)}
            onMouseOut={handleMouseOut}
            onClick={() => handleClick(value)}
          >
            &#9733;
          </span>
        ))}
        <button onClick={averageStars} style={styles.button}>
          Show average
        </button>
      </div>
    </div>
  );
}

const styles = {
  starContainer: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontSize: 30,
    userSelect: "none",
    cursor: "pointer",
  },
  star: {
    transition: "color 0.3s",
  },
  button: {
    marginLeft: 20,
    padding: "5px 10px",
    fontSize: 16,
    cursor: "pointer",
  },
};
