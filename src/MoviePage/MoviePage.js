import React, { Component } from "react";
import './MoviePage.css';
import { getSingleMovieDetails, getMovieComments } from '../NetworkRequests/APIRequests'
import RatingForm from '../RatingForm/RatingForm'

class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      allMovieComments: [],
      averageRatingDecimal: 0
    };
    this.formatBudgetAndRevenue = this.formatBudgetAndRevenue.bind(this)
    this.formatAvRating = this.formatAvRating.bind(this)
  }

  async componentDidMount() {
    try {
      const movie = await getSingleMovieDetails(this.props.foundMovieId)
      let commentsFromUsers = await getMovieComments(this.props.foundMovieId)
      const movieInfo = movie.movie
      this.setState({
        movie: movieInfo,
        allMovieComments: commentsFromUsers.comments
      })
    } catch (error) {
      this.setState({error: error})
    }
    this.formatAvRating()
  }

  formatBudgetAndRevenue(x) {
    if (x === 0 || !x) {
      return 'Not Available'
    }
    else {
      let numWithCommas = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      return `$${numWithCommas}`
    }
  }

  formatAvRating() {
      const shortedRating = this.state.movie.average_rating.toFixed(1)
      this.setState({averageRatingDecimal: shortedRating})
  }

  iconStatus = () => {
    const favoriteStatus = this.props.determineFavoriteStatus(this.state.id)
    if(favoriteStatus) {
      return 'active'
    }
    if(!favoriteStatus) {
      return 'inactive'
    }
  }

  render() {
    const budget = this.formatBudgetAndRevenue(this.state.movie.budget)
    const revenue = this.formatBudgetAndRevenue(this.state.movie.revenue)

    return (
      <div className="Movie-Page" style={{
        backgroundImage: `url(${this.state.movie.backdrop_path})`}}>
        <div className="Movie-Page-Container">
          <div className='favorite-icon-container'>
            {(!this.props.isLoggedIn) &&
              <>
                <p className='favorite-warning-message hidden' id={`message-${this.props.foundMovieId}`}>Please log in to use this feature</p>
                <img className='favorite-icon inactive' src="/heart.png" alt="Favorite icon" id={this.props.foundMovieId} onMouseEnter={this.props.showPleaseLoginMessage} onMouseLeave={this.props.clearPleaseLoginMessage}/>
              </>
            }
            {(this.props.isLoggedIn) &&
              <img data-testid="favorite-icon" className={`favorite-icon ${this.iconStatus()}`} src="/heart.png" alt="Favorite icon" id={this.props.foundMovieId} onClick={this.props.handleFavorite}/>
            }
          </div>
          <img src={this.state.movie.poster_path} alt="Movie poster"/>
          <div className="movie-body">
            <h1>{this.state.movie.title}</h1>
            <p>{this.state.movie.tagline}</p>
            <div className="MoviePage-rating-box">
              <p className="MoviePage-rating-text"> <span role="img" aria-label="Star Emoji">⭐</span> {this.state.averageRatingDecimal}/10</p>
            </div>
            <p>{this.state.movie.overview}</p>
          </div>
          <div className="movie-details">
            <p>Release Date: {this.state.movie.release_date}</p>
            <p>Budget: {budget}</p>
            <p>Runtime: {this.state.movie.runtime} minutes</p>
            <p>Revenue: {revenue}</p>
          </div>
        </div>
        <RatingForm
          foundMovieId={this.props.foundMovieId}
          isLoggedIn={this.props.isLoggedIn}
          updateUserRating={this.props.updateUserRating}
          userId={this.props.userId}
          movie={this.state.movie}
          userRatings ={this.props.userRatings}
          userName={this.props.userName}
          allMovieComments={this.state.allMovieComments}
          formatAvRating={this.formatAvRating}/>
      </div>
    )
  }
}

export default MoviePage
