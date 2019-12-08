const http = require('http')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// need a reference to items:
const items = require('./routes/api/items')
// TODO:
// const users...

const app = express()
// Body parser middleware
app.use(bodyParser.json())

// Bring the mongoURI in (DB Config)
const db = require('./config/keys').mongoURI

// Connect to Mongo DB
mongoose
  .connect(db)
  .then(() => console.log("Connection to Mongo DB a huge success!!"))
  .catch(() => console.log(err))

app.use(express.static('public'))

app.set('port', '3001')

// Use Routes:
app.use('/api/items/', items);
// TODO:
// app.use users

const server = http.createServer(app)
server.on('listening', () => {
 console.log('Listening on port 3001')
})

console.log("server running :)")
server.listen(app.get('port'))

// Web Sockets
const io = require('socket.io')(server)

io.sockets.on('connection', (socket) => {
    console.log('Client connected: ' + socket.id)
    socket.on('room', function(data) {
      socket.join(data.room);
      console.log("Joined room: ", data.room);
    })

    socket.on('leave room', (data) => {
      socket.leave(data.room);
      console.log("Left the room: " + data.room)
    })
    // mouse event is from sketch.js
    // socket.broadcast.emit sends out the data to all online sockets
    socket.on('mouse', (data) => socket.to(data.room).emit('mouse', data))
    socket.on('disconnect', () => console.log('Client has disconnected'))
})
