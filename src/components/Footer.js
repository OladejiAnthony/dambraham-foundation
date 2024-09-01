// src/components/Footer.js
import React from 'react';
import '../styles/Footer.scss';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {year} Dambraham Foundation. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
