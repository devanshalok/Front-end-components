import React, { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill out all fields");
      return;
    }

    try {
      setStatus("loading");
      const res = await fetch("https://example.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
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
      <form
        onSubmit={handleSubmit}
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
            resize: "none",
          }}
        />

        <button
          type="submit"
          disabled={status === "loading"}
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

        {status === "success" && (
          <p style={{ color: "green", textAlign: "center" }}>
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p style={{ color: "red", textAlign: "center" }}>
            Failed to send message.
          </p>
        )}
      </form>
    </div>
  );
}
