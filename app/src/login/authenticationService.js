define(function() {
    'user strict';
    var authenticationService = function($q, $rootScope, $http, $window, userApiProxy, AUTH_EVENTS, Session) {
        var self = this;

        var createUserSession = function(loginData) {
            $window.sessionStorage["userInfo"] = JSON.stringify(loginData);
            Session.create(loginData);
            //or
            $rootScope.currentUser = loginData;
            //fire event of successful login
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        };

        self.validateUser = function(userName, password) {
            var deferred = $q.defer();

            userApiProxy.checkUserLogins(userName, password)
                .then(function(data) {
                    if (!_.isEmpty(data)) {
                        if (data.username === userName) {
                            var loginData = {
                                user: data.username,
                                userRole: data.authorities
                            };

                            delete data.password;

                            createUserSession(loginData);

                            deferred.resolve({
                                isValidUser: true
                            });
                        }
                    }
                }, function(error) {
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                    deferred.reject({
                        response: error,
                        isValidUser: false
                    });

                });
            return deferred.promise;
        };

        self.isAuthenticated = function() {
            return !!Session.user;
        };

        var isUserHasAuthority = function(authorizedRoles) {
            var roles = Session.userRole[0].authority.split(",");
            return _.intersection(authorizedRoles, roles).length > 0;
        };

        //+--check if the user is authorized to access the next route
        //+--this function can be also used on element level
        //+--e.g. <p ng-if="isAuthorized(authorizedRoles)">show this only to admins</p>
        self.isAuthorized = function(authorizedRoles) {
            if (!angular.isArray(authorizedRoles)) {
                authorizedRoles = [authorizedRoles];
            }
            return (self.isAuthenticated() && isUserHasAuthority(authorizedRoles));
        };

        self.logout = function() {
            Session.destroy();
            $window.sessionStorage.removeItem("userInfo");
            $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
        };
    };

    authenticationService.$inject = [
        '$q',
        '$rootScope',
        '$http',
        '$window',
        'dk.userApiProxy',
        'AUTH_EVENTS',
        'Session'
    ];
    return authenticationService;
});