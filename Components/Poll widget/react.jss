import React, { useState } from "react";

export default function ColorPoll() {
  // State for the user's name input
  const [name, setName] = useState("");
  // State for the selected color
  const [color, setColor] = useState("");
  // State to track vote counts for each color
  const [votes, setVotes] = useState({ Red: 0, Blue: 0, Green: 0, Yellow: 0 });
  // State to keep track of users who already voted (case-insensitive)
  const [votedUsers, setVotedUsers] = useState(new Set());
  // State to show validation or error messages
  const [error, setError] = useState("");

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Validation: check if name and color are provided
    if (!name.trim() || !color) return setError("Enter name and select a color.");

    // Validation: prevent multiple votes from the same user
    if (votedUsers.has(name.trim().toLowerCase())) return setError("You already voted.");

    // Update the vote count for the selected color
    const updatedVotes = { ...votes, [color]: votes[color] + 1 };
    // Add the user to the set of users who voted
    const updatedUsers = new Set(votedUsers);
    updatedUsers.add(name.trim().toLowerCase());

    // Update states
    setVotes(updatedVotes);
    setVotedUsers(updatedUsers);
    setName(""); // Clear input field
    setColor(""); // Reset selected color
    setError(""); // Clear error message
  };

  return (
    <div style={{ padding: 10, fontFamily: "Arial, sans-serif" }}>
      <h3>Vote for Your Favorite Color</h3>

      {/* Poll Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Your Name"
            value={name} // Bind input to name state
            onChange={(e) => setName(e.target.value)} // Update name state on change
          />
        </div>

        <div>
          <select
            value={color} // Bind select to color state
            onChange={(e) => setColor(e.target.value)} // Update color state on change
          >
            <option value="">Select color</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Yellow">Yellow</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Show error message if any */}
      {error && <div style={{ color: "red", marginTop: 5 }}>{error}</div>}

      {/* Display vote results */}
      <h4>Results</h4>
      {Object.entries(votes).map(([clr, val]) => (
        <div key={clr}>
          {clr}: {val} {/* Display color name and corresponding vote count */}
        </div>
      ))}
    </div>
  );
}
