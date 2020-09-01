import React from 'react';
import MoviePage from './MoviePage';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getSingleMovieDetails, getMovieComments } from '../NetworkRequests/APIRequests'
import { MemoryRouter } from 'react-router-dom';
jest.mock('../NetworkRequests/APIRequests')

describe('MoviePage', () => {
  it('Should have the correct content rendered', () => {
    const determineFavoriteStatus = jest.fn()

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

    getSingleMovieDetails.mockResolvedValue({
      movie: {
        id: 999,
        title: "Inception",
        poster_path: "https://image.tmdb.org/t/p/original//9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original//s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
        release_date: "2010-07-15",
        overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
        genres: [
            "Action",
            "Science Fiction",
            "Adventure"
          ],
        budget: 160000000,
        revenue: 825532764,
        runtime: 148,
        tagline: "Your mind is the scene of the crime.",
        average_rating: 5.25
        }
      })

      getMovieComments.mockResolvedValue({
        comments: [
          {
          comment: "They don't make films like this anymore. There is a reason why the anime industry went into a crash shortly after this film was produced. Animation studios couldn't reach the bars set by this movie.",
          author: "Michael B",
          movieId: 999
          },
          { 
          comment: "This movie is (in my opinion) the best anime of all time. The graphics for this movie are great, especially the time being. This movie is never talked about anymore but deserves to be. If this movie wasn't made then we wouldn't be talking about anime today. Its violence and action are astonishing, it is very complex, and overall, maybe the best movie of all time.",
          author: "Liam H",
          movieId: 999
          }
        ]
      }) 

    render(
      <MemoryRouter>
        <MoviePage 
            foundMovieId={999}
            userRatings= {userRatings}
            isLoggedIn= {true}
            userId= {68}
            determineFavoriteStatus={determineFavoriteStatus}
        />
      </MemoryRouter>
      )
      
    const title = screen.getByRole("heading")
    const favoriteIcon = screen.getByTestId("favorite-icon-large")

    expect(title).toBeInTheDocument()
    expect(favoriteIcon).toBeInTheDocument()
  })
})
