import React from 'react';
import "./Card.css"

import Card from "./Card"
import {Row} from 'react-bootstrap'
import {Container} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    //TODO: Figure out a scrollable horizontal
    // Correct format
    //<Card imagePath="./LogoCircle.png" name="Masterpiece" date="69/69/69" artists="Me. Myself. I"/>
    <Card imagePath="./LogoCircle.png" name="Masterpiece" date="69/69/69" artists="Me. Myself. I"/>
  );
}

export default App;
