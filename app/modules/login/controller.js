(function() {
    "use strict";
    angular.module("ngSlim").controller("loginController", [
        "$scope", loginController
    ]);

    function loginController($scope) {

        /* jshint validthis: true */
        var vm = this;
        vm.message = "project: Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

    }

})();
