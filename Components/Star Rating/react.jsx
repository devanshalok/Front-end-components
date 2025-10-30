import React, { useState } from "react";

// StarRating component allows users to rate from 1 to 5 stars, hover to preview, click to rate, and calculate average ratings
export default function StarRating() {
  // currentRating stores the last clicked rating by the user
  const [currentRating, setCurrentRating] = useState(0);
  // hoverRating stores the rating value currently hovered by the user
  const [hoverRating, setHoverRating] = useState(0);
  // ratings array stores all submitted ratings
  const [ratings, setRatings] = useState([]);

  // When user hovers on a star, update hoverRating to highlight stars up to that value
  const handleMouseOver = (value) => setHoverRating(value);

  // When mouse leaves a star, reset hoverRating to 0
  const handleMouseOut = () => setHoverRating(0);

  // When a star is clicked:
  // - Set currentRating to clicked value
  // - Add the rating to the ratings array
  // - Log the rating and all ratings in console for debugging
  const handleClick = (value) => {
    setCurrentRating(value);
    setRatings([...ratings, value]);
    console.log(`Rated: ${value} star(s)`);
    console.log("All ratings:", [...ratings, value]);
  };

  // Calculate and show the average of all ratings
  const averageStars = () => {
    if (ratings.length === 0) return alert("No ratings yet."); // alert if no ratings
    const sum = ratings.reduce((acc, val) => acc + val, 0); // sum all ratings
    alert(`Average rating: ${(sum / ratings.length).toFixed(2)} stars`); // calculate average and show 2 decimals
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Container for stars and button */}
      <div style={styles.starContainer}>
        {/* Render 5 stars dynamically */}
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value} // unique key for each star
            style={{
              ...styles.star,
              // Highlight stars if value <= hoverRating or currentRating
              color: value <= (hoverRating || currentRating) ? "#ffcc00" : "#ccc",
            }}
            onMouseOver={() => handleMouseOver(value)} // highlight on hover
            onMouseOut={handleMouseOut} // remove highlight on mouse out
            onClick={() => handleClick(value)} // record rating on click
          >
            &#9733; {/* Unicode star character */}
          </span>
        ))}
        {/* Button to show average rating */}
        <button onClick={averageStars} style={styles.button}>
          Show average
        </button>
      </div>
    </div>
  );
}

// Styles for stars, container, and button
const styles = {
  starContainer: {
    display: "flex", // arrange stars horizontally
    alignItems: "center",
    gap: 10, // space between stars
    fontSize: 30,
    userSelect: "none", // prevent text selection while clicking stars
    cursor: "pointer", // indicate clickable
  },
  star: {
    transition: "color 0.3s", // smooth color change on hover or click
  },
  button: {
    marginLeft: 20,
    padding: "5px 10px",
    fontSize: 16,
    cursor: "pointer",
  },
};
