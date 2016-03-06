define(function() {
    'use strict';

    var parentController = function ($scope, $rootScope, $state, Auth, AUTH_EVENTS, USER_ROLES) {
        var showLoginPage = function() {
            $state.go('login');
            $scope.isUserLoggedIn = false;
        };

        var setCurrentUser = function() {
            $scope.currentUser = $rootScope.currentUser;
            $scope.isUserLoggedIn = true;
        };

        var showNotAuthorized = function() {
            console.log("Not Authorized");
        };

       
        $scope.currentUser = null;
        $scope.userRoles = USER_ROLES;
        $scope.isAuthenticated = Auth.isAuthenticated;
        $scope.isAuthorized = Auth.isAuthorized;

        $rootScope.$on(AUTH_EVENTS.notAuthorized, showNotAuthorized);
        $rootScope.$on(AUTH_EVENTS.notAuthenticated, showLoginPage);
        $rootScope.$on(AUTH_EVENTS.sessionTimeout, showLoginPage);
        $rootScope.$on(AUTH_EVENTS.logoutSuccess, showLoginPage);
        $rootScope.$on(AUTH_EVENTS.loginSuccess, setCurrentUser);
    };

    parentController.$inject = ['$scope', '$rootScope', '$state', 'Auth', 'AUTH_EVENTS', 'USER_ROLES'];

    return parentController;
});