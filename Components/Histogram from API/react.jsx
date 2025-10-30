import React, { useState, useEffect } from "react";

export default function App() {
  // State to store the list of birth years from API
  const [birthYears, setBirthYears] = useState([]);

  // State to store counts for each birth year
  const [counts, setCounts] = useState({});

  // Loading and error states for API fetch
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Async function to fetch 100 random users and get birth years
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true while fetching
        setError(false);  // Reset error state

        const res = await fetch(
          "https://randomuser.me/api/?results=100&inc=dob"
        ); // Fetch 100 users with only DOB included
        const data = await res.json();

        // Extract birth years from DOB
        const years = data.results.map((user) =>
          new Date(user.dob.date).getFullYear()
        );
        setBirthYears(years); // Save birth years in state

        // Compute histogram (counts per year)
        const histogram = {};
        years.forEach((year) => {
          histogram[year] = (histogram[year] || 0) + 1;
        });
        setCounts(histogram); // Save counts in state
      } catch (err) {
        setError(true); // Set error state if API fails
        console.error(err);
      } finally {
        setLoading(false); // Stop loading after fetch completes
      }
    };

    fetchData(); // Call the async function once on mount
  }, []); // Empty dependency array = run once on component mount

  // Get sorted list of years for display
  const years = Object.keys(counts).sort((a, b) => a - b);

  // Get maximum count to scale the bar heights proportionally
  const maxCount = Math.max(...Object.values(counts), 1);

  // Render loading or error states
  if (loading) return <div style={styles.container}>Loading...</div>;
  if (error) return <div style={styles.container}>Failed to fetch data.</div>;

  return (
    <div style={styles.container}>
      <h2>Birth Year Histogram</h2>

      {/* Histogram container */}
      <div style={styles.histogram}>
        {years.map((year) => (
          <div key={year} style={styles.barContainer}>
            {/* Each bar's height is proportional to count */}
            <div
              style={{
                ...styles.bar,
                height: `${(counts[year] / maxCount) * 150}px`,
              }}
              title={`${year}: ${counts[year]}`} // Tooltip shows count
            ></div>
            <span style={styles.label}>{year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// CSS-in-JS styles
const styles = {
  container: {
    fontFamily: "sans-serif",
    maxWidth: "600px",
    margin: "40px auto",
    textAlign: "center",
  },
  histogram: {
    display: "flex",
    alignItems: "flex-end", // Bars grow from bottom
    justifyContent: "center",
    gap: "6px",
    marginTop: "20px",
    minHeight: "160px",
    borderBottom: "1px solid #333", // X-axis line
    paddingBottom: "10px",
  },
  barContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bar: {
    width: "20px",
    backgroundColor: "#1976d2", // Blue bars
    borderRadius: "4px 4px 0 0", // Rounded top corners
  },
  label: {
    marginTop: "4px",
    fontSize: "12px", // Year label under each bar
  },
};
