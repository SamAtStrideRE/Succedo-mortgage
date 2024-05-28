import React from 'react';
import './NonQm.css';
import nonqmImage from '../image/loans.jpg';

const NonQM = () => {
  return (
    <div className="nonqm-container">
      <div className="nonqm-image-container">
        <div className="overlayn"></div>
        <img src={nonqmImage} alt="nonqm" className="nonqm-image" />
        <div className="overlay-text-nonqm">NON-QM HOME LOANS</div>
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
        <li>Receive personalized options based on your unique criteria.</li>
        <li>Compare mortgage interest rates and terms.</li>
        <li>Choose the offer that best fits your needs.</li>
      </ol>

      <h2>Types of Non-QM Loans</h2>
      <ul className="nonqm-types">
        <li><strong>Bank Statement:</strong> Ideal for self-employed individuals who can provide bank statements instead of traditional income documents.</li>
        <li><strong>1099:</strong> Suitable for independent contractors and gig workers who receive 1099 forms.</li>
        <li><strong>DSCR:</strong> Debt Service Coverage Ratio loans are designed for real estate investors focusing on rental income.</li>
        <li><strong>ITIN:</strong> For borrowers with Individual Taxpayer Identification Numbers, often used by foreign nationals residing in the U.S.</li>
      </ul>

      <button className="apply-button">Apply Now</button>
    </div>
  );
};

export default NonQM;
