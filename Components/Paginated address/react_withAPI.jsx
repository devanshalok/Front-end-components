import React, { useState, useEffect } from "react";

const PaginatedAddresses = () => {
  const addressesPerPage = 5; // Number of addresses to display per page
  const [addresses, setAddresses] = useState([]); // State to store fetched addresses
  const [currentPage, setCurrentPage] = useState(1); // State to track current page

  // useEffect to fetch addresses once when the component mounts
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        // Fetch 15 random users from the API
        const response = await fetch("https://randomuser.me/api/?results=15");
        const data = await response.json();

        // Map API results to readable address strings
        const fetchedAddresses = data.results.map((user) => {
          const { street, city, state, postcode } = user.location;
          return `${street.number} ${street.name}, ${city}, ${state}, ${postcode}`;
        });

        // Update state with fetched addresses
        setAddresses(fetchedAddresses);
      } catch (error) {
        console.error("Error fetching addresses:", error);
      }
    };

    fetchAddresses();
  }, []); // Empty dependency array ensures this runs only once

  // Calculate total number of pages
  const totalPages = Math.ceil(addresses.length / addressesPerPage);
  // Calculate starting index for current page slice
  const startIndex = (currentPage - 1) * addressesPerPage;
  // Slice addresses array to get only addresses for the current page
  const currentAddresses = addresses.slice(startIndex, startIndex + addressesPerPage);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 20 }}>
      <h1 style={{ fontSize: 24 }}>Paginated Addresses</h1>

      {/* Display addresses as a list */}
      <ul style={{ padding: 0, listStyleType: "none" }}>
        {currentAddresses.map((address, idx) => (
          <li
            key={startIndex + idx} // Unique key based on overall index
            style={{
              marginBottom: 15,
              padding: 10,
              backgroundColor: "#f4f4f4",
              borderRadius: 5,
            }}
          >
            {address}
          </li>
        ))}
      </ul>

      {/* Pagination buttons */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
        {/* Previous button */}
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} // Decrement page but not below 1
          disabled={currentPage === 1} // Disable button if on first page
          style={{
            padding: "10px 20px",
            fontSize: 16,
            backgroundColor: currentPage === 1 ? "#ccc" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: 5,
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
          }}
        >
          Previous
        </button>

        {/* Next button */}
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} // Increment page but not above totalPages
          disabled={currentPage === totalPages} // Disable button if on last page
          style={{
            padding: "10px 20px",
            fontSize: 16,
            backgroundColor: currentPage === totalPages ? "#ccc" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: 5,
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedAddresses;
