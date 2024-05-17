import React from 'react';
import './FHA.css'; 

const FHA = () => {
  return (
    <div className="fha-container">
      <h1>Unlock Your Dream Home with Succedo's FHA Home Loans</h1>
      <p>An FHA loan is a mortgage loan insured by the Federal Housing Administration (FHA). This government-backed program aims to make homeownership more accessible by providing lenders with insurance against borrower default.</p>
      <p>At Succedo Mortgage, we're committed to simplifying the FHA home loan process for you. Our FHA Loan Qualifier tool and expert guidance will help you navigate the journey towards owning your dream home.</p>
      
      <h2>The FHA Loan Process with Succedo</h2>
      <ol>
        <li>Complete our user-friendly FHA Loan Qualifier.</li>
        <li>Receive personalized options based on your unique criteria and circumstances.</li>
        <li>Compare mortgage interest rates and terms.</li>
        <li>Choose the offer that best fits your needs.</li>
      </ol>
      <p>Ready to take the next step towards homeownership? Let Succedo Mortgage guide you through the FHA loan process with confidence.</p>
      
      {/* Add the button below */}
      <button className="apply-button">Apply Now</button>
    </div>
  );
};

export default FHA;
