(function() {
    "use strict";
    angular.module("ngSlim").controller("contactController", [
        "$scope", contactController
    ]);

    function contactController($scope) {

		/* jshint validthis: true */
        var vm = this;
        vm.message = "contact Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

    }

})();
