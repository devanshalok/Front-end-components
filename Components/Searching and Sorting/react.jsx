import React, { useState } from "react";

const DataTable = () => {
  const initialData = [
    { name: "John Doe", age: 28, city: "New York" },
    { name: "Anna Smith", age: 22, city: "London" },
    { name: "Peter Jones", age: 35, city: "Paris" },
    { name: "Maria Garcia", age: 29, city: "Madrid" },
    { name: "Michael Brown", age: 42, city: "Chicago" },
  ];

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const handleSort = (key, direction) => {
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setData(sortedData);
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.age.toString().includes(searchTerm)
  );

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search..."
        style={styles.input}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table style={styles.table}>
        <thead>
          <tr>
            {["name", "age", "city"].map((key) => (
              <th key={key} style={styles.th}>
                <div style={styles.headerWrapper}>
                  <span style={{ textTransform: "capitalize" }}>{key}</span>
                  <div style={styles.arrows}>
                    <span
                      style={{
                        ...styles.arrow,
                        color:
                          sortConfig.key === key && sortConfig.direction === "asc"
                            ? "black"
                            : "#bbb",
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
    transition: "background 0.2s",
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
