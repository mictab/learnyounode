var net = require('net');

var strftime = require('strftime');

var port = process.argv[2];

var server = net.createServer(function (socket) {
  s = strftime('%F %R', new Date());
  socket.end(s);
})
server.listen(Number(port));
