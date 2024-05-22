import React from 'react';
import './FHA.css'; // Import your CSS file
import loansImage from "../image/loans.jpg"; // Import the image

const FHA = () => {
  return (
    <div className="fha-container">
      <div className="fha-image-container"> {/* Use the same class name */}
        <img src={loansImage} alt="Loans" className="fha-image" /> {/* Use the same class name for the image */}
        <div className="overlayh"></div> {/* Use the same class name for the overlay */}
        <div className="overlay-text-fha">Federal Housing Administration loan</div> {/* Use the same class name for the text overlay */}
      </div>
      <h1 className="fha-heading">Unlock Your Dream Home with Succedo's FHA Home Loans</h1>
      <p className="fha-intro">
        An FHA loan is a mortgage loan insured by the Federal Housing Administration (FHA). This government-backed program aims to make homeownership more accessible by providing lenders with insurance against borrower default.
      </p>
      <p className="fha-intro">
        At Succedo Mortgage, we're committed to simplifying the FHA home loan process for you. Our FHA Loan Qualifier tool and expert guidance will help you navigate the journey towards owning your dream home.
      </p>
      <h2 className="fha-benefit">The FHA Loan Process with Succedo</h2>
      <ol className="fha-benefit-list">
        <li>Complete our user-friendly FHA Loan Qualifier.</li>
        <li>Receive personalized options based on your unique criteria and circumstances.</li>
        <li>Compare mortgage interest rates and terms.</li>
        <li>Choose the offer that best fits your needs.</li>
      </ol>
      <p className="fha-cta">Ready to take the next step towards homeownership? Let Succedo Mortgage guide you through the FHA loan process with confidence.</p>
      <button className="apply-button">Apply Now</button>
    </div>
  );
};

export default FHA;
