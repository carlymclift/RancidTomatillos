import React from 'react'
import './MovieContainer.css'

const MovieContainer = ( {movies} ) => {
    const movieTitles = movies.map(movie => {
        return movie.title
    })
    return (
        <div className="Movie-container"> 
            {movieTitles}
        </div>
    )
}

export default MovieContainer