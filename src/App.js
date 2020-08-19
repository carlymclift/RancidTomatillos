import React, { Component } from 'react';
import apiRequests from './APIRequests'
import MovieContainer from './MovieContainer'
import MoviePage from './MoviePage'
import Login from './Login/Login'
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      isLoggedIn: false,
      error: '',
    }
  }

  validateLogin = () => {
    const loginInput = document.getElementById('username-input').value;
    const passwordInput = document.getElementById('password-input').value;

    if(loginInput === 'greg@turing.io' && passwordInput === 'abc123') {
      this.setState({isLoggedIn: true})
      return true
    }
  }

  componentDidMount = () => {
    apiRequests.getAllMovies()
    console.log('update this.state.movies array!')
  }

  getMovieID = (event) => {
    console.log(event.target)
    this.setState({foundMovie: event.target.id})
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1 className="App-header-text">Rancid Tomatillos</h1>
          <button className="App-login-button">Login</button>
        </header>
        <body>
            {!this.state.isLoggedIn &&
            <>
              <Login validateLogin={this.validateLogin}/>
            </>}

            {this.state.isLoggedIn &&
            <>
              <MovieContainer movies={this.state.movies} getMovieId={this.getMovieID}/>
              <MoviePage />
            </>}
        </body>
      </main>
    )
  }
}

export default App;
