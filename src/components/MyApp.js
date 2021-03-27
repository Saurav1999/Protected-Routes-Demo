import React from "react";
import LoginPage from "./LoginPage";
import { Route, Link, Switch } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./Dashboard";
import PrivateRoute from './Routes/PrivateRoute'

function MyApp({ match }) {
    const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <Switch>
          <Route exact path={match.path} render={() => {
              return(
              <>
               Login To Continue.
               <Link to={`${match.url}/login`}><button>
                   Login
               </button></Link>
            </>)
          }}>
             
          </Route>
        <Route path={`${match.path}/login`} render={() => {
            return(
                <>
                    <LoginPage setLoggedIn={setLoggedIn} match={match}/>
                </>
            )
        }} />
        {/* <Route path={`${match.path}/dashboard`} render={() => {
            return(
                <>
                    <Dashboard/>
                </>
            )
        }} /> */}
        <PrivateRoute
            path={`${match.path}/dashboard`}
            component={Dashboard}
        />
        
      </Switch>
    </div>
  );
}

export default MyApp;
