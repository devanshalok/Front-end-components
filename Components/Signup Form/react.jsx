import React, { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  // Update state on input change
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Please enter a username.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters long.";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    // If no errors, show success and reset form
    if (Object.keys(newErrors).length === 0) {
      alert("Signup successful!");
      setFormData({ username: "", email: "", password: "" });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h2 style={{ textAlign: "center" }}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div style={styles.field}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.username && <div style={styles.error}>{errors.username}</div>}
          </div>

          {/* Email Field */}
          <div style={styles.field}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.email && <div style={styles.error}>{errors.email}</div>}
          </div>

          {/* Password Field */}
          <div style={styles.field}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.password && <div style={styles.error}>{errors.password}</div>}
          </div>

          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f4f4",
    fontFamily: "Arial, sans-serif",
  },
  formBox: {
    background: "#fff",
    padding: 20,
    borderRadius: 6,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    width: 280,
  },
  field: { marginBottom: 12 },
  input: {
    width: "100%",
    padding: 8,
    border: "1px solid #ccc",
    borderRadius: 4,
    fontSize: 14,
  },
  button: {
    width: "100%",
    padding: 10,
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
  },
  error: { color: "red", fontSize: 12, marginTop: 4 },
};
