// main.js
var ngSlim = angular.module('ngSlim', ["ui.router"])

ngSlim.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  
  // For any unmatched url, send to /route1
  //$urlRouterProvider.otherwise("/route1")
  $urlRouterProvider.otherwise("/404");

  $stateProvider
    .state('home', {
        url: "/",
        templateUrl: "pages/home.html"
    })

    .state('about', {
        url: "/about",
        templateUrl: "pages/about.html"
    })
      
    .state('contact', {
        url: "/contact",
        templateUrl: "pages/contact.html"
    })
      
    .state('notfound', {
        url: "/404",
        templateUrl: "pages/404.html"
    })

  // use the HTML5 History API
    $locationProvider.html5Mode(true);
})