var myApp = angular.module('myApp',['ngMessages']);


myApp.controller('mainController', function($scope, $log){

    $scope.name = 'Jane Doe';
    $scope.occupation = 'Coder';
    $log.log("Hello log service");
    $log.warn("I am warning")

})