import React from 'react'
import Login from './Login'
import { screen, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom';

describe('Login', () => {
    it('Should have the correct content when rendered', () => {
        render( <Login
                    Login="Login"
                    button="Submit"
                    runChange={jest.fn()} />
        )
            // un-comment below code to see the console of the whole element 
        // screen.debug()

        const login = screen.getByText('Login')
        const buttonText = screen.getByText('Submit')
        const button = screen.getByRole('button')
    

        expect(login).toBeInTheDocument()
        expect(buttonText).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    })

    it('Should fire a function when the submit button is clicked', () => {
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
import '@testing-library/jest-dom'

describe('Login', () => {
  describe('Login Form', () => {
    beforeEach(() => {
      render(<Login />)
    });

    it('should have a header that says "Login"', () => {
      const loginHeading = screen.getByRole('heading', {name: 'Login'})

      expect(loginHeading).toBeInTheDocument();
    })

    it('should have a username input', () => {
      const usernameInput = screen.getByPlaceholderText('Email')

      expect(usernameInput).toBeInTheDocument();
    })

    it('should have a password input', () => {
      const passwordInput = screen.getByPlaceholderText('Password')

      expect(passwordInput).toBeInTheDocument();
    })

    it('should have a button', () => {
      const submitButton = screen.getByRole('button')

      expect(submitButton).toBeInTheDocument();
    })
  })
})
