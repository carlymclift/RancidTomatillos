import React from 'react'
import './MovieContainer.css'
import MovieCard from '../MovieCard/MovieCard'

const MovieContainer = ( {movies, isLoggedIn, userRatings, handleFavorite, determineFavoriteStatus, showPleaseLoginMessage, clearPleaseLoginMessage} ) => {
  const movieCards = movies.map(movie => {
    let foundRating = userRatings.ratings.find(rating => {
        return rating.movie_id === movie.id
    })
    if (foundRating === undefined) {
        foundRating = ''
    } else {
        foundRating = foundRating.rating
    }
    const favoriteStatus = determineFavoriteStatus(movie.id)

    return (<MovieCard
        {...movie}
        key={movie.id}
        isLoggedIn={isLoggedIn}
        rating={foundRating}
        handleFavorite={handleFavorite}
        favoriteStatus={favoriteStatus}
        showPleaseLoginMessage={showPleaseLoginMessage}
        clearPleaseLoginMessage={clearPleaseLoginMessage}
        />)
  })

  return (
      <div className="Movie-container">
          {movieCards}
      </div>
  )
}

export default MovieContainer
