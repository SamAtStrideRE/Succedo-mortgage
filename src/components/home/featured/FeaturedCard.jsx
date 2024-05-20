import React from "react";
import { featured } from "../../data/Data";
import { FaCheckCircle } from 'react-icons/fa';
import "./Featured.css";

const FeaturedCard = () => {
  return (
    <div className='content grid3 mtop'>
      {featured.map((item, index) => (
        <div className='box' key={index}>
          <img src={item.cover} alt='' />
          <h4>{item.name}</h4>
          <label>{item.body}</label>
          {/* Additional data */}
          <div className="benefits">
            <div className="benefits-item">
              <FaCheckCircle className="benefits-icon" />
              <span>Get Your Offer Accepted</span>
            </div>
            <div className="benefits-item">
              <FaCheckCircle className="benefits-icon" />
              <span>Know Your Buying Range</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCard;
