import React from 'react'
import './MovieContainer.css'
import MovieCard from '../MovieCard/MovieCard'

const MovieContainer = ( {movies, showMovieDetails, userId, isLoggedIn} ) => {
  const movieCards = movies.map(movie => {
      return (<MovieCard {...movie} key={movie.id} showMovieDetails={showMovieDetails} userId={userId} isLoggedIn={isLoggedIn}/>)
  })

  return (
      <div className="Movie-container">
          {movieCards}
      </div>
  )
}

export default MovieContainer
