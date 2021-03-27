import React from 'react'
import {useHistory} from 'react-router-dom'

function Dashboard({match}) {
    const history = useHistory()
    const handleLogout = () => {
       
        localStorage.setItem("loggedIn",false)
        history.push(`${match.path}/dashboard`)
        // console.log(match)

    }
    return (
        <div className="private">
            Dashboard
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard
