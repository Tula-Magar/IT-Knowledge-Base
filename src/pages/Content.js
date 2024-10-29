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
      <h1 style={{textAlign: "center", padding: "20px"}}>Content</h1>
      {filteredContent.map((item) => (
    <div key={item.id} style={{ marginBottom: "10px"}}>
        <Link to={`/content/${item.id}`} style={{ textDecoration: "none" }}>
            {item.title}
        </Link>
    </div>
))}

    </div>
  );
}

export default Content;
