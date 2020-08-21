import React from 'react'
import './MovieCard.css'

const handleClick = (event) => {
    console.log(event.target.id)
}

const MovieCard = ( {id, title, poster_path, backdrop_path, average_rating, release_date} ) => {
    const date = {release_date}
    const year = date.release_date.split('-')[0]
 
    return (
        <div className="Movie-card" onClick={handleClick}>
            <h2>{title}</h2>
            <img className="Movie-card-image" id={id} alt="Movie cover" src={poster_path} />
            <p>{average_rating}/10 <span role="img" aria-label="Star Emoji">⭐</span></p>
            <p>{year}</p>
        </div>
    )
}

export default MovieCard