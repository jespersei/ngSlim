(function() {
    "use strict";
    angular.module("ngSlim").controller("contactController", [
        "$scope", "contactFactory", contactController
    ]);

    function contactController($scope, factory) {

        /* jshint validthis: true */
        var vm = this;
        vm.message = "contact Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
        vm.payload = {
        	 "data" : {
		        "title" : null,
		        "body" : null,
		        "ip" : "123.4.56.778",
		        "email" : null,
		        "name" : null,
		        "contact_number" : null
		    }
        };

        vm.sendEmail = sendEmail;


        function sendEmail(payload) {

        	console.log(payload);

            vm.loading = true;

            factory.sendEmail(payload, function(result) {

            	console.log(result);

                if (result.success) {
                	console.log(result.data.msg)

                	//swal("Warning!", result.errorMessage, "error");
                	
                    vm.loading = false;
                    return;
                }

                //swal("Warning!", result.errorMessage, "error");
                vm.loading = false;

            }, function() {

                //swal("Info", "Please check your connection.", "warning");
                vm.loading = false;

            });

        }



    }

})();
