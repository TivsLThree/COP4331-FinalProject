import React from 'react';
import {Component} from 'react'
import {Form} from 'react-bootstrap'
import Button from 'react'
import {Modal} from 'react-bootstrap'
// Image,
// Name
// Date
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
  }
  render()
  {

  return (
    <div className="card" style={{width: '50rem'}}
     onClick={this.handleOpen}
    >
      <img className="card-img-top" src={this.props.imagePath} title="ur mom"/>
    </div>
  );
}
}
export default Card;
