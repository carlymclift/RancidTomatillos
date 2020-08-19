import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

class Login extends Component {
  submitLogin = (event) => {
    event.preventDefault()
    if(this.validateLogin()) {
      return (console.log('YAY'))
    };
  }

  validateLogin = () => {
    const loginInput = document.getElementById('username-input').value;
    const passwordInput = document.getElementById('password-input').value;
    console.log({loginInput, passwordInput})

    if(loginInput === 'greg@turing.io' && passwordInput === 'abc123') {
        return true
    }
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
