import React, { useState } from "react";

export default function TodoList() {
  // State to hold all tasks, each task is an object { text, completed }
  const [tasks, setTasks] = useState([]);
  
  // State to hold current input value
  const [input, setInput] = useState("");

  // Function to add a new task
  const addTask = () => {
    if (!input.trim()) { // Ignore empty tasks
      alert("Please enter a task.");
      return;
    }
    // Add new task to the list, default completed is false
    setTasks([...tasks, { text: input, completed: false }]);
    setInput(""); // Clear input after adding
  };

  // Toggle completion status of a task
  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed; // Flip completed flag
    setTasks(updated);
  };

  // Delete a task by filtering it out of the tasks array
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Styles for the container
  const container = {
    width: "100%",
    maxWidth: "400px",
    margin: "20px auto",
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  };

  const inputContainer = { display: "flex", gap: "10px", marginBottom: "20px" };

  const inputStyle = {
    flex: 1,               // Take remaining space
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
  };

  const buttonStyle = {
    padding: "10px 15px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const listStyle = { listStyle: "none", padding: 0, margin: 0 };

  // Dynamic style for each task item depending on completed status
  const itemStyle = (completed) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    marginBottom: "10px",
    textDecoration: completed ? "line-through" : "none", // Strike-through if completed
    backgroundColor: completed ? "#d4edda" : "#fff",      // Greenish bg if completed
    cursor: "pointer",
  });

  const deleteBtn = {
    background: "none",
    border: "none",
    color: "#ff0000",
    fontSize: "18px",
    cursor: "pointer",
  };

  return (
    <div style={{ textAlign: "center", background: "#f4f4f4", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ color: "#333" }}>To-Do List</h1>
      <div style={container}>
        {/* Input and Add Button */}
        <div style={inputContainer}>
          <input
            type="text"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)} // Update input state on change
            onKeyDown={(e) => e.key === "Enter" && addTask()} // Add task on Enter key
            style={inputStyle}
          />
          <button onClick={addTask} style={buttonStyle}>
            Add
          </button>
        </div>

        {/* Task list */}
        <ul style={listStyle}>
          {tasks.map((task, i) => (
            <li
              key={i}
              style={itemStyle(task.completed)} // Apply style based on completion
              onClick={() => toggleComplete(i)} // Toggle completion on click
            >
              {task.text}
              <button
                style={deleteBtn}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent toggling completion when clicking delete
                  deleteTask(i);       // Delete task
                }}
              >
                &times; {/* Cross symbol */}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
