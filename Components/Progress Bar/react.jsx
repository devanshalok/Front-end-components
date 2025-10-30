import React, { useState } from "react";

const FormWithProgress = () => {
  // State to store form input values
  const [data, setData] = useState({ name: "", email: "", age: "", phone: "" });

  // Handle input changes dynamically based on input name
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Count how many fields are filled
  const filled = Object.values(data).filter((v) => v.trim() !== "").length;
  // Calculate progress percentage (total 4 fields)
  const progress = (filled / 4) * 100;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form reload
    alert("Form submitted"); // Placeholder action
  };

  return (
    <div style={styles.page}>
      <div style={styles.formBox}>
        <h3>Form with Progress</h3>

        {/* Progress bar container */}
        <div style={styles.progressWrap}>
          {/* Progress bar dynamically changes width based on filled inputs */}
          <div style={{ ...styles.progress, width: `${progress}%` }}>
            {Math.round(progress)}% {/* Display progress percentage */}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Dynamically generate input fields */}
          {["name", "email", "age", "phone"].map((f) => (
            <div key={f} style={styles.group}>
              <label>{f.charAt(0).toUpperCase() + f.slice(1)}</label>
              <input
                name={f}
                type={f === "age" ? "number" : f === "email" ? "email" : "text"} // Set input type
                value={data[f]} // Bind input to state
                onChange={handleChange} // Update state on change
                required // HTML5 validation
                style={styles.input}
              />
            </div>
          ))}
          <button style={styles.btn}>Submit</button>
        </form>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#fafafa",
    fontFamily: "sans-serif",
  },
  formBox: {
    width: "90%",
    maxWidth: 350,
  },
  progressWrap: {
    height: 20,
    background: "#ddd",
    marginBottom: 10,
  },
  progress: {
    height: "100%",
    background: "#007bff",
    color: "white",
    fontSize: 12,
    textAlign: "center",
    lineHeight: "20px", // Center text vertically
  },
  group: {
    marginBottom: 8,
  },
  input: {
    width: "100%",
    padding: 6,
    border: "1px solid #ccc",
  },
  btn: {
    width: "100%",
    padding: 8,
    background: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default FormWithProgress;
