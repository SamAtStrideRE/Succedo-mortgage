import React from "react";
import "./privacy.css";

const Privacy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <div className="privacy-content">
        <p>
          This Privacy Policy governs the manner in which Succedo Mortgage,
          collects, uses, maintains, and discloses information collected from
          users (each, a “User”) of the
          <a href="https://succedo-mortgage.vercel.app/">Succedo Mortgage website</a>
          (the "Site"). This privacy policy applies to the Site and all products
          and services offered by Succedo Mortgage, LLC.
        </p>
        <h2>Personal Identification Information</h2>
        <p>
          We may collect personal identification information from Users in a
          variety of ways, including, but not limited to, when Users visit our
          site, register on the site, subscribe to the newsletter, respond to a
          survey, fill out a form, and in connection with other activities,
          services, features, or resources we make available on our Site. Users
          may be asked for, as appropriate, name, email address, phone number.
          Users may, however, visit our Site anonymously. We will collect
          personal identification information from Users only if they
          voluntarily submit such information to us. Users can always refuse
          to supply personally identification information, except that it may
          prevent them from engaging in certain Site-related activities.
        </p>
        <h2>Non-personal Identification Information</h2>
        <p>
          We may collect non-personal identification information about Users
          whenever they interact with our Site. Non-personal identification
          information may include the browser name, the type of computer, and
          technical information about Users' means of connection to our Site,
          such as the operating system and the Internet service providers
          utilized, and other similar information.
        </p>
        <h2>Web Browser Cookies</h2>
        <p>
          Our Site may use "cookies" to enhance User experience. User’s web
          browser places cookies on their hard drive for record-keeping
          purposes and sometimes to track information about them. User may
          choose to set their web browser to refuse cookies or to alert you
          when cookies are being sent. If they do so, note that some parts of
          the Site may not function properly.
        </p>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default Privacy;
