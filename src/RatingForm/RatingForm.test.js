import React from 'react'
import RatingForm from './RatingForm'
import { screen, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { getMovieComments} from '../NetworkRequests/APIRequests'
jest.mock('../NetworkRequests/APIRequests')

describe('RatingForm', () => {

  let userRatings, allMovieComments, movie

  beforeEach(() => {
    userRatings = {
      ratings: [
        {
        "id": 2302,
        "user_id": 68,
        "movie_id": 539885,
        "rating": 7,
        "created_at": "2020-09-01T16:01:01.137Z",
        "updated_at": "2020-09-01T16:01:01.137Z"
        },
        {
        "id": 2303,
        "user_id": 68,
        "movie_id": 149,
        "rating": 10,
        "created_at": "2020-09-01T16:02:33.438Z",
        "updated_at": "2020-09-01T16:02:33.438Z"
        }
      ]
    }

    allMovieComments = [
      {
      comment: "They don't make films like this anymore. There is a reason why the anime industry went into a crash shortly after this film was produced. Animation studios couldn't reach the bars set by this movie.",
      author: "Michael B",
      movieId: 149
      },
      { 
      comment: "This movie is (in my opinion) the best anime of all time. The graphics for this movie are great, especially the time being. This movie is never talked about anymore but deserves to be. If this movie wasn't made then we wouldn't be talking about anime today. Its violence and action are astonishing, it is very complex, and overall, maybe the best movie of all time.",
      author: "Liam H",
      movieId: 149
      }
    ]

    movie = {
      id: 111,
      poster_path: "https://poster_path1.jpg",
      backdrop_path: "https://backdrop_path1.jpg",
      title: "Movie 1",
      average_rating: 1,
      release_date: "2020-01-01"
  }
  })

  it('Should have the correct content when rendered', () => {
    
    render(
      <MemoryRouter>
        <RatingForm 
        userId={1}
        userName={'Liam H'}
        foundMovieId={999}
        allMovieComments={allMovieComments}
        userRatings={userRatings}
        />
      </MemoryRouter>
    )

    const heading = screen.getByRole('heading', {name: 'User Reviews'})
    const loginButton = screen.getByRole('link', {name: 'Login'})
    const emoji = screen.getByRole('img', {name: 'User Emoji'})

    expect(heading).toBeInTheDocument()
    expect(loginButton).toBeInTheDocument()
    expect(emoji).toBeInTheDocument()
  })

  it('Should run a method on page load', () => {
    const findUserRatingsForFoundMovie = jest.fn()

    getMovieComments.mockResolvedValue({
      comments: [
        {
        comment: "They don't make films like this anymore. There is a reason why the anime industry went into a crash shortly after this film was produced. Animation studios couldn't reach the bars set by this movie.",
        author: "Michael B",
        movieId: 149
        },
        { 
        comment: "This movie is (in my opinion) the best anime of all time. The graphics for this movie are great, especially the time being. This movie is never talked about anymore but deserves to be. If this movie wasn't made then we wouldn't be talking about anime today. Its violence and action are astonishing, it is very complex, and overall, maybe the best movie of all time.",
        author: "Liam H",
        movieId: 149
        }
      ]
    }) 

    render(
      <MemoryRouter>
        <RatingForm 
        userId={1}
        userName={'Liam H'}
        foundMovieId={999}
        isLoggedIn={true}
        allMovieComments={allMovieComments}
        userRatings={userRatings}
        movie={movie}
        />
      </MemoryRouter>
    )
    
    expect(findUserRatingsForFoundMovie).toBeCalledTimes(0)
  })
})