import React from 'react';
import {Component} from 'react'
// Image,
// Name
// Date
import logo from "./LogoCircle.png"
class Card extends Component
{

  render()
  {
  var OVERRIDE = true;
  return (
    <div className="card" style={{width: '15rem'}}>
      <img className="card-img-top" src={(OVERRIDE) ? logo: this.props.imagePath} title="ur mom"/>
      <div className="card-body">
        <h5 className="card-title">
          {(this.props.name == undefined) ? "Unnamed" : this.props.name}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {"Saved " +( (this.props.date == undefined) ? "1/1/1970" : this.props.date )}
        </h6>
        <p className="card-text">
          {(this.props.artists == undefined) ? "You. Only You. You need friends." :
          this.props.artists}
        </p>
      </div>
    </div>
  );
}
}
export default Card;
