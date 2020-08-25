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

  it('Should run a method when the value of the select is changed', () => {
    const ratingForm = render(<RatingForm />);
    ratingForm.updateForm = jest.fn()
    const select = screen.getByRole('combobox')

    fireEvent.change(select, {
      target: { value: 3 }
    });

    expect(onChangeMock).toBeCalledTimes(1)
  })

})
