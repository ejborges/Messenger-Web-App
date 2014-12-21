module.exports = function() {
    "use strict";

    var users = {
//      "John Doe": 1417409398091,   <-- example
        },
        messages = [
            //{
            //    id: 1417409398091,        <-- example message object
            //    user: "John Doe",
            //    msg: "Hello World!"
            //}
        ],
        api = {};

    api.user = {
        add: function(user) {
//          user = {
//              name: "John Doe",
//              time: 1417409398091
//          }

            if(!users[user.name]) users[user.name] = user.time;
            else return false; // false = user already exists

            return true; // true = added user successfully
        },
        get: function() {
            return users;
        },
        delete: function(user) {
//          user = {
//              name: "John Doe",
//              time: 1417409398091
//          }

            if(users[user.name]) delete users[user.name];
            else return false; // false = could not delete user

            return true; // true = successfully deleted user
        }
    };

    api.messages = {
        add: function(message) {
            messages.push(message);
        },
        get: function() {
            return messages;
        }
    };
    return api;
};