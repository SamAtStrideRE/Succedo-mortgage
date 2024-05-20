// BoxWithContactInfo.jsx
import React from 'react';
import './BoxWithContactInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const BoxWithContactInfo = () => {
  return (
    <div className="contact-box">
      <button className="apply-now-button">Apply Now</button>
      <div className="contact-info">
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          <span>(123) 456-7890</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <span>email@example.com</span>
        </div>
      </div>
    </div>
  );
};

export default BoxWithContactInfo;
