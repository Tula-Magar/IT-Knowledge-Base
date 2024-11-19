import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './HomeAndAbout.css';

function About() {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - IT Knowledge Base</title>
        <meta
          name="description"
          content="Learn more about the IT Knowledge Base, its purpose, and the journey behind it."
        />
      </Helmet>

      {/* About Introduction */}
      <section className="about-intro">
        <h1>About Us</h1>
        <p>
          This knowledge base was created to simplify access to information and
          solve technical challenges efficiently.
        </p>
      </section>

      {/* History */}
      <section className="about-history">
        <h2>Our Story</h2>
        <p>
          From humble beginnings, we envisioned a space where users could find
          accurate and comprehensive technical guides. This platform grew from
          that vision into a resource designed for everyone, regardless of
          their expertise.
        </p>
      </section>

      {/* Core Values */}
      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>Providing accessible and accurate information.</li>
          <li>Creating a community where knowledge is freely shared.</li>
          <li>Continuously improving and expanding our content library.</li>
        </ul>
      </section>

      {/* Team */}
      <section className="about-team">
        <h2>Meet the Team</h2>
        <p>
          Behind the scenes, our dedicated contributors work tirelessly to
          ensure this platform meets your needs.
        </p>
        <div className="team-list">
          <div className="team-member">
            <h3>John Doe</h3>
            <p>Founder and Lead Developer</p>
          </div>
          <div className="team-member">
            <h3>Jane Smith</h3>
            <p>Content Specialist</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Join Our Journey</h2>
        <p>
          Become a part of our growing community. Together, we can make
          knowledge accessible to all.
        </p>
        <Link to="/contact" className="btnLearnMore">
          Contact Us
        </Link>
      </section>
    </div>
  );
}

export default About;
