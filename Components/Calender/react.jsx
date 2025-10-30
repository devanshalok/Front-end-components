import React, { useState } from "react"; // Import React and the useState hook for managing component state

export default function App() {
  // Manage the currently displayed month/year and the user's selected date
  const [currentDate, setCurrentDate] = useState(new Date()); // Tracks the date currently shown on the calendar
  const [selectedDate, setSelectedDate] = useState(null); // Tracks which specific date the user clicked

  // Extract the year and month from the current date
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Calculate the first day of the month (e.g., Monday, Tuesday, etc.)
  const firstDayOfMonth = new Date(year, month, 1);
  const startDay = firstDayOfMonth.getDay(); // Returns 0–6 (Sun–Sat)
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total days in current month

  // Build an array of days for the grid, with null placeholders for empty cells before the first day
  const days = [];
  for (let i = 0; i < startDay; i++) days.push(null); // Fill start gaps
  for (let i = 1; i <= daysInMonth; i++) days.push(i); // Fill actual days

  // Navigate to the previous month
  const handlePrev = () => setCurrentDate(new Date(year, month - 1, 1));

  // Navigate to the next month
  const handleNext = () => setCurrentDate(new Date(year, month + 1, 1));

  // Handle clicking a day on the calendar
  const handleSelect = (day) => {
    if (!day) return; // Ignore clicks on empty cells
    setSelectedDate(new Date(year, month, day)); // Set the clicked date as selected
  };

  // Utility: compare two Date objects to check if they represent the same day
  const isSameDay = (d1, d2) =>
    d1 &&
    d2 &&
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        textAlign: "center",
        marginTop: 40,
      }}
    >
      {/* Header section with month/year and navigation buttons */}
      <div>
        <button onClick={handlePrev}>‹</button>
        <span style={{ margin: "0 10px", fontWeight: "bold" }}>
          {/* Display the current month and year in a readable format */}
          {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
        </span>
        <button onClick={handleNext}>›</button>
      </div>

      {/* Calendar grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)", // 7 columns for days of the week
          gap: "4px",
          maxWidth: "280px",
          margin: "20px auto",
        }}
      >
        {/* Render weekday labels */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} style={{ fontWeight: "bold", fontSize: "14px" }}>
            {day}
          </div>
        ))}

        {/* Render all days of the current month including leading blanks */}
        {days.map((day, i) => {
          const thisDate = day ? new Date(year, month, day) : null;
          const isToday = isSameDay(thisDate, new Date()); // Highlight current real-world date
          const isSelected = isSameDay(thisDate, selectedDate); // Highlight clicked date

          return (
            <div
              key={i}
              onClick={() => handleSelect(day)} // Handle click for selecting a date
              style={{
                height: "35px",
                lineHeight: "35px",
                borderRadius: "5px",
                cursor: day ? "pointer" : "default", // Pointer only on valid days
                backgroundColor: isSelected
                  ? "#4caf50" // Green for selected day
                  : isToday
                  ? "#d7f9ef" // Light highlight for today
                  : "transparent",
                color: isSelected ? "white" : "#333", // White text on selected
              }}
            >
              {day || ""} {/* Show the day number or empty space for null */}
            </div>
          );
        })}
      </div>

      {/* Display selected date below the calendar */}
      {selectedDate && (
        <div style={{ fontSize: "14px", marginTop: "10px" }}>
          Selected: {selectedDate.toDateString()}
        </div>
      )}
    </div>
  );
}
