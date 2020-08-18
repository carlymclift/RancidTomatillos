import React, { Component } from 'react';
import './App.css';
import './APIRequests'
import MovieContainer from './MovieContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(movies => this.setState({ movies: movies.movies }))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-header-text">Rancid Tomatillos</h1>
          <button className="App-login-button">Login</button>
        </header>

        <MovieContainer movies={this.state.movies}/>
      </div>
    )
  }
}


export default App;
