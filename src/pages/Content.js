import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import contentData from "../Data/contentDataList";

function Content({ searchTerm }) {
  const [filteredContent, setFilteredContent] = useState(contentData);

  useEffect(() => {
    if (searchTerm) {
      const filtered = contentData.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredContent(filtered);
    } else {
      setFilteredContent(contentData); // Reset to original content if search is empty
    }
  }, [searchTerm]);

  return (
    <div>
      <h1>Content</h1>
      <ul>
        {filteredContent.map(item => (
          <li key={item.id}>
            <Link to={`/content/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
