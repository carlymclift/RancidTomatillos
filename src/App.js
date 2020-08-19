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
      <div className="App">
        <header className="App-header">
          <h1 className="App-header-text">Rancid Tomatillos</h1>
          <button className="App-login-button">Login</button>
        </header>
        <body>
          <Login />
          <MovieContainer movies={this.state.movies} getMovieId={this.getMovieID}/>
          <MoviePage />
        </body>
      </div>
    )
  }
}

export default App;
