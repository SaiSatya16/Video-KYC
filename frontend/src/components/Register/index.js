// // import React, { Component } from "react";
// // import "./index.css"; // Adjust the file name based on your preference

// // class RegisterForm extends Component {
// //   state = {
// //     username: "",
// //     email: "",
// //     password: "",
// //     confirmPassword: "",
// //   };

// //   handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     this.setState({
// //       ...this.state,
// //       [name]: value,
// //     });
// //   };

// //   handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log("Form submitted:", this.state.formData);
// //     // Add logic for form submission, e.g., sending data to a server
// //   };

// //   render() {
// //     return (
// //       <div className="register-container">
// //         <h2>Register</h2>
// //         <form onSubmit={this.handleSubmit} className="register-form">
// //           {/* Username Input */}
// //           <label htmlFor="username">Username:</label>
// //           <input
// //             type="text"
// //             id="username"
// //             name="username"
// //             value={this.state.formData.username}
// //             onChange={this.handleInputChange}
// //             required
// //           />

// //           {/* Phone Number Input */}
// //           <label htmlFor="phoneNumber">Phone Number:</label>
// //           <input
// //             type="tel"
// //             id="phoneNumber"
// //             name="phoneNumber"
// //             value={this.state.formData.phoneNumber}
// //             onChange={this.handleInputChange}
// //             pattern="[0-9]{10}" // Assuming 10-digit phone number
// //             required
// //           />

// //           {/* OTP Input */}
// //           <label htmlFor="otp">OTP:</label>
// //           <input
// //             type="text"
// //             id="otp"
// //             name="otp"
// //             value={this.state.formData.otp}
// //             onChange={this.handleInputChange}
// //             maxLength="6"
// //             required
// //           />

// //           {/* Submit button */}
// //           <button type="submit">Register</button>
// //         </form>
// //       </div>
// //     );
// //   }
// // }

// // export default RegisterForm;

// import React, { Component } from "react";
// import { useNavigate } from "react-router-dom";
// import "./index.css"; // Adjust the file name based on your preference

// class RegisterForm extends Component {
//   navigate = useNavigate();

//   state = {
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   };

//   handleInputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       ...this.state,
//       [name]: value,
//     });
//   };

//   onSubmit() {
//     console.log("Registration successful");
//     this.navigate("/login");
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", this.state);
//     // Add logic for form submission, e.g., sending data to a server
//   };

//   render() {
//     return (
//       <div className="register-container">
//         <h2>Register</h2>
//         <form onSubmit={this.handleSubmit} className="register-form">
//           {/* Username Input */}
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={this.state.username}
//             onChange={this.handleInputChange}
//             required
//           />

//           {/* Email Input */}
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={this.state.email}
//             onChange={this.handleInputChange}
//             required
//           />

//           {/* Password Input */}
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={this.state.password}
//             onChange={this.handleInputChange}
//             required
//           />

//           {/* Confirm Password Input */}
//           <label htmlFor="confirmPassword">Confirm Password:</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={this.state.confirmPassword}
//             onChange={this.handleInputChange}
//             required
//           />

//           {/* Submit button */}
//           <button type="submit">Register</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default RegisterForm;

import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./index.css"; // Adjust the file name based on your preference

const RegisterForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", { username, email, password });
    // Add logic for form submission, e.g., sending data to a server
    // const userDetails = {
    //   username,
    //   email,
    //   password,
    //   confirmPassword,
    // };
    // if (password === confirmPassword) {
    //   navigate("/login"); // Navigate on successful registration
    // } else {
    //   console.error("Passwords do not match");
    // }
    // const url = "http://127.0.0.1:5000/user-register";
    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(userDetails),
    // };
    // const response = await fetch(url, options);
    // const data = await response.json();
    // console.log("Response:", response);
    // if (response.ok === true) {
    //   const authToken = data.token; // Assuming the token is returned in the 'token' field of the response
    //   const username = data.username;
    //   // localStorage.setItem("authToken", authToken); // Store the token in local storage
    //   // localStorage.setItem("username", username);
    //   Cookies.set("authToken", authToken, { expires: 1 });
    //   Cookies.set("username", username, { expires: 1 });
    //   onSubmitSuccess();
    //   console.log(data);
    // } else {
    //   console.log("Login failed");
    // }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        {/* Username Input */}
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleInputChange}
          required
        />

        {/* Email Input */}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          required
        />

        {/* Password Input */}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          required
        />

        {/* Confirm Password Input */}
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleInputChange}
          required
        />

        {/* Submit button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
