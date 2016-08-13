(function() {
    "use strict";
    angular.module("ngSlim").controller("mainController", [
        "$scope", mainController
    ]);

    function mainController($scope) {

        /* jshint validthis: true */
        var vm = this;
        vm.message = "Main: Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

    }

})();
