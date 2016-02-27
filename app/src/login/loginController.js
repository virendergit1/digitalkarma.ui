define(function () {
    'use strict';

    var loginController = function ($scope, $state) {
        var self = this;

        $scope.submitted = false;
        
        $scope.validateUser = function (email, password) {
            $scope.submitted = true;

            if ($scope.login.email.$valid && $scope.login.password.$valid) {
                //--+--validate user here--
                $state.transitionTo('home');
            }
        };
    };

    loginController.$inject = ['$scope', '$state'];

    return loginController;
});