// src/components/RefinanceAnalysis.js
import React from 'react';
import './RA.css';

const RA = () => {
  return (
    <div className="ref-analysis">
      <h1 className="ref-title">Refinance Analysis</h1>

      <div className="ref-section ref-current">
        <h2 className="ref-subtitle">Current Loan Details</h2>
        <div className="ref-details">
          <p className="ref-detail-item">Loan Amount: $300,000</p>
          <p className="ref-detail-item">Interest Rate: 4.5%</p>
          <p className="ref-detail-item">Term: 30 years</p>
          <p className="ref-detail-item">Monthly Payment: $1,520</p>
        </div>
      </div>

      <div className="ref-section ref-new">
        <h2 className="ref-subtitle">Refinance Details</h2>
        <div className="ref-details">
          <p className="ref-detail-item">New Loan Amount: $300,000</p>
          <p className="ref-detail-item">New Interest Rate: 3.5%</p>
          <p className="ref-detail-item">New Term: 30 years</p>
          <p className="ref-detail-item">New Monthly Payment: $1,347</p>
        </div>
      </div>

      <div className="ref-section ref-summary">
        <h2 className="ref-subtitle">Comparison Summary</h2>
        <div className="ref-details">
          <p className="ref-detail-item">Total Savings: $62,280</p>
          <p className="ref-detail-item">Monthly Savings: $173</p>
          <p className="ref-detail-item">Break-even Point: 24 months</p>
        </div>
      </div>

      <div className="ref-cta">
        <button className="ref-cta-button">Start Your Refinance</button>
      </div>
    </div>
  );
};

export default RA;
