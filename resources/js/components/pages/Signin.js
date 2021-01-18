import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import {Link, Redirect } from "react-router-dom";

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      msg: "",
      isLoading: false,
      redirect: false,
      errMsgEmail: "",
      errMsgPwd: "",
      errMsg: "",
    };
  }
  onChangehandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let data = {};
    data[name] = value;
    this.setState(data);
  };

  onSignInHandler = () => {
    this.setState({ isLoading: true });
    axios
      .post("http://todo.test/api/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        this.setState({ isLoading: false });
        if (response.data.status === 200) {
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("userData", JSON.stringify(response.data.data));
          this.setState({
            msg: response.data.message,
            redirect: true,
          });
        }
        if (
          response.data.status === "failed" &&
          response.data.success === undefined
        ) {
          this.setState({
            errMsgEmail: response.data.validation_error.email,
            errMsgPwd: response.data.validation_error.password,
          });
          setTimeout(() => {
            this.setState({ errMsgEmail: "", errMsgPwd: "" });
          }, 2000);
        } else if (
          response.data.status === "failed" &&
          response.data.success === false
        ) {
          this.setState({
            errMsg: response.data.message,
          });
          setTimeout(() => {
            this.setState({ errMsg: "" });
          }, 2000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
    const login = localStorage.getItem("isLoggedIn");
    if (login) {
      return <Redirect to="/home" />;
    }
    const isLoading = this.state.isLoading;
    return (
      <div>
<div className="login-page">
<div className="login-box">
  <div className="login-logo">
    <a href="#"><b>ToDo</b>APP</a>
  </div>
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Sign in to start your session</p>
      <form >
        <div className="input-group mb-3">
          <input type="email" name="email" value={this.state.email}
              onChange={this.onChangehandler} className="form-control" placeholder="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
          <span className="text-danger">{this.state.msg}</span>
            <span className="text-danger">{this.state.errMsgEmail}</span>
        </div>
        <div className="input-group mb-3">
          <input type="password" name="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.onChangehandler} className="form-control"  />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
          <span className="text-danger">{this.state.errMsgPwd}</span>

        </div>
        <p className="text-danger">{this.state.errMsg}</p>

        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <button onClick={this.onSignInHandler} type="button" className="btn btn-primary btn-block">Sign In {isLoading ? (
              <span
                className="spinner-border spinner-border-sm ml-5"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              <span></span>
            )}</button>
          </div>
          {/* /.col */}
        </div>
      </form>
      <p className="mb-0">
        <Link to="/" className="text-center">Register a new membership</Link>
      </p>
    </div>
    {/* /.login-card-body */}
  </div>
</div>
</div>
      </div>
    );
  }
}
