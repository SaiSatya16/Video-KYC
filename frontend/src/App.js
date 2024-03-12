import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import RegisterForm from "./components/Register";
import LoginForm from "./components/Login";
import Header from "./components/Header";

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/register" component={RegisterForm} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </>
);

export default App;
