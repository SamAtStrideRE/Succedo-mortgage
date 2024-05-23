// src/components/RefinanceAnalysis.jsx
import React from 'react';
import './RefinanceAnalysis.css';

const RefinanceAnalysis = () => {
  return (
    <div className="refinance-analysis">
      <h1 className="title">Refinance Analysis</h1>

      <div className="section current-loan">
        <h2>Current Loan Details</h2>
        <div className="details">
          <p>Loan Amount: $300,000</p>
          <p>Interest Rate: 4.5%</p>
          <p>Term: 30 years</p>
          <p>Monthly Payment: $1,520</p>
        </div>
      </div>

      <div className="section refinance-loan">
        <h2>Refinance Details</h2>
        <div className="details">
          <p>New Loan Amount: $300,000</p>
          <p>New Interest Rate: 3.5%</p>
          <p>New Term: 30 years</p>
          <p>New Monthly Payment: $1,347</p>
        </div>
      </div>

      <div className="section comparison-summary">
        <h2>Comparison Summary</h2>
        <div className="details">
          <p>Total Savings: $62,280</p>
          <p>Monthly Savings: $173</p>
          <p>Break-even Point: 24 months</p>
        </div>
      </div>

      <div className="cta">
        <button className="cta-button">Start Your Refinance</button>
      </div>
    </div>
  );
};

export default RefinanceAnalysis;
