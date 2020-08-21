import React from 'react'
import './Header.css'

const Buttons = (props) => {
    let btnTxt = !props.isOpen ? 'Login' : 'Logout'
    return (
    <nav className="navigation-buttons">
        {/* eventually add a 'Home' button and maybe style the log out button here like:
        {!props.isLoggedIn ? '' : 'hidden'} onClick={props.action} */}

        <button className="nav-button" onClick={props.showHomePage}>Home</button>
        <button className="nav-button" onClick={props.showLoginPage}>{btnTxt}</button>


        {/* {props.pageDisplayed !== "login" ? <button className="nav-button" onClick={props.action}>Login</button> : ""} */}
        
    </nav>
    )
}

export default Buttons 