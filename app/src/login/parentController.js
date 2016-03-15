define(function() {
    'use strict';

    var parentController = function($scope, $rootScope, $state, Auth, AUTH_EVENTS, USER_ROLES, $uibModal, $timeout) {

        $scope.isLoggedOut = false;

        var showLoginPage = function() {
            $state.go('login');
        };

        var showLoginPageAfterLogout = function() {
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

        $scope.$on('IdleStart', function() {
            closeModals();

            $scope.warning = $uibModal.open({
                templateUrl: 'warning-dialog.html',
                windowClass: 'modal-danger'
            });
        });

        $scope.$on('IdleEnd', function() {
            closeModals();
        });

        $scope.$on('IdleTimeout', function() {
            closeModals();
            $scope.timedout = $uibModal.open({
                templateUrl: 'timedout-dialog.html',
                windowClass: 'modal-danger'
            });
            console.log($scope.isUserLoggedIn);

            $scope.isUserLoggedIn = false;
            $state.go('login');
        });

        $scope.$on('$viewContentLoaded', function() {
            console.log("content loaded");
            $timeout(function() {
                $(function() {
                    //$('#side-menu').metisMenu();
                });

                //Loads the correct sidebar on window load,
                //collapses the sidebar on window resize.
                // Sets the min-height of #page-wrapper to window size
                $(function() {
                    $(window).bind("load resize", function() {
                        var topOffset = 50, width, height;

                        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
                        if (width < 768) {
                            $('div.navbar-collapse').addClass('collapse');
                            topOffset = 100; // 2-row-menu
                        } else {
                            $('div.navbar-collapse').removeClass('collapse');
                        }

                        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
                        height = height - topOffset;
                        if (height < 1) {
                            height = 1;
                        }
                        if (height > topOffset) {
                            $("#page-wrapper").css("min-height", (height) + "px");
                        }
                    });

                    var url = window.location;
                    var element = $('ul.nav a').filter(function() {
                        return this.href === url || url.href.indexOf(this.href) === 0;
                    }).addClass('active').parent().parent().addClass('in').parent();
                    if (element.is('li')) {
                        element.addClass('active');
                    }
                });
            }, 0, false);
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

    parentController.$inject = ['$scope', '$rootScope', '$state', 'Auth', 'AUTH_EVENTS', 'USER_ROLES', '$uibModal', '$timeout'];

    return parentController;
});