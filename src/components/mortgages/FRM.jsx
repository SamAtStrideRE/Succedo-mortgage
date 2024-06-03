import React from 'react';
import './FRM.css'; // Import the CSS file
import frmImage from "../image/loans.jpg"; // Import the image

const FRM = () => {
  return (
    <div className="frm-container">
      <div className="frm-image-container">
        <div className="fmoverlay"></div>
        <img src={frmImage} alt="Fixed-Rate Mortgage" className="frm-image" />
        <div className="overlay-text-frm">FIXED RATE MORTGAGE</div>
      </div>
      <h1 className="frm-title">Find Stability and Security with Succedo's Fixed-Rate Mortgage (FRM)</h1>
      <h2 className="frm-subtitle">Succedo's FRM offers you:</h2>
      <ol>
        <li>Stable monthly payments throughout the loan term.</li>
        <li>Predictable interest rates for easier budgeting.</li>
        <li>Protection from potential rate hikes in the future.</li>
        <li>Peace of mind knowing your mortgage payments won't fluctuate.</li>
      </ol>
      <a href="https://2584954.my1003app.com/2085367/inquiry"><button className="apply-button">Apply Now</button></a>
    </div>
  );
};

export default FRM;