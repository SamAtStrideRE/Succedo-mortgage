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
        
        </div>
      ))}
    </div>
  );
};

export default FeaturedCard;
