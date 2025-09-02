const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());

app.get('/', (req, res) => {
  res.send('Remote Work Application!');
});

io.on('connection', (socket) => {  // Handling user connection event
  console.log('User connected: ' + socket.id);
  socket.on('disconnect', () => {
    console.log('User disconnected: ' + socket.id);
  });
});

const PORT = process.env.PORT || 5000;  // Default port set to 5000
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});