import React from 'react'
import Card from './Card'
import './Card.css'
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
    const cards = this.loadCards()
    var h1 = (cards[0].length == 0) ? <div/>: <h1>Unsaved Recents</h1> ;
    var h2 = (cards[1].length == 0) ? <div/>: <h1>Favorites</h1> ;
    var h3 = (cards[2].length == 0) ? <div/>: <h1>Saved</h1> ;
    return (
      <div>

        {h1}
        <div className="scrollPicture">
          {cards[0]}
        </div>
        {h2}
        <div className="scrollPicture">
          {cards[1]}
        </div>
        {h3}
        <div className="scrollPicture">
          {cards[2]}
        </div>
      </div>
    )
  }
}

export default ViewCardPage;
