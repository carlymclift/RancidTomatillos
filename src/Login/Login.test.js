import React from 'react'
import Login from './Login'
import { screen, fireEvent, render } from '@testing-library/react'
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
