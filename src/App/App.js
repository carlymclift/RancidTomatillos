import React, { Component } from 'react';
import { getAllMovies, getAllUserRatings, getFavorites, addFavorite } from '../NetworkRequests/APIRequests'
import MovieContainer from '../MovieContainer/MovieContainer'
import MoviePage from '../MoviePage/MoviePage'
import Login from '../Login/Login'
import { Route, NavLink, Redirect } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      permanentMovies: [],
      isLoggedIn: false,
      error: '',
      pageDisplayed: 'home',
      foundMovieId: 0,
      foundMovieRating: '',
      isOpen: true,
      showElement: true,
      userId: 0,
      userName: '',
      userRatings: {ratings: []},
      favorites: [],
      searchedMovie: ''
    }

    this.logOut = this.logOut.bind(this)
    this.showCorrectPage = this.showCorrectPage.bind(this)
    this.toggleButton = this.toggleButton.bind(this)
    this.showMovieDetails = this.showMovieDetails.bind(this)
    this.updateMovies = this.updateMovies.bind(this)
    this.determineFavoriteStatus = this.determineFavoriteStatus.bind(this)
  }

  async componentDidMount() {
    try {
      const data = await getAllMovies()
      const favorites = await getFavorites()
      this.setState({movies: data.movies, permanentMovies: data.movies, favorites: favorites})
    } catch (error) {
      this.setState({error: error})
    }
  }

  showMovieDetails(id) {
   this.setState({
      foundMovieId: {id},
      pageDisplayed: 'moviePage'
    })
  }

  logOut() {
    this.setState({pageDisplayed: 'home', isLoggedIn: false, isOpen: true, showElement: true})
    alert('You are now logged out of Rancid Tomatillos, come back soon!')
    return (<Redirect to='/' />)
  }

  showCorrectPage(page) {
    if(page === "login") {
      this.setState({showElement: false, pageDisplayed: page})
    } else {
      this.setState({pageDisplayed: 'home', showElement: true})
    }
  }

  toggleButton() {
    this.setState(prevState => {
      return {
          isOpen: !prevState.isOpen
      }
    })
  }

  updateMovies(event) {
    let search = event.target.value.toLowerCase()
    this.setState({ searchedMovie: search })
    this.renderSearchedMovies()
  }

  renderSearchedMovies() {
    let movies = this.state.permanentMovies.filter(movie => {
      return movie.title.toLowerCase().includes(this.state.searchedMovie)
    })
    this.setState({ movies: movies})
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
    let btnTxt = this.state.isOpen ? 'Login' : 'Logout'
    return (
      <main className="App">
        <header className="App-header">
          <h1 className="App-header-text">Rancid Tomatillos</h1>
            <nav className="App-navigation-buttons">
              <NavLink className="App-nav-button" to='/' onClick={this.showCorrectPage}>Home</NavLink>
              {!this.state.isLoggedIn &&
              <>
                <NavLink className="App-nav-button" to='/login' style={{display: this.state.showElement ? '' : 'none' }}
                  onClick={() => this.showCorrectPage('login')}>{btnTxt}</NavLink>
                <div>
                <input onChange={this.updateMovies} className="App-search-input" placeholder="Search Movies..." style={{display: this.state.showElement ? '' : 'none' }}></input>
                <button className="App-search-button" style={{display: this.state.showElement ? '' : 'none' }}></button>
                </div>
              </>
              }
              {this.state.isLoggedIn &&
                <>
                 <button className="App-nav-button" onClick={this.logOut}>{btnTxt}</button>
                 <NavLink className="favorites-button" to='/favorites'>Favorites</NavLink>
                  {(this.state.pageDisplayed !== 'moviePage' &&
                    <>
                    <div>
                     <input onChange={this.updateMovies} className="App-search-input" placeholder="Search Movies..."></input><button className="App-search-button"></button>
                    </div>
                     <h2 className="App-welcome-user" >Welcome, {this.state.userName}!</h2>
                    </>
                  )}
                </>
              }
          </nav>
        </header>
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
          return <Login
            validateLogin={this.validateLogin}
            login={this.logIn}
            userId={this.userId}/> }}
        />
        <Route exact path={`/movie-details/${this.state.foundMovieId.id}`} render={() => {
          return <MoviePage
            foundMovieId={this.state.foundMovieId.id}
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
              movies={this.state.favorites.map(id => this.state.permanentMovies.find(movie => movie.id === id))}
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
