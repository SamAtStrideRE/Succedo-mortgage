import React from "react";
import Heading from "../../common/Heading";
import "./Featured.css";

const Featured = () => {
  return (
    <>
          <section className="featured background">
        <Heading
          className="welcome"
          title="Flexible Home Financing Options For Every Buyer"
          subtitle="At Succedo, we simplify the home buying process with clear terms and flexible, affordable mortgage rates. Our mission is not just to help you find a house but to make a valuable investment in a place you can call home."
        />
        <br />
        <br />
        <div className="featuredcontainer">
          <div className="featuredcard">
          <img src="/images/featuredpurchase.png" alt="Happy Family" className="feature-image" />
            <h3>Home Purchase</h3>
            <p>
              When you are <span style={{ color: "red" }}>buying a property</span>, you’re in it for the long haul. We know this is the biggest financial investment of your life. Let us help you make it easier with personalized care, and financial advice from home financing experts.
            </p>
            <a href="CalcApp" className="featuredapply-now">Apply Now →</a>
          </div>
          <div className="featuredcard">
          <img src="/images/featuredrefinance.png" alt="Happy Family" className="feature-image" />
            <h3>Home Refinancing</h3>
            <p>
              <span style={{ color: "red" }}>Mortgage refinancing</span> can be an effective way to lower your monthly payments, reduce the term of your loan, or cash out equity to pay for expenses like home improvements or college tuition.
            </p>
            <a href="/Refinance" className="featuredapply-now">Apply Now →</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
