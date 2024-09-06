// src/components/BankDetailsModal.js
import React from 'react';
import './BankDetailsModal.scss';

const BankDetailsModal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h3>Bank Transfer Details</h3>
        <p><strong>Account Name:</strong> Your Name</p>
        <p><strong>Bank:</strong> Access Bank</p>
        <p><strong>Account Number:</strong> 1234567890</p>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

export default BankDetailsModal;

