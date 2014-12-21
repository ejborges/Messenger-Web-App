angular.module('app', ['ngRoute', 'socket-io'])

    .config(
    [
        '$routeProvider',
        function($routeProvider) {
            $routeProvider.when(
                '/home',
                {
                    templateUrl: 'views/home/home.html',
                    controller: 'homeCtrl' // dont fill this in until done setting up controller
                }
// can have many more routes
            ).otherwise({redirectTo: '/home'});
        }
    ]
)

    .run(
    [
        '$rootScope',
        function($rootScope) {
// do something once app is done loading
// similar to main() method in Java

            $(function () {
                $('[data-toggle="popover"]').popover()
            });
        }
    ]
);