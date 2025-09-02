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

ium.on('connection', (socket) => {
  console.log('User connected: ' + socket.id);
  socket.on('disconnect', () => {
    console.log('User disconnected: ' + socket.id);
  });
});

const PORT = process.env.PORT || 5000;  // Updated default port from 4000 to 5000
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});