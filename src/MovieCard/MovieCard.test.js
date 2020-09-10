import React from 'react'
import MovieCard from './MovieCard'
import { screen, fireEvent, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('MovieCard', () => {
  it('Should have the correct content rendered', () => {
      render(
        <MemoryRouter>
          <MovieCard
            id={1}
            title="Zombie People"
            poster_path="www.google.com"
            average_rating="9"
            release_date="2020"
          />
        </MemoryRouter>
      )

      const title = screen.getByText("Zombie People")
      const release_date = screen.getByText("2020")
      const average_rating = screen.getByText("9", { exact: false })
      const favIcon = screen.getByAltText('Favorite icon')

      expect(title).toBeInTheDocument()
      expect(release_date).toBeInTheDocument()
      expect(average_rating).toBeInTheDocument()
      expect(favIcon).toBeInTheDocument()
  })

  it('should fire a method (handleFavorite) if a user is logged in and the favorite icon is clicked', () => {
    const mockHandleFavorite = jest.fn()

    render(
      <MemoryRouter>
        <MovieCard
          id={1}
          title="Zombie People"
          poster_path="www.google.com"
          average_rating="9"
          release_date="2020"
          isLoggedIn={true}
          handleFavorite={mockHandleFavorite}
        />
      </MemoryRouter>
    )
    screen.debug()
    
    const favoriteIcon = screen.getByAltText('Favorite icon')
    fireEvent.click(favoriteIcon)

    expect(mockHandleFavorite).toBeCalledTimes(1)
  })
})
