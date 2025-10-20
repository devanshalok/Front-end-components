import React, { useState } from "react";

const PaginatedAddressList = () => {
  const addresses = [
    '123 Main St, New York, NY 10001',
    '456 Elm St, Los Angeles, CA 90001',
    '789 Maple Ave, Chicago, IL 60601',
    '101 Pine St, Houston, TX 77001',
    '202 Oak St, Phoenix, AZ 85001',
    '303 Cedar St, Philadelphia, PA 19101',
    '404 Birch St, San Antonio, TX 78201',
    '505 Spruce St, San Diego, CA 92101',
    '606 Willow St, Dallas, TX 75201',
    '707 Ash St, San Jose, CA 95101',
    '808 Walnut St, Austin, TX 73301',
    '909 Chestnut St, Jacksonville, FL 32099',
    '1010 Redwood St, San Francisco, CA 94101',
    '1111 Palm St, Columbus, OH 43201',
    '1212 Cypress St, Charlotte, NC 28201'
  ];

  const addressesPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(addresses.length / addressesPerPage);
  const startIndex = (currentPage - 1) * addressesPerPage;
  const currentAddresses = addresses.slice(startIndex, startIndex + addressesPerPage);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 20 }}>
      <h2>Shipping Addresses</h2>
      <table
        style={{
          maxWidth: 600,
          margin: "0 auto",
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: 8, textAlign: "left", backgroundColor: "#f4f4f4" }}>No.</th>
            <th style={{ border: "1px solid #ddd", padding: 8, textAlign: "left", backgroundColor: "#f4f4f4" }}>Address</th>
          </tr>
        </thead>
        <tbody>
          {currentAddresses.map((address, index) => (
            <tr key={startIndex + index}>
              <td style={{ border: "1px solid #ddd", padding: 8 }}>{startIndex + index + 1}</td>
              <td style={{ border: "1px solid #ddd", padding: 8 }}>{address}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          style={{
            padding: "8px 12px",
            margin: "0 5px",
            border: "1px solid #ddd",
            backgroundColor: currentPage === 1 ? "#e0e0e0" : "#f9f9f9",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
            borderRadius: 4,
          }}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          style={{
            padding: "8px 12px",
            margin: "0 5px",
            border: "1px solid #ddd",
            backgroundColor: currentPage === totalPages ? "#e0e0e0" : "#f9f9f9",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            borderRadius: 4,
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedAddressList;
