import React from 'react';
import './Refinance.css';
import BoxWithContactInfo from '../elements/BoxWithContactInfo';

const Refinance = () => {
  return (
    <div className="refinance-container">
      
      <div className="content">
        {/* <BoxWithContactInfo /> */}
        <div className="text">
          <h1>Refinancing Your Home</h1>
          <p>
            Refinancing is often used to lower your interest rate. If rates have dropped since you last financed your home, you may want to consider refinancing. Other common reasons to refinance include paying off a balloon payment, converting an adjustable rate loan to a fixed rate loan, or to extract cash equity in your home (cash out). A few reasons for cashing out include: home improvement, an education fund, and consolidating debt.
          </p>
        </div>
    
      </div>
      <div className="content"> <img src="" alt=""></img>
        <div className="text">
          <p>
            Another way to convert equity in your home to cash is a "home equity" loan. A "home equity" loan is an alternative to refinancing if your home loan has a very low rate compared to current interest rates or if you have a prepayment penalty on your loan.
          </p>
        </div>
 
      </div>
      <div className="content">
        <div className="text">
          <h2>Benefits:</h2>
          <ul>
            <li>Reduce Your Interest Rate</li>
            <li>Cash Out Equity for Home Improvements</li>
            <li>Consolidate Debt</li>
            <li>Lower Monthly Payments</li>
          </ul>
        </div>
        
      </div>
      <div className="content">
        <div className="text">
          <h2>To Refinance You'll Need:</h2>
          <ul>
            <li>Current Appraisal and Analysis</li>
            <li>Verification of Assets and Income</li>
          </ul>
        </div>
    
      </div>
      <div className="refinance-buttons">
        <a href="/apply" className="refinance-button">Apply Now</a>
        <a href="/paperwork" className="refinance-button">See Paperworks Needed</a>
      </div>
    </div>
  );
};

export default Refinance;
