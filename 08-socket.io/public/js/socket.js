var socket = io();

socket.on('connect', function() {
    console.log("connected to the server.");
});

socket.on('disconnect', function() {
    console.log("connection to the server lost.");
});

// send info
socket.emit('sendMsg', {
    user: 'Pedro',
    msg: 'saludos'
}, function(res) {
    console.log('server -> client: ', res);
});

// receive info
socket.on('sendMsg', function(msg) {
    console.log('server -> client: ', msg);
})