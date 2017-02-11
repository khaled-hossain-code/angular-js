var myApp = angular.module('myApp',[]);

myApp.controller('myController',['$scope',function($scope){

   $scope.$watch('handle',function(newValue, oldValue){
       console.info('Digest Cycle: ');
       console.log('oldValue: ' + oldValue);
       console.log('newValue: ' + newValue);
   }) 
}])