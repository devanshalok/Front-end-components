import React, { useEffect, useState, useCallback } from "react";

export default function App() {
  const [jobIds, setJobIds] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const jobsPerPage = 10;

  const formatDate = (unix) => {
    const date = new Date(unix * 1000);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  const fetchJobIds = async () => {
    try {
      const res = await fetch("https://hacker-news.firebaseio.com/v0/jobstories.json");
      const ids = await res.json();
      setJobIds(ids);
    } catch (err) {
      console.error("Error fetching job IDs:", err);
    }
  };

  const fetchJobDetails = async (id) => {
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    return res.json();
  };

  const loadJobs = useCallback(async () => {
    if (loading || jobIds.length === 0) return;
    setLoading(true);
    const start = (page - 1) * jobsPerPage;
    const end = start + jobsPerPage;
    const batch = jobIds.slice(start, end);

    const jobDetails = await Promise.all(batch.map(fetchJobDetails));
    setJobs((prev) => [...prev, ...jobDetails]);
    setLoading(false);
  }, [page, jobIds, loading]);

  useEffect(() => {
    fetchJobIds();
  }, []);

  useEffect(() => {
    if (jobIds.length > 0) loadJobs();
  }, [jobIds, loadJobs]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        !loading
      ) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  useEffect(() => {
    if (page > 1) loadJobs();
  }, [page, loadJobs]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Latest Job Postings from Hacker News</h1>
      <ul style={styles.jobList}>
        {jobs.map((job) => (
          <li key={job.id} style={styles.jobCard}>
            <h2 style={styles.jobTitle}>{job.title || "No title available"}</h2>
            <div style={styles.poster}>Posted by: {job.by || "Anonymous"}</div>
            <div style={styles.date}>Date posted: {formatDate(job.time)}</div>
          </li>
        ))}
      </ul>
      {loading && <div style={styles.loading}>Loading job postings...</div>}
    </div>
  );
}

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
