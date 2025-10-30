import React, { useState } from "react";

const DataTable = () => {
  // Initial static data for the table
  const initialData = [
    { name: "John Doe", age: 28, city: "New York" },
    { name: "Anna Smith", age: 22, city: "London" },
    { name: "Peter Jones", age: 35, city: "Paris" },
    { name: "Maria Garcia", age: 29, city: "Madrid" },
    { name: "Michael Brown", age: 42, city: "Chicago" },
  ];

  // State to hold the table data (sortable and filterable)
  const [data, setData] = useState(initialData);
  // State for search input
  const [searchTerm, setSearchTerm] = useState("");
  // State for current sort configuration: which column and direction
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  // Function to sort table based on column key and direction
  const handleSort = (key, direction) => {
    // Clone and sort the data
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    // Update sort config state and the sorted data
    setSortConfig({ key, direction });
    setData(sortedData);
  };

  // Filter the data based on search input (case-insensitive)
  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.age.toString().includes(searchTerm)
  );

  return (
    <div style={styles.container}>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search..."
        style={styles.input}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            {/* Render headers dynamically */}
            {["name", "age", "city"].map((key) => (
              <th key={key} style={styles.th}>
                <div style={styles.headerWrapper}>
                  <span style={{ textTransform: "capitalize" }}>{key}</span>

                  {/* Sorting arrows */}
                  <div style={styles.arrows}>
                    <span
                      style={{
                        ...styles.arrow,
                        color:
                          sortConfig.key === key && sortConfig.direction === "asc"
                            ? "black"
                            : "#bbb", // Active arrow is black, inactive is gray
                      }}
                      onClick={() => handleSort(key, "asc")}
                    >
                      ▲
                    </span>
                    <span
                      style={{
                        ...styles.arrow,
                        color:
                          sortConfig.key === key && sortConfig.direction === "desc"
                            ? "black"
                            : "#bbb",
                      }}
                      onClick={() => handleSort(key, "desc")}
                    >
                      ▼
                    </span>
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {/* Render filtered data or fallback "No results" */}
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr key={index} style={styles.tr}>
                <td style={styles.td}>{item.name}</td>
                <td style={styles.td}>{item.age}</td>
                <td style={styles.td}>{item.city}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={styles.noData}>
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Inline styling
const styles = {
  container: {
    fontFamily: "sans-serif",
    margin: 20,
  },
  input: {
    marginBottom: 10,
    padding: 8,
    border: "1px solid #ccc",
    width: 200,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    padding: 8,
    border: "1px solid #ddd",
    backgroundColor: "#f4f4f4",
  },
  td: {
    padding: 8,
    border: "1px solid #ddd",
  },
  tr: {
    transition: "background 0.2s", // Smooth hover effect if added
  },
  noData: {
    textAlign: "center",
    padding: 10,
    color: "#777",
  },
  headerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrows: {
    display: "flex",
    flexDirection: "column",
    fontSize: "10px",
    marginLeft: 5,
    cursor: "pointer",
  },
  arrow: {
    lineHeight: "10px",
  },
};

export default DataTable;
