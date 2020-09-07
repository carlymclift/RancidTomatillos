import Header from './Header'
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
    it('Should render the correct content when a user is not logged in', () => {
        render(<MemoryRouter> 
            <Header 
                isLoggedIn={false}
            />
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

    it('Should render the correct content when a user is logged in', () => {
        render(<MemoryRouter>
            <Header 
                isLoggedIn={true}
                user={
                    {
                        name: 'Cher',
                        id: 1,
                        email: 'cher@turing.io'
                    }
                }
            />
        </MemoryRouter>)

        const websiteHeader = screen.getByRole('heading', { name: 'Rancid Tomatillos' })
        const homeButton = screen.getByRole('link', { name: 'Home' })
        const logoutButton = screen.getByRole('link', { name: 'Logout' })
        const favoritesButton = screen.getByRole('link', { name: 'Favorites' })
        const welcomeMessage = screen.getByRole('heading', { name: 'Welcome, Cher!' })

        expect(websiteHeader).toBeInTheDocument();
        expect(homeButton).toBeInTheDocument();
        expect(logoutButton).toBeInTheDocument();
        expect(favoritesButton).toBeInTheDocument();
        expect(welcomeMessage).toBeInTheDocument();
    })

    it('Should fire a logOut method when the Logout Button is clicked', () => {
        const mockLogOut = jest.fn()

        render(<MemoryRouter>
            <Header 
                isLoggedIn={true}
                user={
                    {
                        name: 'Cher',
                        id: 1,
                        email: 'cher@turing.io'
                    }
                }
                logOut={mockLogOut}
            />
        </MemoryRouter>)

        const logoutButton = screen.getByRole('link', { name: 'Logout' })
        fireEvent.click(logoutButton)
        
        expect(mockLogOut).toBeCalledTimes(1)
    })
})