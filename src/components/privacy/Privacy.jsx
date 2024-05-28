import React from "react";
import "./privacy.css";

const Privacy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <div className="privacy-content">
        <p>
          This Privacy Policy governs the manner in which Succedo Mortgage, LLC
          collects, uses, maintains and discloses information collected from
          users (each, a “User”) of the
          https://cleartoclose.mortgage/
          website (“Site”). This privacy policy applies to the Site and all
          products and services offered by Succedo Mortgage, LLC.
        </p>
        <h2>Personal identification information</h2>
        <p>
          We may collect personal identification information from Users in a
          variety of ways, including, but not limited to, when Users visit our
          site, register on the site, subscribe to the newsletter, respond to a
          survey, fill out a form, and in connection with other activities,
          services, features or resources we make available on our Site. Users
          may be asked for, as appropriate, name, email address, phone number.
          Users may, however, visit our Site anonymously. We will collect
          personal identification information from Users only if they
          voluntarily submit such information to us. Users can always refuse
          to supply personally identification information, except that it may
          prevent them from engaging in certain Site related activities.
        </p>
        {/* Other content goes here */}
      </div>
    </div>
  );
};

export default Privacy;
