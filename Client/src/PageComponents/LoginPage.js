import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../authActions';
import { registerUser } from "../authActions";
import TextFieldGroup from '../TextFieldGroup';
import {FormControl} from 'react-bootstrap'
import '../css/Login.css'
class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      loginEmail: '',
      loginPassword: '',
      registerEmail: '',
      registerPassword: '',
      registerConfirm: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitRegister = this.onSubmitRegister.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentDidMount() {
        document.body.classList.add("login")
  }
  onSubmitRegister(e)
  {
    e.preventDefault();
    if(this.state.registerPassword != this.state.registerConfirm)
    return;
    const userData = {
      email: this.state.registerEmail,
      password: this.state.registerConfirm
    }
    console.log(userData);
    registerUser(userData);
  }
  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.loginEmail,
      password: this.state.loginPassword
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="Login-component">
      <div className="registerLoginPage">
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto">
              <p className="lead text-center">

              </p>
              <form onSubmit={this.onSubmit}>
                <h2 className="text-center"><b>Login</b></h2>
                <FormControl className="inputs"
                  aria-label="Email Address"
                  aria-describedby="basic-addon1"
                  placeholder="Email Address"
                  name="loginEmail"
                  type="email"
                  value={this.state.loginEmail}
                  onChange={this.onChange}
                />
                <p/>
                <FormControl className="inputs"
                  placeholder="Password"
                  name="loginPassword"
                  type="password"
                  value={this.state.loginPassword}
                  onChange={this.onChange}
                />
                <input style={{height:"45px"}} type="submit" className="btn btn-primary btn-block mt-4" />

              </form>
              <br/>
              <hr/>
              <form onSubmit={this.onSubmitRegister}>
                <div className="container text-center">
                  <h4>Sign Up!</h4>

                  <FormControl className="inputs"
                  placeholder="Enter Your Email Address"
                  name="registerEmail"
                  type="email"
                  value={this.state.registerEmail}
                  onChange={this.onChange}
                  error={errors.email}/>
                  <p/>
                  <FormControl className="inputs"
                  placeholder="Password"
                  name="registerPassword"
                  type="password"
                  value={this.state.registerPassword}
                  onChange={this.onChange}
                  error={errors.password}
                  />
                  <p/>
                  <FormControl className="inputs"
                  placeholder="Confirm Password"
                  name="registerConfirm"
                  type="password"
                  value={this.state.registerConfirm}
                  onChange={this.onChange}
                  error={errors.password}
                  />

                  <input type="submit" className="btn btn-primary btn-block mt-4" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  loginUser: PropTypes.func.isRequired,

  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(LoginPage);
