// const apiRequests = {
//   getAllMovies() {
//     fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
//     .then(response => response.json())
//     .then()
//     .catch(error => console.log(error))
//     return response
//   }
// }

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
  console.log(response)
  return ratings
}

export const addMovieRating = async (userId, id, rating) => {
  const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings`, {
      "method": "POST",
      "headers": {
          "content-type": "application/json"
      },
      "body": JSON.stringify({
        "movie_id": id,
        "rating": rating
      })
    }
  )
  const message = await response.json()
  return message
}
