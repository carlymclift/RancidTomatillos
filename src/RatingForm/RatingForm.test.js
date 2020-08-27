import React from 'react'
import RatingForm from './RatingForm'
import { screen, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom';
import { addMovieRating, getAllUserRatings } from '../NetworkRequests/APIRequests'
jest.mock('../NetworkRequests/APIRequests')

describe('RatingForm', () => {
  it('Should have the correct content when rendered', () => {
    render(<RatingForm />)

    const heading = screen.getByRole('heading', {name: 'Add Review'})

    expect(heading).toBeInTheDocument();
  })

  it('Should run a method when the value of the select is changed', () => {
    const ratingForm = render(<RatingForm />);
    ratingForm.updateForm = jest.fn()
    
    const select = screen.getByDisplayValue('Submit')
    
    fireEvent.change(select, {
      target: { value: 3 }
    });
    
    expect(ratingForm.updateForm).toBeCalledTimes(0)
  })

  it('Should make an API Request (POST) when the form is submitted', () => {
    const updateUserRating = jest.fn()

    getAllUserRatings.mockResolvedValue({
      ratings: [
        {
          id: 1784,
          user_id: 68,
          movie_id: 620,
          rating: 9,
          created_at: "2020-08-25T21:50:05.546Z",
          updated_at: "2020-08-25T21:50:05.546Z"
        }
      ]
    })
    
    render(<RatingForm
      props={{
        userId: 1,
        foundMovieId: 999,
        updateUserRating: updateUserRating
      }}
      />)

    const selectElement = screen.getByDisplayValue('Submit')

    fireEvent.submit(selectElement, {
      target: { value: 3 }
    })

    expect(addMovieRating).toBeCalledTimes(1)
    expect(updateUserRating).toBeCalledTimes(0)
  })
})
