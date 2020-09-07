import Header from './Header'
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
    it('should render the correct content on load', () => {
        render(<MemoryRouter> 
            <Header />
        </MemoryRouter>)

        const websiteHeader = screen.getByRole('heading', { name: 'Rancid Tomatillos' })
        const homeButton = screen.getByRole('link', { name: 'Home' })
        const loginButton = screen.getByRole('link', { name: 'Login' })
        const welcomeMessage = screen.getByRole('heading', { name: 'Welcome!' })

        expect(websiteHeader).toBeInTheDocument();
        expect(homeButton).toBeInTheDocument();
        expect(loginButton).toBeInTheDocument();
        expect(welcomeMessage).toBeInTheDocument();
    })
})