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
        		desc: "We design & build apps for the web, mobile, and desktop."
        	},
        	{
        		title: "Interface Design",
        		desc: "We make intuitive interfaces for devices big and small."
        	},
        	{
        		title: "Website Design",
        		desc: "We deliver intelligent full builds for adventurous brands."
        	},
        	{
        		title: "Branding and Print Design",
        		desc: "We design unique logos and deliver clear message."
        	},
        	{
        		title: "Code and Resources",
        		desc: "We create robust code and useful resources."
        	},
        	{
        		title: "",
        		desc: ""
        	}
        ];

    }

})();
