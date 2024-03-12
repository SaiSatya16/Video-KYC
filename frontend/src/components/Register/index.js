import React, { Component } from 'react';
import './index.css'; // Adjust the file name based on your preference

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        username: '',
        phoneNumber: '',
        otp: '',
      },
    };
  }

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
    console.log('Form submitted:', this.state.formData);
    // Add logic for form submission, e.g., sending data to a server
  };

  render() {
    return (
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit} className="register-form">
          {/* Username Input */}
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.formData.username}
            onChange={this.handleInputChange}
            required
          />

          {/* Phone Number Input */}
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={this.state.formData.phoneNumber}
            onChange={this.handleInputChange}
            pattern="[0-9]{10}" // Assuming 10-digit phone number
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
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
