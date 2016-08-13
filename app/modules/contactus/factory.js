(function() {
    "use strict";
    angular.module("ngSlim").factory("contactFactory", [
        "$http", "$q", contactFactory
    ]);

    function contactFactory($http, $q) {

        return {

            sendEmail: function(payload, successCallBack, failedCallBack) {

                var endpoint = "/api/sendform";
                var deferred = $q.defer();

                $http.post(endpoint, payload)
                    .success(deferred.resolve)
                    .error(deferred.reject);

                deferred.promise.then(successCallBack, failedCallBack);
            }
        };

    }

})();
