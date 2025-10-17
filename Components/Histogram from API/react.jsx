import React, { useState, useEffect } from "react";

export default function App() {
  const [birthYears, setBirthYears] = useState([]);
  const [counts, setCounts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const res = await fetch(
          "https://randomuser.me/api/?results=100&inc=dob"
        );
        const data = await res.json();

        // Extract birth years
        const years = data.results.map((user) =>
          new Date(user.dob.date).getFullYear()
        );
        setBirthYears(years);

        // Compute counts
        const histogram = {};
        years.forEach((year) => {
          histogram[year] = (histogram[year] || 0) + 1;
        });
        setCounts(histogram);
      } catch (err) {
        setError(true);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const years = Object.keys(counts).sort((a, b) => a - b);
  const maxCount = Math.max(...Object.values(counts), 1);

  if (loading) return <div style={styles.container}>Loading...</div>;
  if (error) return <div style={styles.container}>Failed to fetch data.</div>;

  return (
    <div style={styles.container}>
      <h2>Birth Year Histogram</h2>
      <div style={styles.histogram}>
        {years.map((year) => (
          <div key={year} style={styles.barContainer}>
            <div
              style={{
                ...styles.bar,
                height: `${(counts[year] / maxCount) * 150}px`,
              }}
              title={`${year}: ${counts[year]}`}
            ></div>
            <span style={styles.label}>{year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "sans-serif",
    maxWidth: "600px",
    margin: "40px auto",
    textAlign: "center",
  },
  histogram: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: "6px",
    marginTop: "20px",
    minHeight: "160px",
    borderBottom: "1px solid #333",
    paddingBottom: "10px",
  },
  barContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bar: {
    width: "20px",
    backgroundColor: "#1976d2",
    borderRadius: "4px 4px 0 0",
  },
  label: {
    marginTop: "4px",
    fontSize: "12px",
  },
};
