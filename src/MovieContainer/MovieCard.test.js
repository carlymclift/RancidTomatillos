import React from 'react'
import MovieCard from './MovieCard'
import { screen, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom';

describe('MovieCard', () => {
    it('Should have the correct content rendered', () => {
        render(
            <MovieCard
            id={1}
            title="Zombie People"
            poster_path="www.google.com"
            average_rating="9"
            release_date="2020"
            />
        )

        const title = screen.getByText("Zombie People")
        const release_date = screen.getByText("2020")
        const average_rating = screen.getByText("9", { exact: false })

        expect(title).toBeInTheDocument()
        expect(release_date).toBeInTheDocument()
        expect(average_rating).toBeInTheDocument()
    })
})