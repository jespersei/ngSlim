(function() {
    "use strict";
    angular.module("ngSlim").controller("mainController");

    mainController.$inject = ["$scope"];

    function mainController($scope) {

        $scope.message = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, doloribus adipisci dolor, mollitia officia, obcaecati, autem dolorem magnam consectetur sunt aliquam ipsa distinctio tenetur! Dolore, in, tenetur? Distinctio, totam doloribus.";
    }

})();
