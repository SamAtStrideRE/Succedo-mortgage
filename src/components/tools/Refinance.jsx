// Refinance.jsx
import React from 'react';
import './Refinance.css';

const Refinance = () => {
  return (
    <div className="refinance-container">
      <h1>Refinancing Your Home</h1>
      <p>
        Refinancing is often used to lower your interest rate. If rates have dropped since you last financed your home, you may want to consider refinancing. Other common reasons to refinance include paying off a balloon payment, converting an adjustable rate loan to a fixed rate loan, or to extract cash equity in your home (cash out). A few reasons for cashing out include: home improvement, an education fund, and consolidating debt.
      </p>
      <p>
        Another way to convert equity in your home to cash is a "home equity" loan. A "home equity" loan is an alternative to refinancing if your home loan has a very low rate compared to current interest rates or if you have a prepayment penalty on your loan.
      </p>
      <h2>Benefits:</h2>
      <ul>
        <li>Reduce Your Interest Rate</li>
        <li>Cash Out Equity for Home Improvements</li>
        <li>Consolidate Debt</li>
        <li>Lower Monthly Payments</li>
      </ul>
      <h2>To Refinance You'll Need:</h2>
      <ul>
        <li>Current Appraisal and Analysis</li>
        <li>Verification of Assets and Income</li>
      </ul>
      <div className="refinance-buttons">
        <a href="/apply" className="refinance-button">Click Here to Apply Now</a>
        <a href="/paperwork" className="refinance-button">Click Here To See Paperwork Needed</a>
      </div>
    </div>
  );
};

export default Refinance;
