import React from 'react';
import './VA.css'; // Import the CSS file
import vaImage from "../image/loans.jpg"; // Import the image
const VA = () => {
  return (
    <div>
         <div className="va-image-container"> {/* Use jumbo-image-container class */}
      <div className="overlayv"></div> {/* Black gradient overlay */}
        <img src={vaImage} alt="va" className="va-image" /> {/* Use jumbo-image class */}
        <div className="overlay-text-va"> VA HOME LOANS</div> {/* Text overlay */}
      </div>
      <h1>About VA Home Loans</h1>
      <p>
        A VA loan is a mortgage loan in the United States guaranteed by the U.S. Department of Veterans Affairs (VA). The loan may be issued by qualified lenders. The VA loan was designed to offer long-term financing to eligible American veterans or their surviving spouses (provided they do not remarry).
      </p>
      <p>
        We’re here to make the VA home loan process easier, with tools and knowledge that will help guide you along the way, starting with our VA Loan Qualifier.
      </p>
      <p>
        We’ll help you clearly see differences between loan programs, allowing you to choose the right one for you whether you’re a first-time home buyer or a repeat buyer.
      </p>

      <h2>The VA Loan Process</h2>
      <ol>
        <li>Complete our simple VA Loan Qualifier.</li>
        <li>Receive options based on your unique criteria and scenario.</li>
        <li>Compare mortgage interest rates and terms.</li>
        <li>Choose the offer that best fits your needs.</li>
      </ol>
      
      <button className="apply-button">Apply Now</button>
    </div>
  );
};

export default VA;
