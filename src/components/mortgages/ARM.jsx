import React from 'react';
import './Arm.css'; // Import your CSS file
import armImage from "../image/loans.jpg"; // Import the image


const ARM = () => {
  return (
    <div>
    <div className="arm-image-container"> {/* Use jumbo-image-container class */}
 <div className="overlayarm"></div> {/* Black gradient overlay */}
   <img src={armImage} alt="va" className="arm-image" /> {/* Use jumbo-image class */}
   <div className="overlay-text-arm"> ARM HOME LOANS</div> {/* Text overlay */}

</div>

      <div className="arm-content">
        <h1 className="arm-title">Is an adjustable-rate mortgage (ARM) right for you?</h1>
        <h1 className="arm-title">Exploring Adjustable-Rate Mortgage Options</h1>
        <p>
          An ARM, or Adjustable Rate Mortgage, offers a dynamic alternative to traditional fixed-rate mortgages. While fixed-rate mortgages maintain a constant interest rate throughout the loan term, an ARM's interest rate adjusts periodically.
        </p>
        <p>
          Why consider an ARM? The initial interest rate is typically lower than that of a fixed-rate mortgage. This makes an ARM an attractive choice if you anticipate owning your home for a limited time, foresee future income growth, or find fixed mortgage rates unreasonably high.
        </p>
        <p>
          Navigating the mortgage landscape can be daunting, but we're here to simplify the journey with our Adjustable-Rate Mortgage Qualifier.
        </p>
        <h2>Our Process:</h2>
        <ol>
          <li>Complete the Adjustable Rate Mortgage Qualifier: Provide us with your details to kickstart the process.</li>
          <li>Receive Tailored Options: Based on your unique circumstances, we'll present you with personalized mortgage options.</li>
          <li>Compare and Choose: Delve into the details of interest rates and terms to select the option that aligns best with your needs.</li>
        </ol>
        <h2>Why Choose an ARM?</h2>
        <p>
          Many homeowners opt for ARMs initially for the lower initial payment, then consider refinancing as the fixed period concludes. When the interest rate becomes adjustable, homeowners have the flexibility to refinance into another ARM, switch to a fixed-rate mortgage, or explore selling the property.
        </p>
        <p>
          Empower yourself to make informed decisions about your mortgage journey. Whether you're a first-time buyer or a seasoned homeowner, we're committed to guiding you every step of the way.
        </p>
        <p>
          Ready to explore your options? Let's embark on this journey together.
        </p>
      </div>
      <button className="apply-button">Apply Now</button>
    </div>
  );
};

export default ARM;
