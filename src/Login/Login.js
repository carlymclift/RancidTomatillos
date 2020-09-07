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
      isValidLogin: false
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  clearFormInput() {
    var usernameInput = document.getElementById('username-input')
    var passwordInput = document.getElementById('password-input')
    usernameInput.value = ''
    passwordInput.value = ''
  }

  showLoginError() {
    this.setState({ error: 'Invalid login information' })
  }

  clearLoginError() {
    this.setState({ error: '' })
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
        this.setState({ isValidLogin: true })
        this.clearLoginError()
      })
      .then(this.clearFormInput())
      .catch((error) => this.showLoginError())
  }

  render() {
    const { isValidLogin } = this.state;

     if (isValidLogin) {
       return <Redirect to='/'/>;
     }

    return (
      <div className="Login-container">
        <form className="Login-form">
          <h3 className="Login-header">Login</h3>
          {this.state.error && 
            <p className="Login-warning-text" >{this.state.error}</p>
          }
          <input
            type='text'
            placeholder='Email'
            name='username'
            id='username-input'
            onChange={this.handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            id='password-input'
            onChange={this.handleChange}
          />
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
