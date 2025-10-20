import React, { useState } from "react";

const UserDatabase = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editUser, setEditUser] = useState(null);
  const [idCounter, setIdCounter] = useState(1);

  const addUser = () => {
    if (!name || !email) {
      alert("Please enter both name and email.");
      return;
    }
    setUsers([...users, { id: idCounter, name, email }]);
    setIdCounter(idCounter + 1);
    setName("");
    setEmail("");
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = () => {
    setUsers(
      users.map((u) =>
        u.id === editUser.id ? { ...u, name: editUser.name, email: editUser.email } : u
      )
    );
    setEditUser(null);
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
      }}
    >
      <h1>User Database</h1>

      <input
        type="text"
        placeholder="Filter by name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{
          marginBottom: "10px",
          padding: "8px",
          fontSize: "16px",
          width: "300px",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      />

      <div style={{ margin: "10px 0" }}>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "inline-block", width: "80px" }}>Name</label>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: "5px" }}
          />
        </div>
        <div>
          <label style={{ display: "inline-block", width: "80px" }}>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "5px" }}
          />
        </div>
        <button
          onClick={addUser}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add User
        </button>
      </div>

      <table
        style={{
          margin: "20px auto",
          borderCollapse: "collapse",
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "white",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "10px", background: "#007bff", color: "white" }}>ID</th>
            <th style={{ border: "1px solid #ddd", padding: "10px", background: "#007bff", color: "white" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "10px", background: "#007bff", color: "white" }}>Email</th>
            <th style={{ border: "1px solid #ddd", padding: "10px", background: "#007bff", color: "white" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((u) => (
            <tr key={u.id}>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{u.id}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{u.name}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{u.email}</td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  display: "flex",
                  gap: "5px",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={() => setEditUser(u)}
                  style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(u.id)}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editUser && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "300px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ margin: 0 }}>Edit User</h2>
              <span
                onClick={() => setEditUser(null)}
                style={{ cursor: "pointer", fontSize: "20px" }}
              >
                ×
              </span>
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>Name</label>
              <input
                type="text"
                value={editUser.name}
                onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                style={{ width: "100%", padding: "5px", marginTop: "5px" }}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>Email</label>
              <input
                type="email"
                value={editUser.email}
                onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                style={{ width: "100%", padding: "5px", marginTop: "5px" }}
              />
            </div>
            <div style={{ textAlign: "right", marginTop: "15px" }}>
              <button
                onClick={updateUser}
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "8px 15px",
                  cursor: "pointer",
                }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDatabase;
