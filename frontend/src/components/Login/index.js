// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./index.css"; // Adjust the file name based on your preference

// import RegisterForm from "../Register";

// function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "email") {
//       setEmail(value);
//     } else if (name === "password") {
//       setPassword(value);
//     }
//   };

//   const onSubmitSuccess = () => {
//     navigate("/");
//   };

//   const submitForm = async (event) => {
//     event.preventDefault();
//     const userDetails = { email, password };
//     const url = "http://127.0.0.1:5000/user-login";
//     const options = {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(userDetails),
//     };
//     const response = await fetch(url, options);
//     const data = await response.json();
//     if (response.ok === true) {
//       const authToken = data.token; // Assuming the token is returned in the 'token' field of the response
//       const username = data.username;
//       localStorage.setItem("authToken", authToken); // Store the token in local storage
//       localStorage.setItem("username", username);
//       onSubmitSuccess();
//       console.log(data);
//     }
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={submitForm} className="login-form">
//         <h2>Login</h2>
//         {/* Email Input */}
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={email}
//           onChange={handleInputChange}
//           required
//         />

//         {/* Password Input */}
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={password}
//           onChange={handleInputChange}
//           required
//         />

//         {/* Submit button */}
//         <button type="submit">Login</button>
//       </form>

//       {/* Link to RegisterForm */}
//       <Link to="/register">New user? Register</Link>
//     </div>
//   );
// }

// export default LoginForm;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css"; // Adjust the file name based on your preference

import RegisterForm from "../Register";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmitSuccess = () => {
    console.log("Navigation successful");
    navigate("/");
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const userDetails = { email, password };
    const url = "http://127.0.0.1:5000/user-login";
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("Response:", response);
    if (response.ok === true) {
      const authToken = data.token; // Assuming the token is returned in the 'token' field of the response
      const username = data.username;
      // localStorage.setItem("authToken", authToken); // Store the token in local storage
      // localStorage.setItem("username", username);
      Cookies.set("authToken", authToken, { expires: 1 });
      Cookies.set("username", username, { expires: 1 });
      onSubmitSuccess();
      console.log(data);
    } else {
      console.log("Login failed");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={submitForm} className="login-form">
        <h2>Login</h2>
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

        {/* Submit button */}
        <button type="submit">Login</button>
      </form>

      {/* Link to RegisterForm */}
      <Link to="/register">New user? Register</Link>
    </div>
  );
}

export default LoginForm;
