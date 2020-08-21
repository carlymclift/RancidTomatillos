import React, { Component } from 'react';
import { getAllMovies } from '../NetworkRequests/APIRequests'
import MovieContainer from '../MovieContainer/MovieContainer'
import Login from '../Login/Login'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      isLoggedIn: false,
      error: '',
      pageDisplayed: 'home',
      isOpen: true
    }

    this.showLoggedOutHomePage = this.showLoggedOutHomePage.bind(this)
    this.handler = this.handler.bind(this) 
    this.showCorrectPage = this.showCorrectPage.bind(this)
    this.toggleButton = this.toggleButton.bind(this)
    this.getMovieID = this.getMovieID.bind(this)
  }

  componentDidMount = async () => {
    try {
      const data = await getAllMovies()
      this.setState({movies: data.movies})
    } catch (error) {
      this.setState({error: error})
    }
  }
      
  getMovieID(event) {
    this.setState({foundMovie: event.target.id})
  }

  showLoggedOutHomePage() {
    this.setState({pageDisplayed: 'home', isLoggedIn: false})
  }

  showCorrectPage(page) {
    this.setState({pageDisplayed: page})
  }

  toggleButton() {
    this.setState(prevState => {
      return {
          isOpen: !prevState.isOpen
      }
    })
  }

  handler() {
    this.setState({pageDisplayed: 'home', isLoggedIn: true})
    this.toggleButton()
  }

  render() {
    let btnTxt = this.state.isOpen ? 'Login' : 'Logout'
    return (
      <main className="App">

        <header className="App-header">
          <h1 className="App-header-text">Rancid Tomatillos</h1>
            <nav className="App-navigation-buttons">
              <button className="App-nav-button" onClick={() => this.showCorrectPage('home')}>Home</button>
              {!this.state.isLoggedIn && 
                <button className="App-nav-button" onClick={() => this.showCorrectPage('login')}>{btnTxt}</button>
              }
               {this.state.isLoggedIn && 
                <button className="App-nav-button" onClick={this.showLoggedOutHomePage}>{btnTxt}</button>
              }
          </nav>
        </header>

        {this.state.pageDisplayed === 'login' && <Login validateLogin={this.validateLogin} action={this.handler}/>}
        {this.state.pageDisplayed === 'home' && <MovieContainer movies={this.state.movies} getMovieId={this.getMovieID}/>}
      </main>
    )
  }
}

export default App;
