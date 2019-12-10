import * as io from 'socket.io-client'

export default function sketch(p){
  let socket
  let color = '#000000'
  let strokeWidth = 15
  let cv
  var lobbyCode;
  var getPaintColor;
  function sleep(ms)
  {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  p.setup = async function() {
    await sleep(100)
      // cv = createCanvas(windowWidth/2, windowHeight/2)
      cv = p.createCanvas(720,520)
      cv.position(500, 115)
      cv.background(255, 255, 255)
            console.log(cv.canvas.toDataURL());
            var image = new Image()
            image.src = cv.canvas.toDataURL();
            console.log(image)
      if(lobbyCode === undefined)
        lobbyCode = "default"
      console.log(lobbyCode + "2")
      // socket io connect
     socket = io.connect('http://localhost:3001')
     socket.emit('room', {room: lobbyCode})
    //  callback function (used to draw data received from other sockets)
      socket.on('mouse', data => {
          p.stroke(data.color)
          p.strokeWeight(data.strokeWidth)
          p.line(data.x, data.y, data.px, data.py)
      })

      // Getting our buttons and the inputs through the p5.js dom
      const color_picker  =   document.getElementsByClassName("colorPicker")[0]
      const stroke_slider =   document.getElementById("paintWidthSlider");
      const save_button   =   document.getElementById("saveButton");
      // Adding a mousePressed listener to the button
      color_picker.addEventListener("click", async function(e) {
        await sleep(50);
        console.log(getPaintColor());
        if(getPaintColor() != undefined)
        color = getPaintColor().hex;
      // Checking if the input is a valid hex color
      // if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$) /i.test(color_picker.value())){
      //     color = color_picker.value(color)
      //     color_holder.style('background-color', color)
      // }
      // else {console.log('Enter a valid hex value')}
    })
    // Adding a mousePressed listener to the button
    save_button.addEventListener("click", function () {
      //TODO: Make DATABASE call to save
      console.log(localStorage.getItem('userID'));
      let body = {
        stringData: cv.canvas.toDataURL(),
        owner: localStorage.getItem('userID')
      }
      fetch("http://localhost:3001" + "/api/images/save", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
                  'Content-Type': 'application/json',
                  'Authorization': localStorage.getItem('jwtToken')

        }
      })
      let imageAsString = cv.canvas.toDataURL();
      console.log(imageAsString);
    })
    stroke_slider.addEventListener("change", function(){
      strokeWidth = stroke_slider.value;
    })

  }


  p.mouseDragged = () => {
      p.stroke(color)
      p.strokeWeight(strokeWidth)
      p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY)
      var img;
      p.sendMouse(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY)
  }
  p.myCustomRedrawAccordingToNewPropsHandler = (props) =>{
    lobbyCode = props.lobbyCode;
    console.log(lobbyCode + "1")
    getPaintColor = props.getPaintColor;
  }

  // Sending data to the socket
  p.sendMouse = (x, y, pX, pY) =>{
      const data = {
          x : x,
          y : y,
          px : pX,
          py : pY,
          color : color,
          strokeWidth : strokeWidth,
          room: lobbyCode
      }

     socket.emit('mouse', data)
  }

  // TODO: Window resized function

}
