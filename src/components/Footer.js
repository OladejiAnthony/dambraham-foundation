// src/components/Footer.js
import React from 'react';
import '../styles/Footer.scss';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {year} Dambraham Foundation. All rights reserved.</p>
      <button className='tdwonder'>Designed by Tdwonder Tech</button>
      {/* <p>gmail: tdwonderTech@gmail.com</p> */}
    </footer>
  );
}

export default Footer;
