import React from 'react'

const Buttons = (props) => {
    return (
    <nav>
        {/* eventually add a 'Home' button and maybe style the log out button here like:
        {!props.isLoggedIn ? '' : 'hidden'} onClick={props.action} */}
        <button className={props.isLoggedIn ? 'hidden' : ''} onClick={props.action}>
            Login
        </button>
    </nav>
    )
}

export default Buttons 