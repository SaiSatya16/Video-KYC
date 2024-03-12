import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css"; // Adjust the file name based on your preference
import RegisterForm from "../Register";

class LoginForm extends Component {
  state = {
    formData: {
      mobileNumber: "",
      otp: "",
    },
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted:", this.state.formData);
    // Add logic for login authentication, e.g., sending data to a server
  };

  render() {
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit} className="login-form">
          {/* Mobile Number Input */}
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={this.state.formData.mobileNumber}
            onChange={this.handleInputChange}
            pattern="[0-9]{10}" // Assuming 10-digit mobile number
            required
          />

          {/* OTP Input */}
          <label htmlFor="otp">OTP:</label>
          <input
            type="text"
            id="otp"
            name="otp"
            value={this.state.formData.otp}
            onChange={this.handleInputChange}
            maxLength="6"
            required
          />

          {/* Submit button */}
          <button type="submit">Login</button>
        </form>

        {/* Link to RegisterForm */}
        <Link to="/register">New user? Register</Link>
      </div>
    );
  }
}

export default LoginForm;
