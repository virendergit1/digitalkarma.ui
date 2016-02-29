define(function() {
    'user strict';
    var authenticationService = function ($q, $rootScope, $http, userApiProxy) {
        var self = this;

        self.validateUser = function (userId, password) {
            return userApiProxy.checkUserLogins(userId, password);
        };


    };

    authenticationService.$inject = ['$q', '$rootScope', '$http', 'dk.userApiProxy'];
    return authenticationService;
});