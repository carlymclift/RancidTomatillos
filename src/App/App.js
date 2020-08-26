import React, { Component } from 'react';
import { getAllMovies, getAllUserRatings } from '../NetworkRequests/APIRequests'
import MovieContainer from '../MovieContainer/MovieContainer'
import MoviePage from '../MovieDetails/MoviePage'
import Login from '../Login/Login'
import { Route, NavLink } from 'react-router-dom'

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
      foundMovieRating: '',
      isOpen: true,
      showElement: true,
      userId: 0,
      userName: '',
      userRatings: {ratings: []}
    }

    this.logOut = this.logOut.bind(this)
    this.showCorrectPage = this.showCorrectPage.bind(this)
    this.toggleButton = this.toggleButton.bind(this)
    this.showMovieDetails = this.showMovieDetails.bind(this)
  }

  async componentDidMount() {
    try {
      const data = await getAllMovies()
      this.setState({movies: data.movies})
    } catch (error) {
      this.setState({error: error})
    }
  }

  showMovieDetails(id) {
   this.setState({
      foundMovieId: {id},
    })
    this.showMovieDetailsDisplay();
  }

  showMovieDetailsDisplay() {
    this.setState({pageDisplayed: 'moviePage'})
  }

  logOut() {
    this.setState({pageDisplayed: 'home', isLoggedIn: false, isOpen: true, showElement: true})
    alert('You are now logged out of Rancid Tomatillos, come back soon!')
  }

  showCorrectPage(page) {
    if(page === "login") {
      this.setState({showElement: false, pageDisplayed: page})
    } else {
      this.setState({pageDisplayed: page, showElement: true})
    }
  }

  toggleButton() {
    this.setState(prevState => {
      return {
          isOpen: !prevState.isOpen
      }
    })
  }

  logIn = async (user) => {
    const ratings = await getAllUserRatings(user.user.id)
    this.setState({
      pageDisplayed: 'home',
      isLoggedIn: true,
      userId: user.user.id,
      userName: user.user.name,
      userRatings: ratings
    })
    this.toggleButton()
  }

  updateUserRatings = async () => {
    const ratings = await getAllUserRatings(this.state.userId)
    this.setState({
      userRatings: ratings
    })
  }

  render() {
    let btnTxt = this.state.isOpen ? 'Login' : 'Logout'
    return (
      <main className="App">
        <header className="App-header">
          <h1 className="App-header-text">Rancid Tomatillos</h1>
            <nav className="App-navigation-buttons">
              <NavLink className="App-nav-button" to='/'>Home</NavLink>
              {!this.state.isLoggedIn &&
              <>
                <NavLink className="App-nav-button" to='/login' style={{display: this.state.showElement ? '' : 'none' }}
                  onClick={() => this.showCorrectPage('login')}>{btnTxt}</NavLink>
                <input className="App-search-input" placeholder="Search Movies..." style={{display: this.state.showElement ? '' : 'none' }}></input>
                <button className="App-search-button" style={{display: this.state.showElement ? '' : 'none' }}></button>
              </>
              }
               {this.state.isLoggedIn &&
               <>
                <button className="App-nav-button" onClick={this.logOut}>{btnTxt}</button>
                <input className="App-search-input" placeholder="Search Movies..."></input><button className="App-search-button"></button>
                <h2 className="App-welcome-user" >Welcome, {this.userName}!</h2>
              </>
              }
          </nav>
        </header>

        <Route exact path='/' render={() => {
          return <MovieContainer movies={this.state.movies} showMovieDetails={this.showMovieDetails} isLoggedIn={this.state.isLoggedIn} userRatings={this.state.userRatings} />}}
        />

        <Route exact path='/login' render={() => {
          return <Login validateLogin={this.validateLogin} action={this.logIn} userId={this.userId}/> }}
        />

        {this.state.pageDisplayed === 'moviePage' &&
          <MoviePage foundMovieId={this.state.foundMovieId.id} userRatings={this.state.userRatings} isLoggedIn={this.state.isLoggedIn}
          userId={this.state.userId} updateUserRating={this.updateUserRatings}/>}
      </main>
    )
  }
}

export default App;
