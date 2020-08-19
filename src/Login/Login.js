import React from 'react'
import './Login.css'

const Login = () => {
  //Eventually, I think we'll need to turn this into a class component that can handle the POST. -jkw
  return (
    <div className="Login-container">
      <form>
        <input
          type='text'
          placeholder='Username'
          name='username'
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login
