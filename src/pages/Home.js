import React from 'react';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home - IT Knowledge Base</title>
        <meta name="description" content="Welcome to the IT Knowledge Base. Explore resources to troubleshoot your IT issues." />
      </Helmet>
      <h1>Welcome to the IT Knowledge Base</h1>
      <p>Explore our resources to help troubleshoot your IT issues.</p>
    </div>
  );
}

export default Home;
