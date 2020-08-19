import React from 'react'
import './MovieCard.css'
// import { getMovieDetails } from './MoviePage'

const handleClick = (event) => {
    console.log(event.target.id)
}

const MovieCard = ( {id, title, poster_path, backdrop_path, average_rating, release_date} ) => {
    
    return (
        <div className="Movie-card" id={id} onClick={handleClick}>
            <h2>{title}</h2>
            <img className="Movie-card-image" alt="Movie cover" src={poster_path} />
            <p>Average Rating: {average_rating}</p>
            <p>Release Date: {release_date}</p>
        </div>
    )
}

export default MovieCard