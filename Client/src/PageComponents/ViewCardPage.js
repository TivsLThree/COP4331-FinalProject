import React from 'react'
import Card from './Card'
import Random from "random-words"
import '../css/Card.css'
import backgroundImg from '../resources/background.png';
import SearchBar from './SearchBar'
import Navbar from './Navbar';
class ViewCardPage extends React.Component
{
  constructor (props) {
    super(props);

  this.state = {
    search: {searchText: ''},
    paths: []
  };
    this.loadCards();
  }
    loadCards()
    {
      var strings;
      let body = {owner: localStorage.getItem("userID")}
      fetch("http://localhost:3001" + "/api/images/list", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
                  'Content-Type': 'application/json',
                  'Authorization': localStorage.getItem('jwtToken')
        }
      })
      .then( res => {
        return res.json()
      })
      .then( str => {
        console.log(str);
        this.setState({paths: str})
      })
    }
  search = (e) => {
    this.setState({search: e});
    this.setState({cards: this.filterCards(e.searchText)});
  }
  deleteCard = (id) => {
    console.log(id)
    var cpy = this.state.paths.filter( (item, index) => {
    return  item._id !== id
    })
    console.log(cpy)
    this.setState({paths: cpy});
    fetch("http://localhost:3001" + "/api/images/delete/" + id, {
      method: "DELETE",
      headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
      }
    })
    .then( res => {
      return res.json()
    })
    .then( str => {
    })
  }
  filterCards = (filterText) => {

    if(filterText === undefined)
      filterText = '';
    filterText = filterText.toLowerCase();
    var cards = [];
    for(var i = 0; i < this.state.paths.length; i++)
    {
      cards.push(        (<a><Card
              delete = {this.deleteCard}
              id= {this.state.paths[i]._id}
              imagePath = {this.state.paths[i].stringData}
              /></a>))
    }
    return cards
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
            <Navbar/>
              {h2}
              <div id = "cardSlider">
                <div id = "leftArrow">
                  {left}
                </div>
                  <div className = 'scrollPicture slide1' id = "centerSlide">
                  {this.filterCards()}
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
