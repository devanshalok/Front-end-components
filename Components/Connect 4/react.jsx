import React, { useState } from "react";

// Main App component for Connect 4 game
export default function App() {
  const ROWS = 6; // Number of rows in the Connect 4 board
  const COLS = 7; // Number of columns in the Connect 4 board

  // Initialize empty board: 6x7 grid filled with null
  const emptyBoard = Array(ROWS)
    .fill(null)
    .map(() => Array(COLS).fill(null));

  // State variables
  const [board, setBoard] = useState(emptyBoard); // Current board state
  const [currentPlayer, setCurrentPlayer] = useState("R"); // Tracks current player ("R" or "Y")
  const [winner, setWinner] = useState(null); // Stores winner when game ends

  // Handles dropping a piece into a column
  const handleDrop = (col) => {
    if (winner) return; // Stop moves if game is over
    const newBoard = board.map((row) => [...row]); // Create a copy of the board

    // Start from bottom row and find the first empty cell
    for (let row = ROWS - 1; row >= 0; row--) {
      if (!newBoard[row][col]) {
        newBoard[row][col] = currentPlayer; // Place the current player's piece
        setBoard(newBoard); // Update the board state

        // Check if this move causes a win
        if (checkWinner(newBoard, row, col, currentPlayer)) {
          setWinner(currentPlayer);
        } else {
          // Switch to the other player
          setCurrentPlayer(currentPlayer === "R" ? "Y" : "R");
        }
        return;
      }
    }
  };

  // Check for 4-in-a-row for the given player starting from (row, col)
  const checkWinner = (board, row, col, player) => {
    const directions = [
      [0, 1], // horizontal
      [1, 0], // vertical
      [1, 1], // diagonal down-right
      [1, -1], // diagonal down-left
    ];

    // Check each direction
    for (let [dx, dy] of directions) {
      let count = 1; // Include current piece

      // Check both directions along this line
      for (let dir = -1; dir <= 1; dir += 2) {
        let r = row + dir * dx;
        let c = col + dir * dy;

        // Count consecutive pieces of the same player
        while (
          r >= 0 &&
          r < ROWS &&
          c >= 0 &&
          c < COLS &&
          board[r][c] === player
        ) {
          count++;
          r += dir * dx;
          c += dir * dy;
        }
      }

      if (count >= 4) return true; // Player wins
    }

    return false; // No win found
  };

  // Reset the game to initial state
  const resetGame = () => {
    setBoard(emptyBoard);
    setCurrentPlayer("R");
    setWinner(null);
  };

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        textAlign: "center",
        marginTop: "30px",
      }}
    >
      <h2>Connect 4</h2>

      {/* Display current player or winner */}
      <div style={{ marginBottom: "10px" }}>
        {winner ? (
          <span style={{ color: winner === "R" ? "red" : "gold" }}>
            {winner === "R" ? "Red" : "Yellow"} Wins!
          </span>
        ) : (
          <span>
            Current Player:{" "}
            <span style={{ color: currentPlayer === "R" ? "red" : "gold" }}>
              {currentPlayer === "R" ? "Red" : "Yellow"}
            </span>
          </span>
        )}
      </div>

      {/* Board container */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, 50px)`, // 7 columns
          gap: "4px",
          justifyContent: "center",
          background: "#1976d2",
          padding: "6px",
          borderRadius: "6px",
          width: "fit-content",
          margin: "auto",
        }}
      >
        {/* Render each column */}
        {Array.from({ length: COLS }).map((_, col) => (
          <div
            key={col}
            onClick={() => handleDrop(col)} // Drop piece when column clicked
            style={{
              display: "grid",
              gridTemplateRows: `repeat(${ROWS}, 50px)`, // 6 rows per column
              gap: "4px",
              cursor: "pointer",
            }}
          >
            {/* Render each cell in the column */}
            {Array.from({ length: ROWS }).map((_, row) => {
              const cell = board[row][col]; // Get cell value
              return (
                <div
                  key={row}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%", // Make it circular
                    background: cell
                      ? cell === "R"
                        ? "red"
                        : "gold" // Red or Yellow piece
                      : "white", // Empty cell
                    border: "1px solid #0d47a1",
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Reset button */}
      <button
        onClick={resetGame}
        style={{
          marginTop: "15px",
          padding: "5px 10px",
          border: "1px solid #1976d2",
          background: "white",
          cursor: "pointer",
          borderRadius: "4px",
        }}
      >
        Reset
      </button>
    </div>
  );
}
