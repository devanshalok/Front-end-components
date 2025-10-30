import React, { useEffect, useState, useCallback } from "react";

// Main component to fetch and display Hacker News job postings
export default function App() {
  // State to store all job IDs fetched from Hacker News API
  const [jobIds, setJobIds] = useState([]);
  // State to store detailed job information for current loaded jobs
  const [jobs, setJobs] = useState([]);
  // Pagination state to track the current page for infinite scroll
  const [page, setPage] = useState(1);
  // Loading state to show spinner and prevent multiple fetches
  const [loading, setLoading] = useState(false);

  // Number of jobs to load per page
  const jobsPerPage = 10;

  // Helper function to convert UNIX timestamp to readable date and time
  const formatDate = (unix) => {
    const date = new Date(unix * 1000);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  // Fetch all job IDs from Hacker News API
  const fetchJobIds = async () => {
    try {
      const res = await fetch("https://hacker-news.firebaseio.com/v0/jobstories.json");
      const ids = await res.json();
      setJobIds(ids); // Store fetched job IDs in state
    } catch (err) {
      console.error("Error fetching job IDs:", err);
    }
  };

  // Fetch detailed job info by ID
  const fetchJobDetails = async (id) => {
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    return res.json(); // Return JSON object with job details
  };

  // Function to load a batch of jobs based on current page
  // useCallback ensures the function identity is stable for useEffect dependencies
  const loadJobs = useCallback(async () => {
    if (loading || jobIds.length === 0) return; // Prevent duplicate calls
    setLoading(true); // Set loading state before fetching

    // Calculate slice of job IDs for current page
    const start = (page - 1) * jobsPerPage;
    const end = start + jobsPerPage;
    const batch = jobIds.slice(start, end);

    // Fetch details for each job ID in parallel
    const jobDetails = await Promise.all(batch.map(fetchJobDetails));
    setJobs((prev) => [...prev, ...jobDetails]); // Append new jobs to existing state
    setLoading(false); // Reset loading state
  }, [page, jobIds, loading]);

  // Initial fetch of job IDs on component mount
  useEffect(() => {
    fetchJobIds();
  }, []);

  // Load first batch of jobs when job IDs are available
  useEffect(() => {
    if (jobIds.length > 0) loadJobs();
  }, [jobIds, loadJobs]);

  // Infinite scroll: load next page when user scrolls near bottom
  useEffect(() => {
    const handleScroll = () => {
      // Check if user is near the bottom of the page
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        !loading
      ) {
        setPage((prev) => prev + 1); // Increment page to trigger next batch load
      }
    };

    window.addEventListener("scroll", handleScroll); // Attach scroll listener
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener on unmount
  }, [loading]);

  // Load jobs whenever the page changes (after infinite scroll)
  useEffect(() => {
    if (page > 1) loadJobs();
  }, [page, loadJobs]);

  // JSX rendering
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Latest Job Postings from Hacker News</h1>
      <ul style={styles.jobList}>
        {jobs.map((job) => (
          <li key={job.id} style={styles.jobCard}>
            {/* Display job title or fallback */}
            <h2 style={styles.jobTitle}>{job.title || "No title available"}</h2>
            {/* Display job poster */}
            <div style={styles.poster}>Posted by: {job.by || "Anonymous"}</div>
            {/* Display formatted date */}
            <div style={styles.date}>Date posted: {formatDate(job.time)}</div>
          </li>
        ))}
      </ul>
      {/* Show loading message when fetching jobs */}
      {loading && <div style={styles.loading}>Loading job postings...</div>}
    </div>
  );
}

// Inline styles for layout and design
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    margin: 0,
    padding: "20px",
  },
  title: {
    marginBottom: "20px",
  },
  jobList: {
    width: "80%",
    maxWidth: "900px",
    padding: 0,
    listStyleType: "none",
  },
  jobCard: {
    backgroundColor: "#fff",
    padding: "20px",
    marginBottom: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  jobTitle: {
    margin: "0 0 10px",
    fontSize: "18px",
  },
  poster: {
    fontSize: "14px",
    color: "#555",
  },
  date: {
    fontSize: "12px",
    color: "#888",
    marginTop: "5px",
  },
  loading: {
    fontSize: "18px",
    marginTop: "20px",
  },
};
