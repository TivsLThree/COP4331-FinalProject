import React, {Component} from 'react'
import P5Wrapper from 'react-p5-wrapper'
import sketch from './sketch'
import background from '../resources/background.png'
import '../css/LobbyPage.css'

import * as io from 'socket.io-client'
const socket = io.connect('http://localhost:3001')
var lobbyCode;
class LobbyPage extends Component {
  constructor (props) {
    super(props)
    lobbyCode = this.props.location.state.response;
    document.title = "Lobby: " +lobbyCode
    console.log(lobbyCode)
  }
  componentDidMount() {
    document.body.background = background;
  }
  componentWillUnmount() {
    socket.emit('leave room', {
      room: lobbyCode
    })
//    console.log(socket.connected)
  }
  render() {
    //document.body.background = background;
    return (
      <div>
      <p>Choose color (# hex)</p>
      <input type="text" name="custom_color" placeholder="#FFFFFF" id="pickcolor" class="call-picker" />
      <div id="color-holder" class="color-holder call-picker"></div>
      <button id="color-btn">Change color</button>
      <br/>
      <p>Choose stroke width</p>
      <input type="text" name="stroke_width" placeholder="4" id="stroke-width-picker" class="stroke_width_picker" />
      <button id="stroke-btn">Change stroke width</button>
        <P5Wrapper sketch = {sketch} lobbyCode = {lobbyCode}></P5Wrapper>
      </div>
    )
  }
}
export default LobbyPage;
