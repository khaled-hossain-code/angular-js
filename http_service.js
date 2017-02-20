var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', '$http', function ($scope, $http) {

    $scope.alertClick = function () {
        // Simple GET request example:
        $http({
            method: 'GET',
            url: 'https://api.datausa.io/api/?show=geo&sumlevel=nation&required=pop'
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(response);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }
}])