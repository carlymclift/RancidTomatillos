import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = ({ showCorrectPage, isLoggedIn, logOut, user }) => {    
    return (
    <header className="App-header">
        <NavLink to='/' style={{ textDecoration: 'none' }}><h1 className="App-header-text">Rancid Tomatillos</h1></NavLink>
        <nav className="App-navigation-buttons">
            <NavLink className="App-nav-button" to='/' onClick={showCorrectPage}>Home</NavLink>
            {!isLoggedIn && <>
                <NavLink className="App-nav-button" to='/login' onClick={() => showCorrectPage('login')}>
                    Login
                </NavLink>
                <h2 className="App-welcome-user" >Welcome!</h2>
             </> }
            {isLoggedIn && <>
                <NavLink className="App-nav-button" to='/' onClick={() => logOut()}>Logout</NavLink>
                <NavLink className="favorites-button" to='/favorites'>Favorites</NavLink>
               <h2 className="App-welcome-user" >Welcome, {user.name}!</h2>
            </>}
        </nav>
  </header>)
}

export default Header