import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import contentList from "../Data/contentDataList";
import Pagination from "./Pagination";
import { Helmet } from "react-helmet";
import "./HomeAndAbout.css";

function Home({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchTerm("");
    navigate("/content");
  };

  //remove duplicate
  const itemsPerPage = 10; // Number of items per page

  // Filter and remove duplicate categories
  const uniqueCategories = Array.from(
    new Map(contentList.map((item) => [item.title, item])).values()
  );
  const filteredCategories = uniqueCategories.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <datalist id="suggestions">
            <option value="Topic 1" />
            <option value="Topic 2" />
            <option value="Networking" />
          </datalist>
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

      <section
        className="recent-articles"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <h2>Latest Articles</h2>
        <div className="featured-list">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="featured-item">
              <h3>Article Title {i + 1}</h3>
              <p>Snippet or summary of the article...</p>
              <Link to={`/article/${i}`} className="btnLearnMore">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="categories">
        <h2>Browse by Categories</h2>
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search categories..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to the first page on search
          }}
          className="search-bar"
        />
        {/* Pagination */}
        <Pagination
          data={filteredCategories}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </section>

      <section className="media-highlights">
        <h2>Media Highlights</h2>
        <div className="media-gallery">
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder Tutorial 1"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder Tutorial 2"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder Tutorial 3"
          />
        </div>
      </section>

      <section className="statistics">
        <h2>Our Impact</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Articles Published</p>
          </div>
          <div className="stat-item">
            <h3>1M+</h3>
            <p>Searches Performed</p>
          </div>
          <div className="stat-item">
            <h3>50k+</h3>
            <p>Happy Users</p>
          </div>
        </div>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <details>
          <summary>How do I search for articles?</summary>
          <p>
            Use the search bar at the top of the page to find articles by
            keywords.
          </p>
        </details>
        <details>
          <summary>Can I contribute content?</summary>
          <p>Yes! Contact us to learn how you can contribute.</p>
        </details>
      </section>

      <section className="feedback">
        <h2>We Value Your Feedback</h2>
        <p>Help us improve by sharing your suggestions or reporting issues.</p>
        <Link to="/contact" className="btnLearnMore">
          Give Feedback
        </Link>
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
            <p>
              Quickly find relevant articles and solutions for your technical
              needs.
            </p>
          </div>
          <div className="featured-item">
            <h3>Well-Organized</h3>
            <p>
              Structured navigation ensures you never get lost while exploring.
            </p>
          </div>
          <div className="featured-item">
            <h3>Always Expanding</h3>
            <p>
              Content is regularly updated to keep up with changing trends and
              needs.
            </p>
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
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder Tutorial 1"
            />
          </blockquote>
          <blockquote>
            <p>
              "An amazing resource for finding technical solutions quickly and
              effectively."
            </p>
            <cite>- User B</cite>
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder Tutorial 1"
            />
          </blockquote>
        </div>
      </section>

      <section className="community">
        <h2>Our Community</h2>
        <p>Join our growing network of contributors and users.</p>
        <Link to="/community" className="btnLearnMore">
          Explore Community
        </Link>
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
