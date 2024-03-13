import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import RegisterForm from "./components/Register";
import LoginForm from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";

class App extends Component {
  state = {activeLanguage:'EN'}

  changeLanguage = activeLanguage =>{
    this.setState({activeLanguage})
  }

  render() {
    const {activeLanguage} = this.state;
    return (
      <>
        <Header activeLanguage={activeLanguage} changeLanguage={this.changeLanguage}/>
        <Switch>
          <Route exact path="/" element={<Home/>}><Home activeLanguage={activeLanguage}/></Route>
          <Route exact path="/login" element={<LoginForm/>}><LoginForm activeLanguage={activeLanguage}/></Route>
          <Route exact path="/register" element={<RegisterForm/>}><RegisterForm activeLanguage={activeLanguage}/></Route>
          {/* <Route component={NotFound} /> */}
        </Switch>
      </>
    );
  }
}

export default App;

