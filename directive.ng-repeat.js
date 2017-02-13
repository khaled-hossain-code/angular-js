var myApp = angular.module('myApp',[]);

myApp.controller('myController',['$scope',function($scope){

    $scope.users = [
        {
            name : "Khaled",
            age: 32
        },
        {
            name : "Shakhi",
            age: 22
        },
        {
            name : "Rohed",
            age: 18
        },
    ]
}])