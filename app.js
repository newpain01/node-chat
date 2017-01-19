var app     = require('express')();
var server  = require('http').Server(app);
var io      = require('socket.io')(server);
server.listen('3000');
// Route
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    socket.on('chat.message', function(message){
        io.emit('chat.message', message);
        // console.log(message);
    });

    // socket.on('disconnect', function() {
    //     io.emit('chat.message', 'User left the chat.')
    // });
});