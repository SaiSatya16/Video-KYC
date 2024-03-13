import React, { Component } from "react";
import { Route, Routes, BrowserRouter, Switch } from "react-router-dom";

import "./App.css";
import RegisterForm from "./components/Register";
import LoginForm from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import LanguageContext from "./context/LanguageContext";

class App extends Component {
  state = {activeLanguage: 'EN'}

  changeLanguage = activeLanguage => {
    this.setState({activeLanguage})
  }
  
  render() {
    const {activeLanguage} = this.state

    return (
      <BrowserRouter>
        
          <Header activeLanguage={activeLanguage} changeLanguage={this.changeLanguage}/>
          
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/register" element={<RegisterForm />} />
            {/* Add more routes as needed */}
          </Routes>
          
        
      </BrowserRouter>
    );
  }
}

export default App;
