import React, { Component } from 'react';
import { getAllMovies } from './APIRequests'
import MovieContainer from './MovieContainer'
import MoviePage from './MoviePage'
import Login from './Login/Login'
import Header from './Header'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      isLoggedIn: false,
      error: '',
      pageDisplayed: 'home'
    }

    this.displayLoginPage = this.displayLoginPage.bind(this)
    this.handler = this.handler.bind(this)
  }

  validateLogin = () => {
    const loginInput = document.getElementById('username-input').value;
    const passwordInput = document.getElementById('password-input').value;

    if(loginInput === 'greg@turing.io' && passwordInput === 'abc123') {
      // this.setState({pageDisplayed: 'login'})
      return true
    }
  }

  displayLoginPage() {
    this.setState({pageDisplay: 'login'})
  }

  componentDidMount = async () => {
    try {
      const data = await getAllMovies()
      this.setState({movies: data.movies})
    } catch (error) {
      this.setState({error: error})
    }
  }

  getMovieID = (event) => {
    this.setState({foundMovie: event.target.id})
  }

  handler() {
    this.setState({pageDisplayed: 'home'  });
  }

  render() {
    return (
      <main className="App">
    
        <Header 
          isLoggedIn={this.state.isLoggedIn} 
          pageDisplayed={this.state.pageDisplayed}
          action={this.displayLoginPage}
        />

        {this.state.pageDisplayed === 'login' && <Login validateLogin={this.validateLogin} action={this.handler}/>}
        {this.state.pageDisplayed === 'home' && <MovieContainer movies={this.state.movies} getMovieId={this.getMovieID}/>}
      
          {/* <h1 className="App-header-text">Rancid Tomatillos</h1>
          <button className="App-login-button" id="login-button">Login</button> */}
        {/* </header> */}
        {/* <body> */}
            {/* {!this.state.isLoggedIn &&
            <>
              <Login validateLogin={this.validateLogin}/>
            </>} */}

            {/* {!this.state.isLoggedIn &&
            <>
              <MovieContainer movies={this.state.movies} getMovieId={this.getMovieID}/>
              <MoviePage />
            </>} */}
        {/* </body> */}
      </main>
    )
  }
}

export default App;
