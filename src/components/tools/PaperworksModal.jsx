// src/components/PaperworksModal.jsx
import React from 'react';
import './PaperworksModal.css';

const PaperworksModal = ({ showModal, closeModal }) => {
  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Paperworks Needed</h2>
        <ul>
          <li>Social Security numbers for both you and any co-borrower</li>
          <li>Copies of checking and savings accounts statements for the past two months</li>
          <li>Evidence of any other assets such as bonds, stocks, or money saved in retirement programs (i.e. 401k or 403b program)</li>
          <li>Recent last two paycheck stubs</li>
          <li>W-2 withholding forms, or income tax returns for the past two years to verify your income and proof of employment</li>
          <li>The name and address of someone who can verify your employment</li>
          <li>Residence history for the past two years</li>
          <li>Subject property current mortgage statement, insurance statement, HOA statement, property tax bills and survey copy</li>
        </ul>
        <button className="close-button" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default PaperworksModal;
