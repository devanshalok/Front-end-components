import React, { useState } from "react";

export default function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const startDay = firstDayOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [];
  for (let i = 0; i < startDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const handlePrev = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNext = () => setCurrentDate(new Date(year, month + 1, 1));

  const handleSelect = (day) => {
    if (!day) return;
    setSelectedDate(new Date(year, month, day));
  };

  const isSameDay = (d1, d2) =>
    d1 &&
    d2 &&
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: 40 }}>
      <div>
        <button onClick={handlePrev}>‹</button>
        <span style={{ margin: "0 10px", fontWeight: "bold" }}>
          {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
        </span>
        <button onClick={handleNext}>›</button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "4px",
          maxWidth: "280px",
          margin: "20px auto",
        }}
      >
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} style={{ fontWeight: "bold", fontSize: "14px" }}>
            {day}
          </div>
        ))}
        {days.map((day, i) => {
          const thisDate = day ? new Date(year, month, day) : null;
          const isToday = isSameDay(thisDate, new Date());
          const isSelected = isSameDay(thisDate, selectedDate);

          return (
            <div
              key={i}
              onClick={() => handleSelect(day)}
              style={{
                height: "35px",
                lineHeight: "35px",
                borderRadius: "5px",
                cursor: day ? "pointer" : "default",
                backgroundColor: isSelected
                  ? "#4caf50"
                  : isToday
                  ? "#d7f9ef"
                  : "transparent",
                color: isSelected ? "white" : "#333",
              }}
            >
              {day || ""}
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <div style={{ fontSize: "14px", marginTop: "10px" }}>
          Selected: {selectedDate.toDateString()}
        </div>
      )}
    </div>
  );
}
