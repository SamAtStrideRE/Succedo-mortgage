import React, { useState } from 'react';
import './QuickQuoteForm.css';
import quotemage from "../image/quickquote.jpg"; // Import the image

const QuickQuoteForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    coBorrower: false,
    eveningPhone: '',
    workPhone: '',
    contactPreference: '',
    creditRating: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="quick-quoteimage-container"> {/* Use container class */}
      <div className="overlayquick-quote"></div> {/* Black gradient overlay */}
      <img src={quotemage} alt="va" className="quick-quote-image" /> {/* Use image class */}
      <div className="overlay-text-quick-quote">Quick Quote Form</div> {/* Text overlay */}
    
      <form className="quick-quote-form" onSubmit={handleSubmit}>
       
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Is there a Co-Borrower?</label>
        <div>
          <label>
            <input
              type="radio"
              name="coBorrower"
              value="yes"
              checked={formData.coBorrower === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="coBorrower"
              value="no"
              checked={formData.coBorrower === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="eveningPhone">Evening Phone:</label>
        <input
          type="tel"
          id="eveningPhone"
          name="eveningPhone"
          value={formData.eveningPhone}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="workPhone">Work Phone:</label>
        <input
          type="tel"
          id="workPhone"
          name="workPhone"
          value={formData.workPhone}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="contactPreference">How Would You Prefer to be Contacted?</label>
        <select
          id="contactPreference"
          name="contactPreference"
          value={formData.contactPreference}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="creditRating">My / Our Credit is:</label>
        <select
          id="creditRating"
          name="creditRating"
          value={formData.creditRating}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="fair">Fair</option>
          <option value="poor">Poor</option>
        </select>
      </div>
      <button className='qqButton' type="submit">Submit</button>
    </form>
    </div>
  );
};

export default QuickQuoteForm;