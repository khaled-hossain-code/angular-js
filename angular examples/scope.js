var myApp = angular.module('myApp',[]);

myApp.controller('myController',['$scope','$timeout',function($scope,$timeout){
    $scope.name = "khaled";

    $scope.$watch('name', function(newVal,oldVal){
        console.info('Value Changed');
        console.log("old: " + oldVal);
        console.log("new: " + newVal);
    });

    $timeout(function(){
        $scope.name = "Hossain";
    },3000);

    setTimeout(function(){
        $scope.name = "afnan";
        console.log($scope.name);
    }, 6000);

    setTimeout(function(){
        
        $scope.$apply(function(){
            $scope.name = "afnan";
            console.log($scope.name);
        });
        
    }, 9000);

}])