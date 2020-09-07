import React from 'react'
import Login from './Login'
import { screen, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom';

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

    it('Should call  when the submit button is clicked', () => {
        const mockFun = jest.fn()
        const mockPropFun = jest.fn()

        render( <Login
            Login="Login"
            button="Submit"
            runChange={mockFun}
            action={mockPropFun} />
        )

        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(mockFun).toBeCalledTimes(0)
    })
})