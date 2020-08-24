import React, { Component } from "react";
import './MoviePage.css';
import { getAllUserRatings } from '../NetworkRequests/APIRequests'

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
      userRating: ''
    };
    this.formatBudgetAndRevenue = this.formatBudgetAndRevenue.bind(this)
    this.findUserRatingsForFoundMovie = this.findUserRatingsForFoundMovie.bind(this);
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.foundMovieId}`)
      .then(response => response.json())
      .then(data => data.movie)
      .then(movieData => {
        this.setState({
        average_rating: movieData.average_rating,
        backdrop_path: movieData.backdrop_path,
        budget: movieData.budget,
        genres: movieData.genres,
        id: movieData.id,
        overview: movieData.overview,
        poster_path: movieData.poster_path,
        release_date: movieData.release_date,
        revenue: movieData.revenue,
        runtime: movieData.runtime,
        tagline: movieData.tagline,
        title: movieData.title,
        })
      })
      this.findUserRatingsForFoundMovie()
  }

  formatBudgetAndRevenue(x) {
    if (x === 0) {
      return 'Not Available'
    } else {
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
      this.setState({userRating: `You rated this movie: ${userRating.rating}`})
    }
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
            <p>{this.state.userRating}</p>
          </div>
          {(this.props.isLoggedIn && this.state.userRating === 'You haven\'t rated this movie yet') &&
            <div className="addRating">
              <p>Add rating form</p>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default MoviePage
