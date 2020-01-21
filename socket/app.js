//const server = require('http').createServer();
const io = require('socket.io')(5000);// server can be replaced with server port
let PORT = 5000;
io.on('connection', socket => {
  console.log('server started at '+PORT);
  console.log(socket.id);
  socket.on('newMessagePatan',data =>{
    console.log(data);
    socket.broadcast.emit('messageboardcast',data)
  })
});
//server.listen(PORT);
//io.listen(PORT);