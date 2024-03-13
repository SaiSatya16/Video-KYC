import React, { useState } from 'react';
import './index.css'; // Adjust the file name based on your preference

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    otp: '',
  });

  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGetOtp = () => {
    // Add logic for OTP generation or fetching from a server
    // For now, let's just toggle the visibility of the OTP input
    setShowOtpInput(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add logic for form submission, e.g., sending data to a server
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        {/* Username Input */}
        <div className='input-edit'>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Phone Number Input */}
        <div className='input-edit'>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <div className="phone-input-container">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              pattern="[0-9]*" // Only allow numeric input
              required
            />
            <button type="button" onClick={handleGetOtp} className='getOtpButtonEdit'>
              Get OTP
            </button>
          </div>
        </div>

        {/* OTP Input (Visible only after clicking Get OTP) */}
        {showOtpInput && (
          <div className='input-edit'>
            <label htmlFor="otp">OTP:</label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={formData.otp}
              onChange={handleInputChange}
              maxLength="6"
              required
            />
          </div>
        )}

        {/* Submit button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
