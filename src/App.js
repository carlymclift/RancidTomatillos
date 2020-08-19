import React, { Component } from 'react';
import { getAllMovies } from './APIRequests'
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
    }
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
              <Login />
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
