const http = require('http')
const express = require('express')

const app = express()
app.use(express.static('public'))

app.set('port', '3000')

const server = http.createServer(app)
server.on('listening', () => {
 console.log('Listening on port 3000')
})

console.log("server running :)")
server.listen(app.get('port'))

// Web Sockets
const io = require('socket.io')(server)

io.sockets.on('connection', (socket) => {
    console.log('Client connected: ' + socket.id)

    // mouse event is from sketch.js
    // socket.broadcast.emit sends out the data to all online sockets
    socket.on('mouse', (data) => socket.broadcast.emit('mouse', data))
    socket.on('disconnect', () => console.log('Client has disconnected'))
})
