import React from 'react';
import { render, screen, fireEvent, getByText, waitFor } from '@testing-library/react';
import App from './App';
import { getAllMovies } from '../NetworkRequests/APIRequests';
import '@testing-library/jest-dom'
jest.mock('../NetworkRequests/APIRequests')

describe('App', () => {
  it('Should have the correct content when rendered', () => {
      render( <App
        header="Rancid Tomatillos"
        button="Home"
        showCorrectPage={jest.fn()} />
      )

      const header = screen.getByRole('heading', {name: 'Rancid Tomatillos'})
      const buttonHome = screen.getByRole('button', {name: 'Home'})
      const buttonLogin = screen.getByRole('button', {name: 'Login'})
      const searchInput = screen.getByPlaceholderText('Search Movies...')

      expect(header).toBeInTheDocument()
      expect(buttonHome).toBeInTheDocument()
      expect(buttonLogin).toBeInTheDocument()
      expect(searchInput).toBeInTheDocument()
  })

  it('Should have default states', () => {
      const app = new App()
      expect(app.state.movies).toEqual([])
      expect(app.state.isLoggedIn).toBe(false)
      expect(app.state.error).toEqual('')
      expect(app.state.pageDisplayed).toBe('home')
      expect(app.state.foundMovieId).toEqual(0)
      expect(app.state.isOpen).toBe(true)
      expect(app.state.showElement).toBe(true)
  })

  it('Should fire a function when the home button is clicked', () => {
    const mockFun = jest.fn()

    render( <App
        header="Rancid Tomatillos"
        button="Home"
        showCorrectPage={mockFun}/>
    )

    const button = screen.getByRole('button', {name: 'Home'})
    fireEvent.click(button)

    expect(mockFun).toBeCalledTimes(0)
  })

  it('should display cards from the server when the app loads', async () => {
    getAllMovies.mockResolvedValueOnce({
      movies: [
        {
          id: 111,
          poster_path: "https://poster_path1.jpg",
          backdrop_path: "https://backdrop_path1.jpg",
          title: "Movie 1",
          average_rating: 1,
          release_date: "2020-01-01"
        },
        {
          id: 222,
          poster_path: "https://poster_path2.jpg",
          backdrop_path: "https://backdrop_path2.jpg",
          title: "Movie 2",
          average_rating: 2,
          release_date: "2020-02-02"
        },
        {
          id: 333,
          poster_path: "https://poster_path3.jpg",
          backdrop_path: "https://backdrop_path3.jpg",
          title: "Movie 3",
          average_rating: 3,
          release_date: "2020-03-03"
        }
      ]
    })
    render(<App />);

    const movieTitle1 = await waitFor(() => screen.getByText('Movie 1'))

    expect(movieTitle1).toBeInTheDocument();
  })
})
