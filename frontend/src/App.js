import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RegisterForm from "./components/Register";
import LoginForm from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<LoginForm />} />
      <Route exact path="/register" element={<RegisterForm />} />
      {/* <Route component={NotFound} /> */}
    </Routes>
  </BrowserRouter>
);

export default App;
