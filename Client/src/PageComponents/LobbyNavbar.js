import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../authActions';
import { clearCurrentProfile } from '../profileActions';
import logo from '../resources/smudge2.png'
import '../css/navbar.css'
import {Form} from 'react-bootstrap'
import Button from 'react'
import { Route } from 'react-router-dom'
class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            {' '}
            Logout
          </a>
        </li>
      </ul>
    );
    var value;
    const Dashboard = (
          <Form inline>
            <Route render={({ history}) => (
              <button className="btn btn-success" variant="outline-success"
                type='button'
                onClick={(e) => {
                  history.replace("/dashboard") }}
                  >
                Dashboard
              </button>
            )} />
          </Form>)

    const Logout = (
      <Route render={({ history }) => (
        <button className="btn btn-danger" variant="outline-danger"
          type='button'
          onClick={(e) => {
            this.onLogoutClick(e);
            history.replace("/")}}
            >
          Logout
        </button>
      )} />
    )
    /*const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );*/

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
        <div className="container d-flex">
          <Link to="/dashboard">
            <span class="align-left">
          <a className="navbar-brand" href="#"><img src={logo} className="NavbarLogo d-inline-block align-top" alt="Home"/></a>
          </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
            </ul>
            {isAuthenticated ? Dashboard : ""}
            {isAuthenticated ? Logout : ""}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
