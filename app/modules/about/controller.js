(function() {
    "use strict";
    angular.module("ngSlim").controller("aboutController", [
        "$scope", aboutController
    ]);

    function aboutController($scope) {

		/* jshint validthis: true */
        var vm = this;
        vm.p1 = "Light Years is a full service solutions and design team specializing in meeting the needs of a wide range of businesses and organizations, big and small.";
		vm.p2 = "From your business identity to full website development, Light Years can be your technical partner to create a strong brand for your business and work with you to ensure success that are light years ahead.";

    }

})();
