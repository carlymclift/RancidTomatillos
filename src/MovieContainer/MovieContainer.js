import React from 'react'
import './MovieContainer.css'
import MovieCard from './MovieCard'

const MovieContainer = ( {movies, showMovieDetails} ) => {
    const movieCards = movies.map(movie => {
        return (<MovieCard {...movie} key={movie.id} showMovieDetails={showMovieDetails}/>)
    })
    return (
        <div className="Movie-container">
            {movieCards}
        </div>
    )
}

export default MovieContainer
