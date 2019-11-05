const { io } = require('../server');

io.on('connection', (client) => {
    client.emit('sendMsg', {
        user: 'Admin',
        msg: 'Welcome to the app'
    });

    client.on('disconnect', () => {
        console.log('User disconnected');
    });

    // listen client
    client.on('sendMsg', (data, callback) => {

        console.log(data);

        client.broadcast.emit('sendMsg', data);
    });


});