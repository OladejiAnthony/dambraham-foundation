import React from 'react';
import './ContactInfo.scss';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <p><strong>Phone:</strong> +123 456 7890</p>
      <p><strong>Email:</strong> contact@ngo.org</p>
      <p><strong>Address:</strong> 123 NGO Street, City, Country</p>

      <div className="social-media">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
        </ul>
      </div>
    </div>
  );
}

export default ContactInfo;
