var module = angular.module("sampleApp", ['ngRoute']);

module.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/route1', {
                templateUrl: 'pages/about.html',
                controller: 'RouteController'
            }).
            when('/route2', {
                templateUrl: 'pages/showcase.html',
                controller: 'RouteController2'
            }).
            otherwise({
                redirectTo: '/index'
            });
        $locationProvider.html5Mode(true);
    }]);

module.controller("RouteController", function($scope) {

});

module.controller("RouteController", function($scope) {

});