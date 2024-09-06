// src/pages/DonatePage.js
import React, { useState } from 'react';
import "../styles/DonatePage.scss";
import BankDetailsModal from '../components/donate/BankDetailsModal';


const DonatePage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBankDetails = () => {
    setShowModal(true); // Show the modal when the button is clicked
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div className="donate-page">
      <section className="donation-options">
        <h2>Donation Options</h2>
        <p>Choose the way you'd like to contribute:</p>
        <ul>
          <li><strong>One-time Donation:</strong> Make a one-time financial contribution to support our work.</li>
          <li><strong>Monthly Donation:</strong> Become a monthly donor and help us sustain our ongoing projects.</li>
          <li><strong>In-kind Donations:</strong> Contribute goods or services that can help us achieve our mission.</li>
        </ul>
        <button onClick={handleBankDetails} className="donate-button">Donate via Bank Transfer</button>
      </section>

      <section className="transparency">
        <h2>Transparency</h2>
        <p>We value transparency and accountability. Here's a breakdown of how your donations are used:</p>
        <ul>
          <li><strong>Program Expenses:</strong> 70% of funds go directly to programs and services.</li>
          <li><strong>Operational Costs:</strong> 20% supports administrative and operational costs.</li>
          <li><strong>Fundraising:</strong> 10% is allocated to fundraising activities to ensure sustainability.</li>
        </ul>
      </section>

      <section className="donor-recognition">
        <h2>Donor Recognition</h2>
        <p>We extend our gratitude to the following major donors and corporate sponsors:</p>
        <ul>
          <li><strong>John Doe Foundation:</strong> Major financial supporter of our education initiatives.</li>
          <li><strong>ABC Corporation:</strong> In-kind donations of technology equipment.</li>
          <li><strong>Jane Smith:</strong> Monthly donor supporting our outreach programs.</li>
        </ul>
      </section>

      <BankDetailsModal show={showModal} onClose={closeModal} /> {/* Include the modal */}
    </div>
  );
};

export default DonatePage;
