var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){

    $routeProvider
    .when('/', {
        templateUrl: '/pages/main.html',
        controller: 'mainController'
    })
    .when('/second',{

    })
})

myApp.controller('myController', ['$scope','$location', '$log', function ($scope, $location, $log) {

    $log.info($location.path());

}])