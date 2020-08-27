import React from 'react'
import MovieContainer from './MovieContainer'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';

describe('MovieContainer', () => {
  it('should render a number of movies equal to the length of the array passed in', () => {
    const movies = [
      {
        id: 111,
        title: 'Movie 1',
        poster_path: 'www.movie1_poster.com',
        backdrop_path: 'www.movie1_backdrop.com',
        average_rating: 1,
        release_date: '2020-01-01'
      },
      {
        id: 2,
        title: 'Movie 2',
        poster_path: 'www.movie2_poster.com',
        backdrop_path: 'www.movie2_backdrop.com',
        average_rating: 2,
        release_date: '2020-02-02'
      }
    ]

    const userRatings = {
      ratings: [
      {
        id: 1784,
        user_id: 68,
        movie_id: 620,
        rating: 9,
        created_at: "2020-08-25T21:50:05.546Z",
        updated_at: "2020-08-25T21:50:05.546Z"
      },
      {
        id: 1778,
        user_id: 68,
        movie_id: 999,
        rating: 9,
        created_at: "2020-08-25T21:50:05.546Z",
        updated_at: "2020-08-25T21:50:05.546Z"
      }
    ]
  }

    const mockShowMovieDetails = jest.fn()

    render(
      <MemoryRouter>
        <MovieContainer
          movies={movies}
          showMovieDetails={mockShowMovieDetails}
          userRatings= {userRatings}
        />
      </MemoryRouter>  
    )

    const headingOne = screen.getByRole('heading', {name: 'Movie 1'})
    const headingTwo = screen.getByRole('heading', {name: 'Movie 2'})
    const ratingOne = screen.getByText('1/10')
    const ratingTwo = screen.getByText('2/10')

    expect(headingOne).toBeInTheDocument();
    expect(headingTwo).toBeInTheDocument();
    expect(ratingOne).toBeInTheDocument();
    expect(ratingTwo).toBeInTheDocument();
  })
})
