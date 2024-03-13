import React, { Component } from "react";
import { Button, TextField } from "@mui/material";
import { Stepper, StepLabel, Step } from "@mui/material";
import "./index.css";

export default class Home extends Component {
  firstStep() {
    return (
      <form className="form-container">
        <TextField
          id="aadhar"
          label="Aadhar Number."
          variant="outlined"
          className="input-field-style"
        />
        <TextField
          id="mobile"
          label="Mobile Number"
          variant="outlined"
          className="input-field-style"
        />
        <TextField
          id="pan"
          label="Pan Number"
          variant="outlined"
          className="input-field-style"
        />
      </form>
    );
  }
  secondStep() {
    return (
      <form className="form-container">
        <TextField id="outlined-basic" label="Fuck" variant="outlined" />
      </form>
    );
  }

  showStep(step) {
    switch (step) {
      case 1:
        return this.firstStep();
      case 2:
        return this.secondStep();
    }
  }

  render() {
    return (
      <>
        <div className="home-container">
          <div className="checkpoints">
            <Stepper
              style={{ width: "18%" }}
              activeStep="1"
              orientation="horizontal"
            >
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
            </Stepper>
          </div>
          {this.showStep(1)}
        </div>
      </>
    );
  }
}
