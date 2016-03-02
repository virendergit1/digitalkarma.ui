define(function() {
    'user strict';
    var authenticationService = function($q, $rootScope, $http, userApiProxy) {
        var self = this;

        var responseMessage = {
            badPassword: "Invalid username or password",
            notFound: "Not a registerd user. Please Register.",
            NOT_PROVIDED : "Not provide"
        };

        self.validateUser = function(userId, password) {
            var deferred = $q.defer();

            userApiProxy.checkUserLogins(userId, password)
                .then(function(data) {
                    if (!_.isEmpty(data)) {
                        if (data.username === userId) {
                            deferred.resolve({
                                isValidUser: true
                            });
                        }
                        //if (data === "BAD_PASSWORD") {
                        //    deferred.resolve({
                        //        response: responseMessage.badPassword,
                        //        isValidUser: false
                        //    });
                        //}
                        //if (data === "NOT_FOUND") {
                        //    deferred.resolve({
                        //        response: responseMessage.notFound,
                        //        isValidUser: false
                        //    });
                        //}
                    }
                }, function(error) {
                    //deferred.reject(error);
                    if (error === "BAD_PASSWORD") {
                        deferred.reject({
                            response: responseMessage.badPassword,
                            isValidUser: false
                        });
                    }
                    if (error === "NOT_FOUND") {
                        deferred.reject({
                            response: responseMessage.notFound,
                            isValidUser: false
                        });
                    }
                    if (error === "NOT_PROVIDED") {
                        deferred.reject({
                            response: responseMessage.NOT_PROVIDED,
                            isValidUser: false
                        });
                    }
                });
            return deferred.promise;
        };
    };

    authenticationService.$inject = ['$q', '$rootScope', '$http', 'dk.userApiProxy'];
    return authenticationService;
});