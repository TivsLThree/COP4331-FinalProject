import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Provider } from "react-redux";
import store from "./store";
import Card from './PageComponents/Card'
import LoginPage from './PageComponents/LoginPage'
import {Row} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import ViewCardPage from './PageComponents/ViewCardPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import LobbyPage from "./PageComponents/LobbyPage"
import JoinLobby from "./PageComponents/JoinLobby"
import PrivateRoute from "./PrivateRoute";
import setAuthToken from "./setAuthToken";
import { setCurrentUser, logoutUser } from "./authActions";
import { clearCurrentProfile } from "./profileActions";

import Navbar from './PageComponents/Navbar';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());

    // Redirect to login
    window.location.href = "/login";
  }
}

//TODO: Figure out a scrollable horizontal
// Correct format
//<Card imagePath="./LogoCircle.png" name="Masterpiece" date="69/69/69" artists="Me. Myself. I"/>
class App extends Component {

  render()
  {
    return (
      <Provider store = {store}>
        <Router>
          <div className="App">
            <Navbar/>
            <Switch>
              {/*TODO: Make this PrivateRoute once api calls work*/}
              <PrivateRoute exact path ="/dashboard" component = {ViewCardPage}/>
              <PrivateRoute exact path ="/lobby" component ={LobbyPage}/>
              <Route exact path="/" component ={LoginPage}/>

              <Route exact component = {null}/>
              </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
