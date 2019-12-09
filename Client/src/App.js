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

import Navbar from './PageComponents/Navbar';

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
