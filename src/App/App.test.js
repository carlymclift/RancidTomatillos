import React from 'react';
import { render, screen, fireEvent, getByText } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Should have the correct content when rendered', () => {
      render( <App
                  header="Rancid Tomatillos"
                  button="Home"
                  showCorrectPage={jest.fn()} />
      )
          // un-comment below code to see the console of the whole element 
      // screen.debug()
      
      const header = screen.getByRole('heading', {name: 'Rancid Tomatillos'})
      const buttonHome = screen.getByRole('button', {name: 'Home'})
      const buttonLogin = screen.getByRole('button', {name: 'Login'})
      const searchInput = screen.getByPlaceholderText('Search Movies...')

      expect(header).toBeInTheDocument()
      expect(buttonHome).toBeInTheDocument()
      expect(buttonLogin).toBeInTheDocument()
      expect(searchInput).toBeInTheDocument()
  })

  it('Should have default states', () => {
      const app = new App()
      expect(app.state.movies).toEqual([])
      expect(app.state.isLoggedIn).toBe(false)  
      expect(app.state.error).toEqual('')  
      expect(app.state.pageDisplayed).toBe('home')  
      expect(app.state.foundMovieId).toEqual(0)
      expect(app.state.isOpen).toBe(true)
      expect(app.state.showElement).toBe(true)
  })

  it('Should fire a function when the home button is clicked', () => {
    const mockFun = jest.fn()

    render( <App
        header="Rancid Tomatillos"
        button="Home"
        showCorrectPage={mockFun}/>
    )

    const button = screen.getByRole('button', {name: 'Home'})
    fireEvent.click(button)

    expect(mockFun).toBeCalledTimes(0)
  })
})
