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

const videoConstraints = {
  width: 1920,
  height: 1080,
  facingMode: "user",
};

export default class Home extends Component {
  webcamRef = React.createRef();
  state = {
    isInstructionsRead: false,
    activeStep: 0,
    uploadedFile: null,
    capturedUserPhoto: null,
    capturedPAN: null,
    mediaStream: null,
    webcamFrozen: false,
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
    const { capturedUserPhoto, webcamFrozen } = this.state;

    const handleCapturePhoto = () => {
      const imageSrc = this.webcamRef.current.getScreenshot();
      this.setState({ capturedUserPhoto: imageSrc, webcamFrozen: true });
    };

    const handleRetakePhoto = () => {
      this.setState({ capturedUserPhoto: null, webcamFrozen: false });
    };

    return (
      <form className="form-container">
        <h1>User capture</h1>
        <div className="webcam-container">
          <Webcam
            ref={this.webcamRef}
            audio={false}
            height={600}
            screenshotFormat="image/jpeg"
            width={700}
            videoConstraints={videoConstraints}
            screenshotQuality={1}
            video={webcamFrozen ? undefined : true}
          />
        </div>
        <div>
          {!capturedUserPhoto && (
            <button onClick={handleCapturePhoto}>Capture Photo</button>
          )}
          {capturedUserPhoto && (
            <>
              <img src={capturedUserPhoto} alt="Captured" />
              <div>
                <button onClick={handleRetakePhoto}>Retake Photo</button>
              </div>
            </>
          )}
        </div>
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

  thirdStep() {
    const { capturedPAN, webcamFrozen } = this.state;

    const handleCapturePhoto = () => {
      const imageSrc = this.webcamRef.current.getScreenshot();
      this.setState({ capturedPAN: imageSrc, webcamFrozen: true });
    };

    const handleRetakePhoto = () => {
      this.setState({ capturedPAN: null, webcamFrozen: false });
    };

    return (
      <form className="form-container">
        <h1>PAN Card Capture</h1>
        <div className="webcam-container">
          <Webcam
            ref={this.webcamRef}
            audio={false}
            height={600}
            screenshotFormat="image/jpeg"
            width={700}
            videoConstraints={videoConstraints}
            screenshotQuality={1}
            video={webcamFrozen ? undefined : true}
          />
        </div>
        <div>
          {!capturedPAN && (
            <button onClick={handleCapturePhoto}>Capture Photo</button>
          )}
          {capturedPAN && (
            <>
              <img src={capturedPAN} alt="Captured" />
              <div>
                <button onClick={handleRetakePhoto}>Retake Photo</button>
              </div>
            </>
          )}
        </div>
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
      case 2:
        return this.thirdStep();
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
                <StepLabel>User authentication</StepLabel>
              </Step>
              <Step style={{ marginRight: "30px" }}>
                <StepLabel>PAN authentication</StepLabel>
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
