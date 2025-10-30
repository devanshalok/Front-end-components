import React, { useState } from "react";

// Main App component rendering a contact form
export default function App() {
  // State to hold form input values
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // State to track submission status: idle, loading, success, error
  const [status, setStatus] = useState("idle"); 

  // Updates form state when any input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Basic validation to ensure all fields are filled
    if (!form.name || !form.email || !form.message) {
      alert("Please fill out all fields");
      return;
    }

    try {
      setStatus("loading"); // Show loading state

      // Send POST request to API endpoint with form data
      const res = await fetch("https://example.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send"); // Handle server errors

      // On success, update status and reset form fields
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error"); // Show error message if request fails
    }
  };

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f9f9f9",
      }}
    >
      {/* Contact form container */}
      <form
        onSubmit={handleSubmit} // Attach submit handler
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "6px",
          width: "300px",
          boxShadow: "0 0 5px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "10px" }}>Contact Us</h3>

        {/* Name input */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        {/* Email input */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        {/* Message textarea */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows="4"
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            resize: "none", // Prevent resizing
          }}
        />

        {/* Submit button */}
        <button
          type="submit"
          disabled={status === "loading"} // Disable while sending
          style={{
            padding: "8px",
            border: "none",
            background: "#4caf50",
            color: "white",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {status === "loading" ? "Sending..." : "Send"}
        </button>

        {/* Success message */}
        {status === "success" && (
          <p style={{ color: "green", textAlign: "center" }}>
            Message sent successfully!
          </p>
        )}

        {/* Error message */}
        {status === "error" && (
          <p style={{ color: "red", textAlign: "center" }}>
            Failed to send message.
          </p>
        )}
      </form>
    </div>
  );
}
