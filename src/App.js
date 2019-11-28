import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Provider } from "react-redux";
import store from "./store";
import Card from "./Card"
import LoginPage from "./LoginPage"
import {Row} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import ViewCardPage from './ViewCardPage'
import 'bootstrap/dist/css/bootstrap.min.css';

import PrivateRoute from "./PrivateRoute";

import Navbar from "./Navbar";
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
              <Route exact path ="/dashboard" component = {ViewCardPage}/>
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
