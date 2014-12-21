angular.module('app') // this is how you load the module instead of creating a new module

.controller(
    'homeCtrl',
    [
        '$rootScope',
        '$scope',
        '$timeout',
        'socket',
        function($rootScope, $scope, $timeout, socket) {
            "use strict";

            $rootScope.app = {
                title: "Messenger",
                messages: [
                    //{
                    //    id: 1417409398091,        <-- example message object
                    //    user: "John Doe",
                    //    msg: "Hello World!"
                    //}
                ],
                messageClass: function(username) {
                    if(username === $scope.user.username) return "my-message";
                    else return "their-message";
                },
                getDate: function(unixTimestamp) {
                    return new Date(unixTimestamp).toLocaleString();
                },
                usernameExistsPopoverOpen: false
            };

            $scope.user = {
                registered: false,
                username: "",

                message: ""
            };

            var newID = function() {
                return new Date().getTime(); // Returns the number of milliseconds since midnight Jan 1, 1970; unix timestamp
            },
                viewportBody = document.getElementById('viewport-body'),
                newMsg;


            $scope.register = function() {
                if($scope.user.username) {
                    socket.emit('new user', {name: $scope.user.username, time: newID()});
                }
            };

            socket.on('new user reply', function(packet) {
                if(packet.success) {
                    $scope.user.registered = true;
                    $rootScope.app.messages = packet.messages;
                }
                else {
                    $('#username-exists-popover').popover('show');
                    $rootScope.app.usernameExistsPopoverOpen = true;
                }
            });

            $scope.$watch(function(){return $scope.user.username;}, function() {
                if($rootScope.app.usernameExistsPopoverOpen) {
                    $('#username-exists-popover').popover('hide');
                    $rootScope.app.usernameExistsPopoverOpen = false;
                }
            });




            $scope.send = function() {
                if($scope.user.message == 'get users;') {
                    socket.emit('get users');
                    $scope.user.message = "";
                }
                else if($scope.user.message) {
                    newMsg = {
                        id: newID(),
                        user: $scope.user.username,
                        msg: $scope.user.message
                    };
                    $rootScope.app.messages.push(newMsg);
                    socket.emit('message', newMsg);
                    $timeout(function(){
                        viewportBody.scrollTop = viewportBody.scrollHeight;
                    },10);
                    $scope.user.message = "";
                }
            };

            socket.on('new message', function(message) {
                $rootScope.app.messages.push(message);
                $timeout(function(){
                    viewportBody.scrollTop = viewportBody.scrollHeight;
                },10);
            });




            socket.on('get users reply', function(users) {
                $rootScope.app.messages.push({id: newID(), user: '$server', msg: 'users: ' + JSON.stringify(users, null, 4)});
                $timeout(function(){
                    viewportBody.scrollTop = viewportBody.scrollHeight;
                },10);
            });
        }
    ]
);