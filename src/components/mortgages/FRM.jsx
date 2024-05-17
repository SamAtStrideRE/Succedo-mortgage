import React from 'react';
import './FRM.css';

const FRM = () => {
  return (
    <div className="frm-container">
      <h1 className="frm-heading">Find Stability and Security with Succedo's Fixed-Rate Mortgage (FRM)</h1>
      
      <p className="frm-advantages">
        Succedo's FRM offers you:
      </p>
      <ul className="frm-advantages-list">
        <li>Stable monthly payments throughout the loan term</li>
        <li>Predictable interest rates for easier budgeting</li>
        <li>Protection from potential rate hikes in the future</li>
        <li>Peace of mind knowing your mortgage payments won't fluctuate</li>
      </ul>
      <p className="frm-cta">
        Ready to secure your dream home? Let Succedo Mortgage guide you through the process and provide you with the stability and security you deserve.
      </p>
      <button className="frm-apply-button">Apply Now</button>
    </div>
  );
};

export default FRM;
