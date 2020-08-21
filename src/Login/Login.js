import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

class Login extends Component {

  runChange = (event) => {
    event.preventDefault()
    this.submitLogin()
    this.props.action()
  }

  submitLogin = () => {
    const requestLogin = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email: document.getElementById('username-input').value, 
        password: document.getElementById('password-input').value
     })
    }
     fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', requestLogin)
        .then(async response => {
          const data = await response.json()
  
          if (!requestLogin) {
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }
          console.log("Post Login Response Status:", response.status)
        })
        .catch(error => {
          console.error('There was an error!', error);
      })  
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
