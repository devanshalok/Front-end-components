import React, { useState, useEffect } from "react"; 
// Import React and two hooks: useState for state management, useEffect for running side effects like API calls

export default function App() {
  // Define the main App component

  const [birthYears, setBirthYears] = useState([]);
  // State to store the list of birth years fetched from the API

  const [counts, setCounts] = useState({});
  // State to store a histogram: keys are years, values are number of people born in that year

  const [loading, setLoading] = useState(true);
  // State to indicate if the data is currently being fetched

  const [error, setError] = useState(false);
  // State to indicate if there was an error during data fetching

  useEffect(() => {
    // useEffect runs after the component mounts
    const fetchData = async () => {
      // Define an asynchronous function to fetch data
      try {
        setLoading(true); // Set loading to true at the start
        setError(false); // Reset error state

        const res = await fetch(
          "https://randomuser.me/api/?results=100&inc=dob"
        );
        // Fetch 100 random users, only including date of birth (dob)

        const data = await res.json();
        // Parse the JSON response

        const years = data.results.map((user) =>
          new Date(user.dob.date).getFullYear()
        );
        // Extract the birth year from each user's dob

        setBirthYears(years);
        // Update birthYears state with the array of years

        const histogram = {};
        // Create an empty object to store counts of each year

        years.forEach((year) => {
          histogram[year] = (histogram[year] || 0) + 1;
        });
        // Count the occurrences of each year

        setCounts(histogram);
        // Update counts state with the histogram
      } catch (err) {
        setError(true); // If any error occurs, set error state to true
        console.error(err); // Log the error for debugging
      } finally {
        setLoading(false); // Stop loading whether successful or error
      }
    };

    fetchData(); 
    // Call the fetchData function when component mounts
  }, []);
  // Empty dependency array means this effect runs only once on mount

  const years = Object.keys(counts).sort((a, b) => a - b);
  // Get all unique years from the histogram and sort them ascending

  const maxCount = Math.max(...Object.values(counts), 1);
  // Find the highest count for scaling the histogram bars
  // Default to 1 to avoid division by zero

  if (loading) return <div style={styles.container}>Loading...</div>;
  // Show loading text while fetching

  if (error) return <div style={styles.container}>Failed to fetch data.</div>;
  // Show error message if fetch failed

  return (
    <div style={styles.container}>
      <h2>Birth Year Histogram</h2>

      {/* Make histogram horizontally scrollable */}
      <div style={styles.scrollContainer}>
        <div style={styles.histogram}>
          {years.map((year) => (
            <div key={year} style={styles.barContainer}>
              <div
                style={{
                  ...styles.bar,
                  height: `${(counts[year] / maxCount) * 150}px`,
                  // Scale bar height relative to maxCount
                }}
                title={`${year}: ${counts[year]}`}
                // Show tooltip with year and count
              ></div>
              <span style={styles.label}>{year}</span>
              {/* Display year below each bar */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Inline styles object for styling the components
const styles = {
  container: {
    fontFamily: "sans-serif",
    maxWidth: "600px",
    margin: "40px auto",
    textAlign: "center",
  },
  scrollContainer: {
    overflowX: "auto", // Enable horizontal scroll if histogram is wide
    paddingBottom: "10px", // Space for scrollbar
  },
  histogram: {
    display: "flex",
    alignItems: "flex-end",
    gap: "6px",
    minHeight: "160px",
    borderBottom: "1px solid #333",
    paddingBottom: "10px",
  },
  barContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: "0 0 auto", // Prevent shrinking of bars
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
