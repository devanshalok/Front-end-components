import React, { useState } from "react";

export default function ColorPoll() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [votes, setVotes] = useState({ Red: 0, Blue: 0, Green: 0, Yellow: 0 });
  const [votedUsers, setVotedUsers] = useState(new Set());
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !color) return setError("Enter name and select a color.");
    if (votedUsers.has(name.trim().toLowerCase())) return setError("You already voted.");

    const updatedVotes = { ...votes, [color]: votes[color] + 1 };
    const updatedUsers = new Set(votedUsers);
    updatedUsers.add(name.trim().toLowerCase());

    setVotes(updatedVotes);
    setVotedUsers(updatedUsers);
    setName("");
    setColor("");
    setError("");
  };

  return (
    <div style={{ padding: 10 }}>
      <h3>Vote for Your Favorite Color</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="">Select color</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Yellow">Yellow</option>
          </select>
        </div>
        <button>Submit</button>
      </form>

      {error && <div style={{ color: "red" }}>{error}</div>}

      <h4>Results</h4>
      {Object.entries(votes).map(([clr, val]) => (
        <div key={clr}>
          {clr}: {val}
        </div>
      ))}
    </div>
  );
}
