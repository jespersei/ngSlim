(function() {
    "use strict";
    angular.module("ngSlim").controller("aboutController", [
        "$scope", aboutController
    ]);

    function aboutController($scope) {

		/* jshint validthis: true */
        var vm = this;
        vm.message = "About Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

    }

})();
