import React from 'react'
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log({...rest})

    return (
    <Route {...rest} render={(props) => (
        JSON.parse(localStorage.getItem("loggedIn")) === true
        ? <Component {...props} />
        : <Redirect to='/myapp/login' />
    )} />
  )}

export default PrivateRoute
