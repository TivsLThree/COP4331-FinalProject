import React from 'react';
import {Component} from 'react'
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Modal} from 'react-bootstrap'
// Image,
// Name
// Date
class Card extends Component
{
constructor(props){
  super(props)
  console.log(this.props.delete)
  this.state = {
    show: false,
    id: this.props.id,
    delete: this.props.delete
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
    <div className="card" style={{width: '42rem'}}
    >
      <img className="card-img-top" src={this.props.imagePath} title="ur mom"/>
        <div className="card-body">
        <Button onClick = {() => this.state.delete(this.state.id)}variant="btn btn-danger">Delete</Button>
        </div>
    </div>
  );
}
}
export default Card;
