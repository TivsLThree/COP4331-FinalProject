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
    <div className="card" style={{width: '15rem'}}
     onClick={this.handleOpen}
    >

    <Modal show={this.state.show} onHide={this.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Save Image?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Control placeholder="Image Name">
            </Form.Control>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Favorite" />
            </Form.Group>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          onClick = {this.handleClose}
          className ="btn btn-danger">
          Nevermind...
        </button>
        <button type="button" className="btn btn-primary">
          Save!
        </button>
      </Modal.Footer>
    </Modal>

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
