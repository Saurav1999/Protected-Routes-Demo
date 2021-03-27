import React from 'react'
import {Link } from "react-router-dom";

function LandingPage() {
    return (
        <div className="landing-page">
            <div>Welcome to Landing Page</div>
           <Link to="/myapp"><button>Go to myApp</button></Link>
        </div>
    )
}

export default LandingPage
