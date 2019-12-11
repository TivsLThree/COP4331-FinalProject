import React, {Component} from 'react'
import {Form} from 'react-bootstrap'
import Button from 'react'
import { Route } from 'react-router-dom'
import "../css/Login.css"
class JoinLobby extends Component {
  constructor(props) {
    super()
  }

  render() {
    var value;
      return (
      <Form>
        <Form.Group controlId="formBasicEmail" style ={{paddingLeft: "20px"}}>
          <Form.Label>Lobby Code</Form.Label>
          <Form.Control type="password" value = {value} id="inputText" placeholder="Enter a code to get started!"style ={{paddingLeft: "20px"}} />
        </Form.Group>
        <Route render={({ history}) => (
          <button
            type='button'
            value = {value}
            onClick={(e) => {
              history.push("/lobby", {response: document.getElementById("inputText").value}) }}
              >
            Click Me!
          </button>
        )} />
      </Form>
    )
  }
}
export default JoinLobby;
