import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Cookies from "js-cookie";
import "./App.css";
import RegisterForm from "./components/Register";
import LoginForm from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";

const ProtectedRoute = ({ element, ...rest }) => {
  const token = Cookies.get("token");
  if (token === undefined) {
    return <Navigate to="/login" replace />;
  }
  // return <Route {...rest} element={element} />;
  return <Outlet />;
};

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/login" element={<LoginForm />} />
      <Route exact path="/register" element={<RegisterForm />} />
      {/* <Route exact path="/" element={<ProtectedRoute />}> */}
        <Route exact path="/" element={<Home />} />
      {/* </Route> */}

      {/* <Route component={NotFound} /> */}
    </Routes>
  </BrowserRouter>
);

export default App;
