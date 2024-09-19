import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';

function ContentDetail() {
  const { id } = useParams(); // Get the content id from the URL parameters
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadContent = async () => {
      try {
        const content = await import(`../content/${id}.md`);
        const response = await fetch(content.default);
        const text = await response.text();
        setContent(marked(text));
      } catch (error) {
        console.error('Error loading content:', error);
        setContent('# Content not found');
      }
    };

    loadContent();
  }, [id]);

  return (
    <div className="content-detail">
      <div className="markdown-content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default ContentDetail;
