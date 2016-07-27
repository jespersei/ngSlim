// main.js
var ngSlim = angular.module('ngSlim', ["ui.router"])

ngSlim.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  
  // For any unmatched url, send to /route1
  //$urlRouterProvider.otherwise("/route1")
  
  $stateProvider
    .state('about', {
        url: "/about",
        templateUrl: "pages/about.html"
    })
      
    .state('contact', {
        url: "/contact",
        templateUrl: "pages/contact.html"
    })

  // use the HTML5 History API
    $locationProvider.html5Mode(true);
})