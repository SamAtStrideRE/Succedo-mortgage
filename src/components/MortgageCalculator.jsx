import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { TextField, Slider, Select, MenuItem, Button, Collapse, Typography } from '@mui/material';
import './MortgageCalculator.css';

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(66000);
  const [loanLength, setLoanLength] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [insurance, setInsurance] = useState(0);
  const [tax, setTax] = useState(0);
  const [hoa, setHoa] = useState(0);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const calculatePrincipalAndInterest = () => {
    const principal = homePrice - downPayment;
    const monthlyRate = (interestRate / 100) / 12;
    const numberOfPayments = loanLength * 12;
    return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
  };

  const principalAndInterest = calculatePrincipalAndInterest();
  const totalMonthlyPayment = principalAndInterest + insurance + tax + hoa;

  const data = {
    labels: ['Principal & Interest', "Homeowner's Insurance", 'Property Tax', 'HOA Fees'],
    datasets: [
      {
        data: [principalAndInterest, insurance, tax, hoa],
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384', '#4BC0C0'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384', '#4BC0C0'],
      },
    ],
  };

  return (
    <div className="mortgage-calculator">
      <h1>Monthly Payment Mortgage Calculator</h1>
      <h4 className="subtitle1">Use this calculator to see monthly payments for different loan amounts.</h4>
      <div className="calculator-container">
        <div className="input-section">
          <TextField
            label="Home price"
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Down payment"
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            fullWidth
            margin="normal"
          />
          <Slider
            value={downPayment}
            onChange={(e, newValue) => setDownPayment(newValue)}
            max={homePrice}
            aria-labelledby="down-payment-slider"
          />
          <Select
            value={loanLength}
            onChange={(e) => setLoanLength(e.target.value)}
            fullWidth
            margin="normal"
          >
            <MenuItem value={30}>30 Years</MenuItem>
            <MenuItem value={20}>20 Years</MenuItem>
            <MenuItem value={15}>15 Years</MenuItem>
            <MenuItem value={10}>10 Years</MenuItem>
          </Select>
          <TextField
            label="Interest rate"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            fullWidth
            margin="normal"
          />
          <Button
            variant="outlined"
            onClick={() => setShowAdvanced(!showAdvanced)}
            fullWidth
          >
            {showAdvanced ? 'Hide advanced options' : 'Show advanced options'}
          </Button>
          <Collapse in={showAdvanced}>
            <TextField
              label="Homeowner's insurance"
              type="number"
              value={insurance}
              onChange={(e) => setInsurance(Number(e.target.value))}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Property tax"
              type="number"
              value={tax}
              onChange={(e) => setTax(Number(e.target.value))}
              fullWidth
              margin="normal"
            />
            <TextField
              label="HOA fees"
              type="number"
              value={hoa}
              onChange={(e) => setHoa(Number(e.target.value))}
              fullWidth
              margin="normal"
            />
          </Collapse>
        </div>
        <div className="output-section">
          <h5 v>${totalMonthlyPayment.toFixed(2)} Your estimated monthly payment</h5>
          <div className="payment-breakdown">
            <Doughnut data={data} />
            <div className="payment-details">
              <p >How is my monthly payment calculated?</p>
              <ul>
                <li>Principal & Interest: ${principalAndInterest.toFixed(2)}</li>
                <li>Homeowner's Insurance: ${insurance.toFixed(2)}</li>
                <li>Property Tax: ${tax.toFixed(2)}</li>
                <li>HOA Fees: ${hoa.toFixed(2)}</li>
              </ul>
              <div className="total-payment">
                <span>Total monthly payment=</span>
                <h6>${totalMonthlyPayment.toFixed(2)}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
