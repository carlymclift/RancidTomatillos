import React from 'react';
import MoviePage from './MoviePage';
import { screen, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('MoviePage', () => {
  it('Should have the correct content rendered', () => {
    render(
      <MoviePage
        average_rating={8}
        backdrop_path='www.backdrop_path.com'
        budget={365000}
        genres={['Action', 'Romance']}
        id={999}
        overview='A romantic action movie'
        poster_path='www.poster_path.com'
        release_date='1/9/2019'
        revenue={500000}
        runtime={175}
        tagline='A tale as old as time'
        title='The Best Movie Ever'
      />
    )

    // screen.debug()

    const title = screen.getByRole("heading")

    expect(title).toBeInTheDocument()
  })
})
