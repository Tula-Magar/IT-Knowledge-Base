import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './ThreePanelLayout.css';

function ContentDetail() {
  const { id } = useParams(); // Get the content id from the URL parameters
  const [content, setContent] = useState(null);
  const [isMarkdown, setIsMarkdown] = useState(true); // Default to markdown

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Check if the content is a React component based on naming convention
        if (id.startsWith('js')) {
          // Assume React components are stored in a `components` folder
          const component = await import(`../content/justReact/${id.replace('js-', '')}`);
          setContent(() => component.default);
          setIsMarkdown(false); // It's a React component
        } else {
          // Load the content as Markdown from the `markDown` folder
          const markdown = await import(`../content/markDown/${id}.md`);
          const response = await fetch(markdown.default);
          const text = await response.text();
          setContent(text); // Set Markdown content
          setIsMarkdown(true); // This is markdown content
        }
      } catch (error) {
        console.error('Error loading content:', error);
        setContent('# Content not found');
        setIsMarkdown(true); // Treat the error case as markdown
      }
    };

    loadContent();
  }, [id]);

  return (
    <div className="three-panel-layout">
      <div className="panel panel-left">
        <h2>Panel 1</h2>
        <p>This can be additional navigation or static content.</p>
      </div>

      <div className="panel panel-center">
        <h2>Main Content</h2>
        <div className="content-display">
          {/* Render the content */}
          {isMarkdown ? (
            <ReactMarkdown>{content}</ReactMarkdown>
          ) : (
            content && React.createElement(content) // Correctly render the component
          )}
        </div>
      </div>

      <div className="panel panel-right">
        <h2>Panel 3</h2>
        <p>Another panel for related content or actions.</p>
      </div>
    </div>
  );
}

export default ContentDetail;
