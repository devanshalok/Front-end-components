import React, { useState, useEffect } from "react";

const PaginatedAddresses = () => {
  const addressesPerPage = 5;
  const [addresses, setAddresses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=15");
        const data = await response.json();
        const fetchedAddresses = data.results.map((user) => {
          const { street, city, state, postcode } = user.location;
          return `${street.number} ${street.name}, ${city}, ${state}, ${postcode}`;
        });
        setAddresses(fetchedAddresses);
      } catch (error) {
        console.error("Error fetching addresses:", error);
      }
    };
    fetchAddresses();
  }, []);

  const totalPages = Math.ceil(addresses.length / addressesPerPage);
  const startIndex = (currentPage - 1) * addressesPerPage;
  const currentAddresses = addresses.slice(startIndex, startIndex + addressesPerPage);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 20 }}>
      <h1 style={{ fontSize: 24 }}>Paginated Addresses</h1>
      <ul style={{ padding: 0, listStyleType: "none" }}>
        {currentAddresses.map((address, idx) => (
          <li
            key={startIndex + idx}
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
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
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
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
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
