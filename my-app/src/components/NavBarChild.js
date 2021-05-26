import React from 'react';

function NavBarChild(props) {
    return (
        props.isloggedIn ?
        <button onClick={props.handleClick}>Login</button>
        :
        <form>
            <label htmlFor = "username">Username:</label>
            <input placeholder='username' />
        
            <label htmlFor = "password">Password:</label>
            <input placeholder='password'/>
            <button onClick={props.handleClick}>Submit</button>
        </form>
    )
}

export default NavBarChild