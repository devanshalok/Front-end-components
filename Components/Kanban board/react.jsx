import React, { useState } from "react";

export default function App() {
  // State to store tasks grouped by columns: todo, inProgress, done
  const [columns, setColumns] = useState({
    todo: [],
    inProgress: [],
    done: []
  });

  // State to track the input value for adding a new task
  const [newTask, setNewTask] = useState("");

  // Function to add a new task to the "todo" column
  const handleAddTask = () => {
    if (!newTask.trim()) return; // Ignore empty or whitespace-only input
    // Append the new task to the "todo" array immutably
    setColumns(prev => ({ ...prev, todo: [...prev.todo, newTask.trim()] }));
    setNewTask(""); // Clear input field after adding
  };

  // Function triggered when a task drag starts
  const handleDragStart = (e, task, col) => {
    // Store the dragged task text and its source column in dataTransfer
    e.dataTransfer.setData("task", task);
    e.dataTransfer.setData("source", col);
  };

  // Function triggered when a task is dropped into a column
  const handleDrop = (e, targetCol) => {
    e.preventDefault(); // Prevent default browser behavior
    const task = e.dataTransfer.getData("task"); // Get dragged task
    const sourceCol = e.dataTransfer.getData("source"); // Get source column
    if (sourceCol === targetCol) return; // Do nothing if dropped in same column

    // Update columns state immutably
    setColumns(prev => {
      const newSource = prev[sourceCol].filter(t => t !== task); // Remove task from source column
      const newTarget = [...prev[targetCol], task]; // Add task to target column
      return { ...prev, [sourceCol]: newSource, [targetCol]: newTarget };
    });
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h2 style={{ textAlign: "center" }}>Kanban Board</h2>

      {/* Input section to add a new task */}
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          value={newTask} // Controlled input value
          onChange={e => setNewTask(e.target.value)} // Update state on typing
          placeholder="Enter task..."
          style={{ flex: 1, padding: 6 }}
          onKeyDown={e => e.key === "Enter" && handleAddTask()} // Add task on Enter key
        />
        <button onClick={handleAddTask} style={{ padding: "6px 12px" }}>
          Add
        </button>
      </div>

      {/* Columns container */}
      <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        {/* Render each column dynamically from state */}
        {Object.entries(columns).map(([col, tasks]) => (
          <div
            key={col}
            onDragOver={e => e.preventDefault()} // Allow drop
            onDrop={e => handleDrop(e, col)} // Handle drop event
            style={{
              flex: 1,
              border: "1px solid #ccc",
              padding: 10,
              minHeight: 200
            }}
          >
            {/* Column header with formatted name */}
            <h4 style={{ textAlign: "center", marginBottom: 8 }}>
              {col === "inProgress"
                ? "In Progress" // Special formatting for "inProgress"
                : col.charAt(0).toUpperCase() + col.slice(1)} {/* Capitalize first letter */}
            </h4>

            {/* Render each task inside the column */}
            {tasks.map(task => (
              <div
                key={task} // Unique key for each task
                draggable // Enable dragging
                onDragStart={e => handleDragStart(e, task, col)} // Handle drag start
                style={{
                  background: "#eee",
                  marginBottom: 6,
                  padding: 6,
                  cursor: "grab"
                }}
              >
                {task} {/* Display task text */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
