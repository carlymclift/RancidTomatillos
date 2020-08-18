import React, { Component } from 'react'

class APIRequests extends Component {
    componentDidMount() {
        const apiURL = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
        fetch(apiURL) 
            .then((response) => response.json())
            .then((response) => console.log(response))
            .catch(err => console.log(err))
    }

    render() {
        return 'hi'
    }
}

export default APIRequests

// const getAllMovies = () => {
//     return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .catch(err => console.log(err))
// }