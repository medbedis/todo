import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Content from "./layouts/Content";

export default class Index extends Component {

    


  render() {
    let navLink = (
      <div className="Tab">
        <NavLink to="/sign-in" activeClassName="activeLink" className="signIn">
          Sign In
        </NavLink>
        <NavLink exact to="/" activeClassName="activeLink" className="signUp">
          Sign Up
        </NavLink>
      </div>
    );
    const login = localStorage.getItem("isLoggedIn");

    return (
      <div className="App">
        {login ? (
          <Router>
            <Route exact path="/" component={Signup}></Route>
            <Route path="/sign-in" component={Signin}></Route>
            <Route path="/home" component={Content}></Route>
          </Router>
        ) : (
          <Router>
            <Route exact path="/" component={Signup}></Route>
            <Route path="/sign-in" component={Signin}></Route>
            <Route path="/home" component={Content}></Route>
          </Router>
        )}
      </div>
    );
  }
}



if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
