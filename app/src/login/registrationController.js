define(function () {
    'use strict';

    var registrationController = function ($scope) {
        var self = this;

        $scope.submitted = false;

        $scope.showMessageRegistration = false;

        $scope.RegisterUser = function () {
            $scope.submitted = true;
        };
    };

    registrationController.$inject = ['$scope'];

    return registrationController;
});