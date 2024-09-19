import React from 'react';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <div>
      <Helmet>
        <title>About Us - IT Knowledge Base</title>
        <meta name="description" content="Learn more about the IT Knowledge Base and its mission to help users resolve IT issues." />
      </Helmet>
      <h1>About Us</h1>
      <p>This IT Knowledge Base provides step-by-step guides to troubleshoot various IT issues.</p>
    </div>
  );
}

export default About;
