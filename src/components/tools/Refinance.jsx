import React, { useState } from "react";
import "./Refinance.css";
import PaperworksModal from "./PaperworksModal";
import refinanceImage from "../image/refinance.jpg"; // Import the image

const Refinance = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="refinanceimage-container">
      {" "}
      {/* Use container class */}
      <div className="overlayrefinance"></div> {/* Black gradient overlay */}
      <img src={refinanceImage} alt="va" className="refinance-image" />{" "}
      {/* Use image class */}
      <div className="overlay-text-refinance"> Refinancing Your Home</div>{" "}
      {/* Text overlay */}
      <div className="refinance-container">
        <div className="text">
          <p>
            Refinancing is often used to lower your interest rate. If rates have
            dropped since you last financed your home, you may want to consider
            refinancing. Other common reasons to refinance include paying off a
            balloon payment, converting an adjustable rate loan to a fixed rate
            loan, or to extract cash equity in your home (cash out). A few
            reasons for cashing out include: home improvement, an education
            fund, and consolidating debt.
          </p>
          <p>
            Another way to convert equity in your home to cash is a "home
            equity" loan. A "home equity" loan is an alternative to refinancing
            if your home loan has a very low rate compared to current interest
            rates or if you have a prepayment penalty on your loan.
          </p>
        </div>
        <div className="text">
          <h2>Benefits:</h2>
          <ul>
            <li>Reduce Your Interest Rate</li>
            <li>Cash Out Equity for Home Improvements</li>
            <li>Consolidate Debt</li>
            <li>Lower Monthly Payments</li>
          </ul>
        </div>
        <div className="text">
          <h2>To Refinance You'll Need:</h2>
          <ul>
            <li>Current Appraisal and Analysis</li>
            <li>Verification of Assets and Income</li>
          </ul>
        </div>
        <div className="refinance-buttons">
          <a href="https://2584954.my1003app.com/2085367/inquiry">
            <button className="apply-button">Apply Now</button>
          </a>
          <button onClick={openModal} className="refinance-button">
            See Paperworks Needed
          </button>
        </div>
        <PaperworksModal showModal={showModal} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default Refinance;
