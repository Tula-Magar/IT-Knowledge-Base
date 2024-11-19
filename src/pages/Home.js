import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './HomeAndAbout.css';

function Home({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchTerm('');
    navigate('/content');
  };

  return (
    <div className="home-container">
      <Helmet>
        <title>Home - IT Knowledge Base</title>
        <meta
          name="description"
          content="Welcome to the IT Knowledge Base. Explore resources to troubleshoot your IT issues."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Our Knowledge Base</h1>
        <p>Your one-stop solution to discover and explore valuable content.</p>
        <form className="hero-search" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search for content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <div className="hero-buttons">
          <Link to="/content" className="btnLearnMore">
            Browse Content
          </Link>
          <Link to="/about" className="btnLearnMore">
            Learn More
          </Link>
        </div>
      </section>

      {/* Dynamic Content Highlights */}
      <section className="featured-content">
        <h2>Explore Popular Topics</h2>
        <div className="featured-list">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="featured-item">
              <h3>Topic {i + 1}</h3>
              <p>
                A brief summary of Topic {i + 1}. Discover insights and key
                takeaways.
              </p>
              <Link to={`/content/${i}`} className="btnLearnMore">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section class="features">
      <h2>Why Use This Knowledge Base?</h2>
      <div className="featured-list">
        <div className="featured-item">
          <h3>Accessible Information</h3>
          <p>Quickly find relevant articles and solutions for your technical needs.</p>
        </div>
        <div className="featured-item">
          <h3>Well-Organized</h3>
          <p>Structured navigation ensures you never get lost while exploring.</p>
        </div>
        <div className="featured-item">
          <h3>Always Expanding</h3>
          <p>Content is regularly updated to keep up with changing trends and needs.</p>
        </div>
      </div>
    </section>


      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-list">
          <blockquote>
            <p>
              "I resolved my issue in minutes. This knowledge base is a
              lifesaver!"
            </p>
            <cite>- User A</cite>
          </blockquote>
          <blockquote>
            <p>
              "An amazing resource for finding technical solutions quickly and
              effectively."
            </p>
            <cite>- User B</cite>
          </blockquote>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="cta">
        <h2>Ready to Explore?</h2>
        <p>
          Dive into our resources and discover how this knowledge base can help
          you.
        </p>
        <Link to="/content" className="btnLearnMore">
          Start Now
        </Link>
      </section>
    </div>
  );
}

export default Home;
