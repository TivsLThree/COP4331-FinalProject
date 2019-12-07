import React, {Component} from 'react'
import P5Wrapper from 'react-p5-wrapper'
import sketch from './sketch'
class LobbyPage extends Component {
  constructor () {
    super()
  }

  render() {
    return (
      <div>
      <p>Choose color (# hex)</p>
      <input type="text" name="custom_color" placeholder="#FFFFFF" id="pickcolor" class="call-picker" />
      <div id="color-holder" class="color-holder call-picker"></div>
      <button id="color-btn">Change color</button>
      <br />
      <p>Choose stroke width</p>
      <input type="text" name="stroke_width" placeholder="4" id="stroke-width-picker" class="stroke_width_picker" />
      <button id="stroke-btn">Change stroke width</button>
        <P5Wrapper sketch = {sketch}></P5Wrapper>
      </div>
    )
  }
}
export default LobbyPage;
