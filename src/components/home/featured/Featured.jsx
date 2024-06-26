import React from "react";
// import Heading from "../../common/Heading";
import "./Featured.css";

const Featured = () => {
 
  
  
  return (
    <section className="featured">
        <br></br> 
      <div className="featured-container">
        <div className="featured-card">
          
          <img
            src="/images/featuredpurchase.png"
            alt="Happy Family"
            className="feature-image"
          />
          <h3>Home Purchase</h3>
          <p>
            When you are <span className="highlight">buying a property</span>,
            you’re in it for the long haul. We know this is the biggest
            financial investment of your life. Let us help you make it easier
            with personalized care, and financial advice from home financing
            experts.
          </p>
          <a href="CalcApp" className="featured-apply-now">
            Apply Now →
          </a>
        </div>
        <div className="featured-card">
          <img
            src="/images/featuredrefinance.png"
            alt="Happy Family"
            className="feature-image"
          />
          <h3>Home Refinancing</h3>
          <p>
            <span className="highlight">Mortgage refinancing</span> can be an
            effective way to lower your monthly payments, reduce the term of
            your loan, or cash out equity to pay for expenses like home
            improvements or college tuition.
          </p>
          <a href="/Refinance" className="featured-apply-now">
            Apply Now →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Featured;
