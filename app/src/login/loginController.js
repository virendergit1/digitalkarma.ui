define(function() {
    'use strict';

    var loginController = function($scope, $state, authenticationService) {
        var self = this,
            loginValidationError = "There was an error validation the user.";

        $scope.submitted = false;
        $scope.isShowLoginError = false;
        $scope.loginErrorMessage = "";

        var onUserLoginReject = function(erro) {
            $scope.isShowLoginError = true;
            $scope.loginErrorMessage = erro.response;
        };

        $scope.validateUser = function (email, password) {
            $scope.submitted = true;

            if ($scope.login.email.$valid && $scope.login.password.$valid) {
                //--+--validate user here--
                var promise = authenticationService.validateUser(email, password);

                promise.then(function(data) {
                    data = data || {};
                    if (data.isValidUser) {
                        $state.transitionTo('home');
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

    loginController.$inject = ['$scope', '$state', 'dk.authenticationService'];

    return loginController;
});