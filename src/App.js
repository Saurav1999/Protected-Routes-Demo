
import Public from "./components/Public";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import LandingPage from "./components/LandingPage";
import MyApp from './components/MyApp'


function App() {
  
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          {/* <Link to="/public">Public Page</Link>
          <Link to="/private">Private Page</Link> */}
          {/* <div>Welcome </div> */}
          <Link to="/myapp">MyApp</Link>


        </div>
        <div className="main-content">
          
          <Switch>
            <Route exact path ="/" component={LandingPage}/>
            <Route path="/myapp" component={MyApp}/>
            <Route path="/public" component={Public} />
          
          </Switch>
          
        </div>
      </Router>
    </div>
  );
}

export default App;
