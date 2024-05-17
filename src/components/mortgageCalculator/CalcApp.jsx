import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Heading from "../common/Heading";
import Result from "./calcComponents/Result";
import SliderSelect from "./calcComponents/SliderSelect";
import TenureSelect from "./calcComponents/TenureSelect";
import "./CalcApp.css";

function CalcApp() {
  const [data, setData] = useState({
    homeValue: 100000,
    downPayment: 100000 * 0.2,
    loanAmount: 100000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
    // monthlyPayment: 0,
  });

  console.log(data);

  return (
    <div className="CalcApp">
      <br /><br /><br />
      <br />
      <Heading
        className="welcome"
        title="Calculate your mortgage"/>
      <br />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <SliderSelect className="text-select" data={data} setData={setData} />
            <TenureSelect  data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CalcApp;
