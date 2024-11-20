import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Navbar.css";

function Navbar({ onSearch, resetSearch }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const closeNavbarAndResetSearch = () => {
    resetSearch(); // Reset the search term
    setIsNavbarOpen(false); // Close the Navbar
    window.scrollTo(0, 0); // Scroll to top
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm); // Pass the search term to the parent (App.js)
    setSearchTerm(""); // Clear the search bar
    navigate("/content"); // Navigate to the content page
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
    window.scrollTo(0, 0);
  };

  const isContentPages =
    location.pathname === "/content" ||
    location.pathname.startsWith("/content/");

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <Link
          className={`navbar-brand text-light smaller ${
            isContentPages ? "centered-app" : ""
          }`}
          to="/"
        >
          MyApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isNavbarOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                to="/"
                onClick={closeNavbar}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                to="/about"
                onClick={closeNavbar}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                to="/contact"
                onClick={closeNavbar}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                to="/content"
                onClick={() => {
                  closeNavbarAndResetSearch();
                  closeNavbar();
                }}
              >
                Content
              </Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            <input
              type="search"
              className="form-control me-2"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
