import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { Redirect } from 'react-router-dom';

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

  verifyLogin = async (event) => {
    event.preventDefault()
    const userName = document.getElementById('username-input').value
    const password = document.getElementById('password-input').value

    if(userName.includes('@turing.io') && password === 'abc123') {
      const user = await this.submitLogin()
      this.props.login(user)
      .then(() => this.setState({ redirect: true }));
    } else if (userName === '' || password === '') {
      this.setState({ submitEmptyLogin: true })
    } else if (password !== 'abc123' && !userName.includes('@turing.io')) {
      this.setState({ correctUsername: false, correctPassword: false })
    }else if (!userName.includes('@turing.io')) {
      this.setState({ correctUsername: false, submitEmptyLogin: false, correctPassword: true})
    } else if (password !== 'abc123') {
      this.setState({ correctPassword: false, submitEmptyLogin: false, correctUsername: true})
    } 
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
          <button onClick={this.verifyLogin}>Submit</button>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  submitLogin: PropTypes.func
}

export default Login
