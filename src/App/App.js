import React, { Component } from 'react';
import { getAllMovies, getAllUserRatings, getFavorites, addFavorite } from '../NetworkRequests/APIRequests'
import Header from '../Header/Header'
import MovieContainer from '../MovieContainer/MovieContainer'
import MoviePage from '../MoviePage/MoviePage'
import Login from '../Login/Login'
import { Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      isLoggedIn: false,
      error: '',
      pageDisplayed: 'home',
      foundMovieRating: '',
      user: {},
      userId: 0,
      userName: '',
      userRatings: {ratings: []},
      favorites: [],
    }

    this.logOut = this.logOut.bind(this)
    this.showMovieDetails = this.showMovieDetails.bind(this)
    this.determineFavoriteStatus = this.determineFavoriteStatus.bind(this)
  }

  async componentDidMount() {
    try {
      const data = await getAllMovies()
      const favorites = await getFavorites()
      this.setState({movies: data.movies, favorites: favorites})
    } catch (error) {
      this.setState({error: error})
    }
  }

  showMovieDetails(id) {
   this.setState({
      pageDisplayed: 'moviePage'
    })
  }

  logIn = async (user) => {
    const ratings = await getAllUserRatings(user.user.id)
    this.setState({
      pageDisplayed: 'home',
      isLoggedIn: true,
      user: user.user,
      userRatings: ratings
    })
  }

  logOut() {
    this.setState({ pageDisplayed: 'home', isLoggedIn: false })
    alert('You are now logged out of Rancid Tomatillos, come back soon!')
  }

  updateUserRatings = async () => {
    const ratings = await getAllUserRatings(this.state.userId)
    this.setState({
      userRatings: ratings
    })
  }

  handleFavorite = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    await addFavorite(event.target.id)

    const favorites = await getFavorites()
    this.setState({favorites: favorites})
  }

  determineFavoriteStatus(id) {
    return this.state.favorites.includes(id)
  }

  showPleaseLoginMessage = (event) => {
    const errorMessage = document.getElementById(`message-${event.target.id}`)
    errorMessage.classList.remove('hidden')
  }

  clearPleaseLoginMessage = (event) => {
    const errorMessage = document.getElementById(`message-${event.target.id}`)
    errorMessage.classList.add('hidden')
  }

  render() {
    return (
      <main className="App">
        <Header 
          showCorrectPage={this.showCorrectPage}
          isLoggedIn={this.state.isLoggedIn}
          logOut={this.logOut}
          user={this.state.user}
        />
        <Route exact path='/' render={() => {
          return <MovieContainer
            movies={this.state.movies}
            showMovieDetails={this.showMovieDetails}
            pageDisplayed={this.pageDisplayed}
            isLoggedIn={this.state.isLoggedIn}
            userRatings={this.state.userRatings}
            handleFavorite={this.handleFavorite}
            determineFavoriteStatus={this.determineFavoriteStatus}
            showPleaseLoginMessage={this.showPleaseLoginMessage}
            clearPleaseLoginMessage={this.clearPleaseLoginMessage}/>}}
        />
        <Route exact path='/login' render={() => {
          return <Login login={this.logIn} />
          }}
        />
        <Route exact path={`/movie-details/:movieId`} render={({ match }) => {
          return <MoviePage
            movieId={+match.params.movieId}
            userRatings={this.state.userRatings}
            isLoggedIn={this.state.isLoggedIn}
            userId={this.state.userId}
            userName={this.state.userName}
            updateUserRating={this.updateUserRatings}
            handleFavorite={this.handleFavorite}
            determineFavoriteStatus={this.determineFavoriteStatus}
            showPleaseLoginMessage={this.showPleaseLoginMessage}
            clearPleaseLoginMessage={this.clearPleaseLoginMessage}
          /> }}
        />
        <Route exact path={'/favorites'} render={() => {
          if(this.state.favorites.length === 0) {
            return <div className='empty-favorites-container'>
              <h2>Add a favorite movie from the home page to get started!</h2>
            </div>
          } else {
            return (
              <MovieContainer
              movies={this.state.favorites.map(id => this.state.movies.find(movie => movie.id === id))}
              showMovieDetails={this.showMovieDetails}
              isLoggedIn={this.state.isLoggedIn}
              userRatings={this.state.userRatings}
              handleFavorite={this.handleFavorite}
              determineFavoriteStatus={this.determineFavoriteStatus}/>
            )
          }
        }} />
      </main>
    )
  }
}

export default App;
