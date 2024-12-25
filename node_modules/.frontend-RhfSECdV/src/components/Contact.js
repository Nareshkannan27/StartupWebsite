// src/components/Contact.js

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        For inquiries and support, please reach out to us at:
      </p>
      <ul>
        <li>Email: support@projectassistance.com</li>
        <li>Phone: (+91) 123-4567-890</li>
      </ul>
      {/* Add more contact details as needed */}
    </div>
  );
};

export default Contact;
