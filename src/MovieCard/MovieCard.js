import React from 'react'
import './MovieCard.css'
import { Link } from 'react-router-dom'

const MovieCard = ( {id, title, poster_path, average_rating, release_date, isLoggedIn, rating, handleFavorite, favoriteStatus, showPleaseLoginMessage, clearPleaseLoginMessage} ) => {
    const date = {release_date}
    const year = date.release_date.split('-')[0]
    const roundedRating = Math.round(average_rating)

    const iconStatus = () => {
      if(favoriteStatus) {
        return 'active'
      }
      if(!favoriteStatus) {
        return 'inactive'
      }
    }
    return (
      <Link style={{ textDecoration: 'none' }} to={`movie-details/${id}`}>
        <div role="button" className='Movie-card' key={id}>
          <div className='favorite-icon-container'>
            {(!isLoggedIn) &&
              <>
                <p className='favorite-warning-message hidden' id={`message-${id}`}>Please log in to use this feature</p>
                <img data-testid="favorite-icon" className="favorite-icon inactive" src="/heart.png" alt="Favorite icon" id={id} onMouseEnter={showPleaseLoginMessage} onMouseLeave={clearPleaseLoginMessage}/>
              </>
            }
            {(isLoggedIn) &&
              <img data-testid="favorite-icon" className={`favorite-icon ${iconStatus()}`} src="/heart.png" alt="Favorite icon" id={id} onClick={handleFavorite}/>
            }
          </div>
          <h2>{title}</h2>
          <img className="Movie-card-image" alt="Movie cover" src={poster_path} />
          <p>{roundedRating}/10 <span role="img" aria-label="Star Emoji">⭐</span></p>
          {(rating !== '' && isLoggedIn ) &&
          <p>Your Rating: {rating}/10</p>
          }
          {(rating === '' && isLoggedIn ) &&
          <button>Rate this movie</button>
          }
          <p>{year}</p>
        </div>
      </Link>
    )
}

export default MovieCard
