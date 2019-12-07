
export default function sketch(p){
  let socket
  let color = '#000000'
  let strokeWidth = 15
  let cv
  p.setup = () => {
      // cv = createCanvas(windowWidth/2, windowHeight/2)

      cv = p.createCanvas(1000, 800)
      cv.position(500, 50)
      cv.background(220, 220, 220)

      // socket io connect
  //    socket = io.connect('http://localhost:3000')

      // callback function (used to draw data received from other sockets)
      // socket.on('mouse', data => {
      //     p.stroke(data.color)
      //     p.strokeWeight(data.strokeWidth)
      //     p.line(data.x, data.y, data.px, data.py)
      // })

      // Getting our buttons and the inputs through the p5.js dom
      const color_picker = p.select('#pickcolor')
      const color_btn = p.select('#color-btn')
      const color_holder = p.select('#color-holder')
      const stroke_width_picker = p.select('#stroke-width-picker')
      const stroke_btn = p.select('#stroke-btn')

      // Adding a mousePressed listener to the button
      color_btn.mousePressed(() => {
      // Checking if the input is a valid hex color
      if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$) /i.test(color_picker.value())){
          color = color_picker.value()
          color_holder.style('background-color', color)
      }
      else {console.log('Enter a valid hex value')}
      })

    // Adding a mousePressed listener to the button
    stroke_btn.mousePressed(() => {
     const width = parseInt(stroke_width_picker.value())
     if (width > 0) strokeWidth = width
    })

  }


  p.mouseDragged = () => {
      p.stroke(color)
      p.strokeWeight(strokeWidth)
      p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY)

      p.sendMouse(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY)
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
      }

  //    socket.emit('mouse', data)
  }

  // TODO: Window resized function

}
