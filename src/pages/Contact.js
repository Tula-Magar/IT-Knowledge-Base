import React from "react";
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact Us - IT Knowledge Base</title>
        <meta
          name="description"
          content="Get in touch with the IT Knowledge Base team for any inquiries or support."
        />
      </Helmet>
      <h1>Contact Us</h1>
      <p>If you have questions, reach us at support@yourdomain.com.</p>
    </div>
  );
}

export default Contact;
