import React from "react";
import "./awards.css";

const Awards = () => {
  return (
    <section className="awards-section">
      <div className="awards-container">
        <div className="awards-blue-container"></div>
        <div className="awards-image-container">
          <img src="/images/award.jpg" alt="Happy Family" className="awards-image" />
        </div>
        <div className="awards-content">
          <h1>Need Mortgage Loan Help? We've Got You Covered!</h1>
          <ul>
            <li>Confusing loan estimate forms? No problem! We'll help you understand them.</li>
            <li>Struggling to find the best savings and negotiate with lenders? We'll guide you.</li>
            <li>Burdened by fees and charges? We'll help you avoid them and keep costs low.</li>
            <li>Been unable to get a loan anywhere? We can work around your situation.</li>
            <li>Uncertain how to negotiate with the seller and ask for contributions? We can help.</li>
            <li>Need to find rebates and discounts? We've got the connections to help you save.</li>
          </ul>
          <a href="/register" className="awards-apply-now">Apply Now For The Best Deals</a>
        </div>
      </div>
    </section>
  );
};

export default Awards;
