// FAR.jsx
import React from 'react';
import './FAR.css';

const FAR = () => {
  const points = [
    {
      title: "Credit Score",
      content: "Your credit score is a crucial factor in determining the interest rate on your mortgage. Higher credit scores generally result in lower interest rates, as they indicate a lower risk to lenders.",
      imgSrc: "/images/credit-score.jpg", // Updated image path
    },
    {
      title: "Loan Type",
      content: "Different types of loans have different interest rates. Fixed-rate loans typically have higher initial rates compared to adjustable-rate mortgages, but they provide stability over the loan term.",
      imgSrc: "/images/loan-type.jpg", // Updated image path
    },
    {
      title: "Loan Term",
      content: "The length of the loan term also affects the interest rate. Shorter terms usually come with lower interest rates, but higher monthly payments, while longer terms have higher rates but lower monthly payments.",
      imgSrc: "/images/loan-term.jpg", // Updated image path
    },
    {
      title: "Down Payment",
      content: "A larger down payment can lower your interest rate. Lenders see a larger down payment as a sign of your commitment and ability to repay the loan, which reduces their risk.",
      imgSrc: "/images/down-payment.jpg", // Updated image path
    },
    {
      title: "Market Conditions",
      content: "The overall economic environment, including inflation rates and the Federal Reserve's monetary policy, can influence mortgage interest rates. Economic growth and inflation tend to drive rates higher.",
      imgSrc: "/images/market-conditions.jpg", // Updated image path
    }
  ];

  return (
    <div className="far-container">
      <h1 className="far-title">Factors Affecting Rates</h1>
      <div className="far-content">
        {points.map((point, index) => (
          <div className={`far-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <img src={point.imgSrc} alt={point.title} className="far-image"/>
            <div className="far-text">
              <h2>{point.title}</h2>
              <p>{point.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAR;
