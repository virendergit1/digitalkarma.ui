define(function () {
    'use strict';

    var registrationController = function($scope, loginService, $translate) {
        var self = this;

        $scope.submitted = false;
        $scope.showMessageRegistration = false;

        $scope.roleItems = [
            {
                "roleId": 1,
                "roleName": "Admin",
                "description": "This is admin role"
            },
            {
                "roleId": 2,
                "roleName": "Contributer",
                "description": "This is contributer role"
            },
            {
                "roleId": 3,
                "roleName": "Guest",
                "description": "This is guest role"
            }
        ];

       var onUserRegistrationReject = function(error) {
            $scope.showMessageRegistration = true;
            $scope.successMessage = $translate.instant('loginResponse.userRegistrationError');
        };

        var onUserRegistrationSuccess = function (email) {
            $scope.showMessageRegistration = true;
            $scope.successMessage = $translate.instant('loginResponse.userRegistrationSuccess').replace("Email", email);
        };

        $scope.RegisterUser = function(form, user) {
            $scope.submitted = true;

            if (form.$valid) {
                $scope.promise = loginService.registerUser(user);

                $scope.promise.then(function(data) {
                    data = data || {};
                    if (data.username) {
                        onUserRegistrationSuccess(user.email);
                    }
                }, function(error) {
                    onUserRegistrationReject(error);
                });
            }
        };
    };

    registrationController.$inject = ['$scope', 'dk.loginService', '$translate'];

    return registrationController;
});