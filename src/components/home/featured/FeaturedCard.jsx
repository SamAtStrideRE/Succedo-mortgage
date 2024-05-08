import React from "react";
import { featured } from "../../data/Data";
import "./Featured.css";

const FeaturedCard = () => {
  return (
    <div className='content grid3 mtop'>
      {featured.map((item, index) => (
        <div className='box' key={index}>
          <img src={item.cover} alt='' />
          <h4>{item.name}</h4>
          <label>{item.body}</label>
          <div className="benefits">
            <p>Benefits</p>
            <div className="benefits-list">
              <div className="benefit-item">
                <img src="path/to/your/icon1.png" alt="icon1" />
                <span>Get Your Offer Accepted</span>
              </div>
              <div className="benefit-item">
                <img src="path/to/your/icon2.png" alt="icon2" />
                <span>Know Your Buying Range</span>
              </div>
            </div>
          </div>
          {/* <div className="buttons">
            <button>Button 1</button>
            <button>Button 2</button>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default FeaturedCard;
