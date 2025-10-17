import React, { useState } from "react";

export default function App() {
  const ROWS = 6;
  const COLS = 7;
  const emptyBoard = Array(ROWS)
    .fill(null)
    .map(() => Array(COLS).fill(null));

  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState("R");
  const [winner, setWinner] = useState(null);

  const handleDrop = (col) => {
    if (winner) return;
    const newBoard = board.map((row) => [...row]);

    for (let row = ROWS - 1; row >= 0; row--) {
      if (!newBoard[row][col]) {
        newBoard[row][col] = currentPlayer;
        setBoard(newBoard);
        if (checkWinner(newBoard, row, col, currentPlayer)) {
          setWinner(currentPlayer);
        } else {
          setCurrentPlayer(currentPlayer === "R" ? "Y" : "R");
        }
        return;
      }
    }
  };

  const checkWinner = (board, row, col, player) => {
    const directions = [
      [0, 1], // horizontal
      [1, 0], // vertical
      [1, 1], // diagonal down-right
      [1, -1], // diagonal down-left
    ];

    for (let [dx, dy] of directions) {
      let count = 1;
      for (let dir = -1; dir <= 1; dir += 2) {
        let r = row + dir * dx;
        let c = col + dir * dy;
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
      if (count >= 4) return true;
    }
    return false;
  };

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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, 50px)`,
          gap: "4px",
          justifyContent: "center",
          background: "#1976d2",
          padding: "6px",
          borderRadius: "6px",
          width: "fit-content",
          margin: "auto",
        }}
      >
        {Array.from({ length: COLS }).map((_, col) => (
          <div
            key={col}
            onClick={() => handleDrop(col)}
            style={{
              display: "grid",
              gridTemplateRows: `repeat(${ROWS}, 50px)`,
              gap: "4px",
              cursor: "pointer",
            }}
          >
            {Array.from({ length: ROWS }).map((_, row) => {
              const cell = board[row][col];
              return (
                <div
                  key={row}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: cell
                      ? cell === "R"
                        ? "red"
                        : "gold"
                      : "white",
                    border: "1px solid #0d47a1",
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>

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
