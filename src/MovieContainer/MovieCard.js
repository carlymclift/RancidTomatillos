import React from 'react'
import './MovieCard.css'

const MovieCard = ( {id, title, poster_path, backdrop_path, average_rating, release_date, showMovieDetails} ) => {
    const date = {release_date}
    const year = date.release_date.split('-')[0]

    return (
        <div role="button" className="Movie-card" key={id} onClick={() => showMovieDetails(id)}>
            <h2>{title}</h2>
            <img className="Movie-card-image" id={id} alt="Movie cover" src={poster_path} />
            <p>{average_rating}/10 <span role="img" aria-label="Star Emoji">⭐</span></p>
            <p>{year}</p>
        </div>
    )
}

export default MovieCard
