import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import contentData from "../Data/contentDataList";
import "./ThreePanelLayout.css";

function Content({ searchTerm }) {
  // State for filtering content based on search term
  const [filteredContent, setFilteredContent] = useState(contentData);

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
    } else {
      setFilteredContent(contentData); // Reset to original content if search is empty
    }
  }, [searchTerm]);

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
          {filteredContent.map((item) => (
            <div key={item.id} style={{ marginBottom: "10px" }}>
              <Link
                to={`/content/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                {item.title}
              </Link>
            </div>
          ))}
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
