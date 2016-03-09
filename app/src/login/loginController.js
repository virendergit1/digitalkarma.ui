﻿define(function() {
    'use strict';

    var loginController = function ($scope, $rootScope, $state, $window, authenticationService, idle) {
        var self = this;

        $scope.isUserLoggedIn = false;

        $scope.delay = 0;
        $scope.minDuration = 0;
        $scope.message = 'Validating...';
        $scope.backdrop = true;
        $scope.promise = null;

        var onUserLoginReject = function(error) {
            $scope.isShowLoginError = true;
            $scope.loginErrorMessage = error.response;
        };

        $scope.uiRouterState = $state;

        $scope.validateUser = function (userName, password) {
            $scope.submitted = true;

            if ($scope.login.email.$valid && $scope.login.password.$valid) {

                $scope.promise = authenticationService.validateUser(userName, password);

                $scope.promise.then(function (data) {
                    data = data || {};
                    if (data.isValidUser) {
                        $state.transitionTo('home');
                        idle.watch();
                    } else {
                        $scope.isShowLoginError = true;
                        $scope.loginErrorMessage = data.response;
                    }
                }, function(error) {
                    onUserLoginReject(error);
                });
            }
        };
    };

    loginController.$inject = ['$scope', '$rootScope', '$state', '$window', 'Auth', 'Idle'];

    return loginController;
});