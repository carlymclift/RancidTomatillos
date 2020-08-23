import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

class Login extends Component {

  runChange = async (event) => {
    event.preventDefault()
    const user = await this.submitLogin()
    this.props.action(user)
  }

  submitLogin = async () => {
  const response = await fetch(
    "https://rancid-tomatillos.herokuapp.com/api/v2/login", {
      method: "POST",
      headers: {
          "content-type": "application/json"
      },
      body: JSON.stringify({
        email: document.getElementById('username-input').value,
        password: document.getElementById('password-input').value
      })
    }
  )
    const message = await response.json();
    return message;
  }

  render() {
    return (
      <div className="Login-container">
        <form className="Login-form">
          <h3 className="Login-header">Login</h3>
          <input
            type='text'
            placeholder='Email'
            name='username'
            id='username-input'
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            id='password-input'
          />
          <button onClick={this.runChange}>Submit</button>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  submitLogin: PropTypes.func
}

export default Login
