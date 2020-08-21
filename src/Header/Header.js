import React from 'react'
import Button from './Buttons'
import './Header.css'

const Header = (props) => {
    return (
        <header className="App-header">
          <h1 className="App-header-text">Rancid Tomatillos</h1>
          <Button 
            isLoggedIn={props.isLoggedIn} 
            pageDisplayed={props.pageDisplayed} 
            showLoginPage={props.showLoginPage} 
            showHomePage={props.showHomePage}
            isOpen={props.isOpen}
          />
        </header>
    )
}

export default Header