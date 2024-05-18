import React from 'react';
import './NonQm.css';
import nonqmImage from '../image/nonqm.jpg'; // Import the image

const NonQM = () => {
  return (
    <div className="nonqm-container">
      <div className="nonqm-image-container">
        <img src={nonqmImage} alt="Non-QM Home Loans" className="nonqm-image" />
        <div className="overlay-text-nonqm">Non-QM Home Loans</div> {/* Text overlay */}
      </div>
      <h1>About Non-QM Home Loans</h1>
      <p>
        A Non-QM (Non-Qualified Mortgage) loan is designed for borrowers who may not meet the strict criteria of conventional mortgage loans. These loans provide flexibility for those with unique financial situations, such as self-employed individuals, investors, or those with credit issues.
      </p>
      <p>
        At Succedo, we aim to simplify the Non-QM home loan process with our specialized tools and expertise, starting with our Non-QM Loan Qualifier.
      </p>
      <p>
        We'll help you clearly see the differences between loan programs, allowing you to choose the right one for you whether you’re a first-time homebuyer or a seasoned investor.
      </p>

      <h2>The Non-QM Loan Process</h2>
      <ol>
        <li>Complete our straightforward Non-QM Loan Qualifier.</li>
        <li>Receive personalized options based on your unique.</li>

        <li>Compare mortgage interest rates and terms.</li>
        <li>Choose the offer that best fits your needs.</li>
      </ol>
      
      <button className="apply-button">Apply Now</button>
    </div>
  );
};

export default NonQM;
