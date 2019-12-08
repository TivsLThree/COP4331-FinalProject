import React, {Component} from 'react'
import P5Wrapper from 'react-p5-wrapper'
import sketch from './sketch'
import background from '../resources/background.png'
import "../css/LobbyPage.css"
import * as io from 'socket.io-client'
import {CirclePicker} from 'react-color'
import {Container, Row, Col} from 'react-bootstrap'
const socket = io.connect('http://localhost:3001')
var lobbyCode;
var paintColor;
class LobbyPage extends Component {
  constructor (props) {
    super(props)
    lobbyCode = this.props.location.state.response;
    document.title = "Lobby: " +lobbyCode
  }
  componentDidMount() {
      document.body.classList.add("background");
  }
  componentWillUnmount() {
    socket.emit('leave room', {
      room: lobbyCode
    })
    document.title = "Smüdge"
//    console.log(socket.connected)
  }
  onChangeColor(color, event) {
    console.log(color)
    paintColor = color;
  }
  getPaintColor()
  {
    return paintColor;
  }
  render() {

    return (
      <div>
        <Container style={{position: "absolute",paddingLeft: "80px"}}>
          <Row>
            <Col>
              <button className="btn btn-success" id="saveButton" style={{bottom:"10px"}}>
                Save Image!
                </button>
            </Col>
          </Row>
          <Row>
            <Col>
              <CirclePicker className="colorPicker" onChange={this.onChangeColor}/>
              <input type ="range" className="custom-range" id="paintWidthSlider" defaultValue ="15"
                min="10" max="100" step="0.05"
                style={{width:"250px"}}>
              </input>
            </Col>
          </Row>
        </Container>
        <P5Wrapper sketch = {sketch} lobbyCode = {lobbyCode} getPaintColor={this.getPaintColor}></P5Wrapper>
      </div>
    )
  }
}
export default LobbyPage;
