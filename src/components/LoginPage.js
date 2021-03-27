import React from 'react'
import {useHistory} from 'react-router-dom'

function LoginPage({setLoggedIn,match}) {
    const history = useHistory()
    const handleLogin = () => {
        setLoggedIn(true)
        localStorage.setItem("loggedIn",true)
        history.push(`${match.path}/dashboard`)
        // console.log(match)

    }
    return (
        <div>
            <button onClick={handleLogin}>Log In</button>
        </div>
    )
}

export default LoginPage
