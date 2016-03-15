define(function() {
    'use strict';

    var parentController = function ($scope, $rootScope, $state, Auth, AUTH_EVENTS, USER_ROLES, $uibModal) {

        $scope.isLoggedOut = false;

        var showLoginPage = function() {
            $state.go('login');
        };

        var showLoginPageAfterLogout = function () {
            $scope.isLoggedOut = true;
            $state.go('login');
        };

        var setCurrentUser = function() {
            $scope.currentUser = $rootScope.currentUser;
            $scope.isUserLoggedIn = true;
        };

        var showNotAuthorized = function() {
            console.log("Not Authorized");
        };


        $scope.started = false;

        function closeModals() {
            if ($scope.warning) {
                $scope.warning.close();
                $scope.warning = null;
            }

            if ($scope.timedout) {
                $scope.timedout.close();
                $scope.timedout = null;
            }
        }

        $scope.$on('IdleStart', function () {
            closeModals();

            $scope.warning = $uibModal.open({
                templateUrl: 'warning-dialog.html',
                windowClass: 'modal-danger'
            });
        });

        $scope.$on('IdleEnd', function () {
            closeModals();
        });

        $scope.$on('IdleTimeout', function () {
            closeModals();
            $scope.timedout = $uibModal.open({
                templateUrl: 'timedout-dialog.html',
                windowClass: 'modal-danger'
            });
            console.log($scope.isUserLoggedIn);

            $scope.isUserLoggedIn = false;
            $state.go('login');
        });
       
        $scope.currentUser = null;
        $scope.userRoles = USER_ROLES;
        $scope.isAuthenticated = Auth.isAuthenticated;
        $scope.isAuthorized = Auth.isAuthorized;

        $rootScope.$on(AUTH_EVENTS.notAuthorized, showNotAuthorized);
        $rootScope.$on(AUTH_EVENTS.notAuthenticated, showLoginPage);
        $rootScope.$on(AUTH_EVENTS.sessionTimeout, showLoginPage);
        $rootScope.$on(AUTH_EVENTS.logoutSuccess, showLoginPageAfterLogout);
        $rootScope.$on(AUTH_EVENTS.loginSuccess, setCurrentUser);
    };

    parentController.$inject = ['$scope', '$rootScope', '$state', 'Auth', 'AUTH_EVENTS', 'USER_ROLES', '$uibModal'];

    return parentController;
});