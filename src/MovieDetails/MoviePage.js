import React, { Component } from "react";
import './MoviePage.css';
import { getSingleMovieDetails } from "../NetworkRequests/APIRequests";

class MoviePage extends Component {
  constructor( {foundMovieId} ) {
    super();
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
    };
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
  }

  render() {
    return (
      <div className="Movie-Page" style={{
        backgroundImage: `url(${this.state.backdrop_path})`}}>
        <div className="Movie-Page-Container">
          <h2>{this.state.title}</h2>
          <p>{this.tagline}</p>
          <img src={this.state.poster_path} />
          <p>{this.state.overview}</p>
          <div className="movie-details">
            <p>Release Date: {this.state.release_date}</p>
            <p>Budget: {!this.state.budget && 'Not available!'}</p>
            <p>Runtime: {this.state.runtime} minutes</p>
            <p>Revenue: {!this.state.revenue && 'Not available!'}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MoviePage
