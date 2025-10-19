import React, { useState } from "react";

const FormWithProgress = () => {
  const [data, setData] = useState({ name: "", email: "", age: "", phone: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const filled = Object.values(data).filter((v) => v.trim() !== "").length;
  const progress = (filled / 4) * 100;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <div style={styles.page}>
      <div style={styles.formBox}>
        <h3>Form with Progress</h3>

        <div style={styles.progressWrap}>
          <div style={{ ...styles.progress, width: `${progress}%` }}>
            {Math.round(progress)}%
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {["name", "email", "age", "phone"].map((f) => (
            <div key={f} style={styles.group}>
              <label>{f.charAt(0).toUpperCase() + f.slice(1)}</label>
              <input
                name={f}
                type={f === "age" ? "number" : f === "email" ? "email" : "text"}
                value={data[f]}
                onChange={handleChange}
                required
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
    lineHeight: "20px",
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
