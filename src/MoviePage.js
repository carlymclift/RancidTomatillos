import React, { Component } from "react";
// import './MoviePage.scss';
import { getSingleMovieDetails } from "./APIRequests";

class MoviePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // componentDidMount() {
  //   this.getMovieDetails();
  // }

  // getMovieDetails = async () => {
  //   try {
  //     const data = await getSingleMovieDetails(this.id)
  //     this.setState({
  //       title: data.movie.title,
  //       releaseDate: data.movie.release_date,
  //       backDrop: data.movie.backdrop_path,
  //       overview: data.movie.overview,
  //       genres: data.movie.genres,
  //       budget: data.movie.budget,
  //       revenue: data.movie.revenue,
  //       runtime: data.movie.runtime,
  //       tagLine: data.movie.tagline,
  //       averageRating: data.movie.average_rating
  //     });
  //   } catch (error) {
  //     this.setState({error});
  //   }
  // }

  render() {
    return "hi"
  }
}

export default MoviePage