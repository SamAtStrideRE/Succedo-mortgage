import React from 'react';
import './RateTrends.css';
import revers from "../image/revers.png";
import houses from "../image/houses.jpg";
import dollor from "../image/dollor.jpg";
import ratetrends from "../image/ratetrends.jpg";

const RateTrends = () => {
  return (
    <div className="rate-trends-container">
      <div className="overlayrate"></div>
      <div className="ratetrends">
        <img src={ratetrends} alt="ratetrends" className="ratetrends-image" />
        <div className="overlay-text-rate">Mortgage Rate Trends</div> {/* Text overlay */}
      </div>
     
    
      <p>In the past few years, homebuyers have faced a challenging “double whammy” as both mortgage rates and home prices have shot up. This squeeze on affordability has limited the purchasing power of many aspiring homeowners.</p>
     
      <p>While the broader trends provide valuable context, it’s important to recognize that average mortgage rates are just a benchmark. Borrowers with healthy credit profiles and strong finances often get mortgage rates well below the industry norm.</p>
      <p>So rather than looking only at average rates, check your personalized rates to see what you qualify for.</p>
   
      <h2>Find your lowest mortgage rate. Start here:</h2>
      <div className="rateimage-container">
        <div className="rateimage-box">
          <img src={revers} alt="rateImage 1" />
          <button className="rateimage-button">Refinance Rates</button>
        </div>
        <div className="rateimage-box">
          <img src={houses} alt="rateImage 2" />
          <button className="rateimage-button">Home Purchase Rates</button>
        </div>
        <div className="rateimage-box">
          <img src={dollor} alt="rateImage 3" />
          <button className="rateimage-button">New Rates.</button>
        </div>
      </div>
    </div>
  );
};

export default RateTrends;
