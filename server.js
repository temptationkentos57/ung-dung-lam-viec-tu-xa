const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());

app.get('/', (req, res) => {
  res.send('Ứng dụng Làm Việc Từ Xa!');
});

io.on('connection', (socket) => {
  console.log('Người dùng mới kết nối: ' + socket.id);
  socket.on('disconnect', () => {
    console.log('Người dùng đã ngắt kết nối: ' + socket.id);
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Máy chủ đang chạy trên cổng ${PORT}`);
});