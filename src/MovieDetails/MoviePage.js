import React, { Component } from "react";
import './MoviePage.css';
import { removeRating, getSingleMovieDetails } from '../NetworkRequests/APIRequests'
import RatingForm from '../RatingForm/RatingForm'

class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      average_rating: 0,
      backdrop_path: '',
      budget: 0,
      genres: [],
      id: 0,
      overview: '',
      poster_path: '',
      release_date: '',
      revenue: 0,
      runtime: 0,
      tagline: '',
      title: '',
      userRating: '',
      userRatingObj: {}
    };
    this.formatBudgetAndRevenue = this.formatBudgetAndRevenue.bind(this)
    this.findUserRatingsForFoundMovie = this.findUserRatingsForFoundMovie.bind(this);
    this.deleteRating = this.deleteRating.bind(this)
  }

  async componentDidMount() {
    try {
      const movie = await getSingleMovieDetails(this.props.foundMovieId)
      const movieInfo = movie.movie

      this.setState({
        average_rating: movieInfo.average_rating,
        backdrop_path: movieInfo.backdrop_path,
        budget: movieInfo.budget,
        genres: movieInfo.genres,
        id: movieInfo.id,
        overview: movieInfo.overview,
        poster_path: movieInfo.poster_path,
        release_date: movieInfo.release_date,
        revenue: movieInfo.revenue,
        runtime: movieInfo.runtime,
        tagline: movieInfo.tagline,
        title: movieInfo.title,
      })
    } catch (error) {
      this.setState({error: error})
    }
    this.findUserRatingsForFoundMovie()
  }

  formatBudgetAndRevenue(x) {
    if (x === 0) {
      return 'Not Available'
    } 
    else {
      let numWithCommas = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      return `$${numWithCommas}`
    }
  }

  findUserRatingsForFoundMovie() {
    const userRating = this.props.userRatings.ratings.find(rating => {
      return this.props.foundMovieId === rating.movie_id
    })

    if (userRating === undefined && this.props.isLoggedIn) {
      this.setState({userRating: 'You haven\'t rated this movie yet'})
    } else if (!this.props.isLoggedIn) {
      this.setState({userRating: 'Log in to rate this movie'})
    } else {
      this.setState({userRating: `You rated this movie: ${userRating.rating}`, userRatingObj: userRating})
    }
  }

  deleteRating() {
    const ratingId = this.state.userRatingObj.id
    removeRating(this.props.userId, ratingId)
  }

  render() {
    let budget = this.formatBudgetAndRevenue(this.state.budget)
    let revenue = this.formatBudgetAndRevenue(this.state.revenue)

    return (
      <div className="Movie-Page" style={{
        backgroundImage: `url(${this.state.backdrop_path})`}}>
        <div className="Movie-Page-Container">
        <img src={this.state.poster_path} alt="Movie poster"/>
          <div className="movie-body">
            <h1>{this.state.title}</h1>
            <p>{this.tagline}</p>
            <p>{this.state.overview}</p>
          </div>
          <div className="movie-details">
            <p>Release Date: {this.state.release_date}</p>
            <p>Budget: {budget}</p>
            <p>Runtime: {this.state.runtime} minutes</p>
            <p>Revenue: {revenue}</p>
            <p>Average Rating: {this.state.average_rating}</p>
            <div>
            <p>{this.state.userRating}</p>
            {(this.props.isLoggedIn && this.state.userRating === `You rated this movie: ${this.state.userRatingObj.rating}`) &&
              <button onClick={this.deleteRating}>Delete</button>
            }
            </div>
          </div>
            {(this.props.isLoggedIn && this.state.userRating === 'You haven\'t rated this movie yet') &&
              <div className="addRatingForm">
                <h2>Review {this.state.title}</h2>
                <RatingForm props={this.props}/>
              </div>
            }
        </div>
      </div>
    )
  }
}

export default MoviePage
