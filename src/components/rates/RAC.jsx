import React, { useState } from 'react';
import './RAC.css';

const RAC = () => {
  const [currentLoanAmount, setCurrentLoanAmount] = useState('');
  const [currentInterestRate, setCurrentInterestRate] = useState('');
  const [remainingLoanTerm, setRemainingLoanTerm] = useState('');
  const [newInterestRate, setNewInterestRate] = useState('');
  const [newLoanTerm, setNewLoanTerm] = useState('');
  const [monthlySavings, setMonthlySavings] = useState(null);

  const calculateSavings = () => {
    const currentMonthlyPayment = (currentLoanAmount * (currentInterestRate / 100) / 12) / (1 - Math.pow((1 + (currentInterestRate / 100) / 12), -remainingLoanTerm * 12));
    const newMonthlyPayment = (currentLoanAmount * (newInterestRate / 100) / 12) / (1 - Math.pow((1 + (newInterestRate / 100) / 12), -newLoanTerm * 12));
    const savings = currentMonthlyPayment - newMonthlyPayment;
    setMonthlySavings(savings.toFixed(2));
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">Refinance Analysis Calculator</h1>
      <div className="calculator-content">
        <div className="input-group">
          <label>Current Loan Amount:</label>
          <input
            type="number"
            value={currentLoanAmount}
            onChange={(e) => setCurrentLoanAmount(e.target.value)}
            placeholder="Enter current loan amount"
          />
        </div>
        <div className="input-group">
          <label>Current Interest Rate (%):</label>
          <input
            type="number"
            value={currentInterestRate}
            onChange={(e) => setCurrentInterestRate(e.target.value)}
            placeholder="Enter current interest rate"
          />
        </div>
        <div className="input-group">
          <label>Remaining Loan Term (years):</label>
          <input
            type="number"
            value={remainingLoanTerm}
            onChange={(e) => setRemainingLoanTerm(e.target.value)}
            placeholder="Enter remaining loan term"
          />
        </div>
        <div className="input-group">
          <label>New Interest Rate (%):</label>
          <input
            type="number"
            value={newInterestRate}
            onChange={(e) => setNewInterestRate(e.target.value)}
            placeholder="Enter new interest rate"
          />
        </div>
        <div className="input-group">
          <label>New Loan Term (Years):</label>
          <input
            type="number"
            value={newLoanTerm}
            onChange={(e) => setNewLoanTerm(e.target.value)}
            placeholder="Enter new loan term"
          />
        </div>
        <button className="calculate-button" onClick={calculateSavings}>Calculate Savings</button>
        {monthlySavings !== null && (
          <div className="savings-result">
            <h2>Estimated Monthly Savings: ${monthlySavings}</h2>
          </div>
        )}
      </div>
    </div>
  );
};


export default RAC;
