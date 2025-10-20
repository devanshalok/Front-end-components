import React, { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) {
      alert("Please enter a task.");
      return;
    }
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

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
    flex: 1,
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

  const itemStyle = (completed) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    marginBottom: "10px",
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#d4edda" : "#fff",
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
        <div style={inputContainer}>
          <input
            type="text"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            style={inputStyle}
          />
          <button onClick={addTask} style={buttonStyle}>
            Add
          </button>
        </div>
        <ul style={listStyle}>
          {tasks.map((task, i) => (
            <li key={i} style={itemStyle(task.completed)} onClick={() => toggleComplete(i)}>
              {task.text}
              <button
                style={deleteBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTask(i);
                }}
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
