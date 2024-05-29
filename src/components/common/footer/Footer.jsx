import React from 'react';
import { NavLink } from "react-router-dom";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <img src="./images/logo-light.png" alt="Succedo Mortgage Logo" className="footer-logo" />
            <p>Proudly Serving all of Texas and Colorado</p>
          </div>
          <div className="footer-center">
            <p>626 Westwind Dr.<br />Allen, TX, 75002</p>
            <p>Phone: (832) 888-6368</p>
            <p>Email: <a href="mailto:contact@succedomortgage.com" className="footer-email">contact@succedomortgage.com</a></p>
          </div>
          <div className="footer-right">
            <div className="footer-links">
              <NavLink className="footer-link" to="/Privacy">Privacy Policy</NavLink>
              <a href="https://www.nmlsconsumeraccess.org/" className="footer-link">NMLS Consumer Access</a>
            </div>
          </div>
        </div>
        <div className="footer-images">
          <div className="footer-image-container">
            <img src="./images/NMLS.png" alt="NMLS" className="footer-image" />
            <img src="./images/eho.png" alt="EHO" className="footer-image" />
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            CONSUMERS WISHING TO FILE A COMPLAINT AGAINST A COMPANY OR A RESIDENTIAL MORTGAGE LOAN ORIGINATOR SHOULD COMPLETE AND SEND A COMPLAINT FORM TO THE TEXAS DEPARTMENT OF SAVINGS AND MORTGAGE LENDING, 2601 NORTH LAMAR, SUITE 201, AUSTIN, TEXAS 78705. 
            COMPLAINT FORMS AND INSTRUCTIONS MAY BE OBTAINED FROM THE DEPARTMENT’S WEBSITE AT WWW.SML.TEXAS.GOV. THE DEPARTMENT MAINTAINS A RECOVERY FUND TO MAKE PAYMENTS OF CERTAIN ACTUAL OUT OF POCKET DAMAGES SUSTAINED BY BORROWERS CAUSED BY ACTS OF LICENSED RESIDENTIAL MORTGAGE LOAN ORIGINATORS. 
            A WRITTEN APPLICATION FOR REIMBURSEMENT FROM THE RECOVERY FUND MUST BE FILED WITH AND INVESTIGATED BY THE DEPARTMENT PRIOR TO THE PAYMENT OF A CLAIM. FOR MORE INFORMATION ABOUT THE RECOVERY FUND, PLEASE CONSULT THE DEPARTMENT’S WEBSITE AT WWW.SML.TEXAS.GOV.
          </p>
          <p>&copy; 2024 Succedo Mortgage, LLC NMLS: 2584954 Licensed In: Texas and Colorado</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
