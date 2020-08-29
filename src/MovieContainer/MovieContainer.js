import React from 'react'
import './MovieContainer.css'
import MovieCard from '../MovieCard/MovieCard'

const MovieContainer = ( {movies, showMovieDetails, isLoggedIn, userRatings, handleFavorite} ) => {
    const movieCards = movies.map(movie => {
        let foundRating = userRatings.ratings.find(rating => {
            return rating.movie_id === movie.id
        })
        if (foundRating === undefined) {
            foundRating = 'Add your rating!'
        } else {
            foundRating = foundRating.rating
        }

        return (<MovieCard {...movie} key={movie.id} showMovieDetails={showMovieDetails} isLoggedIn={isLoggedIn} rating={foundRating} handleFavorite={handleFavorite}/>)
  })

  return (
      <div className="Movie-container">
          {movieCards}
      </div>
  )
}

export default MovieContainer
