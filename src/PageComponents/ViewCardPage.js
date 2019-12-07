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
    isFavorite: false,
    imagePath: "./resources/LogoCircle.png",
    name: "Welcome to Smüdge!",
    date: "04/20/69",
    artists:
      ["------"]
  },
  ];

    loadCards()
    {
      //TODO: Put database loading here!
      for(var i = 0; i < 30; i++)
      {
        this.returns.push({ isFavorite: Math.random() > 0.5,
        imagePath: "./resources/LogoCircle.png",
        name: Random(2).join(" "),
        date: Math.floor(Math.random() * 12) + "/" +Math.floor(Math.random() * 31)+ "/" +Math.floor(Math.random() * 99),
        artists: Random(3).join(', ')})

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
    const favorites = this.returns.slice(0).filter((e) => {
      console.log(e.date)
      return e.isFavorite === true &&
      (e.date.toString().toLowerCase().includes(filterText) ||
      e.name.toLowerCase().includes(filterText) ||
      e.artists.toString().toLowerCase().includes(filterText)
      )
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

    const saved = this.returns.slice(0).filter((e) => {
      return true &&
      (e.date.toString().toLowerCase().includes(filterText) ||
      e.name.toLowerCase().includes(filterText) ||
      e.artists.toString().toLowerCase().includes(filterText)
      )
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
    return [favorites, saved]
  }


  render ()
  {

    var leftButton = function() {
      var container = document.getElementsByClassName('slide1')[0];
      scrollButton(container, 'left', 25, 100, 200);
    }
    var rightButton = function() {
      var container = document.getElementsByClassName('slide1')[0];
      console.log(container);
      scrollButton(container, 'right', 25, 100, 200);
    }
    var leftButton2 = function() {
      var container = document.getElementsByClassName('slide2')[0];
      scrollButton(container, 'left', 25, 100, 200);
    }
    var rightButton2 = function() {
      var container = document.getElementsByClassName('slide2')[0];
      console.log(container);
      scrollButton(container, 'right', 25, 100, 200);
    }

    var left = <button id = "left" className = "buttonArrowHeight btn btn-info" type="button" onClick = {leftButton}>{"<"}</button>;
    var right = <button id = "right" className = "buttonArrowHeight btn btn-info" type="button" onClick = {rightButton}>{">"}</button>;
    var left2 = <button id = "left" className = "buttonArrowHeight btn btn-info" type="button" onClick = {leftButton2}>{"<"}</button>;
    var right2 = <button id = "right" className = "buttonArrowHeight btn btn-info" type="button" onClick = {rightButton2}>{">"}</button>;

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
    var h2 =  <h1 style ={{paddingLeft: "20px"}}>Favorites</h1> ;
    var h3 = <h1 style ={{paddingLeft: "20px"}}>Saved</h1> ;
        return (
            <div className = "background">
            <SearchBar search={this.search}/>

              {h2}
              <div id = "cardSlider">
                <div id = "leftArrow">
                  {left}
                </div>
                  <div className = 'scrollPicture slide1' id = "centerSlide">
                  {this.state.cards[0]}
                  </div>
                <div id = "rightArrow">
                  {right}
                </div>
              </div>
              {h3}
              <div id = "cardSlider">
                <div id = "leftArrow">
                  {left2}
                </div>
                  <div className = 'scrollPicture slide2' id = "centerSlide">
                  {this.state.cards[1]}
                  </div>
                <div id = "rightArrow">
                  {right2}
                </div>
              </div>
            </div>
        );
  }
}

export default ViewCardPage;
