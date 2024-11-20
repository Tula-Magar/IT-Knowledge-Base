import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
// Replace with free-brands-svg-icons for social icons

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="footer-logo-image" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
