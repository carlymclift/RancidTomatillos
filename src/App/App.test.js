import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App', () => {
  it('Should have the correct content when rendered', () => {
      render( <App
                  header="Rancid Tomatillos"
                  button="Home"
                  showCorrectPage={jest.fn()} />
      )
          // un-comment below code to see the console of the whole element 
      // screen.debug()

      const header = screen.getByText('Login')
      const button = screen.getByText('Home')
      const showCorrectPage = screen.getByRole('button')
  

      expect(header).toBeInTheDocument()
      expect(button).toBeInTheDocument()
      expect(showCorrectPage).toBeInTheDocument()
  })
})
