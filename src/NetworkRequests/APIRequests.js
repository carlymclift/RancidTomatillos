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
  console.log(ratings)
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

export const removeRating = async (userId, ratingId) => {
  const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings/${ratingId}`, {
    "method": "DELETE"
  })
  const message = await response
  console.log(message)
  return message
}

export const addMovieComment = async (movieId, comment, name) => {
  const response = await fetch(`http://localhost:3001/api/v1/movies/${movieId}/comments`, {
    "method": "POST",
    "headers": {
          "content-type": "application/json"
      }, 
      "body": JSON.stringify({
          "comment": comment,
          "author": name
      })

  })
  const message = await response.json()
  console.log(message)
  return message;
}

export const getMovieComments = async (movieId) => {
  const response = await fetch(`http://localhost:3001/api/v1/movies/${movieId}/comments`)
  const message = await response.json();
  console.log(message)
  return message;
}
