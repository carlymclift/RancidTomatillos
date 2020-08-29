import React from 'react'
import './MovieCard.css'
import { Link } from 'react-router-dom'

const MovieCard = ( {id, title, poster_path, average_rating, release_date, showMovieDetails, isLoggedIn, rating, handleFavorite} ) => {
    const date = {release_date}
    const year = date.release_date.split('-')[0]

    return (
      <Link style={{ textDecoration: 'none' }} to={`movie-details/${id}`}>
        <div role="button" className="Movie-card" key={id} onClick={() => showMovieDetails(id)}>
          <img data-testid="favorite-icon" className="favorite-icon" src="/heart.png" alt="Favorite icon" id={id} onClick={handleFavorite}/>
          <h2>{title}</h2>
          <img className="Movie-card-image" alt="Movie cover" src={poster_path} />
          <p>{average_rating}/10 <span role="img" aria-label="Star Emoji">⭐</span></p>
          {(rating !== 'Add your rating!' && isLoggedIn ) &&
          <p>Your Rating: {rating}/10</p>
          }
          {(rating === 'Add your rating!' && isLoggedIn ) &&
          <button>Rate this movie</button>
          }
          <p>{year}</p>
        </div>
      </Link>
    )
}

export default MovieCard
