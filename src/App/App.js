import React, { Component } from 'react';
import { getAllMovies } from '../NetworkRequests/APIRequests'
import MovieContainer from '../MovieContainer/MovieContainer'
import MoviePage from '../MovieDetails/MoviePage'
import Login from '../Login/Login'
import Header from '../Header/Header'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      isLoggedIn: false,
      error: '',
      pageDisplayed: 'home',
      foundMovieId: 0,
    }

    this.displayLoginPage = this.displayLoginPage.bind(this);
    this.handler = this.handler.bind(this);
    this.showMovieDetails = this.showMovieDetails.bind(this);
  }

  componentDidMount = async () => {
    try {
      const data = await getAllMovies()
      this.setState({movies: data.movies})
    } catch (error) {
      this.setState({error: error})
    }
  }

  displayLoginPage() {
    this.setState({pageDisplayed: 'login'})
  }

  showMovieDetails = (id) => {
    this.setState({
      foundMovieId: {id},
    })
    this.showMovieDetailsDisplay();
  }

  showMovieDetailsDisplay() {
    this.setState({pageDisplayed: 'moviePage'})
  }

  handler() {
    this.setState({pageDisplayed: 'home', isLoggedIn: true})
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
        {this.state.pageDisplayed === 'home' && <MovieContainer movies={this.state.movies} showMovieDetails={this.showMovieDetails}/>}
        {this.state.pageDisplayed === 'moviePage' && <MoviePage foundMovieId={this.state.foundMovieId.id}/>}
      </main>
    )
  }
}

export default App;
