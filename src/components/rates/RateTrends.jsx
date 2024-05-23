import React from 'react';
import './RateTrends.css';

const RateTrends = () => {
  const trends = [
    {
      title: "Current Mortgage Rates",
      content: "Mortgage rates have remained relatively low this year, with the average 30-year fixed-rate mortgage hovering around 3.5%. This is an excellent opportunity for both first-time homebuyers and those looking to refinance.",
      imgSrc: "images/mortgage-rates.jpg",
    },
    {
      title: "Real Estate Market Trends",
      content: "The real estate market has seen significant growth, with home prices rising due to increased demand and limited inventory. Urban areas are experiencing a resurgence, while suburban markets continue to thrive.",
      imgSrc: "images/real-estate-trends.jpg",
    },
    {
      title: "Federal Reserve Policies",
      content: "The Federal Reserve's monetary policies, including interest rate adjustments and bond-buying programs, significantly influence mortgage rates. Keeping an eye on Fed announcements can provide insights into future rate movements.",
      imgSrc: "images/federal-reserve.jpg",
    },
    {
      title: "Inflation Impact",
      content: "Inflation trends directly impact mortgage rates. As inflation rises, lenders may increase rates to protect their investments' real returns. Monitoring inflation indicators can help predict rate changes.",
      imgSrc: "images/inflation-impact.jpg",
    },
    {
      title: "Global Economic Factors",
      content: "Global economic events, such as trade policies and geopolitical tensions, can affect mortgage rates. These factors influence investor confidence and the demand for mortgage-backed securities.",
      imgSrc: "images/global-economy.jpg",
    }
  ];

  return (
    <div className="rate-trends-container">
      <h1 className="rate-trends-title">Rate Trends in Mortgages</h1>
      <div className="rate-trends-content">
        {trends.map((trend, index) => (
          <div className={`rate-trends-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <img src={trend.imgSrc} alt={trend.title} className="rate-trends-image"/>
            <div className="rate-trends-text">
              <h2>{trend.title}</h2>
              <p>{trend.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RateTrends;
