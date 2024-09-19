import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from "./ThemeToggle"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">MyApp</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/content">Content</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
