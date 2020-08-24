export const getAllMovies = async () => {
    const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    const data = await response.json()
    return data
}

export const getSingleMovieDetails = async (movieID) => {
  const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
  const data = await response.json()
  return data;
}

export const getAllUserRatings = async (userId) => {
  const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings`)
  const ratings = await response.json()
  return ratings
}

export const addMovieRating = async (userId, movieId, rating) => {
  const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings`, {
      "method": "POST",
      "headers": {
          "content-type": "application/json"
      },
      "body": JSON.stringify({
        "movie_id": movieId,
        "rating": rating
      })
    }
  )
  const message = await response.json()
  console.log(message)
  return message
}
