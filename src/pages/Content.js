import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import contentData from "../Data/contentDataList";
import "./ThreePanelLayout.css";

function Content({ searchTerm }) {
  // State for filtering content based on search term
  const [filteredContent, setFilteredContent] = useState(contentData);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  // State for left panel visibility
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false);

  // Ref for detecting clicks outside the left panel
  const leftPanelRef = useRef(null);

  // Filter content when searchTerm changes
  useEffect(() => {
    if (searchTerm) {
      const filtered = contentData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredContent(filtered);
      setCurrentPage(1); // Reset to the first page on search
    } else {
      setFilteredContent(contentData);
    }
  }, [searchTerm]);

  // Calculate the visible items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredContent.slice(indexOfFirstItem, indexOfLastItem);

  // Handle pagination click
  const totalPages = Math.ceil(filteredContent.length / itemsPerPage);
  const changePage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Close the left panel when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        leftPanelRef.current &&
        !leftPanelRef.current.contains(event.target)
      ) {
        setIsLeftPanelOpen(false);
      }
    };

    if (isLeftPanelOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLeftPanelOpen]);

  // Toggle the left panel visibility
  const toggleLeftPanel = (event) => {
    event.stopPropagation();
    setIsLeftPanelOpen((prev) => !prev);
  };

  return (
    <div className="three-panel-layout">
      {/* Hamburger menu button to toggle left panel */}
      <div
        className={`hamburger-menu ${isLeftPanelOpen ? "close" : ""}`}
        onClick={toggleLeftPanel}
      >
        {isLeftPanelOpen ? "✖" : "☰"}
      </div>

      {/* Left panel */}
      <div
        ref={leftPanelRef}
        className={`panel panel-left ${isLeftPanelOpen ? "open" : ""}`}
      >
        <h2>Panel 1</h2>
        <p>This can be additional navigation or static content.</p>
      </div>

      {/* Main content area */}
      <div className="main-content-container">
        <div className="panel panel-center">
          <div style={{ width: "100%" }}>
            <h1 style={{ textAlign: "center" }}>Content</h1>
          </div>
          {currentItems.map((item) => (
            <div key={item.id} style={{ marginBottom: "10px" }}>
              <Link
                to={`/content/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                {item.title}
              </Link>
            </div>
          ))}

          {/* Pagination Controls */}
          <div className="pagination">
            <button
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={currentPage === index + 1 ? "active" : ""}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>

        {/* Right panel */}
        <div className="panel panel-right">
          <h2>Panel 3</h2>
        </div>
      </div>
    </div>
  );
}

export default Content;
