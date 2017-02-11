var myApp = angular.module('myApp',[]);

myApp.controller('myController',['$scope', function($scope){
    $scope.maxChar = 6;
    $scope.$watch('handle', function(newVal,oldVal){
        console.log(newVal);
    })
}])