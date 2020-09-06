import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { Redirect } from 'react-router-dom';
import { submitLogin } from '../NetworkRequests/APIRequests'

class Login extends Component {
  constructor() {
    super()
      this.state = {
        username: '',
        password: '',
        error: '',
        isValidLogin: false,
        correctUsername: true,
        correctPassword: true,
        submitEmptyLogin: false,
        redirect: false
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  clearFormInput() {
    this.setState({ username: '', password: '' })
  }

  showLoginError() {
    this.setState({ error: 'Invalid login information' })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const loginBody = {
      email: this.state.username,
      password: this.state.password
    }
    submitLogin(loginBody)
      .then(userInfo => {
        this.props.login(userInfo)
      })
      .then(this.clearFormInput())
      .catch((error) => this.showLoginError())
  }

  render() {
    const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/'/>;
     }

    return (
      <div className="Login-container">
        <form className="Login-form">
          <h3 className="Login-header">Login</h3>
          {this.state.submitEmptyLogin === true && <p className="Login-warning-text" >One or more fields are empty</p>}
          <input
            type='text'
            placeholder='Email'
            name='username'
            id='username-input'
            onChange={this.handleChange}
          />
          {this.state.correctUsername === false && <p className="Login-warning-text" >* Incorrect username!</p>}
          <input
            type='password'
            placeholder='Password'
            name='password'
            id='password-input'
            onChange={this.handleChange}
          />
          {this.state.correctPassword === false && <p className="Login-warning-text" >* Incorrect password!</p>}
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  submitLogin: PropTypes.func
}

export default Login
