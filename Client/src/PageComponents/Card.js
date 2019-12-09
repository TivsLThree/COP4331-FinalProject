import React from 'react';
import {Component} from 'react'
import {Form} from 'react-bootstrap'
import Button from 'react'
import {Modal} from 'react-bootstrap'
// Image,
// Name
// Date
import logo from '../resources/LogoCircle.png'
class Card extends Component
{
constructor(props){
  super(props)
  this.state = {
    show: false
  }
}

componentDidMount() {
      document.body.classList.add("login")
}
  handleOpen = () => {
    this.setState({show:true})
  }
  handleClose = () => {
    this.setState({show:false})
    console.log(this.state.show)
  }
  render()
  {
  var OVERRIDE = true;
  return (
    <div className="card" style={{width: '50rem'}}
     onClick={this.handleOpen}
    >
      <img className="card-img-top" src={(OVERRIDE) ? logo: this.props.imagePath} title="ur mom"/>
    </div>
  );
}
}
export default Card;
