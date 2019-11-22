import React from 'react';
import "./Card.css"

import Card from "./Card"
import {Row, Button, Col} from 'react-bootstrap'
import {Container} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

import backgroundImg from './background.png';
function App() {
  var leftButton = function() { 
    var container = document.getElementById('centerSlide');
    scrollButton(container, 'left', 25, 100, 200);
  }
  var rightButton = function() {
    var container = document.getElementById('centerSlide');
    scrollButton(container, 'right', 25, 100, 200);
  }
  
  var left = <button id = "left" className = "buttonArrowHeight btn btn-info" type="button" onClick = {leftButton}>{"<"}</button>; 
  var right = <button id = "right" className = "buttonArrowHeight btn btn-info" type="button" onClick = {rightButton}>{">"}</button>;

  function scrollButton(container, direction, speed, distance, step) {
    var scrollAmo = 0;
    var slideDis = setInterval(function() {
      if(direction == 'left') {
        container.scrollLeft -= step;
      }
      else {
        container.scrollLeft += step;
      }
      scrollAmo += step;
      if(scrollAmo += distance) {
        window.clearInterval(slideDis);
      }
    }, speed);
  }
  return (
      <div className = "background">
        <h1>Your dumbass pictures</h1>
        <div id = "cardSlider">
          <div id = "leftArrow">
            {left}
          </div>
            <div className = 'scrollPicture' id = "centerSlide">
              <a><Card imagePath="./LogoCircle.png" name="Masterpiece" date="69/69/69" artists="Me. Myself. I"/></a>
              <a><Card imagePath="./LogoCircle.png" name="Masterpiece" date="69/69/69" artists="Me. Myself. I"/></a>
              <a><Card imagePath="./LogoCircle.png" name="Masterpiece" date="69/69/69" artists="Me. Myself. I"/></a>
              <a><Card imagePath="./LogoCircle.png" name="Masterpiece" date="69/69/69" artists="Me. Myself. I"/></a>
              <a><Card imagePath="./LogoCircle.png" name="Masterpiece" date="69/69/69" artists="Me. Myself. I"/></a>
              <a><Card imagePath="./LogoCircle.png" name="Masterpiece" date="69/69/69" artists="Me. Myself. I"/></a>
            </div>
          <div id = "rightArrow">
            {right}
          </div>
        </div>
        <h1>Their dumbass pictures</h1>
        <div id = "cardSlider">
          <div id = "leftArrow">
            {left}
          </div>
            <div className = 'scrollPicture' id = "centerSlide">
              <a><Card imagePath="./LogoCircle.png" name="Masterpiece" date="69/69/69" artists="Me. Myself. I"/></a>
              <a><Card imagePath="./LogoCircle.png" name="Masterpiece" date="69/69/69" artists="Me. Myself. I"/></a>
              <a><Card imagePath="./LogoCircle.png" name="Masterpiece" date="69/69/69" artists="Me. Myself. I"/></a>
              <a><Card imagePath="./LogoCircle.png" name="Masterpiece" date="69/69/69" artists="Me. Myself. I"/></a>
              <a><Card imagePath="./LogoCircle.png" name="Masterpiece" date="69/69/69" artists="Me. Myself. I"/></a>
              <a><Card imagePath="./LogoCircle.png" name="Masterpiece" date="69/69/69" artists="Me. Myself. I"/></a>
            </div>
          <div id = "rightArrow">
            {right}
          </div>
        </div>
      </div>
  );
}

export default App;
