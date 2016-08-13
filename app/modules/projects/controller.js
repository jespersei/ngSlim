(function() {
    "use strict";
    angular.module("ngSlim").controller("projectsController", [
        "$scope", projectsController
    ]);

    function projectsController($scope) {

        /* jshint validthis: true */
        var vm = this;
        vm.message = "project: Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

    }

})();
