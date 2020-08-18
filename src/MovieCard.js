import React from 'react'

const MovieCard = ( {id, title, poster_path, backdrop_path, average_rating, release_date} ) => {
    return (
        <div className="Movie-card">
            <h2>{title}</h2>
            <p>{average_rating}</p>
            <p>{release_date}</p>
        </div>
    )
}

export default MovieCard