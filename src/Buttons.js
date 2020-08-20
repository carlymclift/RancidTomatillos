import React from 'react'

const Buttons = (props) => {
    return (
    <nav>
        <button className={props.isLoggedIn ? 'hidden' : ''} onClick={props.action}>
            Login
        </button>
    </nav>
    )
}

export default Buttons 