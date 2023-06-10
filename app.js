// Module & declared dependencies: weatherApp, ngRoute, ngResource
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// Declare Routes
weatherApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })

    .when('/forecast', {
        templateUrl: 'pages/forecastdata.htm',
        controller: 'forecastController'
    })
});

// Declare controllers
weatherApp.controller('forecastController', function($scope, $log, $resource, $routeParams) {      

});

weatherApp.controller('homeController', function($scope, $log, $resource, $routeParams) {

});

// Declare a service

// Declare a directive

// Declare a filter

// 