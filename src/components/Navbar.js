import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Implement your search logic here
    console.log(searchTerm); // Just for demonstration
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid" style={{ paddingLeft: "10px", marginRight: "10px" }}>
        <Link className="navbar-brand text-light smaller" to="/" onClick={closeNavbar}>MyApp</Link>
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
        <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/" onClick={closeNavbar}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about" onClick={closeNavbar}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact" onClick={closeNavbar}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/content" onClick={closeNavbar}>Content</Link>
            </li>
          </ul>
          {/* Conditionally render the search form only on the /content page */}
          {(location.pathname === '/content' || location.pathname.startsWith('/content/')) && (
            <form className="d-flex" onSubmit={handleSearchSubmit}>
              <input
                type="search"
                className="form-control me-2"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
