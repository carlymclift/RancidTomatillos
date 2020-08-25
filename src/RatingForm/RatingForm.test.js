import React from 'react'
import RatingForm from './RatingForm'
import { screen, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom';
import { addMovieRating } from '../NetworkRequests/APIRequests'
jest.mock('../NetworkRequests/APIRequests')

describe('RatingForm', () => {
  it('Should have the correct content when rendered', () => {
    render(<RatingForm />)
    screen.debug()
    const heading = screen.getByRole('heading', {name: 'Add Review'})

    expect(heading).toBeInTheDocument();
  })
})
