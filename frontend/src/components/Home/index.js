import React, { Component } from "react";
import { Button, TextField, Modal, Box } from "@mui/material";
import { Stepper, StepLabel, Step } from "@mui/material";
import "./index.css";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Webcam from "react-webcam";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default class Home extends Component {
  state = {
    isInstructionsRead: false,
    activeStep: 0,
    uploadedFile: null,
    capturedPhoto: null,
    mediaStream: null,
  };

  webcamRef = React.createRef();

  capturePhoto = () => {
    const imageSrc = this.webcamRef.current.getScreenshot();
    // Use the captured photo as needed (e.g., display it, upload it, etc.)
    console.log(imageSrc);
  };

  handleInstructionsClose = () => {
    this.setState({ isInstructionsRead: true });
  };

  handleNext = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleFileUpload = (event) => {
    const file = event.target.files[0]; // Assuming only one file is uploaded
    if (file) {
      // File uploaded
      this.setState({ uploadedFile: file }); // Store the uploaded file in state
      console.log("File uploaded:", file.name);
    } else {
      // No file uploaded
      this.setState({ uploadedFile: null }); // Clear uploaded file state
      console.log("No file uploaded");
    }
  };

  instructions() {
    return (
      <div className="kyc-container">
        <h1>Instructions to Video KYC:</h1>
        <div className="instruction-list">
          <ol>
            <li>Please Ensure the signal strength</li>
            <li>
              Keep the following handy:
              <ul>
                <li>Original PAN Card</li>
                <li>Blank Paper and black pen</li>
              </ul>
            </li>
            <li>Look into the camera during verification</li>
            <li>
              While capturing your photo
              <ul>
                <li>Be in a proper attire</li>
                <li>White background with proper lighting</li>
                <li>Keep your eyes open</li>
              </ul>
            </li>
            <li>Don't share or show your Aadhaar details</li>
            <li>No 3rd person presence allowed</li>
          </ol>

          <Button
            variant="contained"
            onClick={this.handleInstructionsClose}
            style={{ width: "130px" }}
          >
            Got It!
          </Button>
        </div>
      </div>
    );
  }

  firstStep() {
    const { uploadedFile } = this.state;
    return (
      <form className="form-container">
        <TextField
          id="aadhar"
          label="Aadhar Number"
          variant="outlined"
          className="input-field-style"
          style={{ marginBottom: "10px" }}
        />
        <TextField
          id="mobile"
          label="Mobile Number"
          variant="outlined"
          className="input-field-style"
          style={{ marginBottom: "10px" }}
        />
        <TextField
          id="pan"
          label="Pan Number"
          variant="outlined"
          className="input-field-style"
          style={{ marginBottom: "10px" }}
        />
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload Income certificate
          <VisuallyHiddenInput type="file" onChange={this.handleFileUpload} />
        </Button>
        {uploadedFile && <p>Uploaded file: {uploadedFile.name}</p>}
        <Button
          variant="contained"
          onClick={this.handleNext}
          style={{ width: "130px", marginTop: "10px" }}
        >
          Save & Next
        </Button>
        <p>
          Make sure that you have given correct details.{" "}
          <strong>You can't come back</strong> when you press save & next
        </p>
      </form>
    );
  }

  secondStep() {
    return (
      <form className="form-container">
        <Webcam ref={this.webcamRef} />
        <button onClick={this.capturePhoto}>Capture Photo</button>
        {this.state.capturedPhoto && (
          <div>
            <h2>Captured Photo:</h2>
            <img src={this.state.capturedPhoto} alt="Captured" />
          </div>
        )}
        <Button
          variant="contained"
          onClick={this.handleNext}
          style={{ width: "130px", marginTop: "10px" }}
        >
          Save & Next
        </Button>
      </form>
    );
  }

  showStep(step) {
    switch (step) {
      case 0:
        return this.firstStep();
      case 1:
        return this.secondStep();
      default:
        return null;
    }
  }

  render() {
    const { isInstructionsRead, activeStep } = this.state;
    return (
      <>
        <div className="home-container">
          <div className="checkpoints">
            <Stepper
              style={{
                width: "30%",
                marginBottom: "30px",
              }}
              activeStep={activeStep}
              orientation="vertical"
            >
              <Step style={{ marginRight: "30px" }}>
                <StepLabel>Personal Details</StepLabel>
              </Step>
              <Step style={{ marginRight: "30px" }}>
                <StepLabel>step2</StepLabel>
              </Step>
              <Step style={{ marginRight: "30px" }}>
                <StepLabel>step3</StepLabel>
              </Step>
              <Step style={{ marginRight: "30px" }}>
                <StepLabel>step4</StepLabel>
              </Step>
              <Step style={{ marginRight: "30px" }}>
                <StepLabel>step5</StepLabel>
              </Step>
            </Stepper>
          </div>
          <div className="kyc-container">
            {isInstructionsRead
              ? this.showStep(activeStep)
              : this.instructions()}
          </div>
        </div>
      </>
    );
  }
}
