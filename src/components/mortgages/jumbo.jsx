import React from 'react';
import './jumbo.css';
import jumboImage from '../image/jumbo.jpg'; // Import the image

const Jumbo = () => {
  return (
    <div className="jumbo-container">
      <div className="jumbo-image-container">
        <img src={jumboImage} alt="Jumbo Home Loans" className="jumbo-image" />
        <div className="overlay-text-jumbo">Federal Housing Administration </div> {/* Text overlay */}
      </div>
      <h1>About Jumbo Home Loans</h1>
      <p>
        A jumbo loan is a loan that exceeds the conforming loan limits as set by Fannie Mae and Freddie Mac. As of 2022, the limit is $647,200 for most of the US, apart from Alaska, Hawaii, Guam, and the U.S. Virgin Islands, where the limit is $970,800. Rates tend to be a bit higher on jumbo loans because lenders generally have a higher risk.
      </p>
      <p>
        We're here to make the jumbo home loan process easier, with tools and knowledge that will help guide you along the way, starting with our Jumbo Loan Qualifier.
      </p>
      <p>
        We'll help you clearly see differences between loan programs, allowing you to choose the right one for you whether you’re a first-time home buyer or a repeat buyer.
      </p>

      <h2>The Jumbo Loan Process</h2>
      <ol>
        <li>Complete our simple Jumbo Loan Qualifier.</li>
        <li>Receive options based on your unique criteria and scenario.</li>
        <li>Compare mortgage interest rates and terms.</li>
        <li>Choose the offer that best fits your needs.</li>
      </ol>
      
      <button className="apply-button">Apply Now</button>
    </div>
  );
};

export default Jumbo;
