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
            .state("login", {
                url: "/login",
                controller: "loginController",
                controllerAs: "vm",
                templateUrl: "html/login/login.html"
            })

            .state("blog", {
                url: "/blog",
                controller: "blogController",
                controllerAs: "vm",
                templateUrl: "html/blog/blog.html"
            })

            .state("about", {
                url: "/about",
                controller: "aboutController",
                controllerAs: "vm",
                templateUrl: "html/about/about.html"
            })

            .state("contact", {
                url: "/contact",        
                controller: "contactController",
                controllerAs: "vm",
                templateUrl: "html/contactus/contact.html"
            })

            .state("services", {    
                url: "/services",    
                controller: "servicesController",
                controllerAs: "vm",
                templateUrl: "html/services/services.html"
            })

            .state("projects", {   
                url: "/projects",     
                controller: "projectsController",
                controllerAs: "vm",
                templateUrl: "html/projects/projects.html"
            })

            .state("notfound", {
                url: "/404",
                templateUrl: "html/404.html"
            });

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    }
]);
