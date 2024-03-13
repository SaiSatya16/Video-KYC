import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RegisterForm from "./components/Register";
import LoginForm from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";

<<<<<<< HEAD
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
=======
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
>>>>>>> 277980d9f27f8dd5027da75093d784f783e7d341

export default App;

