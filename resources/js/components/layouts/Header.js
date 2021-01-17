import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return (
            <header className="">
                  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="index3.html" className="nav-link">Home</a>
    </li>
  </ul>

  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">

    <li className="nav-item">
      <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
        <i className="fas fa-th-large" />
      </a>
    </li>
  </ul>
</nav>

            </header>
        )
    }
}
