

const path = require('path')
// need a reference to items:
const items = require('./routes/api/items')
const users = require('./routes/api/users')
// TODO:
// const images = ......
const images = require('./routes/api/images')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const mongoose = require('mongoose')
// Body parser middleware
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, *');
  next();
});
// Bring the mongoURI in (DB Config)
const db = require('./config/keys').mongoURI

// Connect to Mongo DB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connection to Mongo DB a huge success!!"))
  .catch(() => console.log(err))

app.use(express.static('public'))
// Use Routes:
app.use('/api/items', items);
app.use('/api/users', users);
// TODO:
app.use('/api/images', images)
server.listen((process.env.PORT || 3001),function() {
  console.log("server is running on port", server.address().port)
})


// Web Sockets


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
