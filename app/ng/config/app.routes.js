"use strict";
angular.module("ngSlim").config([
    "$stateProvider", "$urlRouterProvider", "$locationProvider", "$httpProvider",

    function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

        // For any unmatched url, send to /route1
        $urlRouterProvider.otherwise("/404");

        $stateProvider
            .state("home", {
                url: "/",
                controller: "mainController",
                controllerAs: "vm",
                templateUrl: "html/home/home.html"
            })

        .state("about", {
            url: "/about",
            templateUrl: "html/home/about.html"
        })

        .state("contact", {
            url: "/contact",
            templateUrl: "html/home/contact.html"
        })

        .state("notfound", {
            url: "/404",
            templateUrl: "html/404.html"
        });

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    }
]);
