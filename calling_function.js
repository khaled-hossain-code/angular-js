var myApp = angular.module('myApp',[]);

myApp.controller('mainController', ['$scope', '$log','$filter', function($scope, $log, $filter) {

    $scope.handle = "";
    debugger
    $scope.handleLowercase = function(){
        debugger
        return $filter('lowercase')($scope.handle)
    }
    
}]);