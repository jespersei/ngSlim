// main.js

// create the module and name it ngSlim
var ngSlim = angular.module('ngSlim', []);

// create the controller and inject Angular's $scope
ngSlim.controller('mainController', function($scope) {

    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});