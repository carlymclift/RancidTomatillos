import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

class Login extends Component {
  submitLogin = (event) => {
    event.preventDefault()
    if(this.props.validateLogin()) {
      document.getElementById('login-button').innerText = "Logout"
      return (console.log('You have logged in'))
    };
  }

  render() {
    return (
      <div className="Login-container">
        <form>
          <input
            type='text'
            placeholder='Username'
            name='username'
            id='username-input'
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            id='password-input'
          />
          <button onClick={this.submitLogin}>Submit</button>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  submitLogin: PropTypes.func
}

export default Login
