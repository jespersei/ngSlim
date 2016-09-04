(function() {
    "use strict";
    angular.module("ngSlim").controller("projectsController", [
        "$scope", projectsController
    ]);

    function projectsController($scope, $window) {

        /* jshint validthis: true */
        var vm = this;
        vm.message = "project: Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

        vm.xList = [{ "name": "a", "number": "1", "date": "1360413309421", "class": "purple" }, { "name": "b", "number": "5", "date": "1360213309421", "class": "orange" }, { "name": "c", "number": "10", "date": "1360113309421", "class": "blue" }, { "name": "d", "number": "2", "date": "1360113309421", "class": "green" }, { "name": "e", "number": "6", "date": "1350613309421", "class": "green" }, { "name": "f", "number": "21", "date": "1350613309421", "class": "orange" }, { "name": "g", "number": "3", "date": "1340613309421", "class": "blue" }, { "name": "h", "number": "7", "date": "1330613309001", "class": "purple" }, { "name": "i", "number": "22", "date": "1360412309421", "class": "blue" }];

        vm.photos = [
			    {id: 'p1', 'title': 'A nice day!', src: "http://lorempixel.com/300/400/"},
			    {id: 'p2', 'title': 'Puh!', src: "http://lorempixel.com/300/400/sports"},
			    {id: 'p3', 'title': 'What a club!', src: "http://lorempixel.com/300/400/nightlife"}
			];

    }

})();
