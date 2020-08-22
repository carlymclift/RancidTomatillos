import React from 'react'
import './MovieContainer.css'
import MovieCard from './MovieCard'

const MovieContainer = ( {movies, getMovieId} ) => {
    const movieCards = movies.map(movie => {
        return (<MovieCard key={movie.id} {...movie} />)
    })
    return (
        <div className="Movie-container"> 
            {movieCards}
        </div>
    )
}

export default MovieContainer