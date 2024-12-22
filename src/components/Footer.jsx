// src/components/Footer.jsx
import React from 'react';
import '../style/Footer.scss';

const Footer = () => (
  <footer className="footer">
    <p>© 2024 MyStore. All rights reserved.</p>
    <p>Follow us on:</p>
    <div className="social-links">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        Facebook
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        Twitter
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        Instagram
      </a>
    </div>
  </footer>
);

export default Footer;
