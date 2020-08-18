import React from 'react'
import './MovieContainer.css'
import MovieCard from './MovieCard'

const MovieContainer = ( {movies} ) => {
    const movieCards = movies.map(movie => {
        return (<MovieCard {...movie}/>)
    })
    return (
        <div className="Movie-container"> 
            {movieCards}
        </div>
    )
}

export default MovieContainer