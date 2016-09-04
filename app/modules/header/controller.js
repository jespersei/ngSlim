(function() {
    "use strict";
    angular.module("ngSlim").controller("headerController", [
        "$scope", headerController
    ]);

    function headerController($scope) {

        /* jshint validthis: true */
        var vm = this;
        vm.title = "From your business identity to full website development";
        vm.message = "Light Years is a full service solutions and design team specializing in meeting the needs of a wide range of businesses and organizations, big and small.";

    }

})();
