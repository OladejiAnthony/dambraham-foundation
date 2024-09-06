import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import "../styles/ContactPage.scss";

const ContactPage = () => {
  return (
    <div className="contact-page container">
      <section className="contact-form-section">
        <h2>Contact Us</h2>
        <ContactForm />
      </section>
      <section className="contact-info-section">
        <h2>Our Information</h2>
        <ContactInfo />
      </section>
    </div>
  );
}

export default ContactPage;
