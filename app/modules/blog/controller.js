(function() {
    "use strict";
    angular.module("ngSlim").controller("blogController", [
        "$scope", blogController
    ]);

    function blogController($scope) {

        /* jshint validthis: true */
        var vm = this;
        vm.message = "project: Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

    }

})();
