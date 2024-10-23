import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './ThreePanelLayout.css';

function ContentDetail() {
  const { id } = useParams(); // Get the content id from the URL parameters
  const [content, setContent] = useState(null);
  const [isMarkdown, setIsMarkdown] = useState(true); // Default to markdown
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false); // State for left panel

  useEffect(() => {
    const loadContent = async () => {
      try {
        if (id.startsWith('js')) {
          const component = await import(`../content/justReact/${id.replace('js-', '')}`);
          setContent(() => component.default);
          setIsMarkdown(false);
        } else {
          const markdown = await import(`../content/markDown/${id}.md`);
          const response = await fetch(markdown.default);
          const text = await response.text();
          setContent(text);
          setIsMarkdown(true);
        }
      } catch (error) {
        console.error('Error loading content:', error);
        setContent('# Content not found');
        setIsMarkdown(true);
      }
    };

    loadContent();
  }, [id]);

  return (
    <div className="three-panel-layout">
      {/* Hamburger menu */}
      <div className="hamburger-menu" onClick={() => setIsLeftPanelOpen(!isLeftPanelOpen)}>
        &#9776; {/* Hamburger icon */}
      </div>

      {/* Left panel, toggles with hamburger menu */}
      <div className={`panel panel-left ${isLeftPanelOpen ? 'open' : ''}`}>
        <h2>Panel 1</h2>
        <p>This can be additional navigation or static content.</p>
        <p>This can be additional navigation or static content.</p>
        <p>This can be additional navigation or static content.</p>
        <p>This can be additional navigation or static content.</p>
        <p>This can be additional navigation or static content.</p>
     
      </div>

      {/* Main Content and Right Panel Container */}
      <div className="main-content-container">
        {/* Main Content */}
        <div className="panel panel-center">
          <h2>Main Content</h2>
          <div className="content-display">
            {isMarkdown ? (
              <ReactMarkdown>{content}</ReactMarkdown>
            ) : (
              content && React.createElement(content)
            )}
          </div>
        </div>

        {/* Right panel */}
        <div className="panel panel-right">
          <h2>Panel 3</h2>
          <p>Another panel for related content or actions.</p>
          <p>Another panel for related content or actions.</p>
          <p>Another panel for related content or actions.</p>
          <p>Another panel for related content or actions.</p>
          <p>Another panel for related content or actions.</p>
          <p>Another panel for related content or actions.</p>
          <p>Another panel for related content or actions.</p>
          <p>Another panel for related content or actions.</p>
          <p>Another panel for related content or actions.</p>
          <p>Another panel for related content or actions.</p>
          <p>Another panel for related content or actions.</p>
          <p>Another panel for related content or actions.</p>
          <p>Another panel for related content or actions.</p>
          <p>Another panel for related content or actions.</p>
          <p>Another panel for related content or actions.</p>
          <p>Another panel for related content or actions.</p>
          <p>Another panel for related content or actions.</p>
          <p>Another panel for related content or actions.</p>
          <p>Another panel for related content or actions.</p>
          {/* Add more content as needed */}
        </div>
      </div>
    </div>
  );
}

export default ContentDetail;
