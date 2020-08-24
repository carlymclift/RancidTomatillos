import React from 'react'
import './MovieCard.css'

const MovieCard = ( {id, title, poster_path, average_rating, release_date, showMovieDetails, isLoggedIn, rating} ) => {
    const date = {release_date}
    const year = date.release_date.split('-')[0]

    return (
        <div role="button" className="Movie-card" key={id} onClick={() => showMovieDetails(id)}>
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
    )
}

export default MovieCard
