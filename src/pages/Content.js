import React from 'react';
import { Link } from 'react-router-dom';
import contentData from "../Data/contentDataList";
function Content() {
  return (
    <div>
      <h1>Content</h1>
      <ul>
        {contentData.map(item => (
          <li key={item.id}>
            <Link to={`/content/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
