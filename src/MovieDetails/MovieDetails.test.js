import React from 'react';
import MoviePage from './MoviePage';
import { screen, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('MoviePage', () => {
  it('Should have the correct content rendered', () => {
    //Not sure how to test here, since our fetch is currently what  populates this data! I think we'll need to move the fetch request in to our API Requests file to be able to unit test this better. -JKW
    render(
      <MoviePage />
    )

    // screen.debug()

    const title = screen.getByRole("heading")
    const favoriteIcon = screen.getByTestId("favorite-icon-large")

    expect(title).toBeInTheDocument()
    expect(favoriteIcon).toBeInTheDocument()
  })
})
