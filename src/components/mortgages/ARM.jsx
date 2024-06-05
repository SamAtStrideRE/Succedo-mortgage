import React from 'react';
import './Arm.css'; // Import your CSS file
import armImage from "../image/loans.jpg"; // Import the image

const ARM = () => {
  return (
    <div>
      <div className="arm-image-container">
        <div className="overlayarm"></div>
        <img src={armImage} alt="va" className="arm-image" />
        <div className="overlay-text-arm">ARM HOME LOANS</div>
      </div>

      <div className="arm-content">
        <h1 className="arm-title main-title">Is an adjustable-rate mortgage (ARM) right for you?</h1>
        <h1 className="arm-title sub-title">Exploring Adjustable-Rate Mortgage Options</h1>
        <p className="arm-paragraph">
          An ARM, or Adjustable Rate Mortgage, offers a dynamic alternative to traditional fixed-rate mortgages. While fixed-rate mortgages maintain a constant interest rate throughout the loan term, an ARM's interest rate adjusts periodically.
        </p>
        <p className="arm-paragraph">
          Why consider an ARM? The initial interest rate is typically lower than that of a fixed-rate mortgage. This makes an ARM an attractive choice if you anticipate owning your home for a limited time, foresee future income growth, or find fixed mortgage rates unreasonably high.
        </p>
        <p className="arm-paragraph">
          Navigating the mortgage landscape can be daunting, but we're here to simplify the journey with our Adjustable-Rate Mortgage Qualifier.
        </p>
        <h2>Our Process:</h2>
        <ol>
          <li>Complete the Adjustable Rate Mortgage Qualifier: Provide us with your details to kickstart the process.</li>
          <li>Receive Tailored Options: Based on your unique circumstances, we'll present you with personalized mortgage options.</li>
          <li>Compare and Choose: Delve into the details of interest rates and terms to select the option that aligns best with your needs.</li>
        </ol>
        <h2>Why Choose an ARM?</h2>
        <p className="arm-paragraph">
          Many homeowners opt for ARMs initially for the lower initial payment, then consider refinancing as the fixed period concludes. When the interest rate becomes adjustable, homeowners have the flexibility to refinance into another ARM, switch to a fixed-rate mortgage, or explore selling the property.
        </p>
        <p className="arm-paragraph">
          Empower yourself to make informed decisions about your mortgage journey. Whether you're a first-time buyer or a seasoned homeowner, we're committed to guiding you every step of the way.
        </p>
        <p className="arm-paragraph">
          Ready to explore your options? Let's embark on this journey together.
        </p>
      </div>
      <a href="https://2584954.my1003app.com/2085367/inquiry"><button className="apply-button">Apply Now</button></a>
    </div>
  );
};

export default ARM;
