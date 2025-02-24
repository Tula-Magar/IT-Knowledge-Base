import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Pagination({ data, itemsPerPage, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate items to show on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    const items = document.querySelectorAll(".animated-category");

    console.log("Pagination Updated: New Items Detected:", items.length); // Debugging

    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("show");
      }, index * 100);
    });
  }, [currentItems]);

  return (
    <div>
      {/* Render current items */}
      <div className="category-list">
        {currentItems.map((item, index) => (
          <Link
            key={item.id}
            to={`/category/${item.id}`}
            className="category-item animated-category"
            id={`category-${index}`}
            style={{ textDecoration: "none" }}
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="pagination-controls">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  data: PropTypes.array.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
