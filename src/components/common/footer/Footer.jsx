import React from 'react';
import { NavLink} from "react-router-dom";
// import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <img src="./images/logo-light.png" alt="CTC Mortgage Logo" className="footer-logo" />
            <p>Proudly Serving all of Texas</p>
          </div>
          <div className="footer-center">
            <p> 626 westwind dr<br />allen tx 75002</p>
            <p>Office: +18328886368</p>
            <p>Email: <a href="mailto:contact@succedomortgage.com" className="footer-email">contact@succedomortgage.com</a></p>
          </div>
          <div className="footer-right">
            {/* <div className="footer-icons">
              <a href="#" className="footer-icon"><FaFacebookF /></a>
              <a href="#" className="footer-icon"><FaTwitter /></a>
              <a href="#" className="footer-icon"><FaLinkedin /></a>
            </div> */}
            <div className="footer-links">
            <NavLink className="footer-link" to="/Privacy">
              Privacy Policy
            </NavLink>
              <a href="https://mortgage.nationwidelicensingsystem.org/SitePages/default.aspx" className="footer-link">NMLS Consumer Access</a>
            </div>
          </div>
        </div>
        <div class="footer-content">
  <div class="footer-nmsimage">
    <img src="./images/NMLS.png" alt="nms" class="footer-nms" />
  </div>
  <div class="footer-ehoimage">
    <img src="./images/eho.png" alt="eho" class="footer-eho" />
  </div>
</div>

        <div className="footer-bottom">
          <p>
            CONSUMERS WISHING TO FILE A COMPLAINT AGAINST A COMPANY OR A RESIDENTIAL MORTGAGE LOAN ORIGINATOR SHOULD COMPLETE AND SEND A COMPLAINT FORM TO THE TEXAS DEPARTMENT OF SAVINGS AND MORTGAGE LENDING, 2601 NORTH LAMAR, SUITE 201, AUSTIN, TEXAS 78705. 
            COMPLAINT FORMS AND INSTRUCTIONS MAY BE OBTAINED FROM THE DEPARTMENT’S WEBSITE AT WWW.SML.TEXAS.GOV. A TOLL-FREE CONSUMER HOTLINE IS AVAILABLE AT 1-877-276-5550. THE DEPARTMENT MAINTAINS A RECOVERY FUND TO MAKE PAYMENTS OF CERTAIN ACTUAL OUT OF POCKET DAMAGES SUSTAINED BY BORROWERS CAUSED BY ACTS OF LICENSED RESIDENTIAL MORTGAGE LOAN ORIGINATORS. 
            A WRITTEN APPLICATION FOR REIMBURSEMENT FROM THE RECOVERY FUND MUST BE FILED WITH AND INVESTIGATED BY THE DEPARTMENT PRIOR TO THE PAYMENT OF A CLAIM. FOR MORE INFORMATION ABOUT THE RECOVERY FUND, PLEASE CONSULT THE DEPARTMENT’S WEBSITE AT WWW.SML.TEXAS.GOV.
          </p>
          <p>&copy; 2023 CTC Mortgage, LLC. NMLS #1080510 Licensed In: Texas</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
