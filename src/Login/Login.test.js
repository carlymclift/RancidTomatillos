import React from 'react';
import Login from './Login';
import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { submitLogin } from '../NetworkRequests/APIRequests'
jest.mock('../NetworkRequests/APIRequests')

describe('Login', () => {
    it('Should have the correct content when rendered', () => {
        render( <Login />
        )
        
        const loginHeading = screen.getByRole('heading', {name: 'Login'})
        const buttonText = screen.getByText('Submit')
        const button = screen.getByRole('button')
        const usernameInput = screen.getByPlaceholderText('Email')
        const passwordInput = screen.getByPlaceholderText('Password')
        const submitButton = screen.getByRole('button')
            
        expect(submitButton).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(usernameInput).toBeInTheDocument();
        expect(loginHeading).toBeInTheDocument();
        expect(buttonText).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    })

    it('Should change it\'s input values on change', () => {
        render(<Login />)

        const usernameInput = screen.getByPlaceholderText('Email')
        const passwordInput = screen.getByPlaceholderText('Password')

        fireEvent.change(usernameInput, { target: { value: 'cher@turing.io' } })
        fireEvent.change(passwordInput, { target: { value: 'xyz789' } } )

        expect(usernameInput.value).toBe('cher@turing.io')
        expect(passwordInput.value).toBe('xyz789')
    })

    it('Should display an error message for a bad login POST', async () => {
        submitLogin.mockResolvedValueOnce({
            error: 'Username or password is incorrect'
        })

        render(<Login />)

        const usernameInput = screen.getByPlaceholderText('Email')
        const passwordInput = screen.getByPlaceholderText('Password')

        fireEvent.change(usernameInput, { target: { value: 'cherturingio' } })
        fireEvent.change(passwordInput, { target: { value: '[0w49u9rtq30[9u' } } )

        const button = screen.getByRole('button')
        fireEvent.click(button)

        const loginError = await waitFor(() => screen.getByText('Invalid login information'))

        expect(loginError).toBeInTheDocument();
    })

    it.skip('Should call a logIn function when the submit button is clicked', () => {
        const mockLogIn = jest.fn()

        submitLogin.mockResolvedValueOnce({
            "user": {
                "id": 1,
                "name": "Cher",
                "email": "cher@turing.io"
            }
        })

        render( <Login login={mockLogIn}/> )

        const usernameInput = screen.getByPlaceholderText('Email')
        const passwordInput = screen.getByPlaceholderText('Password')

        fireEvent.change(usernameInput, { target: { value: 'cher@turing.io' } })
        fireEvent.change(passwordInput, { target: { value: 'xyz789' } } )

        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(mockLogIn).toBeCalledTimes(1)
    })

    it('Should clear it\'s inputs after the submit button is clicked (for both valid log in & not)', () => {
        const mockLogIn = jest.fn()

        submitLogin.mockResolvedValueOnce({
            error: 'Username or password is incorrect'
        })

        submitLogin.mockResolvedValueOnce({
            "user": {
                "id": 2,
                "name": "Madonna",
                "email": "madonna@turing.io"
            }
        })

        render( <Login login={mockLogIn} />) 

        const usernameInput = screen.getByPlaceholderText('Email')
        const passwordInput = screen.getByPlaceholderText('Password')
        const submitButton = screen.getByRole('button')

        fireEvent.change(usernameInput, { target: { value: 'madonnaturing.io' } })
        fireEvent.change(passwordInput, { target: { value: 'asdf' } } )
        expect(usernameInput.value).toBe('madonnaturing.io')
        expect(passwordInput.value).toBe('asdf')
        
        fireEvent.click(submitButton)
        expect(usernameInput.value).toBe('')
        expect(passwordInput.value).toBe('')

        fireEvent.change(usernameInput, { target: { value: 'madonna@turing.io' } })
        fireEvent.change(passwordInput, { target: { value: 'xyz789' } } )
        expect(usernameInput.value).toBe('madonna@turing.io')
        expect(passwordInput.value).toBe('xyz789')

        fireEvent.click(submitButton)
        expect(usernameInput.value).toBe('')
        expect(passwordInput.value).toBe('')
    })
})