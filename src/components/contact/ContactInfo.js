import React from "react";
import "./ContactInfo.scss";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <p>
        <strong>Phone:</strong> +234 803 359 3808{" "}
      </p>
      <p>
        {/* <strong>Phone:</strong> */}
        +234 810 291 6664
      </p>
      <p>
        <strong>Email:</strong> dambrahamfoundation@gmail.com
      </p>
      <p>
        <strong>Address:</strong> Apata Ajele, Eyenkorin, Ilorin, Kwara State, Nigeria
      </p>

      <div className="social-media">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="https://facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com">Twitter</a>
          </li>
          <li>
            <a href="https://instagram.com">Instagram</a>
          </li>
          <li>
            <a href="https://tiktok.com">Tiktok</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
