module.exports = function(io, api) {
    "use strict";

    io.on('connection', function(socket) {

        socket.on('new user', function(user) {
            socket.emit('new user reply', {success: api.user.add(user), messages: api.messages.get()});
        });

        socket.on('delete user', function(user) {
            socket.emit('delete user reply', api.user.delete(user));
        });

        socket.on('get users', function() {
            socket.emit('get users reply', api.user.get());
        });

        socket.on('message', function(message) {
            api.messages.add(message);
            socket.broadcast.emit('new message', message);
        });

    });
};