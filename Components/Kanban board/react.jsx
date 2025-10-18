import React, { useState } from "react";

export default function App() {
  const [columns, setColumns] = useState({
    todo: [],
    inProgress: [],
    done: []
  });
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    setColumns(prev => ({ ...prev, todo: [...prev.todo, newTask.trim()] }));
    setNewTask("");
  };

  const handleDragStart = (e, task, col) => {
    e.dataTransfer.setData("task", task);
    e.dataTransfer.setData("source", col);
  };

  const handleDrop = (e, targetCol) => {
    e.preventDefault();
    const task = e.dataTransfer.getData("task");
    const sourceCol = e.dataTransfer.getData("source");
    if (sourceCol === targetCol) return;
    setColumns(prev => {
      const newSource = prev[sourceCol].filter(t => t !== task);
      const newTarget = [...prev[targetCol], task];
      return { ...prev, [sourceCol]: newSource, [targetCol]: newTarget };
    });
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h2 style={{ textAlign: "center" }}>Kanban Board</h2>

      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Enter task..."
          style={{ flex: 1, padding: 6 }}
          onKeyDown={e => e.key === "Enter" && handleAddTask()}
        />
        <button onClick={handleAddTask} style={{ padding: "6px 12px" }}>
          Add
        </button>
      </div>

      <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        {Object.entries(columns).map(([col, tasks]) => (
          <div
            key={col}
            onDragOver={e => e.preventDefault()}
            onDrop={e => handleDrop(e, col)}
            style={{
              flex: 1,
              border: "1px solid #ccc",
              padding: 10,
              minHeight: 200
            }}
          >
            <h4 style={{ textAlign: "center", marginBottom: 8 }}>
              {col === "inProgress"
                ? "In Progress"
                : col.charAt(0).toUpperCase() + col.slice(1)}
            </h4>

            {tasks.map(task => (
              <div
                key={task}
                draggable
                onDragStart={e => handleDragStart(e, task, col)}
                style={{
                  background: "#eee",
                  marginBottom: 6,
                  padding: 6,
                  cursor: "grab"
                }}
              >
                {task}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
