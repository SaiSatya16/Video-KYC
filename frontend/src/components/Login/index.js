import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css"; // Adjust the file name based on your preference
import RegisterForm from "../Register";

const landingSectionContent = {
  EN: {
    login: 'Login',
    mobileNumber:
      'Mobile Number',
    notRegistered:'New user?Register',
    otp:"OTP:",
  },
  HI: {
    login: 'लॉग इन',
    mobileNumber:
      'मोबाइल नंबर',
    notRegistered:'नया उपयोगकर्ता? पंजीकरण करें',
    otp:'ओ.टी.पी :',
  },
  TE: {
    login: 'ప్రవేశించండి',
    mobileNumber:
      'మొబైల్ నంబర్',
    notRegistered:'కొత్త యూజర్?రిజిస్టర్ చేసుకోండి',
    otp:'OTP:',
  },
}

const LoginForm = props => {
  const getLandingSectionData = activeLanguage => {
    switch (activeLanguage) {
      case 'EN':
        return landingSectionContent.EN
      case 'HI':
        return landingSectionContent.HI
      case 'TE':
        return landingSectionContent.TE
      default:
        return null
    }
  }
  const {activeLanguage} = props
  const {login,mobileNumber,notRegistered,otp} = getLandingSectionData(activeLanguage)
  const [formData, setFormData] = useState({
    mobileNumber: "",
    otp: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);
    // Add logic for login authentication, e.g., sending data to a server
  };

  return (
    <div className="login-container">
      <h2>{login}</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {/* Mobile Number Input */}
        <label htmlFor="mobileNumber">{mobileNumber}</label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleInputChange}
          pattern="[0-9]{10}" // Assuming 10-digit mobile number
          required
        />

        {/* OTP Input */}
        <label htmlFor="otp">{otp}</label>
        <input
          type="text"
          id="otp"
          name="otp"
          value={formData.otp}
          onChange={handleInputChange}
          maxLength="6"
          required
        />

        {/* Submit button */}
        <button type="submit">{login}</button>
      </form>

      {/* Link to RegisterForm */}
      <Link to="/register">{notRegistered}</Link>
    </div>
  );
};

export default LoginForm;