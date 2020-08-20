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
  const data = await response.json();
  return data;
}

// export default apiRequests
