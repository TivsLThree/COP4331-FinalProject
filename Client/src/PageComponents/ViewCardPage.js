import React from 'react'
import Card from './Card'
import Random from "random-words"
import '../css/Card.css'
import backgroundImg from '../resources/background.png';
import SearchBar from './SearchBar'
class ViewCardPage extends React.Component
{
  constructor (props) {
    super(props);
  //  this.loadCards();
  this.state = {
    search: {searchText: ''},
    cards: this.loadCards()
  };
  }
   returns =
  [{
    imagePath: "./resources/LogoCircle.png"
  },
  ];

    loadCards()
    {
      //TODO: Put database loading here!
      // fetch actual strings
      var arrayOfStrings = ["aaaaa", "bbbbb", "ccccc"];
      for(var i = 0; i < arrayOfStrings.length; i++)
      {
        this.returns.push({
          imagePath: arrayOfStrings[i]
        })
      }
      
      return this.filterCards();
    }
  search = (e) => {
    this.setState({search: e});
    this.setState({cards: this.filterCards(e.searchText)});
  }
  filterCards = (filterText) => {

    if(filterText === undefined)
      filterText = '';
    filterText = filterText.toLowerCase();
    const saved = this.returns.slice(0).filter((e) => {
      return true /* &&
      (e.date.toString().toLowerCase().includes(filterText) ||
      e.name.toLowerCase().includes(filterText) ||
      e.artists.toString().toLowerCase().includes(filterText)
    )*/
    }).map((item, index) => {
      return (
        <a><Card
        imagePath = {item.imagePath}
        /></a>
      )
    })
    return saved
  }

  render ()
  {
    var leftButton = function() {
      var container = document.getElementsByClassName('slide1')[0];
      scrollButton(container, 'left', 25, 100, 400);
    }
    var rightButton = function() {
      var container = document.getElementsByClassName('slide1')[0];
      scrollButton(container, 'right', 25, 100, 400);
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

  //  var h1 = (cards[0].length == 0) ? <div/>: <h1 style ={{paddingLeft: "20px"}}>Unsaved Recents</h1> ;
    var h2 =  <h1 style ={{paddingLeft: "20px"}}>Saved Images</h1> ;
        return (
            <div className = "">
              {h2}
              <div id = "cardSlider">
                <div id = "leftArrow">
                  {left}
                </div>
                  <div className = 'scrollPicture slide1' id = "centerSlide">
                  {this.state.cards}
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
