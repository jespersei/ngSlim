(function() {
    "use strict";
    angular.module("ngSlim").controller("servicesController", [
        "$scope", servicesController
    ]);

    function servicesController($scope) {

        /* jshint validthis: true */
        var vm = this;
        vm.message = "We develop correct solutions and create effective designs. We care about what we do. Every pixel, every code. We have the right tools and skills to develop reusable code, responsive layouts, content first. We like to add value. So consider us as partners and involve us early in the thinking.";

        vm.services = [
        	{
        		title: "App Development",
        		desc: "We design & build apps for the web, mobile, and desktop.",
                url: "img/services/AppDevelopment_1.png"
        	},
        	{
        		title: "Interface Design",
        		desc: "We make intuitive interfaces for devices big and small.",
                url: "img/services/Interface_1.png"
        	},
        	{
        		title: "Website Design",
        		desc: "We deliver intelligent full builds for adventurous brands.",
                url: "img/services/WebDesign_1.png"
        	},
        	{
        		title: "Print Design",
        		desc: "We design unique logos and deliver clear message.",
                url: "img/services/Prints_1.png"
        	},
        	{
        		title: "Code and Resources",
        		desc: "We create robust code and useful resources.",
                url: "img/services/Coding_1.png"
        	},
        	{
        		title: "Branding & Advertising",
        		desc: "We handle every aspect in branding and advertising both print and on the web.",
                url: "img/services/Advertising_1.png"
        	}
        ];

    }

})();
