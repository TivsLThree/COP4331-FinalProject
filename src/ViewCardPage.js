import React from 'react'
import Card from './Card'
import './Card.css'
import backgroundImg from './background.png';
import SearchBar from "./SearchBar"
class ViewCardPage extends React.Component
{

  loadCards()
  {
    var returns =
    [
      {
        isFavorite: false,
        isSaved: false,
        imagePath: "./LogoCircle.png",
        name: "My Beautiful Creation",
        date: "20/20/20",
        artists:
          ["me", "you", "your mom"]
      },
      {
        isFavorite: false,
        isSaved: true,
        imagePath: "./LogoCircle.png",
        name: "My Beautiful Creation",
        date: "20/20/20",
        artists:
          ["me", "you", "your mom"]
      },
      {
        isFavorite: true,
        isSaved: true,
        imagePath: "./LogoCircle.png",
        name: "My Beautiful Creation",
        date: "20/20/20",
        artists:
          ["me", "you", "your mom"]
      },
      {
        isFavorite: false,
        isSaved: false,
        imagePath: "./LogoCircle.png",
        name: "My Beautiful Creation",
        date: "20/20/20",
        artists:
          ["me", "you", "your mom"]
      },
      {
        isFavorite: false,
        isSaved: true,
        imagePath: "./LogoCircle.png",
        name: "My Beautiful Creation",
        date: "20/20/20",
        artists:
          ["me", "you", "your mom"]
      },
      {
        isFavorite: true,
        isSaved: true,
        imagePath: "./LogoCircle.png",
        name: "My Beautiful Creation",
        date: "20/20/20",
        artists:
          ["me", "you", "your mom"]
      },
      {
        isFavorite: false,
        isSaved: false,
        imagePath: "./LogoCircle.png",
        name: "My Beautiful Creation",
        date: "20/20/20",
        artists:
          ["me", "you", "your mom"]
      },
      {
        isFavorite: false,
        isSaved: true,
        imagePath: "./LogoCircle.png",
        name: "My Beautiful Creation",
        date: "20/20/20",
        artists:
          ["me", "you", "your mom"]
      },
      {
        isFavorite: true,
        isSaved: true,
        imagePath: "./LogoCircle.png",
        name: "My Beautiful Creation",
        date: "20/20/20",
        artists:
          ["me", "you", "your mom"]
      },
      {
        isFavorite: false,
        isSaved: false,
        imagePath: "./LogoCircle.png",
        name: "My Beautiful Creation",
        date: "20/20/20",
        artists:
          ["me", "you", "your mom"]
      },
      {
        isFavorite: false,
        isSaved: true,
        imagePath: "./LogoCircle.png",
        name: "My Beautiful Creation",
        date: "20/20/20",
        artists:
          ["me", "you", "your mom"]
      },
      {
        isFavorite: true,
        isSaved: true,
        imagePath: "./LogoCircle.png",
        name: "My Beautiful Creation",
        date: "20/20/20",
        artists:
          ["me", "you", "your mom"]
      },

    ];

    const recents = returns.slice(0).filter((e) => {
      return e.isSaved === false;
    }).map((item, index) => {
      return (
        <a><Card
        imagePath = {item.imagePath}
        name = {item.name}
        date = {item.date}
        artists = {item.artists}
        /></a>
      )
    })

    const favorites = returns.slice(0).filter((e) => {
      return e.isFavorite === true;
    }).map((item, index) => {
      return (
        <a><Card
        imagePath = {item.imagePath}
        name = {item.name}
        date = {item.date}
        artists = {item.artists}
        /></a>
      )
    })

    const saved = returns.slice(0).filter((e) => {
      return e.isSaved === true;
    }).map((item, index) => {
      return (
        <a><Card
        imagePath = {item.imagePath}
        name = {item.name}
        date = {item.date}
        artists = {item.artists}
        /></a>
      )
    })
    return [recents, favorites, saved];
  }

  render ()
  {
    var leftButton = function() {
      var container = document.getElementById('centerSlide');
      this.scrollButton(container, 'left', 25, 100, 200);
    }
    var rightButton = function() {
      var container = document.getElementById('centerSlide');
      console.log(container);
      this.scrollButton(container, 'right', 25, 100, 200);
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
    const cards = this.loadCards()
    var h1 = (cards[0].length == 0) ? <div/>: <h1 style ={{paddingLeft: "20px"}}>Unsaved Recents</h1> ;
    var h2 = (cards[1].length == 0) ? <div/>: <h1 style ={{paddingLeft: "20px"}}>Favorites</h1> ;
    var h3 = (cards[2].length == 0) ? <div/>: <h1 style ={{paddingLeft: "20px"}}>Saved</h1> ;
        return (
            <div className = "background">
            <SearchBar/>
                              {h1}
              <div id = "cardSlider">
                <div id = "leftArrow">
                  {left}
                </div>
                  <div className = 'scrollPicture' id = "centerSlide">
                  {cards[0]}
                  </div>
                <div id = "rightArrow">
                  {right}
                </div>
              </div>
              {h2}
              <div id = "cardSlider">
                <div id = "leftArrow">
                  {left}
                </div>
                  <div className = 'scrollPicture' id = "centerSlide">
                  {cards[1]}
                  </div>
                <div id = "rightArrow">
                  {right}
                </div>
              </div>
              {h3}
              <div id = "cardSlider">
                <div id = "leftArrow">
                  {left}
                </div>
                  <div className = 'scrollPicture' id = "centerSlide">
                  {cards[2]}
                  </div>
                <div id = "rightArrow">
                  {right}
                </div>
              </div>
            </div>
        );
  }
}

export default ViewCardPage;
