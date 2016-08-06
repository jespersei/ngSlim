"use strict";
angular.module("ngSlim").run([
    "$rootScope", "$state", "$stateParams", "$templateCache", 

    function($rootScope, $state, $stateParams, $templateCache ) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
]);
