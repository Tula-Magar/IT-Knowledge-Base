import React from 'react';
import { Link } from 'react-router-dom';

const contentList = [
  { id: 'network-troubleshooting', title: 'Network Troubleshooting' },
  { id: 'password-reset', title: 'Password Reset' },
  // Add more content items here
];

function Content() {
  return (
    <div>
      <h1>Content</h1>
      <ul>
        {contentList.map(item => (
          <li key={item.id}>
            <Link to={`/content/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
