import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function ContentDetail({ searchTerm }) { // Accept searchTerm as a prop
  const { id } = useParams();
  const [content, setContent] = useState(null);
  const [isMarkdown, setIsMarkdown] = useState(true);
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false);
  const leftPanelRef = useRef(null);

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

  // Filter content based on the search term if content is a markdown string
  const filteredContent = isMarkdown && searchTerm
    ? content && content.toLowerCase().includes(searchTerm.toLowerCase())
      ? content
      : '# No matching content found'
    : content;

  // Close the left panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (leftPanelRef.current && !leftPanelRef.current.contains(event.target)) {
        setIsLeftPanelOpen(false);
      }
    };

    if (isLeftPanelOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLeftPanelOpen]);

  const toggleLeftPanel = (event) => {
    event.stopPropagation();
    setIsLeftPanelOpen((prev) => !prev);
  };

  return (
    <div className="three-panel-layout">
      <div
        className={`hamburger-menu ${isLeftPanelOpen ? 'close' : ''}`}
        onClick={toggleLeftPanel}
      >
        {isLeftPanelOpen ? '✖' : '☰'}
      </div>

      <div ref={leftPanelRef} className={`panel panel-left ${isLeftPanelOpen ? 'open' : ''}`}>
        <h2>Panel 1</h2>
        <p>This can be additional navigation or static content.</p>
      </div>

      <div className="main-content-container">
        <div className="panel panel-center">
          <h2>Main Content</h2>
          <div className="content-display">
            {isMarkdown ? (
              <ReactMarkdown>{filteredContent}</ReactMarkdown>
            ) : (
              content && React.createElement(content)
            )}
          </div>
        </div>

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
        </div>
      </div>
    </div>
  );
}

export default ContentDetail;
